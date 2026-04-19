# Android Overview

Current Android notes for normal users, privacy-focused setups, app safety, ADB cleanup, rooting, and custom ROM decisions.

## Start Here

- New phone or tablet: read [Android Setup Checklist](#android-setup-checklist), then [Android Security & Privacy](#android-security-privacy).
- Buying a device: read [Android Device Picker](#android-device-picker) before chasing specs.
- Installing apps outside Play: read [Android Apps & Sideloading](#android-apps-sideloading) first.
- Cleaning a bloated phone: read [Android Debloat & ADB](#android-debloat-adb) before running package-removal scripts.
- Rooting or ROM work: read [Android Backup & Recovery](#android-backup-recovery), [Android Rooting Guide](#android-rooting-guide), and [Android Custom ROMs](#android-custom-roms).

## Current Snapshot

| Area | Current state | Practical call |
| :--- | :--- | :--- |
| Stable Android | Android Developers lists Android 16 as the current stable platform release, published June 10, 2025. | Use the latest stable build offered by your manufacturer. Do not install beta builds on a phone you depend on. |
| Android 17 | Android 17 Beta 4 is the last scheduled beta for the release cycle. | Treat it as developer and app-compatibility testing, not a normal daily-driver recommendation. |
| Security patches | Android Security Bulletins publish monthly patch levels for currently fixed issues. | For sensitive use, prefer devices receiving current monthly or near-monthly patches. |
| App installs | Google is rolling out Android developer verification, with user-facing install changes planned first for selected countries before broader rollout. | Sideloading remains possible, but expect more warnings and verification paths on certified devices. |
| Bootloaders | Most devices ship locked. Unlocking enables flashing but wipes data and weakens the normal verified boot state unless the replacement OS supports relocking correctly. | Unlock only with a clear restore path and device-specific instructions. |
| Root | Modern root is usually Magisk with a patched boot, init_boot, or recovery image depending on the device. | Do not guess partitions. Follow Magisk and device-specific instructions exactly. |

## Good Defaults

| User | Good path |
| :--- | :--- |
| Normal user | Keep stock OS, install updates, use Play Store or trusted stores, review permissions monthly. |
| Privacy-focused user | Choose a phone with long update support, remove unused apps, restrict permissions, use a private DNS provider only if you understand the tradeoff. |
| Advanced user | Learn ADB first, keep factory images and backups, change one thing at a time. |
| Root user | Use an unlockable spare device first. Keep stock images, avoid random modules, expect banking and DRM issues. |
| Custom ROM user | Prefer projects with official device pages, active maintainers, documented updates, and a clear bootloader-locking policy. |

## Avoid

- One-click root tools.
- Random APK mirrors for banking, crypto, password manager, keyboard, VPN, or 2FA apps.
- Universal debloat scripts that do not explain each package.
- Relocking the bootloader after modifying the OS unless the ROM explicitly supports it.
- Flashing files for a similar model, carrier variant, or region because the name looks close.
- Using an unsupported phone for banking or primary accounts.

## Official Sources

- Android latest updates: [developer.android.com/latest-updates](https://developer.android.com/latest-updates)
- Android Developers Blog: [android-developers.googleblog.com](https://android-developers.googleblog.com/)
- Android Security Bulletins: [source.android.com/docs/security/bulletin/asb-overview](https://source.android.com/docs/security/bulletin/asb-overview)
- Android bootloader locking and unlocking: [source.android.com](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking)
- Magisk installation instructions: [magisk.readthedocs.io](https://magisk.readthedocs.io/en/latest/all_users/installation.html)
- Android developer verification updates: [android-developers.googleblog.com](https://android-developers.googleblog.com/)
