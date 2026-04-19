# macOS Maintenance

Good macOS maintenance is mostly updates, backups, permission review, storage sanity, and avoiding sketchy tools.

## Monthly Routine

| Task | Why |
| :--- | :--- |
| Install macOS updates | Security fixes, firmware updates, Safari/WebKit fixes. |
| Update App Store apps | Keeps normal apps current. |
| Update direct apps | Browsers, VPNs, password managers, pro tools. |
| Run Time Machine | Confirms backups still work. |
| Review storage | Prevents update failures and slowdowns. |
| Review Login Items | Removes stale background helpers. |
| Review Privacy & Security | Catches apps with permissions they no longer need. |

## Package Manager Routine

Homebrew:

```bash
brew update
brew upgrade
brew cleanup
brew doctor
```

MacPorts:

```bash
sudo port selfupdate
sudo port upgrade outdated
```

Do package manager updates separately from major macOS upgrades when possible. If something breaks, you want to know which change caused it.

## Before A Major macOS Upgrade

1. Check app compatibility.
2. Check hardware compatibility.
3. Make a Time Machine backup.
4. Export or confirm password manager recovery.
5. Free storage.
6. Update package managers after the OS upgrade, not during it.
7. Keep the old backup until the new OS has proven stable.

## When To Reinstall

Reinstall or reset when:

- You inherited a used Mac and do not trust its state.
- Unknown MDM/profile/security changes exist.
- Malware or cracked apps were installed.
- The Mac has years of broken system-level tweaks.
- Updates fail repeatedly after backup, storage, and disk repair checks.

Do not reinstall just because the Mac feels slightly slow. Check Activity Monitor, storage, login items, and battery first.

## Retirement Signals

| Signal | Meaning |
| :--- | :--- |
| Cannot run a currently supported macOS for your needs | Time to replace for sensitive daily use. |
| Battery service plus other repairs cost too much | Replace instead of sinking money into old hardware. |
| Browser support is ending | Security risk rises quickly. |
| Storage is soldered and too small | External drives help, but daily usability suffers. |
| OCLP needed for basic updates | Fine for tinkering; not ideal for high-trust daily use. |

## Official Sources

- Latest macOS versions: [support.apple.com/109033](https://support.apple.com/en-us/109033)
- Download and install macOS: [support.apple.com/102662](https://support.apple.com/en-us/102662)
- If an error occurred while updating or installing macOS: [support.apple.com/102531](https://support.apple.com/en-us/102531)
- Back up your Mac: [support.apple.com/102307](https://support.apple.com/en-us/102307)
- Erase your Mac: [support.apple.com/102664](https://support.apple.com/en-us/102664)
