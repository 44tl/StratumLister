# Backup Tools

Practical tools for local backups, encrypted archives, and device-to-device sync.

## Backup Rules

- Sync is not backup by itself.
- Backups must be restorable.
- Keep at least one copy offline.
- Keep at least one copy away from the main device.
- Encrypt backups that contain personal documents, photos, keys, vault exports, or recovery codes.

## Local and External Drive Backups

### FreeFileSync

Official site: [freefilesync.org](https://freefilesync.org/)

Folder comparison and synchronization software for copying files to external drives, NAS shares, or another local disk.

Best for:

- Simple home backups.
- External USB backup drives.
- Folder mirroring with visible files.
- Users who want a graphical interface.

Use carefully:

- Mirror mode can delete files on the target.
- Review the planned changes before running.
- Keep versioning enabled if you need rollback.

## Device-to-Device Sync

### Syncthing

Official site: [syncthing.net](https://syncthing.net/)

Continuous file synchronization between your own devices.

Best for:

- Keeping folders synced between desktop and laptop.
- Local network sync without a cloud provider.
- Peer-to-peer sync where you control the devices.

Use carefully:

- Deletions can sync.
- Ransomware-encrypted files can sync.
- File versioning should be enabled for important folders.

## Encrypted Backup Archives

### restic

Official site: [restic.net](https://restic.net/)

Encrypted backup tool that supports many storage targets and verifies restore capability.

Best for:

- Encrypted backups.
- Incremental backups.
- Local, remote, or cloud storage targets.
- Users comfortable with command-line tools.

### BorgBackup

Official site: [borgbackup.org](https://www.borgbackup.org/)

Deduplicating backup tool with compression and authenticated encryption.

Best for:

- Linux and server backups.
- Space-efficient archives.
- Encrypted repositories.
- Advanced users who want strong control.

## Encryption Containers

### VeraCrypt

Official site: [veracrypt.io](https://veracrypt.io/en/Home.html)

Disk and container encryption for local files and external drives.

Best for:

- Offline recovery-code storage.
- Encrypted USB drives.
- Sensitive local archives.

### Cryptomator

Official site: [cryptomator.org](https://cryptomator.org/)

Client-side encryption for cloud storage folders.

Best for:

- Encrypting files before they sync to cloud storage.
- Project-specific vaults.
- Users who want a graphical workflow.

## Recommended Patterns

### Simple Home Setup

- FreeFileSync to an external drive.
- Cryptomator for sensitive folders stored in cloud sync.
- One offline USB drive kept disconnected.

### Power User Setup

- Syncthing for device-to-device sync.
- restic or BorgBackup for encrypted snapshots.
- Separate offline copy for recovery.

### Recovery Code Setup

- Export recovery codes.
- Store them in a VeraCrypt or Cryptomator vault.
- Print a copy for critical accounts.
- Keep the printed copy physically secure.

## Restore Testing

Backups only count if they restore.

Test:

- A single file restore.
- A full folder restore.
- A password-protected archive restore.
- A restore on a different device when possible.

## Avoid

- Keeping the only backup plugged in all the time.
- Depending only on cloud sync.
- Backing up encrypted password vaults without the vault password.
- Backing up recovery codes into the same account they recover.
- Using backup tools without testing restore.
