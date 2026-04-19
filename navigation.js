const siteStructure = [
    {
        title: "Start Here",
        items: [
            { id: "stratum-lister", label: "Stratum Lister", icon: "home", color: "#ffffff", path: "pages/ch/stratum-lister.md", tags: ["home", "about", "standards"] },
            { id: "important", label: "Important", icon: "alert-triangle", color: "#ffffff", path: "pages/ch/important.md", tags: ["safety", "policy", "verification"] },
            { id: "beginner-guide", label: "Beginner Guide", icon: "map", color: "#ffffff", path: "pages/beginner-guide.md", tags: ["start", "workflow", "guide"] },
            { id: "faq", label: "FAQ", icon: "help-circle", color: "#ffffff", path: "pages/ch/faq.md", tags: ["questions", "support"] },
            { id: "glossary", label: "Glossary", icon: "book", color: "#ffffff", path: "pages/ch/glossary.md", tags: ["terms", "definitions"] }
        ]
    },
    {
        title: "Project",
        items: [
            { id: "bookmarks", label: "Stratum Bookmarks", icon: "bookmark", color: "#ffffff", path: "pages/bookmarks.md", tags: ["bookmarks", "saved"] },
            { id: "changelog", label: "Stratum Changelog", icon: "list", color: "#ffffff", path: "pages/ch/changelog.md", tags: ["updates", "changes"] },
            { id: "link-safety-index", label: "Link Safety Index", icon: "link", color: "#ffffff", path: "pages/link-safety-index.md", tags: ["verification", "links", "trust"] },
            { id: "contribution-guide", label: "Contribution Guide", icon: "git-pull-request", color: "#ffffff", path: "pages/contribution-guide.md", tags: ["contribute", "sources", "review"] },
            { id: "contributors", label: "Contributors", icon: "users", color: "#ffffff", path: "pages/contributors.md", tags: ["github", "community"] }
        ]
    },
    {
        title: "Safety & Recovery",
        items: [
            { id: "safe-optimization-path", label: "Safe Optimization Path", icon: "route", color: "#ffffff", path: "pages/safe-optimization-path.md", tags: ["optimization", "safe", "sequence"] },
            { id: "download-safety", label: "Download Safety", icon: "download", color: "#ffffff", path: "pages/download-safety.md", tags: ["downloads", "verify", "sandbox", "smartscreen", "virustotal"] },
            { id: "emergency-recovery-path", label: "Emergency Recovery Path", icon: "life-buoy", color: "#ffffff", path: "pages/emergency-recovery-path.md", tags: ["repair", "rollback", "boot"] },
            { id: "restore-point-backup-guide", label: "Restore Point & Backup Guide", icon: "history", color: "#ffffff", path: "pages/restore-point-backup-guide.md", tags: ["restore", "backup", "image"] },
            { id: "backup-tools", label: "Backup Tools", icon: "database", color: "#ffffff", path: "pages/backup-tools.md", tags: ["backup", "sync", "encryption", "restore", "restic", "borg", "syncthing"] },
            { id: "known-bad-tools-unsafe-tweaks", label: "Known Bad Tools / Unsafe Tweaks", icon: "alert-octagon", color: "#ffffff", path: "pages/known-bad-tools-unsafe-tweaks.md", tags: ["unsafe", "debloat", "registry"] },
            { id: "avoid-tools-database", label: "Avoid These Tools Database", icon: "ban", color: "#ffffff", path: "pages/avoid-tools-database.md", tags: ["database", "unsafe", "tools"] },
            { id: "what-not-to-use", label: "What NOT to Use", icon: "alert-circle", color: "#ffffff", path: "pages/what-not-to-use.md", tags: ["unsafe", "warning"] },
            { id: "common-problems-and-fixes", label: "Common Problems & Fixes", icon: "wrench", color: "#ffffff", path: "pages/common-problems-and-fixes.md", tags: ["fix", "repair", "windows"] },
            { id: "windows-update-survival-guide", label: "Windows Update Survival Guide", icon: "refresh-cw", color: "#ffffff", path: "pages/windows-update-survival-guide.md", tags: ["windows update", "rollback", "pause"] },
            { id: "driver-cleanup-guide", label: "Driver Cleanup Guide", icon: "settings", color: "#ffffff", path: "pages/driver-cleanup-guide.md", tags: ["drivers", "ddu", "gpu"] },
            { id: "when-to-restore-window", label: "When to Restore Windows", icon: "power", color: "#ffffff", path: "pages/when-to-restore-window.md", tags: ["restore", "reset"] }
        ]
    },
    {
        title: "Windows / Linux",
        items: [
            { id: "windows-optimization", label: "Windows Optimization", icon: "layout", color: "#ffffff", path: "pages/windows-optimization.md", tags: ["windows", "performance"] },
            { id: "win-10-11-optimization-faq", label: "Win 10/11 Optimization FAQ", icon: "help-circle", color: "#ffffff", path: "pages/win-10-11-optimization-faq.md", tags: ["windows", "faq"] },
            { id: "win-10-11-optimization-tools", label: "Win 10/11 Optimization Tools", icon: "tool", color: "#ffffff", path: "pages/win-10-11-optimization-tools.md", tags: ["tools", "debloat", "windows"] },
            { id: "free-up-space", label: "Free Up Space", icon: "trash-2", color: "#ffffff", path: "pages/free-up-space.md", tags: ["storage", "cleanup"] },
            { id: "custom-win-iso-knowledge", label: "Custom Win ISO Knowledge", icon: "book-open", color: "#ffffff", path: "pages/custom-win-iso-knowledge.md", tags: ["iso", "custom windows"] },
            { id: "windows-linux-iso-playbooks", label: "Windows/Linux ISO Playbooks", icon: "file-archive", color: "#ffffff", path: "pages/windows-linux-iso-playbooks.md", tags: ["iso", "linux", "windows"] }
        ]
    },
    {
        title: "Hardware & Gaming",
        items: [
            { id: "amd-related", label: "AMD Related", icon: "zap", color: "#ffffff", path: "pages/amd-related.md", tags: ["amd", "gpu", "drivers"] },
            { id: "nvidia-essentials", label: "Nvidia Essentials", icon: "video", color: "#ffffff", path: "pages/nvidia-essentials.md", tags: ["nvidia", "gpu", "drivers"] },
            { id: "optimize-steam", label: "Optimize Steam", icon: "play", color: "#ffffff", path: "pages/optimize-steam.md", tags: ["steam", "gaming"] },
            { id: "game-launcher-optimization", label: "Game Launcher Optimization", icon: "gamepad", color: "#ffffff", path: "pages/game-launcher-optimization.md", tags: ["gaming", "launchers"] },
            { id: "game-hosting-tools", label: "Game Hosting Tools", icon: "server", color: "#ffffff", path: "pages/game-hosting-tools.md", tags: ["minecraft", "servers", "hosting"] },
            { id: "network-troubleshooting", label: "Network Troubleshooting", icon: "network", color: "#ffffff", path: "pages/network-troubleshooting.md", tags: ["network", "latency", "dns"] },
            { id: "wii-u-wii-homebrew", label: "Wii U / Wii Homebrew", icon: "gamepad-2", color: "#ffffff", path: "pages/wii-u-wii-homebrew.md", tags: ["homebrew", "console"] },
            { id: "multimedia", label: "Multimedia", icon: "film", color: "#ffffff", path: "pages/multimedia.md", tags: ["tools", "media", "recording"] }
        ]
    },
    {
        title: "Privacy & Security",
        items: [
            { id: "browser-hardening-guide", label: "Browser Hardening Guide", icon: "eye-off", color: "#ffffff", path: "pages/browser-hardening-guide.md", tags: ["browser", "privacy", "extensions"] },
            { id: "recommended-browsers", label: "Recommended Browsers", icon: "compass", color: "#ffffff", path: "pages/recommended-browsers.md", tags: ["browser", "privacy"] },
            { id: "dns-basics", label: "DNS", icon: "globe", color: "#ffffff", path: "pages/dns-basics.md", tags: ["dns", "privacy", "network", "doh", "dot", "quad9", "cloudflare", "adguard"] },
            { id: "2fa-basics", label: "2FA Basics", icon: "smartphone", color: "#ffffff", path: "pages/2fa-basics.md", tags: ["2fa", "accounts", "security"] },
            { id: "password-manager-guide", label: "Introduction to Passwords", icon: "key", color: "#ffffff", path: "pages/password-manager-guide.md", tags: ["passwords", "vault", "security", "password manager", "totp", "mfa"] },
            { id: "password-vaults", label: "Password Vaults", icon: "lock", color: "#ffffff", path: "pages/password-vaults.md", tags: ["passwords", "vault", "security", "password manager", "bitwarden", "1password", "keepassxc"] },
            { id: "threat-modeling-normal-users", label: "Threat Modeling", icon: "target", color: "#ffffff", path: "pages/threat-modeling-normal-users.md", tags: ["threat model", "privacy", "security", "opsec"] },
            { id: "security-toolkit", label: "Security Toolkit", icon: "shield", color: "#ffffff", path: "pages/security-toolkit.md", tags: ["security", "privacy", "tools", "browser", "backup", "encryption"] },
            { id: "vpn", label: "VPN", icon: "shield", color: "#ffffff", path: "pages/vpn.md", tags: ["vpn", "privacy"] },
            { id: "anti-virus", label: "Anti-Virus", icon: "shield-alert", color: "#ffffff", path: "pages/anti-virus.md", tags: ["antivirus", "defender", "malware"] }
        ]
    },
    {
        title: "Self-Hosting",
        items: [
            { id: "self-hosting-starter-guide", label: "Self-Hosting Starter Guide", icon: "server", color: "#ffffff", path: "pages/self-hosting-starter-guide.md", tags: ["self hosting", "docker", "backup"] }
        ]
    }
];

