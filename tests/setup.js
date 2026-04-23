// Mark test environment BEFORE any imports
globalThis.TESTING = true

// Create minimal DOM structure required by navigation.js
const createTestDOM = () => {
  document.body.innerHTML = `
    <div id="sidebar-container"></div>
    <a id="github-link" href="#"></a>
    <nav id="topbar-routes"></nav>
    <div id="navigator">
      <button id="navigator-toggle"></button>
      <div class="navigator-filters" id="navigator-filters">
        <a class="navigator-filter active" data-filter="all"></a>
      </div>
    </div>
    <div id="search-overlay">
      <input id="search-input" type="text" />
      <button id="search-btn"></button>
      <button id="search-close"></button>
      <div id="search-results">
        <p id="search-status"></p>
        <p id="search-no-results"></p>
        <p id="search-group-label"></p>
        <ul id="search-results-list"></ul>
      </div>
    </div>
    <div id="bookmarks-container">
      <button id="bookmarks-back"></button>
      <button id="bookmarks-clear"></button>
    </div>
    <button id="back-to-top" class="ripple-btn"></button>
    <div id="content-area"></div>
    <div id="breadcrumbs"></div>
  `
}

// Build DOM
createTestDOM()

// Mock scrollIntoView
Element.prototype.scrollIntoView = () => {}

// Mock scrollTo
window.scrollTo = () => {}

// Mock localStorage
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString() },
    removeItem: (key) => { delete store[key] },
    clear: () => { store = {} }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })
