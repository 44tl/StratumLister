# Windows Optimization

Windows optimization should improve stability and responsiveness without disabling core security, updates, or recovery options.

## Before Starting

Create a restore point first:

```text
Win + R > sysdm.cpl > System Protection > Create
```

Then document:

- Current Windows version.
- GPU driver version.
- Chipset driver version.
- Game or app you are testing.
- Baseline frame time or latency behavior.

## Keep the System Supported

Use Windows Update for platform fixes, security patches, scheduler updates, driver compatibility, and DirectX components.

Path:

```text
Settings > Windows Update > Check for updates
```

Do not disable Windows Update permanently. Pause it only when you need stability during a known work session, then re-enable it.

## Clean GPU Driver Installs

Use clean installs for GPU swaps, major driver problems, or repeated display crashes.

Official links:

- [NVIDIA GeForce drivers](https://www.nvidia.com/en-us/geforce/drivers/)
- [AMD drivers](https://www.amd.com/en/support/download/drivers.html)
- [Intel Arc graphics driver](https://www.intel.com/content/www/us/en/download/785597/intel-arc-graphics-windows.html)
- [Display Driver Uninstaller](https://www.wagnardsoft.com/)

Safe flow:

1. Download the official GPU driver.
2. Download DDU from Wagnardsoft.
3. Create a restore point.
4. Boot into Safe Mode.
5. Run DDU for the current GPU vendor.
6. Reboot normally.
7. Install the official driver.
8. Reboot and test before changing overlays or tuning.

## Chipset and Firmware

Install chipset drivers from the CPU or motherboard vendor.

Use official sources:

- [AMD drivers](https://www.amd.com/en/support/download/drivers.html)
- [Intel Download Center](https://www.intel.com/content/www/us/en/download-center/home.html)

Motherboard firmware should come from the board vendor only.

Update firmware when:

- The release notes mention stability, memory compatibility, CPU support, security, or sleep/wake fixes.
- You are troubleshooting issues the vendor specifically addresses.

Do not update firmware during storms, unstable power, or active overclocking tests.

## Gaming Features

### Game Mode

Keep Game Mode enabled unless you have tested a specific problem.

Modern Windows scheduling can depend on Game Mode and Xbox components for some CPU layouts and game detection paths.

### Xbox Game Bar

Disable captures and overlays if you do not use them.

Path:

```text
Settings > Gaming
```

Do not remove Xbox components blindly. Some games, launchers, and capture workflows rely on them.

## Startup and Background Apps

Disable only what you recognize.

Path:

```text
Settings > Apps > Startup
```

Good candidates:

- Updaters for apps you rarely use.
- Chat apps you do not need on boot.
- Game launchers you open manually.
- RGB tools after profiles are saved, if hardware allows it.

Avoid disabling:

- Security tools.
- Driver services.
- Audio services.
- Touchpad, hotkey, or laptop vendor services.
- Backup or sync services you rely on.

## Overlays

Overlays can affect frame pacing and troubleshooting clarity.

Test with overlays disabled:

- GPU vendor overlays.
- Discord overlay.
- Steam overlay.
- Capture overlays.
- Monitoring overlays.

Re-enable only the ones you actually use.

## Power Settings

Use balanced defaults first.

For desktop gaming:

- Use the normal Balanced or vendor-recommended plan.
- Avoid random "ultimate performance" scripts.
- Disable CPU or GPU overclocks while troubleshooting.

For laptops:

- Use the OEM performance mode when plugged in.
- Keep vendor tools that control MUX, fan curves, charging limits, or thermal profiles.
- Test on AC power before judging performance.

## Storage Cleanup

Use built-in cleanup first:

```text
Settings > System > Storage
```

Safe cleanup targets:

- Temporary files.
- Recycle Bin.
- Old downloads you reviewed manually.
- Shader caches when troubleshooting stutter.

Avoid:

- Registry cleaners.
- Driver cleaner bundles.
- Deleting WinSxS manually.
- Deleting recovery partitions without a full image backup.

## What Not To Disable

Do not disable these for performance:

- Microsoft Defender.
- Windows Firewall.
- Windows Update permanently.
- System Restore before making changes.
- Core driver services.
- Large service groups from a script.
- Virtualization-based security without understanding the security tradeoff.

## Testing Method

Change one thing at a time.

After each change:

1. Reboot if the change affects drivers or services.
2. Test the same game or app.
3. Watch frame time consistency, not only average FPS.
4. Keep notes.
5. Revert if performance or stability gets worse.

## Practical Optimization Order

1. Update Windows.
2. Update chipset drivers.
3. Clean-install GPU driver if needed.
4. Remove unneeded startup apps.
5. Disable unused overlays.
6. Clean temporary files.
7. Test game-specific settings.
8. Stop before touching security or core services.