const utilityPages = [
    { id: "terms-of-service", label: "Terms of Service", groupTitle: "Legal", path: "pages/terms-of-service.md" },
    { id: "privacy-policy", label: "Privacy Policy", groupTitle: "Legal", path: "pages/privacy-policy.md" }
];

const CONTRIBUTORS_OWNER = '44tl';
const CONTRIBUTORS_REPO_URL = 'https://github.com/44tl/StratumLister';
const CONTRIBUTORS_API_URL = 'https://api.github.com/repos/44tl/StratumLister/contributors?per_page=100';

const BOOKMARK_STORAGE_KEY = 'stratum-bookmarks';

const sidebarNav = document.getElementById('sidebar-nav');
const contentArea = document.getElementById('content-area');
const breadcrumbs = document.getElementById('breadcrumbs');
const themeToggle = document.getElementById('theme-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mobileToggle = document.getElementById('mobile-toggle');
const searchToggle = document.getElementById('search-toggle');
const bookmarkToggle = document.getElementById('bookmark-toggle');

const markdownCache = new Map();
const emptyPages = new Set();
let searchOverlay;
let searchInput;
let searchResults;
let searchIndex = [];
let searchIndexPromise = null;

const getAllPages = () => [
    ...siteStructure.flatMap(group => group.items.map(item => ({
        ...item,
        groupTitle: group.title
    }))),
    ...utilityPages
];

const checkPageAvailability = async () => {
    const checks = [];

    const pagesToCheck = [
        ...siteStructure.flatMap(group => group.items),
        ...utilityPages
    ];

    pagesToCheck.forEach(item => {
        checks.push(
            fetch(item.path)
                .then(response => {
                    if (!response.ok) throw new Error('Not found');
                })
                .catch(() => {
                    const navLink = document.querySelector(`.nav-link[data-id="${item.id}"]`);
                    if (navLink) {
                        navLink.classList.add('empty');
                    }
                    emptyPages.add(item.id);
                })
        );
    });

    await Promise.all(checks);
};

const init = () => {
    renderSidebar();
    setupTheme();
    setupGitHubLink();
    setupTopbarRoutes();
    setupMobileNav();
    setupSearch();
    setupBookmarks();
    setupButtonEffects();
    window.addEventListener('hashchange', handleRouteChange);

    if (!window.location.hash) {
        const initialId = siteStructure[0].items[0].id;
        window.location.hash = initialId;
        handleRouteChange();
    } else {
        handleRouteChange();
    }


    checkPageAvailability().catch(error => {
        console.warn('Failed to pre-check pages', error);
    });
};

const setupMobileNav = () => {
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('visible');
        });
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('visible');
        });
    }
};

