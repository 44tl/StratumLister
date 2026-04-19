# Avoid These Tools - Windows Reference

This database tracks tool categories and specific examples that should not be recommended without a
documented, reviewed exception. Entries are based on known failure modes, not theoretical risk.

---

## Quick Reference

| Category | Avoid | Core Risk | Safer Direction |
|---|---|---|---|
| Driver updater tools | Driver Booster, Driver Easy, Snappy Driver Installer (unsourced mirrors) | Wrong or generic drivers cause BSODs, break GPU/network/audio stability; Microsoft has added IObit drivers to the Vulnerable Driver Blocklist | Vendor sites directly (NVIDIA, AMD, Intel), Device Manager, Windows Update |
| Debloat scripts | "Nuke-all" PowerShell scripts, Win10Debloater (Sycnex), random GitHub one-liners | Breaks Windows Update, Store, search, printing, networking, recovery, or sleep; some embed malicious code | Win11Debloat (Raphire) with selective flags, manual via Settings/optional features |
| Registry packs | FPS/latency/network `.reg` packs circulating on forums and YouTube | Typically placebo; hard to audit; can break services or application installs; no rollback path | Change specific documented registry values manually; use `reg export` to back up first |
| Custom Windows ISOs | "Lite", "Gaming Edition", "Debloated", "Government Edition" ISOs from unofficial sources | Unknown component removals break servicing, drivers, and updates; high malware risk; no Microsoft support | Official ISO from microsoft.com + documented post-install changes via WinUtil or NTLite |
| Security bypasses | Defender removal scripts, Windows Update blockers, SmartScreen disablement | Removes baseline protection without a documented threat model justification | Keep defaults; use Group Policy for scoped changes if required |
| Repack / rehost sites | Softonic, FileHippo, rehosted installers for tools with official downloads | Supply-chain injection risk; bundled adware or modified binaries | Official site, GitHub Releases, winget, Chocolatey, Scoop |
| Registry cleaners / optimizer suites | CCleaner (registry module), Advanced SystemCare, AVG TuneUp, iolo System Mechanic | Registry cleaning is a myth on modern Windows; CCleaner was compromised in 2017 (data exfiltration) and flagged as PUA by Microsoft; these suites routinely remove valid keys and scheduled tasks | Storage Sense, Disk Cleanup (built-in); manual temp file cleanup via `%temp%` |
| "Free unlimited" VPN services | Hola, Betternet, SuperVPN, Turbo VPN, and any no-business-model "unlimited free" VPN | Confirmed logging, traffic injection, credential harvesting, and in some cases malware delivery | Mullvad, ProtonVPN (paid or audited free tier), or self-hosted WireGuard |
| All-in-one antivirus bundles (free tier) | Avast Free, AVG Free, McAfee Free trials | History of bundled PUPs, browser hijacking, and data collection sold to third parties; Avast's subsidiary Jumpshot sold detailed browsing data until 2020 | Windows Defender (built-in, sufficient for most users), Malwarebytes Free (on-demand) |
| "AI optimizer" / scareware tools | PC Accelerate Pro, iObit Advanced SystemCare AI, any tool with a fake scan result counter | Fake threat counts designed to pressure purchases; often install additional PUPs; no real optimization occurs | Ignore. There is no AI-powered trick that meaningfully speeds up a healthy Windows install |

---

## Status Labels

| Label | Meaning |
|---|---|
| **Avoid** | Do not recommend under any circumstances |
| **Needs review** | Possible legitimate use case exists but insufficient evidence to recommend |
| **Allowed with warning** | Useful only with strict scope, explicit rollback steps, and user awareness |
| **Recommended alternative** | A safer option exists and should be used instead |

---

## Notes

- **Driver updaters:** The main failure mode is installing a generic WHQL-certified driver that
  replaces a vendor-specific one, breaking features or stability. Microsoft's Vulnerable Driver
  Blocklist has explicitly flagged IObit-signed drivers.
- **Debloat scripts:** Selective tools like Raphire's Win11Debloat with reviewed flags are
  materially different from "remove everything" scripts. The distinction matters.
- **CCleaner:** The file cleaner (temp files, browser cache) is broadly harmless. The registry
  cleaner is not. Avoid the registry module specifically. The 2017 supply-chain compromise is
  historical but the PUA flag from Microsoft stands.
- **Repacks:** winget (`winget install`) and Scoop/Chocolatey are acceptable package managers
  sourcing from official releases. Softonic and similar aggregators are not equivalent.
- **Windows Defender:** On Windows 10/11, Defender provides real-time protection, cloud-based
  detection, and tamper protection. For most users it is sufficient without a third-party AV.

---

## Additions

To add an entry, open a contribution. Required fields:

1. **Tool or category name** - exact name as it appears to users
2. **Source or URL** - where the tool is distributed
3. **Observed behavior** - what it actually does, not marketing copy
4. **Specific risk** - what breaks, what data is exposed, what the failure mode is
5. **Evidence** - incident report, VirusTotal result, vendor disclosure, or reproducible test