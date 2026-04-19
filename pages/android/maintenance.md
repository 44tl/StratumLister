# Android Maintenance

Android maintenance should be routine: update, review permissions, remove unused apps, keep backups working, and avoid risky cleanup tools.

## Monthly Routine

- Check Android system update.
- Check Google Play system update if available.
- Update apps from their original source.
- Reboot after system or Play system updates.
- Review security patch level.
- Review permissions in Privacy dashboard.
- Remove apps you no longer use.
- Confirm photos, files, and app-specific backups are working.
- Check storage before it gets critically low.

## Update Path

Normal order:

1. Backup check.
2. System update.
3. Reboot.
4. Google Play system update.
5. Reboot if requested.
6. App updates.
7. Permission review.

If an update is new and your phone is critical for work, waiting a few days for wider rollout feedback is reasonable. Do not wait months on security patches without a reason.

## Storage Cleanup

Use built-in tools first:

- Delete offline media you can redownload.
- Clear old downloads.
- Move photos and videos to a trusted backup.
- Remove unused apps.
- Clear app cache only for apps with a specific problem.

Avoid cleaner apps. They often ask for broad access and do little that Android cannot already do.

## Battery Health

- Keep the phone cool.
- Avoid leaving it hot in a car or under a pillow while charging.
- Use adaptive charging or charge limits if your device offers them.
- Replace the battery when degradation becomes the real problem.
- Be skeptical of apps claiming to repair battery health.

## Rooted Device Routine

- Keep stock images for the current build.
- Keep the Magisk app updated from the official source.
- Update one module at a time.
- Disable or remove modules before major OTA updates if the module maintainer recommends it.
- Keep a bootloop recovery path.
- Expect device integrity behavior to change after updates.

## Custom ROM Routine

- Read ROM release notes before updating.
- Confirm firmware requirements.
- Keep the previous known-good build if the project provides it.
- Recheck calls, mobile data, camera, NFC, and GPS after major updates.
- Watch the project's official channels for urgent update notes.

## Replace Or Retire

Retire a phone from sensitive use when:

- It no longer receives security updates.
- The battery is swollen or unsafe.
- The USB port is unreliable and you need recovery access.
- The screen lock or biometrics are unreliable.
- It cannot run required banking, 2FA, or work apps safely.

Old phones can still be useful offline, as music players, test devices, cameras, or lab devices.

## Official Sources

- Check and update Android version: [support.google.com/android/answer/7680439](https://support.google.com/android/answer/7680439)
- Android Security Bulletins: [source.android.com/docs/security/bulletin/asb-overview](https://source.android.com/docs/security/bulletin/asb-overview)
- Privacy dashboard: [support.google.com/android/answer/13530434](https://support.google.com/android/answer/13530434)
- Magisk installation and update guidance: [magisk.readthedocs.io](https://magisk.readthedocs.io/en/latest/all_users/installation.html)
- GrapheneOS install and post-install guidance: [grapheneos.org/install/web](https://grapheneos.org/install/web)