const closeMobileNav = () => {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
};

const renderSidebar = () => {
    sidebarNav.innerHTML = '';

    siteStructure.forEach(group => {
        const groupEl = document.createElement('div');
        groupEl.className = 'nav-group';

        const titleEl = document.createElement('div');
        titleEl.className = 'nav-group-title';
        titleEl.textContent = group.title;
        groupEl.appendChild(titleEl);

        group.items.forEach(item => {
            const linkEl = document.createElement('a');
            linkEl.className = 'nav-link';
            linkEl.href = `#${item.id}`;
            linkEl.dataset.id = item.id;

            const iconContainer = document.createElement('span');
            iconContainer.className = 'nav-icon';
            iconContainer.style.color = item.color || 'var(--text-muted)';
            iconContainer.innerHTML = getIconSvg(item.icon);

            const textEl = document.createElement('span');
            textEl.textContent = item.label;

            linkEl.appendChild(iconContainer);
            linkEl.appendChild(textEl);
            
            linkEl.addEventListener('click', (e) => {
                closeMobileNav();
                const targetHash = `#${item.id}`;
                if (window.location.hash !== targetHash) {
                    window.location.hash = item.id;
                }
            });
            groupEl.appendChild(linkEl);
        });

        sidebarNav.appendChild(groupEl);
    });
};

