# macOS Backup & Recovery

Backups matter more than repair tricks. Make the backup before updates, before partition changes, before unsupported patching, and before deleting "system junk."

## Backup Stack

| Layer | Purpose |
| :--- | :--- |
| Time Machine | Main local versioned backup for the whole Mac. |
| Cloud sync | Convenience copy for selected documents/photos, not a full Mac backup. |
| External clone or manual archive | Extra protection for irreplaceable projects. |
| Exported secrets | Password manager recovery kit, 2FA recovery codes, license keys. |

## Time Machine Basics

Apple's practical baseline:

- Use a dedicated external disk when possible.
- Prefer a backup disk at least twice the capacity of the Mac's internal storage.
- Let the first backup finish before risky work.
- Time Machine keeps hourly, daily, and weekly backups as space allows.
- Local snapshots help when the backup disk is unavailable, but they are not a replacement for an external backup.

## Before Major Updates

1. Confirm current macOS version and Mac model.
2. Free enough storage for the installer and temporary files.
3. Update critical apps first if they require compatibility releases.
4. Run a Time Machine backup.
5. Keep the Mac connected to power.
6. Do not interrupt firmware or OS installation.

## Recovery Options

| Situation | Path |
| :--- | :--- |
| Reinstall without erasing | Start macOS Recovery and reinstall macOS. |
| Disk repair | Start Recovery, open Disk Utility, run First Aid. |
| Full reset | Use Erase All Content and Settings when supported. |
| Selling or giving away | Erase, remove Apple Account/Find My, and leave Setup Assistant untouched. |
| Severe firmware issue | Apple silicon or T2 Macs may need revive/restore from another Mac. |

## Apple Silicon vs Intel Recovery

| Mac type | Recovery startup |
| :--- | :--- |
| Apple silicon | Shut down, hold power until startup options appear, choose Options. |
| Intel | Start up and hold Command-R. |

Use Apple's recovery instructions if the Mac does not boot normally.

## Erase All Content and Settings

Erase All Content and Settings is available on macOS Monterey 12 or later on Apple silicon Macs and T2 Intel Macs. It securely removes user data while keeping the installed OS. Use it before selling, giving away, or resetting a supported Mac.

## Avoid

- Relying on iCloud Drive as the only backup.
- Erasing before verifying the backup contains the files you need.
- Keeping the only backup disk plugged in all the time with no second copy.
- Using APFS local snapshots as a disaster recovery plan.
- Updating an OCLP or heavily tweaked Mac without checking tool-specific update notes.

## Official Sources

- How to back up your Mac: [support.apple.com/102307](https://support.apple.com/en-us/102307)
- Back up with Time Machine: [support.apple.com/HT201250](https://support.apple.com/en-us/HT201250)
- Backup disks for Time Machine: [support.apple.com/102423](https://support.apple.com/en-us/102423)
- Time Machine local snapshots: [support.apple.com/HT204015](https://support.apple.com/en-us/HT204015)
- Start up from macOS Recovery: [support.apple.com/102518](https://support.apple.com/en-us/102518)
- Erase your Mac: [support.apple.com/102664](https://support.apple.com/en-us/102664)
- Revive or restore Mac firmware: [support.apple.com/108900](https://support.apple.com/en-us/108900)

