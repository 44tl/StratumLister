# macOS Advanced Tweaks

Advanced macOS work should be reversible. Make a backup, change one thing at a time, and keep security features enabled unless you have a specific technical reason.

## Safe Tweaks

These are low-risk and easy to reverse:

```bash
# Show file extensions in Finder.
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Show hidden files in Finder.
defaults write com.apple.finder AppleShowAllFiles -bool true
killall Finder
```

Revert:

```bash
defaults delete NSGlobalDomain AppleShowAllExtensions
defaults delete com.apple.finder AppleShowAllFiles
killall Finder
```

## Useful Power-User Areas

| Area | Safe approach |
| :--- | :--- |
| Shortcuts | Use for personal automation before shell scripts. |
| Automator | Still useful for Finder workflows. |
| LaunchAgents | Keep user agents in `~/Library/LaunchAgents` and document what they do. |
| Network locations | Use separate locations for home, work, lab, and VPN-heavy setups. |
| DNS | Prefer router, profile, or OS settings over random helper apps. |
| Virtual machines | Use UTM, Parallels, VMware Fusion, or vendor-supported tools depending on workload. |

## LaunchAgent Checks

List user agents:

```bash
launchctl print gui/$UID
ls ~/Library/LaunchAgents
```

Do not delete random agents blindly. Check the file name, label, and owning app first.

## SIP and Gatekeeper

Leave SIP and Gatekeeper enabled. Disabling them can be appropriate for rare development, security research, or recovery cases, but it should be temporary and documented.

Bad reasons to disable them:

- A cracked app demands it.
- A tweak pack says every Mac is faster that way.
- A random installer cannot explain what it needs.

## Unsupported Macs and OCLP

OpenCore Legacy Patcher can keep many Intel Macs useful, but it is not the same as official Apple support.

Use this path only after:

- Checking the exact model identifier against OCLP supported models.
- Updating the Mac to its latest native macOS first so firmware is current.
- Making a complete backup.
- Reading known issues for Wi-Fi, Bluetooth, graphics, sleep, and updates.
- Accepting that post-update root patches may be needed.

Do not use an OCLP Mac as your only trusted machine for sensitive accounts unless you understand and accept the maintenance risk.

## Virtualization Notes

| Host | Better guest choices |
| :--- | :--- |
| Apple silicon | ARM Linux, ARM Windows, modern macOS VMs where supported. |
| Intel Mac | x86 Linux, x86 Windows, older macOS workflows. |

If you need Windows games or kernel-level anti-cheat, do not assume a Mac VM will work. Check the app first.

## Official Sources

- System Integrity Protection: [support.apple.com/102149](https://support.apple.com/en-lamr/102149)
- Startup Security Utility on T2 Macs: [support.apple.com/102522](https://support.apple.com/en-lamr/102522)
- OpenCore Legacy Patcher docs: [dortania.github.io/OpenCore-Legacy-Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/)
- OCLP supported models: [dortania.github.io/OpenCore-Legacy-Patcher/MODELS.html](https://dortania.github.io/OpenCore-Legacy-Patcher/MODELS.html)

