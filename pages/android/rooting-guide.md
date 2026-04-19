# Android Rooting Guide

Rooting gives administrative control over Android. It also removes important safety assumptions, breaks some apps, and can turn a recoverable mistake into a full reinstall.

## Should You Root?

Root only if you have a clear reason:

- Local firewall or advanced network control.
- App data backup workflows that require root.
- Kernel, filesystem, or power-user experiments.
- Device research on a spare phone.
- Specific modules you understand and can remove.

Do not root just because a guide says it improves speed or battery. Most "performance root" advice is outdated or placebo.

## What Root Changes

- Bootloader unlock usually wipes data.
- Verified boot state changes.
- Banking, payments, DRM, games, work profiles, and streaming apps may fail.
- OTA updates can become manual or more fragile.
- Bad Magisk modules can bootloop the phone.
- A malicious root app can do far more damage than a normal app.

## Requirements

Before starting:

- Exact model number and codename.
- Unlockable bootloader.
- Current stock firmware package.
- Current stock boot, init_boot, recovery, or vendor_boot image as required by your device.
- Latest official Android SDK Platform Tools.
- Latest official Magisk app.
- A full backup.
- A known path back to stock.

## Safer Root Flow

High-level flow:

1. Update stock Android first.
2. Back up everything.
3. Enable OEM unlocking if the device supports it.
4. Unlock the bootloader through the device-supported path.
5. Extract the correct stock image for your exact build.
6. Patch the correct image with the Magisk app.
7. Flash only the patched image that your device and Magisk instructions require.
8. Boot, verify root, and save the patched and stock images.

Do not guess whether your device uses `boot`, `init_boot`, `recovery`, or another image. The correct partition depends on the device and Android generation.

## Commands You Should Understand

These are not a full device guide:

```bash
adb devices
adb reboot bootloader
fastboot devices
fastboot flashing unlock
```

Only run the unlock command after backup. It wipes data and requires confirmation on the device.

## Module Rules

- Install one module at a time.
- Reboot and test before adding another.
- Keep a module removal path.
- Avoid closed-source modules for security-sensitive devices.
- Avoid modules that disable SELinux, signature checks, verified boot checks, or security services without a very specific reason.
- Keep Magisk updated from the official source.

## OTA Rules

- Read the Magisk update instructions before taking OTA updates.
- Keep the original stock image from the exact build you are updating from.
- Expect device-specific behavior.
- Do not flash images from a newer, older, or similar-looking build.

## Hard No

- One-click root APKs.
- Paid bootloader unlock services for unsupported models.
- Rooting a phone you cannot afford to wipe.
- Rooting a work-managed phone.
- Relocking the bootloader while rooted or modified unless official instructions explicitly say it is safe.

## Official Sources

- Magisk installation instructions: [magisk.readthedocs.io](https://magisk.readthedocs.io/en/latest/all_users/installation.html)
- Magisk deployment notes: [magisk.readthedocs.io](https://magisk.readthedocs.io/en/latest/developers/deployment.html)
- Android bootloader locking and unlocking: [source.android.com](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking)
- Android Verified Boot: [source.android.com/docs/security/features/verifiedboot](https://source.android.com/docs/security/features/verifiedboot)
- SDK Platform Tools: [developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools)
