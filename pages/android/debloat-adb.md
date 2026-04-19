# Android Debloat & ADB

Debloating Android should mean disabling or uninstalling unwanted apps for the current user, not blindly deleting system components.

## Safer Debloat Order

1. Uninstall normally from Settings when possible.
2. Disable the app in Settings when possible.
3. Use ADB to disable for the current user.
4. Use ADB uninstall for the current user only when you know the restore command.
5. Factory reset if the device is too messy to trust.

Do not chase "zero bloat" lists. Android builds expect some vendor packages to exist.

## Install Platform Tools

Use Google's Android SDK Platform Tools, not random ADB bundles.

Enable Developer options, enable USB debugging, connect the phone, and verify:

```bash
adb devices
```

The phone should show a prompt for the computer's RSA key. Accept it only on a trusted computer.

## Inventory First

List packages:

```bash
adb shell pm list packages --user 0
adb shell pm list packages -3 --user 0
adb shell pm list packages -s --user 0
```

Save the list before changing anything.

## Safer Disable

Disable for the current user:

```bash
adb shell pm disable-user --user 0 package.name
```

Restore:

```bash
adb shell pm enable package.name
```

Use this first because it is easier to reverse.

## User Uninstall

Uninstall for the current user:

```bash
adb shell pm uninstall --user 0 package.name
```

Restore a preinstalled package for the current user:

```bash
adb shell cmd package install-existing --user 0 package.name
```

If `install-existing` does not restore it, stop and research the exact package before changing more.

## Usually Safe To Remove

Only when you recognize the app:

- Duplicate vendor browser if you use another browser.
- Vendor shopping apps.
- Trial games.
- Carrier account apps you do not use.
- Vendor cloud apps if you use another backup path.
- Social apps preloaded by the carrier or manufacturer.

## Do Not Remove Blindly

Avoid touching:

- Launcher.
- Settings.
- System UI.
- Package installer.
- Permission controller.
- Google Play services on Google-dependent devices.
- Carrier services if calling, SMS, RCS, voicemail, or eSIM depends on it.
- Keyboard unless another keyboard is already installed and tested.
- Camera provider and gallery dependencies.
- Anything related to OTA updates unless you want manual updates forever.

## Red Flags

- A script removes hundreds of packages with no explanation.
- A guide targets a different model or Android version.
- The package name includes `telephony`, `ims`, `permission`, `provider`, `settings`, `systemui`, or `launcher` and the guide does not explain the risk.
- The rollback instruction is "factory reset if broken."

## Official Sources

- Android Debug Bridge: [developer.android.com/studio/command-line/adb](https://developer.android.com/studio/command-line/adb)
- SDK Platform Tools: [developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools)
- Android update help: [support.google.com/android/answer/7680439](https://support.google.com/android/answer/7680439)
