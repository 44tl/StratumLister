# Download Safety

How to choose, verify, and test software before it touches your main system.

## The Rule

Use the official source first. If a tool cannot be downloaded from the project website, official repository, platform store, or vendor documentation, do not treat it as trusted.

## Good Sources

- Official project website.
- Official GitHub, GitLab, Codeberg, or SourceForge page linked by the project.
- Microsoft Store, Apple App Store, Google Play, or Linux distribution repositories.
- Vendor support pages and documentation.

## Bad Sources

- Reupload sites.
- Driver bundle sites.
- Cracked software mirrors.
- "Portable" builds from unknown maintainers.
- Search ads pretending to be official downloads.
- Discord, Telegram, or forum attachments with no upstream source.

## Verification Checklist

Before running an installer:

1. Confirm the domain matches the official project.
2. Check whether the official site links to the same repository or download page.
3. Prefer signed installers when available.
4. Compare hashes when the project publishes them.
5. Search the project issue tracker for recent compromise reports.
6. Scan unknown files before execution.
7. Test risky tools in an isolated environment.

## Useful Official Tools

### Microsoft Defender SmartScreen

Official documentation: [Microsoft Defender SmartScreen](https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/)

SmartScreen helps warn about phishing pages, malicious sites, and suspicious downloaded applications.

Keep it enabled unless you have a specific reason and know the tradeoff.

### Windows Sandbox

Official documentation: [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/)

Windows Sandbox provides an isolated desktop environment for testing unknown applications. Closing the sandbox removes installed applications and state.

Use it for:

- Unknown installers.
- Portable utilities.
- Registry tools.
- Tweaks you do not fully trust.

Do not use it for:

- Testing malware intentionally.
- Testing files that require access to your real accounts.
- Anything you cannot afford to expose to networking or clipboard behavior.

### VirusTotal

Official site: [virustotal.com](https://www.virustotal.com/gui/home/upload)

VirusTotal can scan files and URLs across multiple engines.

Important:

- A clean result does not prove a file is safe.
- A few detections may be false positives, especially for admin tools.
- Uploaded files may be shared with security vendors, so do not upload private documents or secrets.

### Malwarebytes Free Tools

Official site: [malwarebytes.com/free-tools](https://www.malwarebytes.com/free-tools)

Useful for on-demand scanning and cleanup when something suspicious has already happened.

## Installer Red Flags

Stop if you see:

- A download domain that does not match the project.
- A required browser extension unrelated to the app.
- A password-protected archive from a random mirror.
- A request to disable antivirus before installing.
- A bundled driver updater, crypto wallet, VPN, or cleaner.
- A setup wizard that hides "recommended offers."
- A command copied from a comment thread instead of project documentation.

## Safer Testing Flow

For normal tools:

1. Download from the official site.
2. Verify publisher, signature, or hash when available.
3. Scan if the file is uncommon.
4. Create a restore point before system-level changes.
5. Install only the needed components.

For risky tools:

1. Test in Windows Sandbox or a virtual machine.
2. Do not sign into personal accounts.
3. Do not mount sensitive folders.
4. Watch for unexpected network prompts or bundled installers.
5. Delete the test environment when finished.

## What Not To Do

- Do not trust "safe download" badges on third-party sites.
- Do not install driver packs.
- Do not run scripts from paste sites.
- Do not bypass browser or SmartScreen warnings just to save time.
- Do not keep installers forever without knowing where they came from.

## Practical Standard

If a tool is legitimate, you should be able to answer:

- Who publishes it?
- Where is the official download?
- Is the source code or vendor documentation available?
- Can it be removed cleanly?
- What does it change?
- How would you recover if it breaks something?
