# iOS Jailbreak Guide

Jailbreaking is not one universal iOS version switch. It depends on exact device chip, iOS build, exploit, jailbreak type, and tweak support.

## Current Public Tool Reality

Current reliable public sources show:

| Tool | Scope | Practical meaning |
| :--- | :--- | :--- |
| palera1n | A8-A11/checkm8 devices on iOS/iPadOS/tvOS 15.0 and higher, plus T2 bridgeOS 5.0 and higher | Good for older compatible hardware. Not for modern A12+ iPhones. |
| Dopamine | iOS 15.0-16.5.1 on arm64e and iOS 15.0-15.8.6 / 16.0-16.6.1 on arm64 | Good for supported iOS 15/16 devices. Not a current iOS 26 jailbreak. |
| TrollStore | iOS 14.0 beta 2-16.6.1, 16.7 RC, and 17.0 | Not a jailbreak, but useful for permanent IPA installs on supported firmware. Not for 17.0.1 or newer. |

If a site claims a one-tap online jailbreak for every iPhone on iOS 26, treat it as fake unless a known developer and official project source verifies it.

## Should You Jailbreak?

Good reasons:

- You have a spare device.
- You want theming, filesystem access, research, or old-device experimentation.
- You understand restore risk.
- You can live without some banking, DRM, work, or device integrity checks.

Bad reasons:

- "Speed boost" claims.
- Piracy.
- Bypassing work or school device management.
- Installing unknown tweaks on your main phone.
- Trying to recover a locked device.

## Jailbreak Types

| Type | Meaning |
| :--- | :--- |
| Rootless | Modern jailbreak style that avoids modifying sealed system paths. Best supported by current tweaks. |
| Rootful | Older or heavier model. More fragile on modern iOS and often needs extra storage/fake filesystem handling. |
| Semi-untethered | Re-enable jailbreak from an app after reboot. |
| Semi-tethered | Needs a computer or boot tool after reboot to return to jailbroken state. |
| Tethered | Needs external boot every time. Avoid for normal use. |

## Before You Start

- Back up with an encrypted computer backup.
- Save iOS version, build number, model, and chip.
- Confirm exact tool compatibility from the official source.
- Read known issues for your device.
- Remove beta profiles unless the tool specifically expects that version.
- Disable Find My only if a trusted guide explicitly requires it for restore work.
- Keep enough free storage.
- Do not use jailbreak clone sites.

## palera1n Notes

- Use only the official palera1n site: `https://palera.in`.
- palera1n is for A8-A11 devices and Apple T2.
- A11 devices such as iPhone 8, iPhone 8 Plus, and iPhone X require passcode to be disabled while jailbroken.
- On A11 with iOS 16, palera1n documents that you may need to erase all content and settings if a passcode was previously set.
- The official docs warn that the only official palera1n download site is `https://palera.in`; similar-looking sites are often malicious.

## Dopamine Notes

- Use the official GitHub or official website linked from it.
- It is rootless and semi-untethered.
- Its official compatibility is iOS 15 and 16, not current iOS 26.
- Do not ask a tool to support a version it does not list.

## TrollStore Notes

- TrollStore is not a jailbreak.
- It permanently installs IPAs on supported vulnerable firmware.
- Official support is limited through iOS 17.0.
- 17.0.1 and newer are not supported unless a new CoreTrust bug is found.

## Hard No

- Do not jailbreak a phone you cannot erase.
- Do not use your main banking/work phone as a test device.
- Do not install piracy repos.
- Do not install random profile-based "jailbreaks."
- Do not pay for secret jailbreak tools from ads, Telegram, or DMs.
- Do not update a device you want to jailbreak until you check compatibility.

## Official Sources

- palera1n official site: [palera.in](https://palera.in/)
- palera1n compatibility chart: [docs.palera.in](https://docs.palera.in/docs/reference/compatibility-chart/)
- palera1n GitHub: [github.com/palera1n/palera1n](https://github.com/palera1n/palera1n)
- Dopamine GitHub: [github.com/opa334/Dopamine](https://github.com/opa334/Dopamine)
- TrollStore GitHub: [github.com/opa334/TrollStore](https://github.com/opa334/TrollStore)
