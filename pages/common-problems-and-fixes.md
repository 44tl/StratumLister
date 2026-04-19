# Common Problems & Fixes

Debloating or applying aggressive tweaks (via tools like Chris Titus WinUtil v26.01.15, Sparkle + WinToys combos, or PowerShell scripts) can break core features if services, components, or packages are removed too aggressively. Windows 11 (25H2 build 26200.7627+ after Jan 17 OOB KB5077744, or 24H2 build 26100.7627) is more resilient today, but issues still occur especially after major updates that reset some changes.

## Before Fixing Anything

1. **Create a System Restore Point first:** `Win + R` > `sysdm.cpl` > System Protection > Create
2. **Use tools with backups:** Chris Titus WinUtil now has improved MicroWin/ tweaks; check its Known Issues page for your config
3. **Always run commands in PowerShell or Windows Terminal as Administrator**
4. **Test after each fix; reboot often**
5. **If broken badly:** Consider in-place repair (Settings > Windows Update > Advanced options > Recovery > Fix problems using Windows Update) or clean reinstall

Here are the top 10 issues reported today in communities (Reddit, ElevenForum, YouTube guides) and the safest, quickest fixes updated for current builds and tools.

## 1. Windows Update Fails / Stuck / "Something Went Wrong"

**Symptoms:** Downloads fail, stuck at 0%/100%, error codes like 0x80070002

**Causes:** Disabled BITS, Windows Update service, telemetry set too low (0 breaks update checks), or corrupted components post-debloat

### Fix Steps

**Re-enable key services** (`services.msc`):

- Windows Update > Startup: Automatic > Start
- Background Intelligent Transfer Service (BITS) > Automatic > Start
- Windows Installer / Cryptographic Services > Automatic > Start

**Run repair commands** in admin PowerShell:
```
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
```

**Reset Windows Update components** (if needed):
```
net stop wuauserv
net stop bits
net stop cryptSvc
ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
ren C:\Windows\System32\catroot2 catroot2.old
net start wuauserv
net start bits
net start cryptSvc
```

Reboot > Check for updates

**Pro Tip:** Avoid setting telemetry to 0; use "Basic" or "Required" for stability.

## 2. Microsoft Store or UWP Apps Won't Open (Photos, Calculator, etc.)

**Symptoms:** Store crashes on launch, apps fail to start

**Causes:** Removed Store package or dependencies via debloat

### Fix

**Reinstall Store via winget** (admin Terminal/PowerShell):
```
winget install 9WZDNCRFJBMP
```

**Or reinstall all default apps** (broader fix):
```
Get-AppxPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}
```

If winget broken: Install App Installer from Microsoft Store first (or sideload via direct link if accessible).

## 3. No Audio / Distorted Sound / Crackling

**Symptoms:** No output, services stopped, stuttering in games

**Causes:** Disabled Windows Audio services or aggressive core parking/HPET tweaks

### Fix

**Services.msc:**

- Windows Audio > Automatic > Start
- Windows Audio Endpoint Builder > Automatic > Start
- Remote Procedure Call (RPC) > Automatic (if affected)

**Undo CPU/park tweaks:** Revert in WinUtil/Sparkle/OptimizerNXT (deprecated Optimizer v16.7 archived; recent switch to NXT)

**Update audio drivers:** Device Manager > Sound > Update driver (or Realtek/AMD/Intel site)

**Test:** Run `mmsys.cpl` > Playback > Set default device

## 4. Wi-Fi / Bluetooth / Network Broken

**Symptoms:** Adapter missing, no connections, resets on reboot

**Causes:** WLAN AutoConfig or Bluetooth Support disabled; OEM drivers nuked

### Fix

**Services.msc:**

- WLAN AutoConfig > Automatic > Start
- Bluetooth Support Service > Automatic > Start (if BT used)

**Reset network stack** (admin CMD/PowerShell):
```
netsh winsock reset
netsh int ip reset
ipconfig /flushdns
```

**Reinstall network drivers:** Device Manager > Network adapters > Right-click > Update/Uninstall device > Reboot (downloads auto) or OEM site

If persistent: Settings > Network & internet > Advanced network settings > Network reset

## 5. System Feels Slower / Higher Latency / Stutters After Tweaks

**Symptoms:** Worse 1% lows, apps lag, high DPC

**Causes:** Wrong power plan, HPET forced off/on, over-disabled services

### Fix

- Power Plan: Settings > Power & battery > High performance (or Ultimate via `powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61`)
- Undo HPET: Avoid toggles in tools; revert to default (most guides say leave HPET alone)
- Revert services: Use WinUtil's tweak revert or restore point
- Benchmark: LatencyMon before/after

## 6. OneDrive Missing / Sync Broken

### Fix

**Reinstall:**
```
winget install Microsoft.OneDrive
```

Or download from official Microsoft site.

## 7. Widgets / Copilot / Search Bar Missing or Blank

**Symptoms:** Widgets panel empty, Copilot button gone, search fails

**Causes:** Removed Windows Web Experience Pack

### Fix

**Reinstall Web Experience Pack:**
```
winget install 9MSSGKG348SP
```

Or direct: Open Microsoft Store > Search "Windows Web Experience Pack" > Install

Reboot > Widgets should repopulate (may need sign-in)

## 8. Windows Defender / Security Center Broken

**Symptoms:** App won't open, real-time off, errors

**Causes:** Disabled Security Center or Defender services

### Fix

**Services.msc:**

- Microsoft Defender Antivirus Service > Automatic > Start
- Security Center > Automatic > Start

**Reset Security app:**
```
PowerShell -ExecutionPolicy Unrestricted -Command "Get-AppxPackage Microsoft.SecHealthUI -AllUsers | Reset-AppxPackage"
```

If needed: Settings > Privacy & security > Windows Security > Open Windows Security

## 9. Disk Cleanup / Temp Folders Missing > Installer Errors

### Fix

**Recreate folders** (admin CMD):
```
mkdir C:\Windows\Temp
mkdir "%LocalAppData%\Temp"
```

**Clear winget cache:**
```
winget source reset --force
```

## 10. File Explorer / Taskbar Crashes / Glitches

**Symptoms:** Explorer restarts loop, taskbar freezes, icons missing

**Causes:** Corrupted ShellExperienceHost or icon cache

### Fix

**Reinstall Shell Experience** (often tied to Web Experience):
```
winget install 9MSSGKG348SP
```

**Reset icon cache:**
```
ie4uinit.exe -show
```

**Or full reset:**
```
taskkill /IM explorer.exe /F
DEL /A /Q "%LocalAppData%\IconCache.db"
DEL /A /F /Q "%LocalAppData%\Microsoft\Windows\Explorer\iconcache*"
start explorer.exe
```

## General Advice

- **Use tools with previews/undo:** Chris Titus WinUtil (v26.01.15+) has safer MicroWin options; avoid fully archived Optimizer; migrate to alternatives
- **Never disable telemetry to 0** or core update services permanently
- **After fixes, run Windows Update** > Install all, then re-apply only tested tweaks
- **If nothing works:** In-place upgrade (keep files/apps) via ISO from microsoft.com
