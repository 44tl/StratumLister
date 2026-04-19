# Anti-Virus

Antivirus should be part of a layered security setup, not the whole setup.

For most Windows users, the built-in Windows security stack is the practical default. Add third-party tools only when they solve a specific problem.

## Built-In Windows Protection

Official overview: [Windows Security](https://www.microsoft.com/en-us/windows/comprehensive-security)

Windows includes:

- Microsoft Defender Antivirus.
- Microsoft Defender SmartScreen.
- Windows Firewall.
- Reputation checks for suspicious apps and downloads.
- Ransomware protection features such as Controlled Folder Access.

Keep these enabled unless you have a clear reason to replace them.

## Baseline Setup

For normal users:

- Keep Windows updated.
- Keep Microsoft Defender enabled.
- Keep SmartScreen enabled.
- Use a supported browser.
- Use uBlock Origin.
- Avoid pirated software and repacked installers.
- Keep backups offline or isolated.

This prevents more real-world problems than installing multiple security suites.

## Optional Hardening

### Controlled Folder Access

Use for important folders when ransomware protection matters.

Path:

```text
Windows Security > Virus & threat protection > Ransomware protection
```

Test carefully. Some legitimate apps may need allow-listing.

### SmartScreen

Official documentation: [Microsoft Defender SmartScreen](https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/)

SmartScreen warns about suspicious websites, downloads, and applications. Leave it enabled for normal browsing and downloads.

### Windows Sandbox

Official documentation: [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/)

Use it to test unfamiliar installers or tools before running them on the main system.

## On-Demand Scanning

### Malwarebytes Free Tools

Official site: [Malwarebytes Free Tools](https://www.malwarebytes.com/free-tools)

Use for:

- Second-opinion scans.
- Cleanup after suspicious behavior.
- Checking systems that may already be compromised.

Do not stack multiple real-time antivirus products unless you know they are designed to coexist.

## Paid Antivirus

Paid antivirus can make sense for:

- Family device management.
- Business policy enforcement.
- Anti-theft and identity features.
- Users who need vendor support.
- Users who prefer a single paid dashboard.

Official vendor pages:

- [ESET NOD32](https://www.eset.com/us/home/antivirus/)
- [Bitdefender Antivirus](https://www.bitdefender.com/en-us/consumer/antivirus)

Evaluate these based on support, performance, renewal behavior, uninstall quality, and whether you actually need the extra features.

## Avoid

- Running two real-time antivirus suites at once.
- Driver updater bundles.
- Browser extensions installed by security suites without consent.
- Security products with constant scare popups.
- Antivirus downloads from search ads or third-party mirrors.
- Disabling Defender because a tweak guide said it improves FPS.

## Practical Recommendation

Start with:

- Microsoft Defender.
- SmartScreen.
- Windows Firewall.
- uBlock Origin.
- Safe downloads.
- Tested backups.

Add more only when there is a clear reason.
