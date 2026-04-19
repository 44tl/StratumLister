# Driver Cleanup Guide

Driver cleanup is useful when a driver install is corrupted, you are switching GPU vendors, or you need to remove old vendor components. It is not routine maintenance.

## When To Use Cleanup

- Switching NVIDIA to AMD or AMD to NVIDIA.
- GPU driver install fails repeatedly.
- Black screen or severe stutter began after a driver update.
- Audio, chipset, or network driver packages are clearly corrupted.

## Before Cleanup

- Download the correct official driver first.
- Create a restore point.
- Save BitLocker recovery info if relevant.
- Disconnect from the internet if Windows keeps auto-installing the wrong driver.

## GPU Cleanup

Use DDU only when there is a reason. Boot Safe Mode, remove the old GPU driver, reboot, then install the official driver package.

## Chipset And Network Drivers

Prefer vendor uninstallers, Device Manager rollback, or official installer repair mode. Do not use driver booster utilities.

## After Cleanup

- Reboot.
- Confirm Device Manager has no unknown devices.
- Test sleep/wake, games, video playback, audio, and network.
- Keep the restore point for a few days.
