# Restore Point & Backup Guide

Restore points and backups solve different problems. Use both before system-level changes.

## Restore Point

Best for:

- Driver changes.
- Registry edits.
- Service changes.
- Tool-based optimization.

Not enough for:

- Disk failure.
- Malware recovery.
- Deleted personal files.
- Bad custom ISO installs.

## Full Backup Image

Best for:

- Major Windows changes.
- Custom ISO testing.
- Large debloat experiments.
- Recovering from failed updates or broken boot state.

## Minimum Safe Setup

1. Enable System Protection for the Windows drive.
2. Create a manual restore point before changes.
3. Keep personal files synced or backed up separately.
4. Make a full image backup before high-risk work.
5. Test that your recovery media boots.

## Naming Restore Points

Use names that describe the change:

- `Before GPU driver cleanup`
- `Before debloat pass`
- `Before Windows update pause`
- `Before network reset`

## After Changes

Keep the restore point until you have used the system normally for a few days.
