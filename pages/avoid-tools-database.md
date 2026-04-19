# Avoid These Tools Database

This database tracks categories and examples that should be avoided unless a guide gives a specific, reviewed exception.

| Category | Avoid | Why | Safer Direction |
| --- | --- | --- | --- |
| Driver tools | Driver booster and auto-updater suites | Wrong drivers can break GPU, chipset, audio, or network stability | Use vendor drivers or Windows Update |
| Debloat scripts | Scripts that disable large service groups | Breaks updates, Store apps, search, printing, networking, or recovery | Use targeted settings and reversible tools |
| Registry packs | FPS, latency, or network `.reg` packs | Often outdated or placebo; hard to audit | Change known settings manually |
| Custom Windows ISOs | Random lite/gaming ISOs | Unknown removals, broken servicing, malware risk | Official ISO plus documented post-install changes |
| Security bypasses | Defender removal, update removal, SmartScreen disablement | Reduces baseline protection | Keep defaults unless a threat model requires a change |
| Repack sites | Rehosted installers for tools with official downloads | Supply-chain risk | Use official site, GitHub releases, package managers |
| Cleanup tools | Registry cleaners and aggressive optimizer suites | Can remove valid keys or scheduled tasks | Use Storage Sense, BleachBit carefully, or manual cleanup |
| VPN claims | "Free unlimited no-log VPN" services with no business model | Logging, injection, weak privacy, malware risk | Use reputable paid or audited providers |

## Status Labels

- **Avoid:** Do not recommend.
- **Needs review:** Possible use case, but not enough evidence.
- **Allowed with warning:** Useful only with strict scope and rollback steps.
- **Recommended alternative:** Safer option available.

## Additions

Use the [Contribution Guide](#contribution-guide) to report a tool. Include the exact source, behavior, risk, and evidence.
