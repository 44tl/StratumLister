# macOS Security & Privacy

Keep macOS current, keep the built-in protections on, and be strict about app permissions. Most Mac compromises start with a bad download, a malicious profile, or a user granting too much access.

## Security Baseline

| Area | Default |
| :--- | :--- |
| Updates | Install current macOS security updates promptly. |
| FileVault | On, with recovery prepared. |
| Gatekeeper | Leave on. Open blocked apps only when you trust the exact source. |
| SIP | Leave on. Disable only temporarily for a known technical reason. |
| XProtect | Keep automatic security data updates enabled. |
| Lock screen | Require password immediately or very soon after sleep/screensaver. |
| Browser | Keep current; remove extensions you do not use. |

## Permission Triage

Review System Settings > Privacy & Security after installing apps:

| Permission | Risk |
| :--- | :--- |
| Accessibility | Can control other apps and automate clicks/typing. |
| Full Disk Access | Can read broad local data. |
| Screen & System Audio Recording | Can capture private on-screen content. |
| Input Monitoring | Can observe keyboard input. |
| Camera/Microphone | Direct sensor access. |
| Location | Tracks physical location. |

If you do not know why an app needs a high-risk permission, deny it until you do.

## FileVault

FileVault protects local data if the Mac is lost, stolen, or serviced. Apple silicon and T2 Macs already use hardware-backed encryption, but FileVault adds login-password-gated protection.

Keep one of these recovery paths ready:

- Apple Account recovery if you trust that recovery path.
- A recovery key stored outside the Mac.
- Managed recovery key if this is a work or school Mac.

## Gatekeeper, Notarization, and XProtect

macOS checks downloaded apps with Gatekeeper and notarization, and uses XProtect to block and remediate known malware. This does not make random downloads safe, but it is a strong reason to avoid disabling built-in protections.

Safer pattern for blocked apps:

1. Re-download from the official developer.
2. Confirm the publisher and checksum/signature if provided.
3. Use System Settings > Privacy & Security to approve only that app if you still trust it.
4. Do not globally turn off Gatekeeper for convenience.

## Lockdown Mode

Lockdown Mode is for people who may be personally targeted by sophisticated attacks. It reduces attack surface but breaks or limits some normal features. It is useful for high-risk users, not a normal performance or privacy tweak.

## Profiles and MDM

Configuration profiles can change certificates, VPNs, DNS, restrictions, login items, and security settings. Remove unknown profiles from personal Macs. If a used Mac is enrolled in MDM, do not buy it unless the organization properly releases it.

## Avoid

- "Allow apps from anywhere" as a permanent setting.
- Random root certificate profiles.
- Pirated apps that request Accessibility or Full Disk Access.
- Browser extensions with broad site access.
- Running as root or using `sudo` just to make an installer work.

## Official Sources

- Apple Platform Security: [support.apple.com/guide/security](https://support.apple.com/guide/security/welcome/web)
- Gatekeeper and runtime protection: [support.apple.com/guide/security/sec5599b66df/web](https://support.apple.com/guide/security/gatekeeper-and-runtime-protection-sec5599b66df/web)
- Protecting against malware in macOS: [support.apple.com/guide/security/sec469d47bd8/web](https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web)
- System Integrity Protection: [support.apple.com/102149](https://support.apple.com/en-lamr/102149)
- FileVault: [support.apple.com/ht4790](https://support.apple.com/en-us/ht4790)
- Lockdown Mode: [support.apple.com/105120](https://support.apple.com/en-us/105120)