const handleRouteChange = async () => {
    const routeId = window.location.hash.substring(1);
    const itemInfo = findItemById(routeId);

    if (!itemInfo) return;

    updateActiveLink(routeId);
    updateBreadcrumbs(itemInfo.group.title, itemInfo.item.label);
    updateBookmarkButton(routeId);
    await loadContent(itemInfo.item.path, itemInfo.item);
};

const findItemById = (id) => {
    for (const group of siteStructure) {
        const item = group.items.find(i => i.id === id);
        if (item) return { group, item };
    }

    const utilityPage = utilityPages.find(item => item.id === id);
    if (utilityPage) {
        return {
            group: { title: utilityPage.groupTitle },
            item: utilityPage
        };
    }

    return null;
};

const updateActiveLink = (id) => {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.id === id) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    document.querySelectorAll('.topbar-route').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
};

const updateBreadcrumbs = (groupTitle, itemLabel) => {
    const section = document.createElement('span');
    section.className = 'breadcrumb-section';
    section.textContent = groupTitle;

    const separator = document.createElement('span');
    separator.className = 'breadcrumb-separator';
    separator.textContent = '/';

    const current = document.createElement('span');
    current.className = 'breadcrumb-current';
    current.textContent = itemLabel;

    breadcrumbs.replaceChildren(section, separator, current);
};

const renderEmptyState = () => {
    contentArea.innerHTML = '<div class="markdown-body empty-state"><p class="empty-message">This content is not available yet. Come back later.</p></div>';
};

const getIconSvg = (name) => {
    const icons = {
        'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        'alert-triangle': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        'map': '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        'help-circle': '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        'book': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        'bookmark': '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        'list': '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline>',
        'git-pull-request': '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        'route': '<circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle>',
        'life-buoy': '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        'rotate-ccw': '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        'hard-drive': '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
        'alert-octagon': '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        'ban': '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        'alert-circle': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        'settings': '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        'layout': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        'tool': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        'file-archive': '<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="20" r="2"></circle><path d="M10 7v11"></path><path d="M10 12h3"></path>',
        'cpu': '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line>',
        'video': '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        'gamepad': '<line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="13" r="1"></circle><circle cx="17.5" cy="10.5" r="1"></circle><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.01.149 0 .214.033.421.095.613L4.93 17.5a3 3 0 0 0 2.87 2.5h8.4a3 3 0 0 0 2.87-2.5l2.13-8.148c.062-.192.095-.399.095-.613 0-.048-.004-.097-.01-.149A4 4 0 0 0 17.32 5z"></path>',
        'server': '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="10" y1="6" x2="10.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line><line x1="10" y1="18" x2="10.01" y2="18"></line>',
        'network': '<rect x="9" y="1" width="6" height="6" rx="1"></rect><rect x="1" y="17" width="6" height="6" rx="1"></rect><rect x="17" y="17" width="6" height="6" rx="1"></rect><path d="M12 7v10"></path><path d="M5 17v-5h14v5"></path>',
        'gamepad-2': '<circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="10"></line><line x1="12" y1="14" x2="12" y2="22"></line><line x1="2" y1="12" x2="9" y2="12"></line><line x1="15" y1="12" x2="22" y2="12"></line>',
        'film': '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        'compass': '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        'wifi': '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        'smartphone': '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        'lock': '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        'target': '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        'shield-alert': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        'link': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        'refresh-cw': '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        'history': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        'power': '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        'database': '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        'trash-2': '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        'play': '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        'eye-off': '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        'globe': '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        'key': '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3L15.5 7.5z"></path>'
    };
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ''}</svg>`;
};

const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const stripMarkdown = (markdown) => String(markdown ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 $2')
    .replace(/[#>*_`|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const createVerifiedIcon = () => {
    const icon = document.createElement('span');
    icon.className = 'verified-icon';
    icon.title = 'Verified by Atlas';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.innerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>';
    icon.appendChild(svg);

    return icon;
};

const injectPageMetadata = (item) => {
    if (!item || !item.reviewed) return;

    const title = contentArea.querySelector('.markdown-body h1');
    if (!title || title.nextElementSibling?.classList.contains('page-meta')) return;

    const meta = document.createElement('div');
    meta.className = 'page-meta';

    const reviewed = document.createElement('span');
    reviewed.textContent = `Last Updated: ${item.reviewed}`;

    meta.append(reviewed);
    title.insertAdjacentElement('afterend', meta);
};

