# Wii U / Wii Homebrew

Best of the Best Wii U / Wii Homebrew Resources.

This guide provides free, safe, and community-backed resources to mod your Wii U or Wii for homebrew, emulators, backups, and online play revival. Following these official methods ensures a safe experience without the risk of bricks.

## Core Jailbreak Guides
These are the community-recognized "Gold Standard" guides. Always follow the web version over video guides for the most up-to-date files.

### Wii U: Aroma CFW
Target: Stock firmware 5.5.6 (NA) / 5.5.5 (others).

Outcome: Full Aroma environment supporting region-free play, RetroArch, and disc dumping.

Guide: wiiu.hacks.guide

### Wii / vWii / Wii Mini
Target: Standard Wii consoles or the Virtual Wii (vWii) inside a Wii U.

Outcome: Homebrew Channel, Priiloader, cIOS, and USB Loader GX.

Guide: wii.hacks.guide

**Visual Walkthrough:** For beginners, the YouTube creator FunkyScott47 provides excellent visual step-by-step guides for Aroma and Pretendo. Search for "FunkyScott47 Wii U homebrew."

## Homebrew Repositories
Once your console is modded, use these "App Stores" to download software directly on the device.

| Tool | Platform | Best For |
| --- | --- | --- |
| Open Shop Channel (OSC) | Wii / vWii | In-console homebrew downloader. |
| Homebrew App Store (HBAS) | Wii U / Switch | GUI manager for Aroma-ready apps and themes. |

**HBAS Install:** Extract to sd:/wiiu/apps/appstore/ and run via the Homebrew/Aroma menu.

**Web Browser:** Browse apps at hb-app.store.

## Online Revival Services
Since the official Nintendo servers are offline, use these services to restore online multiplayer and system channels.

### 1. Wiimmfi (Multiplayer)
Function: Restores online play for 500+ games, including Mario Kart Wii and Super Smash Bros. Brawl.

Status: Extremely stable with a massive active player base.

Link: wiimmfi.de

### 2. WiiLink (System Channels)
Function: Revives the News, Weather, Mii Contest, and Nintendo Channels, plus Wii Mail.

Integration: Includes the former RiiConnect24 services.

Link: wiilink.ca

**Quick Setup Tip:** Use Wiimmfi DNS for games and WiiLink for features. Most setups only require a DNS swap and no permanent patches.

## Technical Knowledge & Wikis
For developers or those looking for deep hardware documentation.

* **WiiBrew:** Extensive documentation on Wii hardware, IOS, and emulators. wiibrew.org
* **WiiUBrew:** Focused on the Wii U wut toolchain, Tiramisu, and Aroma environments. wiiubrew.org

## The "Starter Stack" (Free & Open Source)
A high-level summary of a complete setup:

### Wii U Path
* Hacks Guide > Install Aroma.
* Homebrew App Store > Install RetroArch for emulation (NES to PS1).
* Dumping > Use tools to dump your physical discs to USB/SD.

### Wii / vWii Path
* Hacks Guide > Install Homebrew Channel + Priiloader.
* Open Shop Channel > Download your library.
* USB Loader GX > Manage Wii ISOs.
* Nintendont > Play GameCube games with native controller support.

## Pro Tips & Safety
* **Storage Formatting:** Use FAT32 for all SD cards. Wii U supports up to 128GB (32KB clusters), while the Wii can support up to 2TB for USB loaders.
* **Safety First:** Always backup your NAND and SD card before making system changes.
* **Legacy Cleanup:** If you have an old "Haxchi" or "Coldboot Haxchi" setup, uninstall it before moving to Aroma (the guides cover this process).
* **vWii Caution:** Modding the vWii inside a Wii U is different from a standard Wii. Use the specific vWii section on wii.hacks.guide to avoid bricking your Wii U menu.
