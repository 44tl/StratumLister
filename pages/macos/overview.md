# macOS Overview

Current macOS notes for normal users, privacy-focused setups, app installs, package managers, backups, recovery, safe tweaks, and unsupported Mac decisions.

## Start Here

- New or reset Mac: read [macOS Setup Checklist](#macos-setup-checklist), then [macOS Security & Privacy](#macos-security-privacy).
- Buying used: read [macOS Device Picker](#macos-device-picker) before checking only the chip name.
- Installing apps: read [macOS Apps & Package Managers](#macos-apps-package-managers).
- Backups, resets, or failed updates: read [macOS Backup & Recovery](#macos-backup-recovery).
- Terminal and developer tools: read [macOS Terminal & Homebrew](#macos-terminal-homebrew).
- Tweaks, virtualization, or unsupported Macs: read [macOS Advanced Tweaks](#macos-advanced-tweaks).

## Current Snapshot

| Area | Current state | Practical call |
| :--- | :--- | :--- |
| Latest macOS | Apple lists macOS Tahoe 26.4.1 as the latest macOS. | Use Tahoe on supported daily-use Macs unless a required app or workflow blocks it. |
| Recent older macOS | Apple lists Sequoia 15.7.5, Sonoma 14.8.5, and Ventura 13.7.8 as the latest versions for those releases. | Treat older releases as compatibility fallbacks, not preferred fresh installs. |
| Compatibility | Apple publishes a model-by-model Tahoe compatibility list. | Check the exact model year and chip before buying or upgrading. |
| Apple silicon vs Intel | Apple silicon Macs have the best current path for performance, battery life, and long-term support. | Prefer M-series Macs for normal users. Buy Intel only for a specific Intel-only need. |
| Homebrew | Homebrew's current docs list macOS Sonoma 14 or newer on officially supported hardware as the supported macOS baseline. | Old Macs may need MacPorts, vendor installers, or older native macOS instead of forcing Homebrew. |
| Unsupported Macs | OpenCore Legacy Patcher supports Intel-based Macs only and does not support Apple silicon. | Use OCLP only on a backed-up secondary machine, not a high-trust daily driver. |

## Good Defaults

| User | Good path |
| :--- | :--- |
| Normal user | Latest compatible macOS, App Store or notarized apps, FileVault, Find My, Time Machine. |
| Privacy-focused user | Latest compatible macOS, strong login password, FileVault recovery prepared, tight app permissions, minimal login items. |
| Developer | Latest compatible macOS, Xcode Command Line Tools, Homebrew in the default prefix, project tooling pinned per repo. |
| Used Mac buyer | Apple silicon if possible, no Activation Lock, no MDM profile, healthy battery, enough RAM and storage. |
| Unsupported Mac tinkerer | Native latest supported macOS first, full backup, OCLP only after checking the exact model and known issues. |

## Avoid

- Buying a used Mac that is still Activation Locked, MDM-enrolled, or missing proof of ownership.
- Turning off SIP, Gatekeeper, or FileVault because a random "optimizer" told you to.
- Running random `curl | sh` installers from unofficial mirrors.
- Mixing Homebrew, MacPorts, and manual source installs without knowing which copy of a tool is first in `PATH`.
- Treating iCloud Drive as a full Mac backup.
- Using an unsupported patched Mac for banking, work secrets, or irreplaceable files without a tested backup plan.

## Official Sources

- Apple latest macOS versions: [support.apple.com/109033](https://support.apple.com/en-us/109033)
- macOS Tahoe compatibility: [support.apple.com/122867](https://support.apple.com/en-us/122867)
- Download and install macOS: [support.apple.com/102662](https://support.apple.com/en-us/102662)
- Homebrew installation docs: [docs.brew.sh/Installation](https://docs.brew.sh/Installation.html)
- OpenCore Legacy Patcher docs: [dortania.github.io/OpenCore-Legacy-Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/)