const linkifyPlainText = (root) => {
    if (!root) return;

    const textNodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || parent.closest('a, pre, code, script, style, textarea')) {
                return NodeFilter.FILTER_REJECT;
            }
            return /https?:\/\/[^\s<]+/i.test(node.nodeValue)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
        }
    });

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {
        const fragment = document.createDocumentFragment();
        const text = node.nodeValue;
        const urlRegex = /https?:\/\/[^\s<)]+/gi;
        let lastIndex = 0;
        let match;

        while ((match = urlRegex.exec(text)) !== null) {
            const before = text.slice(lastIndex, match.index);
            if (before) fragment.appendChild(document.createTextNode(before));

            let url = match[0];
            let trailing = '';
            while (/[.,;:!?]$/.test(url)) {
                trailing = url.slice(-1) + trailing;
                url = url.slice(0, -1);
            }

            const link = document.createElement('a');
            link.href = url;
            link.textContent = url;
            fragment.appendChild(link);
            if (trailing) fragment.appendChild(document.createTextNode(trailing));
            lastIndex = match.index + match[0].length;
        }

        const after = text.slice(lastIndex);
        if (after) fragment.appendChild(document.createTextNode(after));
        node.replaceWith(fragment);
    });
};

const prepareExternalLinks = () => {
    contentArea.querySelectorAll('.markdown-body a[href^="http://"], .markdown-body a[href^="https://"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
};

const addVerifiedIcon = (link) => {
    if (link.classList.contains('no-verified')) return;

    const framedLink = link.matches('.lister-primary-action, .lister-secondary-action, .discord-cta, .contributors-repo-link');

    if (framedLink) {
        if (link.querySelector('.verified-icon')) return;
        link.appendChild(createVerifiedIcon());
        return;
    }

    if (link.nextElementSibling && link.nextElementSibling.classList.contains('verified-icon')) return;
    link.insertAdjacentElement('afterend', createVerifiedIcon());
};

const loadContent = async (path, item = null) => {
    const routeId = window.location.hash.substring(1);
    const navLink = document.querySelector(`.nav-link[data-id="${routeId}"]`);


    if (emptyPages.has(routeId)) {
        renderEmptyState();
        return;
    }


    if (navLink) navLink.classList.remove('empty');

    try {
        if (markdownCache.has(path)) {
            renderMarkdown(markdownCache.get(path), item);
            return;
        }

        contentArea.innerHTML = '<div class="content-loading"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-line"></div><div class="skeleton skeleton-line"></div><div class="skeleton skeleton-line"></div><div class="skeleton skeleton-line"></div><div class="skeleton skeleton-line"></div></div>';

        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Not found');
        }

        const markdown = await response.text();
        markdownCache.set(path, markdown);
        renderMarkdown(markdown, item);
    } catch (error) {
        emptyPages.add(routeId);
        if (navLink) navLink.classList.add('empty');
        renderEmptyState();
    }
};

const renderMarkdown = (markdown, item = null) => {
    const rendererUnavailable = typeof marked === 'undefined' || typeof DOMPurify === 'undefined';
    const rawHtml = rendererUnavailable
        ? `<pre><code>${escapeHtml(markdown)}</code></pre>`
        : marked.parse(markdown);
    const cleanHtml = rendererUnavailable
        ? rawHtml
        : DOMPurify.sanitize(rawHtml);
    contentArea.innerHTML = `<div class="markdown-body">${cleanHtml}</div>`;
    const markdownBody = contentArea.querySelector('.markdown-body');

    injectPageMetadata(item);
    linkifyPlainText(markdownBody);
    prepareExternalLinks();

    if (typeof hljs !== 'undefined') {
        contentArea.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    contentArea.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-button')) return;

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Copy code to clipboard');

        const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
        button.innerHTML = icon;

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            try {
                await navigator.clipboard.writeText(code);
                button.classList.add('copied');
                button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = icon;
                }, 2000);
            } catch (err) {
                button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
                setTimeout(() => {
                    button.innerHTML = icon;
                }, 1500);
            }
        });

        pre.appendChild(button);
    });

    contentArea.querySelectorAll('.markdown-body a[href^="http://"], .markdown-body a[href^="https://"], a.verified-link, a[data-verified="true"]').forEach(addVerifiedIcon);

    contentArea.querySelectorAll('[data-action="open-search"]').forEach(btn => {
        btn.addEventListener('click', () => openSearch());
    });

    contentArea.querySelectorAll('.verified-icon').forEach(el => {
        if (!el.querySelector('svg')) {
            const icon = createVerifiedIcon();
            el.replaceChildren(...icon.childNodes);
        }
    });

    if (window.location.hash === '#contributors') {
        loadContributors();
    }

    if (window.location.hash === '#bookmarks') {
        renderBookmarksPage();
    }


    if (item && item.id === 'stratum-lister') {
        animateStats();
    }
};

