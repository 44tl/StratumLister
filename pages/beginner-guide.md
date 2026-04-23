# Beginner Guide

This guide provides a structured, low-risk framework for users new to system optimization or those working on a critical production machine.

## The Stratum Workflow
Follow these five steps to ensure your optimization journey is safe and successful:

1. **Read [Important](#important)**: Understand the scope and risks before touching any system settings.
2. **Snapshot Your System**: Create a manual System Restore point and ensure you have a verified external backup.
3. **The Rule of One**: Apply only one group of changes at a time (e.g., just GPU drivers, or just browser hardening).
4. **Validation**: Reboot and test your system's stability after every change group.
5. **Documentation**: Keep a simple log of what you changed so you can undo it if performance degrades over time.

## Goal-Oriented Optimization

| Your Primary Goal | Recommended Start | What to Avoid |
| :--- | :--- | :--- |
| **Clean & Fast Windows** | [Safe Optimization Path](#safe-optimization-path) | Automated "Debloat" scripts |
| **Move to Linux** | [Self-Hosting Starter Guide](#self-hosting-starter-guide) (OS section) | Random distro respins and unverified ISOs |
| **Self-Hosted Services** | [Self-Hosting Starter Guide](pages/self-hosting-starter-guide.md) | Unmaintained Docker images |
| **Fix System Damage** | [Emergency Recovery Path](#emergency-recovery-path) | Stacking multiple "Repair" tools |
| **Gaming Performance** | [Game Launcher Optimization](#game-launcher-optimization) | Kernel-level "FPS Boost" packs |
| **Browser Privacy** | [Browser Hardening Guide](pages/browser-hardening-guide.md) | Extension over-saturation |
| **Account Security** | [Password Manager Guide](pages/password-manager-guide.md) | SMS-based multi-factor auth |
| **Mobile Device Management** | [Mobile Security](#mobile-security) | Unmanaged BYOD policies |

## Core Principles for Success
- **Official First**: Always prefer official Windows settings over manual registry edits.
- **Maintainability**: Prefer well-maintained open-source projects over "repacked" or abandoned binaries.
- **Reversibility**: Prioritize changes that can be undone via a toggle rather than permanent deletions.
- **Evidence-Based**: Never apply a tweak based solely on a YouTube benchmark or word-of-mouth.
- **Security Integrity**: Never run scripts that disable Windows Update, Defender, or Restore Points.

## Link Verification
Before downloading any software, consult the [Link Safety Index](#link-safety-index). Only resources with a verification badge have been manually audited by the maintainers. Treat all other links as external materials and verify their integrity (checksums/source code) yourself.

## Disaster Recovery
If you experience system instability, **stop applying new changes immediately.** Consult the [Emergency Recovery Path](#emergency-recovery-path) first, then troubleshoot specific issues using [Common Problems & Fixes](#common-problems-and-fixes).

## Mobile Security

Modern threat vectors extend beyond desktop computers. Secure your mobile devices:

| Platform | Recommended | Notes |
|----------|------------|-------|
| **iOS** | Stay on latest iOS | Apple's locked-down model is effective; never jailbreak for "optimization" |
| **Android** | Pixel withstock Android or GrapheneOS | Avoid OEM skins that stop updates early |
| **App Stores** | F-Droid for open-source, Google Play for mainstream | Sideloaded APKs are a major attack vector |
| **Messaging** | Signal (default), iMessage (Apple-to-Apple) | Avoid SMS for sensitive content |

### Mobile Best Practices
- Keep iOS/Android updated
- Enable Find My Device (helps recovery and remote wipe)
- Use a strong passcode (6-digit minimum, alphanumeric preferred)
- Disable lock screen notifications with sensitive content
- Use password manager with biometric unlock on mobile
- Review app permissions regularly - revoke unnecessary access to camera, microphone, location