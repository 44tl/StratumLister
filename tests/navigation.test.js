import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import {
  levenshteinDistance,
  fuzzyMatch,
  scoreSearchResult,
  getSearchTerms,
  escapeHtml,
  stripMarkdown,
  getIconSvg,
  getAllPages,
  getGroupedPages,
  getFilteredPages,
  getPagesByIds,
  findItemById,
  isBookmarked,
  getStoredBookmarks,
  saveStoredBookmarks,
  getRecentPageIds,
  saveRecentPage,
  setActiveNavigatorGroup
} from '../src/navigation.js'

describe('Search Algorithms', () => {
  describe('levenshteinDistance', () => {
    it('should return 0 for identical strings', () => {
      expect(levenshteinDistance('hello', 'hello')).toBe(0)
    })

    it('should calculate distance for single character difference', () => {
      expect(levenshteinDistance('hello', 'hallo')).toBe(1)
    })

    it('should calculate distance for completely different strings', () => {
      expect(levenshteinDistance('abc', 'xyz')).toBe(3)
    })

    it('should handle empty strings', () => {
      expect(levenshteinDistance('', 'test')).toBe(4)
      expect(levenshteinDistance('test', '')).toBe(4)
      expect(levenshteinDistance('', '')).toBe(0)
    })
  })

  describe('fuzzyMatch', () => {
    it('should return 1 for exact match', () => {
      expect(fuzzyMatch('hello world', 'hello world')).toBe(1)
    })

    it('should return high score for prefix match', () => {
      const score = fuzzyMatch('hello world', 'hello')
      expect(score).toBeGreaterThan(0.5)
    })

    it('should return 0 for no match', () => {
      expect(fuzzyMatch('hello', 'xyz')).toBe(0)
    })

    it('should handle case sensitivity', () => {
      const score = fuzzyMatch('Hello World', 'hello')
      expect(score).toBeGreaterThan(0)
    })
  })

  describe('scoreSearchResult', () => {
    const mockPage = {
      id: 'test-page',
      label: 'Test Page',
      groupTitle: 'Test Group',
      tags: ['test', 'example'],
      headings: 'introduction getting started',
      text: 'Some body text for searching'
    }

    it('should return positive score for matching label', () => {
      const score = scoreSearchResult(mockPage, ['test'])
      expect(score).toBeGreaterThan(0)
    })

    it('should return positive score for matching tags', () => {
      const score = scoreSearchResult(mockPage, ['example'])
      expect(score).toBeGreaterThan(0)
    })

    it('should return positive score for matching headings', () => {
      const score = scoreSearchResult(mockPage, ['introduction'])
      expect(score).toBeGreaterThan(0)
    })

    it('should return 0 for no matches', () => {
      const score = scoreSearchResult(mockPage, ['nonexistent'])
      expect(score).toBe(0)
    })
  })

  describe('getSearchTerms', () => {
    it('should split query into terms', () => {
      const terms = getSearchTerms('hello world test')
      expect(terms).toHaveLength(3)
      expect(terms).toContain('hello')
      expect(terms).toContain('world')
      expect(terms).toContain('test')
    })

    it('should filter out empty terms', () => {
      const terms = getSearchTerms('hello   world')
      expect(terms).toHaveLength(2)
    })

    it('should handle single term', () => {
      const terms = getSearchTerms('single')
      expect(terms).toEqual(['single'])
    })
  })
})

describe('Text Utilities', () => {
  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<div>')).toBe('&lt;div&gt;')
      expect(escapeHtml('a & b')).toBe('a &amp; b')
      expect(escapeHtml('"quotes"')).toBe('&quot;quotes&quot;')
      expect(escapeHtml("'apostrophe'")).toBe('&#39;apostrophe&#39;')
    })

    it('should handle null/undefined', () => {
      expect(escapeHtml(null)).toBe('')
      expect(escapeHtml(undefined)).toBe('')
    })

    it('should handle empty string', () => {
      expect(escapeHtml('')).toBe('')
    })
  })

  describe('stripMarkdown', () => {
    it('should remove code blocks', () => {
      const markdown = 'Text\n```\ncode block\n```\nMore text'
      const result = stripMarkdown(markdown)
      expect(result).not.toContain('```')
      expect(result).not.toContain('code block')
    })

    it('should remove inline code', () => {
      const markdown = 'Use `console.log()` for debugging'
      const result = stripMarkdown(markdown)
      expect(result).not.toContain('`')
      expect(result).toContain('Use')
      expect(result).toContain('for debugging')
    })

    it('should remove links', () => {
      const markdown = 'Check [this link](http://example.com)'
      const result = stripMarkdown(markdown)
      expect(result).not.toContain('[')
      expect(result).not.toContain('](')
      expect(result).toContain('Check')
      expect(result).toContain('this link')
    })

    it('should remove images', () => {
      const markdown = '![alt text](image.png)'
      const result = stripMarkdown(markdown)
      expect(result).toContain('alt text')
    })
  })

  describe('getIconSvg', () => {
    it('should return SVG for known icon', () => {
      const svg = getIconSvg('home')
      expect(svg).toContain('<svg')
      expect(svg).toContain('</svg>')
      expect(svg).toContain('viewBox')
      expect(svg).toContain('<path')
    })

    it('should return empty SVG for unknown icon', () => {
      const svg = getIconSvg('nonexistent-icon-12345')
      expect(svg).toBe('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>')
    })

    it('should include width and height attributes', () => {
      const svg = getIconSvg('settings')
      expect(svg).toContain('width="18"')
      expect(svg).toContain('height="18"')
    })
  })
})

