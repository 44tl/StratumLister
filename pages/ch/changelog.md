# Stratum Changelog

<div class="changelog-timeline">

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.5</span>
<span class="changelog-date">April 23</span>
</div>
<div class="changelog-content">

### Build System Overhaul

- Switched to Vite for builds with optimized chunking for the major libraries we depend on
- Brought marked, DOMPurify, and highlight.js in-house instead of loading them from external CDNs
- Set up automated testing with Vitest and wrote the first round of navigation tests
- Added continuous integration that runs linting, tests, and builds on every push
- Configured ESLint and Prettier to keep the codebase consistent and clean

### Privacy & Legal

- Gave the Terms of Service a refresh - simplified the language around user responsibility and trimmed some of the verbose explanations
- Updated Privacy Policy to accurately reflect what we actually store locally (just bookmarks and recent pages, no theme preference)
- Did a quick audit of the actual storage and network calls to make sure our privacy claims match reality

### Search Improvements

- Added fuzzy matching to the search so you can find what you're looking for even with typos or partial words
- Built out CSS styling for platform-specific version tags (Windows, macOS, Linux, Android, iOS, and retired items)
- Added a direct link to our Discord server in the topbar for anyone who needs help

### Offline Support

- Gave the service worker a full rewrite with smarter caching strategies
- Pages load faster when you're offline, and the cache is now versioned properly

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.4</span>
<span class="changelog-date">April 23</span>
</div>
<div class="changelog-content">

### Stratum Framework & PWA Support

- **Service Worker (Offline Support)**: Integrated `sw.js` for PWA offline caching with a cache-first strategy for all assets.
- **Sidebar Navigation**: Implemented dynamic sidebar with logo, versioning, and collapsible navigation groups (expanded by default).
- **Topbar Evolution**: Replaced Browse with a dedicated mobile Menu button and removed redundant brand imagery for a cleaner look.
- **Mobile Experience**: Added swipe gestures, manipulation-optimized touch targets (48px), and smooth elastic scrolling.
- **CSS Architecture**: Fixed scrolling containers, implemented fixed-position mobile sidebar, and optimized markdown typography for small screens.
- **JavaScript Core**: Fixed hoisting issues in prefetch logic and improved mobile navigation state management.
- **Search & Performance**: Preserved keyboard-driven search (Cmd/Ctrl+K) and optimized page loading via fetch() with improved debug logging.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.3</span>
<span class="changelog-date">April 20</span>
</div>
<div class="changelog-content">

### Platform Guides & Navigation Polish

- Added dedicated Android guides for device choice, setup, app sideloading, security, backups, ADB cleanup, rooting, custom ROMs, and maintenance.
- Added dedicated iOS guides for device choice, setup, app installs, privacy and security, backups, jailbreaking, package managers, tips, and maintenance.
- Added dedicated macOS guides for device choice, setup, apps and package managers, security, backups, Terminal and Homebrew, performance, advanced tweaks, and maintenance.
- Improved the guide navigator so long category lists can scroll horizontally and the active category remains reachable.
- Hid global scrollbars for a cleaner layout while keeping code block scrollbars visible.
- Fixed rounded code blocks so horizontal scrollbars stay inside the code block instead of bleeding past the rounded corners.
- Removed the theme switcher and kept the interface on the single dark visual style.
- Added quick topbar shortcuts for Important, FAQ, and Changelog next to the GitHub shortcut.
- Cleaned dated wording from user-facing pages so evergreen guides read less like temporary release notes.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.2</span>
<span class="changelog-date">April 20</span>
</div>
<div class="changelog-content">

### Linux Content Expansion

- Added a dedicated Linux navigation section with separated pages for distro choice, installation, package management, gaming, drivers, security, and maintenance.
- Added current upstream version notes for Ubuntu, Debian, Mint, Fedora, Arch, openSUSE, kernel.org, Bazzite, Proton, Mesa, and NVIDIA driver caveats.
- Linked Linux entry points from the Beginner Guide so the section is easier to find.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.1</span>
<span class="changelog-date">April 20</span>
</div>
<div class="changelog-content">

### Design & UX Overhaul

- **Custom Icon System**: Replaced all emoji with a proprietary SVG icon set for consistent, sharp visuals across all pages
- **Smoother Animations**: Refined entrance transitions with improved easing and timing for a polished feel
- **Enhanced Markdown Engine**: Integrated marked.js for proper Markdown parsing with full codeblock support
- **Syntax Highlighting**: Added highlight.js with GitHub Dark theme and copy-to-clipboard functionality on all code blocks
- **Typography Improvements**: Increased line-height to 1.75 and adjusted font scales for better readability
- **Cleaner Footer**: Simplified footer with essential branding only
- **Consistent Branding**: Complete transition to "StratumLister" identity throughout
- **Streamlined Homepage**: Removed redundant Discord CTA from bottom of the StratumLister page (top action bar retained)

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v1.0.0</span>
<span class="changelog-date">April 19</span>
</div>
<div class="changelog-content">

### Modernization Milestone
The platform has transitioned to a high-fidelity documentation interface focused on semantic discovery and technical transparency.

- **Glassmorphism Design**: Applied modern glass morphism aesthetics with backdrop blur and transparency.
- **Responsive & Scalable**: Enhanced responsiveness to support every device, screen size, and browser.
- **Global Search Bar**: Introduced a persistent, keyboard-driven search overlay with real-time indexing.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v0.9.0</span>
<span class="changelog-date">April 19</span>
</div>
<div class="changelog-content">

### Core Infrastructure Phase
Established the foundational technical standards and initial content repository.

- **Maintainer Verification System**: Launched the Link Safety Index and the maintainer-only verification badge protocol.
- **Safety Database**: Populated the "Avoid These Tools" and "Emergency Recovery" knowledge bases.
- **Policy Framework**: Formally introduced the Human-Only content policy and localized privacy standards.
- **Foundational Guides**: Published comprehensive audits for Windows Hardening, Browser Security, and Multimedia performance.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v0.8.2</span>
<span class="changelog-date">April 18</span>
</div>
<div class="changelog-content">

### Code Rewrite
Complete codebase rewrite for improved maintainability and extensibility.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v0.8.1</span>
<span class="changelog-date">March 23</span>
</div>
<div class="changelog-content">

### GitHub Pages Migration
Migrated hosting from GitBook to GitHub Pages for better control and performance.

</div>
</div>

<div class="changelog-item">
<div class="changelog-header">
<span class="changelog-version-tag">v0.8.0</span>
<span class="changelog-date">February 12</span>
</div>
<div class="changelog-content">

### Initial Launch
The website's foundational release with core content and basic structure.

</div>
</div>

</div>
