# Android Custom ROMs

Custom ROMs can extend device life, improve privacy, remove vendor bloat, or add features. They can also reduce security if the build is unofficial, outdated, unlocked forever, or missing firmware updates.

## ROM Types

| Type | Best for | Risk |
| :--- | :--- | :--- |
| Stock OS | Most users | Vendor bloat and shorter support on some devices. |
| GrapheneOS | Privacy and security focused Pixel users | Limited device support; follow official install path exactly. |
| LineageOS | Extending supported community devices | Many installs keep an unlocked bootloader; support varies by device maintainer. |
| Other privacy ROMs | Specific privacy or de-Googled workflows | Check device support, patch cadence, and project status before installing. |
| GSI builds | Testing and development | Not a normal daily-driver path for most users. |
| Random forum ROM | Experimentation on spare devices | Unknown signing, update, and security status. |

## Pick A ROM

Check:

- Official device support page.
- Exact model and codename.
- Current Android base.
- Security patch cadence.
- Firmware update instructions.
- Whether the bootloader can be relocked.
- Recovery requirements.
- Known broken features.
- How to return to stock.

If there is no official device page, treat the ROM as experimental.

## GrapheneOS Notes

GrapheneOS recommends its WebUSB installer for most users. It documents prerequisites, supported devices, unlocking, flashing, relocking, disabling OEM unlocking, and verifying the install.

Important point: relocking the bootloader is part of the normal GrapheneOS security model on supported devices. Do not apply that rule to unrelated ROMs.

## LineageOS Notes

LineageOS uses device-specific wiki pages. The correct recovery, firmware, and install flow can differ by model.

Important point: use the instructions for the exact device. Do not mix recoveries or install files from similar models.

## Install Rules

- Back up first.
- Update stock firmware first if the ROM requires it.
- Download from the official ROM project or official device page.
- Verify checksums or signatures when provided.
- Use a direct USB connection and a known-good cable.
- Do not relock the bootloader unless the ROM explicitly supports it for your device.
- Keep the stock restore path available before flashing.

## After Install

- Install updates from the ROM's documented updater.
- Keep firmware current if the project requires separate firmware updates.
- Recheck security patch level after every update.
- Test calls, SMS, mobile data, emergency alerts, camera, NFC, GPS, Bluetooth, and banking before relying on it.
- Keep a second way to access your accounts if push notifications or Play services behavior changes.

## Avoid

- Builds distributed only through Telegram with no source or changelog.
- ROMs with old security patches.
- Instructions that say to wipe random partitions without explaining why.
- Relocking bootloader on unofficial builds.
- Installing Google apps packages from untrusted mirrors.

## Official Sources

- GrapheneOS install overview: [grapheneos.org/install](https://grapheneos.org/install/)
- GrapheneOS web installer: [grapheneos.org/install/web](https://grapheneos.org/install/web)
- LineageOS device wiki: [wiki.lineageos.org/devices](https://wiki.lineageos.org/devices/)
- Android Verified Boot: [source.android.com/docs/security/features/verifiedboot](https://source.android.com/docs/security/features/verifiedboot)
- Android bootloader locking and unlocking: [source.android.com](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking)
