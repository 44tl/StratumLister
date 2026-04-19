# Contribution Guide

StratumLister is a community-driven technical resource. We welcome contributions that improve the accuracy, safety, or usability of our documentation.

## What To Submit
- **Security Audits**: Reports of hijacked, suspicious, or malicious external links.
- **Source Updates**: Links to more authoritative or direct official sources for tools.
- **OS Compatibility**: Corrections for outdated advice regarding specific Windows, Linux, or macOS versions.
- **Technical Refinements**: Better wording for complex technical instructions or better rollback steps.
- **New Content**: New pages that strictly follow Stratum's "Safety First" optimization model.

## Ethical Standards (The "No-AI" Rule)
We maintain a strict **No-AI Policy**.
- All submissions must be authored, tested, and manually verified by a human.
- AI-generated bulk pages, summaries, or scripts are strictly prohibited.
- Submissions found to be AI-generated will be declined to ensure technical accountability.

## What To Avoid
- Affiliate or promotional links.
- "Black-box" tweak packs or installers that do not provide source code.
- Custom Windows ISOs without a transparent and verifiable security model.
- Claims of "massive performance gains" without reproducible benchmarks or technical evidence.

## Review Standards
All recommendations must be **useful, maintained, explainable, and reversible.**
- If multiple tools solve the same problem, we prefer the one with the clearest documentation and safest default settings.
- We prioritize "manual-first" solutions over automated scripts.

## Content Framework
Every technical guide must address these six items:
1. **Target Audience**: Who is this change for?
2. **Pre-Requisites**: What should the user do first (e.g., Restore Point)?
3. **Safe Changes**: What settings provide the best value with the least risk?
4. **Risks**: What should be avoided during this process?
5. **Reversibility**: How exactly does the user roll back these changes?
6. **Sources**: What official documentation supports this advice?

## Technical Implementation

If you are adding a new page, follow these steps:

### 1. File Placement
Place your `.md` file in the `pages/` directory. Use lowercase with hyphens for the filename (example: `gpu-driver-audit.md`).

### 2. Navigation Integration
Add your page to the `siteStructure` array in `navigation.js`:

```javascript
{ 
  id: "page-id", 
  label: "Page Display Name", 
  icon: "icon-name", 
  color: "#hex-code", 
  path: "pages/filename.md", 
  tags: ["search", "keywords"] 
}
```

- **ID**: A unique string for internal routing (example: `network-audit`).
- **Icon**: Choose a unique name from the `getIconSvg` library.
- **Color**: Use a semantic hex code (Green for safety, Red for risk, Blue for general).

### 3. Icon Library
If a new icon is required:
1. Select an SVG path from [Feather Icons](https://feathericons.com/).
2. Add the SVG string to the `icons` object in the `getIconSvg` function in `navigation.js`.


