# Android Backup & Recovery

Android recovery starts before anything breaks. Back up first, record exact device details, and keep a known-good path back to stock.

## What To Back Up

- Photos and videos.
- Downloads and documents.
- Contacts.
- Calendar.
- Notes.
- Password manager recovery information.
- 2FA recovery codes.
- Authenticator export or migration data.
- Signal, WhatsApp, Telegram local media, and other messenger-specific backups.
- Banking, government ID, and work app recovery steps.
- Launcher layout if your launcher supports export.

Do not assume Google backup covers everything. Many apps use their own backup systems or do not restore sensitive data automatically.

## Before Risky Changes

Before bootloader unlock, root, custom ROM install, ADB debloat, or major update:

- Back up data to at least one location outside the phone.
- Confirm you know the device model, codename, build number, Android version, and security patch level.
- Download official factory images, full OTA packages, or vendor recovery tools when available.
- Save links to the exact device instructions.
- Charge the phone.
- Use a known-good USB cable directly connected to the computer.
- Do not use a VM for flashing unless the project explicitly supports it.

## Factory Reset Rules

Factory reset is useful for:

- Selling or giving away a phone.
- Clearing a broken setup after backup.
- Starting clean before a custom ROM install.
- Removing unknown apps after compromise.

Before selling, remove screen lock and accounts first so the next owner does not hit factory reset protection.

## Bootloader Unlock Warning

Unlocking the bootloader wipes user data on devices that support the standard flow. It also changes the boot state and usually shows a warning at boot.

Do not unlock until:

- Your backup is complete.
- You know how to restore stock.
- You have time to finish recovery if something fails.
- You accept that banking, payments, DRM, work profile, or device integrity checks may break.

## Recovery Triage

If the phone fails after a change:

1. Stop flashing random files.
2. Write down the exact error and current boot mode.
3. Try normal reboot once.
4. Try recovery mode if available.
5. Try bootloader or fastboot mode if recovery is unavailable.
6. Use the official factory image, OTA, or vendor tool for the exact model.
7. Ask in the official project or device forum with model, build, commands used, and error output.

## Keep A Recovery Folder

For root or ROM devices, keep:

- Platform Tools.
- Stock boot, init_boot, recovery, vendor_boot, and full factory image when available.
- The currently installed ROM image.
- Magisk APK used for the current root setup.
- Checksums.
- Notes with the commands you actually ran.

## Official Sources

- Android update help: [support.google.com/android/answer/7680439](https://support.google.com/android/answer/7680439)
- Android SDK Platform Tools: [developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools)
- Android Debug Bridge: [developer.android.com/studio/command-line/adb](https://developer.android.com/studio/command-line/adb)
- Bootloader lock and unlock behavior: [source.android.com](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking)
- GrapheneOS install prerequisites: [grapheneos.org/install/web](https://grapheneos.org/install/web)