describe('Data Accessors', () => {
  describe('getAllPages', () => {
    it('should return flat array of all pages', () => {
      const pages = getAllPages()
      expect(Array.isArray(pages)).toBe(true)
      expect(pages.length).toBeGreaterThan(0)
    })

    it('should include pages with required properties', () => {
      const pages = getAllPages()
      const firstPage = pages[0]
      expect(firstPage).toHaveProperty('id')
      expect(firstPage).toHaveProperty('label')
      expect(firstPage).toHaveProperty('path')
    })
  })

  describe('getGroupedPages', () => {
    it('should return grouped structure', () => {
      const groups = getGroupedPages()
      expect(Array.isArray(groups)).toBe(true)
      expect(groups.length).toBeGreaterThan(0)
    })

    it('should have title and items for each group', () => {
      const groups = getGroupedPages()
      groups.forEach(group => {
        expect(group).toHaveProperty('title')
        expect(group).toHaveProperty('items')
        expect(Array.isArray(group.items)).toBe(true)
      })
    })
  })

  describe('getFilteredPages', () => {
    it('should return all pages when activeNavigatorGroup is "all"', () => {
      setActiveNavigatorGroup('all')
      const allPages = getAllPages()
      const filtered = getFilteredPages(allPages)
      expect(filtered).toEqual(allPages)
    })

    it('should filter pages by group', () => {
      setActiveNavigatorGroup('Windows')
      const allPages = getAllPages()
      const filtered = getFilteredPages(allPages)
      filtered.forEach(page => {
        expect(page.groupTitle).toBe('Windows')
      })
    })
  })

  describe('getPagesByIds', () => {
    it('should return page objects for valid IDs', () => {
      const pages = getAllPages()
      const firstId = pages[0].id
      const result = getPagesByIds([firstId])
      expect(result).toHaveLength(1)
      expect(result[0].id).toBe(firstId)
    })

    it('should handle multiple IDs', () => {
      const pages = getAllPages()
      const ids = pages.slice(0, 3).map(p => p.id)
      const result = getPagesByIds(ids)
      expect(result).toHaveLength(3)
    })

    it('should ignore invalid IDs', () => {
      const result = getPagesByIds(['nonexistent-id-12345'])
      expect(result).toHaveLength(0)
    })
  })

  describe('findItemById', () => {
    it('should find page by ID', () => {
      const pages = getAllPages()
      const firstPage = pages[0]
      const found = findItemById(firstPage.id)
      expect(found).not.toBeNull()
      expect(found.item.id).toBe(firstPage.id)
      expect(found.item.label).toBe(firstPage.label)
      expect(found.group.title).toBe(firstPage.groupTitle)
    })

    it('should return null for non-existent ID', () => {
      const found = findItemById('nonexistent-id')
      expect(found).toBeNull()
    })
  })
})

describe('Bookmarks', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('getStoredBookmarks / saveStoredBookmarks', () => {
    it('should return empty array when no bookmarks saved', () => {
      const bookmarks = getStoredBookmarks()
      expect(Array.isArray(bookmarks)).toBe(true)
      expect(bookmarks.length).toBe(0)
    })

    it('should save and retrieve bookmarks', () => {
      const bookmarks = ['page-1', 'page-2']
      saveStoredBookmarks(bookmarks)
      const retrieved = getStoredBookmarks()
      expect(retrieved).toEqual(bookmarks)
    })
  })

  describe('isBookmarked', () => {
    it('should return false for unbookmarked page', () => {
      expect(isBookmarked('some-page')).toBe(false)
    })

    it('should return true for bookmarked page', () => {
      const bookmarks = new Set(['bookmarked-page'])
      saveStoredBookmarks(bookmarks)
      expect(isBookmarked('bookmarked-page')).toBe(true)
    })
  })
})

describe('Recent Pages', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('getRecentPageIds', () => {
    it('should return empty array when no recent pages', () => {
      expect(getRecentPageIds()).toEqual([])
    })

    it('should return stored recent pages for valid IDs', () => {
      // Use correct storage key
      localStorage.setItem('stratum-recent-pages', JSON.stringify(['stratum-lister', 'important']))
      const recent = getRecentPageIds()
      expect(recent).toContain('stratum-lister')
      expect(recent).toContain('important')
    })
  })

  describe('saveRecentPage', () => {
    it('should add page ID to recent pages', () => {
      saveRecentPage('stratum-lister')
      const recent = getRecentPageIds()
      expect(recent).toContain('stratum-lister')
    })

    it('should move existing page to front', () => {
      saveRecentPage('stratum-lister')
      saveRecentPage('important')
      saveRecentPage('stratum-lister')
      const recent = getRecentPageIds()
      expect(recent[0]).toBe('stratum-lister')
    })

    it('should limit to 6 recent pages', () => {
      const knownIds = ['stratum-lister', 'important', 'beginner-guide', 'faq', 'glossary', 'terms-of-service', 'privacy-policy']
      knownIds.forEach(id => saveRecentPage(id))
      const recent = getRecentPageIds()
      expect(recent.length).toBeLessThanOrEqual(6)
    })
  })
})