const getStoredBookmarks = () => {
    try {
        const stored = JSON.parse(localStorage.getItem(BOOKMARK_STORAGE_KEY) || '[]');
        return Array.isArray(stored) ? stored.filter(Boolean) : [];
    } catch (error) {
        return [];
    }
};

const saveStoredBookmarks = (bookmarks) => {
    localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify([...new Set(bookmarks)]));
};

const isBookmarked = (id) => getStoredBookmarks().includes(id);

const updateBookmarkButton = (id = window.location.hash.substring(1)) => {
    if (!bookmarkToggle) return;

    const itemInfo = findItemById(id);
    const active = itemInfo && isBookmarked(id);
    bookmarkToggle.classList.toggle('active', Boolean(active));
    bookmarkToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
    bookmarkToggle.setAttribute('title', active ? 'Remove bookmark' : 'Bookmark current page');
};

const toggleBookmark = () => {
    const id = window.location.hash.substring(1);
    if (!findItemById(id)) return;

    const bookmarks = getStoredBookmarks();
    const next = bookmarks.includes(id)
        ? bookmarks.filter(item => item !== id)
        : [...bookmarks, id];

    saveStoredBookmarks(next);
    updateBookmarkButton(id);

    if (window.location.hash === '#bookmarks') {
        renderBookmarksPage();
    }
};

const setupBookmarks = () => {
    if (!bookmarkToggle) return;
    bookmarkToggle.addEventListener('click', toggleBookmark);
    updateBookmarkButton();
};

const renderBookmarksPage = () => {
    const container = document.getElementById('bookmarks-list');
    if (!container) return;

    const bookmarks = getStoredBookmarks()
        .map(id => ({ id, itemInfo: findItemById(id) }))
        .filter(entry => entry.itemInfo);

    if (bookmarks.length === 0) {
        container.innerHTML = `
            <div class="dynamic-empty">
                <p>No bookmarks yet.</p>
                <p>Open any guide and use the star button in the top bar.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="bookmark-grid">
            ${bookmarks.map(({ id, itemInfo }) => `
                <article class="bookmark-card">
                    <div>
                        <p class="bookmark-group">${escapeHtml(itemInfo.group.title)}</p>
                        <a href="#${escapeHtml(id)}">${escapeHtml(itemInfo.item.label)}</a>
                    </div>
                    <button type="button" data-remove-bookmark="${escapeHtml(id)}">Remove</button>
                </article>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('[data-remove-bookmark]').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-remove-bookmark');
            saveStoredBookmarks(getStoredBookmarks().filter(item => item !== id));
            renderBookmarksPage();
            updateBookmarkButton();
        });
    });
};

const createSearchOverlay = () => {
    if (searchOverlay) return;

    searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.setAttribute('aria-hidden', 'true');
    searchOverlay.innerHTML = `
        <div class="search-dialog" role="dialog" aria-modal="true" aria-label="Search Stratum">
            <div class="search-box">
                <input id="stratum-search-input" type="search" autocomplete="off" placeholder="Search guides, tools, and fixes">
                <button type="button" class="search-close" aria-label="Close search">Close</button>
            </div>
            <div id="stratum-search-results" class="search-results" aria-live="polite"></div>
        </div>
    `;

    document.body.appendChild(searchOverlay);
    searchInput = searchOverlay.querySelector('#stratum-search-input');
    searchResults = searchOverlay.querySelector('#stratum-search-results');

    searchOverlay.addEventListener('click', event => {
        if (event.target === searchOverlay) closeSearch();
    });

    searchOverlay.querySelector('.search-close').addEventListener('click', closeSearch);
    searchInput.addEventListener('input', () => {
        renderSearchResults(searchInput.value, searchResults);
    });
};

const setupSearch = () => {
    createSearchOverlay();

    if (searchToggle) {
        searchToggle.addEventListener('click', () => openSearch());
    }

    document.addEventListener('keydown', event => {
        const target = event.target;
        const isTyping = target instanceof HTMLInputElement
            || target instanceof HTMLTextAreaElement
            || target?.isContentEditable;

        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            openSearch();
            return;
        }

        if (!isTyping && event.key === '/') {
            event.preventDefault();
            openSearch();
            return;
        }

        if (event.key === 'Escape' && searchOverlay?.classList.contains('visible')) {
            closeSearch();
        }
    });
};

const openSearch = async (query = '') => {
    createSearchOverlay();
    searchOverlay.classList.add('visible');
    searchOverlay.setAttribute('aria-hidden', 'false');
    searchInput.value = query;
    searchInput.focus();
    await ensureSearchIndex();
    renderSearchResults(query, searchResults);
};

