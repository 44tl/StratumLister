# macOS Setup Checklist

Use this after buying, resetting, or reinstalling a Mac. The goal is a clean, recoverable system before installing a pile of apps.

## First Boot

1. Connect to trusted Wi-Fi or Ethernet.
2. Sign in with your Apple Account only after confirming the Mac is yours and not managed by someone else.
3. Install all available macOS updates from System Settings.
4. Rename the Mac in System Settings > General > About.
5. Set a strong login password. Do not leave an admin Mac with a weak local password.
6. Turn on Find My if this is your personal Mac.
7. Turn on FileVault and save the recovery option somewhere safe.

## Security Baseline

| Setting | Recommended default |
| :--- | :--- |
| FileVault | On. |
| Find My | On for personal laptops. |
| Firewall | On if you use public networks often or run listening services. |
| Automatic updates | On for security responses and system data files. |
| App installs | App Store or identified/notarized developers. |
| Browser | Keep Safari and any other browser current. |
| Admin account | Use one admin account; avoid sharing it. |

## Backup Before Customizing

Do this before large migrations, package managers, developer tools, or tweaks:

- Connect a dedicated external disk for Time Machine.
- Prefer a disk at least twice the size of the Mac's internal storage.
- Let the first backup finish.
- Test restoring a small file.
- Keep a second copy of important files outside the Mac and Time Machine if the data matters.

## App Install Order

1. Password manager.
2. Browser and communication apps.
3. Cloud sync tools.
4. Work or school tools.
5. Homebrew or developer tools.
6. Creative apps and large libraries.
7. Tweaks and automation only after the baseline is stable.

## Permission Review

After installing apps, review System Settings > Privacy & Security:

- Location Services
- Contacts
- Calendars
- Photos
- Camera
- Microphone
- Screen & System Audio Recording
- Accessibility
- Full Disk Access
- Login Items & Extensions

Only grant Accessibility, Full Disk Access, or Screen Recording to apps you trust and understand.

## Migration Notes

- Migration Assistant is good for moving from an old Mac, but a clean setup is better if the old Mac had years of broken launch agents or unknown tweaks.
- Do not migrate malware, cracked apps, or old "optimizer" leftovers.
- Keep the old Mac or old backup untouched until the new Mac has run correctly for a few days.

## Official Sources

- Download and install macOS: [support.apple.com/102662](https://support.apple.com/en-us/102662)
- Protect data with FileVault: [support.apple.com/ht4790](https://support.apple.com/en-us/ht4790)
- Back up your Mac: [support.apple.com/102307](https://support.apple.com/en-us/102307)
- Time Machine backup disk guidance: [support.apple.com/102423](https://support.apple.com/en-us/102423)