const closeSearch = () => {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('visible');
    searchOverlay.setAttribute('aria-hidden', 'true');
};

const ensureSearchIndex = async () => {
    if (searchIndex.length > 0) return searchIndex;
    if (searchIndexPromise) return searchIndexPromise;

    searchIndexPromise = Promise.all(getAllPages().map(async item => {
        try {
            const response = await fetch(item.path);
            const markdown = response.ok ? await response.text() : '';
            return {
                ...item,
                text: stripMarkdown(markdown).toLowerCase(),
                headings: [...markdown.matchAll(/^#{1,3}\s+(.+)$/gm)].map(match => match[1]).join(' ').toLowerCase()
            };
        } catch (error) {
            return {
                ...item,
                text: '',
                headings: ''
            };
        }
    })).then(index => {
        searchIndex = index;
        return searchIndex;
    });

    return searchIndexPromise;
};

const scoreSearchResult = (page, terms) => {
    const haystacks = {
        label: page.label.toLowerCase(),
        group: String(page.groupTitle || '').toLowerCase(),
        tags: (page.tags || []).join(' ').toLowerCase(),
        headings: page.headings,
        text: page.text
    };

    return terms.reduce((score, term) => {
        if (haystacks.label.includes(term)) score += 12;
        if (haystacks.group.includes(term)) score += 6;
        if (haystacks.tags.includes(term)) score += 8;
        if (haystacks.headings.includes(term)) score += 6;
        if (haystacks.text.includes(term)) score += 2;
        return score;
    }, 0);
};

const getSearchResults = (query) => {
    const terms = String(query || '')
        .toLowerCase()
        .split(/\s+/)
        .map(term => term.trim())
        .filter(Boolean);

    if (terms.length === 0) {
        return getAllPages().slice(0, 8);
    }

    return searchIndex
        .map(page => ({ page, score: scoreSearchResult(page, terms) }))
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score || a.page.label.localeCompare(b.page.label))
        .slice(0, 12)
        .map(result => result.page);
};

const renderSearchResults = async (query, target) => {
    if (!target) return;

    await ensureSearchIndex();
    const results = getSearchResults(query);

    if (results.length === 0) {
        target.innerHTML = '<div class="dynamic-empty"><p>No matching pages found.</p><p>Try a shorter term like driver, backup, DNS, restore, Steam, or update.</p></div>';
        return;
    }

    target.innerHTML = results.map(page => `
        <a class="search-result" href="#${escapeHtml(page.id)}">
            <span>${escapeHtml(page.label)}</span>
            <small>${escapeHtml(page.groupTitle || 'Utility')}</small>
        </a>
    `).join('');

    target.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeSearch);
    });
};


const setupTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark';

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-transition');

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.classList.remove('theme-transition');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        requestAnimationFrame(() => {
            document.documentElement.classList.add('theme-transition');
        });
    });

    updateThemeIcon(theme);
};

const getRippleColor = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(17, 17, 19, 0.12)';
};

const setupButtonEffects = () => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const buttons = document.querySelectorAll('.topbar-actions a, .topbar-actions button, .lister-primary-action, .lister-secondary-action, .discord-cta, .bookmark-card button');

    buttons.forEach(button => {
        button.classList.add('ripple');
        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        if (!isTouch) {
            button.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rippleColor = getRippleColor();

                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.cssText = `
                    position: absolute;
                    background: ${rippleColor};
                    border-radius: 50%;
                    pointer-events: none;
                    width: 0;
                    height: 0;
                    top: ${y}px;
                    left: ${x}px;
                    transform: translate(-50%, -50%);
                    animation: ripple-animation 0.6s ease-out forwards;
                `;

                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const topbarHeight = document.querySelector('.topbar')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - topbarHeight - 16;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    history.pushState(null, null, href);
                }
            }
        });
    });
};

const setupGitHubLink = () => {
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.addEventListener('click', () => {
            window.open('https://github.com/44tl/StratumLister', '_blank');
        });
    }
};

const setupTopbarRoutes = () => {
    document.querySelectorAll('.topbar-route').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHash = link.getAttribute('href');
            if (targetHash && window.location.hash !== targetHash) {
                e.preventDefault();
                window.location.hash = targetHash.substring(1);
            }
        });
    });
};

const getNextContributorsPage = (linkHeader) => {
    if (!linkHeader) return null;

    const nextLink = linkHeader
        .split(',')
        .map(link => link.trim())
        .find(link => link.includes('rel="next"'));

    const match = nextLink?.match(/<([^>]+)>/);
    return match ? match[1] : null;
};

const fetchContributors = async () => {
    const contributorsByLogin = new Map();
    let nextUrl = CONTRIBUTORS_API_URL;

    while (nextUrl) {
        const response = await fetch(nextUrl, {
            cache: 'no-store',
            headers: {
                Accept: 'application/vnd.github+json'
            }
        });

        if (!response.ok) {
            throw new Error('Unable to load contributors');
        }

        const contributors = await response.json();
        if (!Array.isArray(contributors)) {
            throw new Error('Unexpected contributors response');
        }

        contributors.forEach(contributor => {
            const login = String(contributor.login ?? '').toLowerCase();
            if (login && !contributorsByLogin.has(login)) {
                contributorsByLogin.set(login, contributor);
            }
        });

        nextUrl = getNextContributorsPage(response.headers.get('Link'));
    }

    return Array.from(contributorsByLogin.values()).sort((a, b) => {
        const aIsOwner = String(a.login ?? '').toLowerCase() === CONTRIBUTORS_OWNER;
        const bIsOwner = String(b.login ?? '').toLowerCase() === CONTRIBUTORS_OWNER;

        if (aIsOwner !== bIsOwner) return aIsOwner ? -1 : 1;
        return (Number(b.contributions) || 0) - (Number(a.contributions) || 0);
    });
};

const renderContributorCard = (contributor) => {
    const loginRaw = String(contributor.login ?? 'Unknown');
    const login = escapeHtml(loginRaw);
    const profileUrl = escapeHtml(contributor.html_url || `https://github.com/${encodeURIComponent(loginRaw)}`);
    const avatarUrl = escapeHtml(contributor.avatar_url || '');
    const contributionCount = Number(contributor.contributions) || 0;
    const contributionLabel = contributionCount === 1 ? 'contribution' : 'contributions';
    const isOwner = loginRaw.toLowerCase() === CONTRIBUTORS_OWNER;
    const ownerTag = isOwner ? '<span class="contributor-owner-tag">Owner</span>' : '';

    return `
        <article class="contributor${isOwner ? ' contributor-owner' : ''}">
            <img class="contributor-avatar" src="${avatarUrl}" alt="${login} avatar" width="52" height="52" loading="lazy">
            <div class="contributor-details">
                <div class="contributor-heading">
                    <a href="${profileUrl}" target="_blank" rel="noopener noreferrer">${login}</a>
                    ${ownerTag}
                </div>
                <small>${contributionCount} ${contributionLabel}</small>
            </div>
        </article>
    `;
};

const loadContributors = async () => {
    const contributorsList = document.getElementById('contributors-list');
    if (!contributorsList) return;

    contributorsList.innerHTML = `
        <div class="contributors-loading" aria-live="polite">
            <div class="contributor-skeleton"></div>
            <div class="contributor-skeleton"></div>
            <div class="contributor-skeleton"></div>
        </div>
    `;

    try {
        const contributors = await fetchContributors();
        if (contributors.length === 0) {
            contributorsList.innerHTML = '<div class="contributors-status">No contributor data is available right now.</div>';
            return;
        }

        const countLabel = contributors.length === 1 ? 'contributor' : 'contributors';
        const html = contributors.map(renderContributorCard).join('');

        contributorsList.innerHTML = `
            <div class="contributors-toolbar">
                <div>
                    <p class="contributors-eyebrow">Live GitHub data</p>
                    <p class="contributors-count">${contributors.length} ${countLabel}</p>
                </div>
                <a class="contributors-repo-link no-verified" href="${CONTRIBUTORS_REPO_URL}" target="_blank" rel="noopener noreferrer">Open repository</a>
            </div>
            <div class="contributors-grid">${html}</div>
        `;
    } catch (error) {
        contributorsList.innerHTML = '<div class="contributors-status contributors-status-error">Contributor information is currently unavailable.</div>';
    }
};

const updateThemeIcon = (theme) => {
    if (theme === 'dark') {
        themeToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    } else {
        themeToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"/></svg>';
    }
};

const animateStats = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.lister-principle, .lister-topic').forEach(el => {
        observer.observe(el);
    });
};

const enhanceSearch = () => {
    const searchInput = document.getElementById('stratum-search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.placeholder = 'Press / to close, Esc to clear';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.placeholder = 'Search guides, tools, and fixes';
        });
    }
};

const enhanceThemeToggle = () => {
};

const setupBackToTop = () => {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    const contentArea = document.getElementById('content-area');

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                toggleVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    toggleVisibility();
};

document.addEventListener('DOMContentLoaded', () => {
    init();
    enhanceSearch();
    enhanceThemeToggle();
    setupBackToTop();
});
