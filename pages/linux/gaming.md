# Linux Gaming

Linux gaming is strong now, but it is not universal. Steam and Proton cover many games. Kernel-level anti-cheat and some launchers still decide whether Linux works for a specific title.

## Best Starting Points

| Setup | Recommended path | Notes |
| :--- | :--- | :--- |
| Steam-heavy gaming desktop | Fedora KDE, Fedora Workstation, or Linux Mint | Good balance of drivers, Steam, and normal desktop behavior. |
| Console-like PC or handheld | Bazzite stable | Immutable Fedora Atomic base, gaming defaults, rollback path. |
| Advanced latest-stack gaming | Arch | Good if you can maintain a rolling system and read news before upgrades. |
| Older low-power laptop | Mint Xfce or Debian with a light desktop | Use for older games, streaming, emulation, and web games. |

## Steam and Proton

Use Steam from the distro repository or Flatpak. Enable Steam Play for supported titles, then test per game.

Check before buying or reinstalling:

- Steam Deck compatibility.
- ProtonDB reports.
- Whether the game uses anti-cheat that supports Proton.
- Whether multiplayer requires a Windows-only launcher.

Valve's Proton releases move quickly. Proton 10.0-4 is the current stable Proton release on Valve's release page, while Proton 11.0-beta1 is available for testing. Use beta Proton for targeted fixes, not as a blanket default.

## Anti-Cheat Reality

Linux compatibility depends on the game publisher enabling support. If a game blocks Proton because of anti-cheat, a different distro usually will not fix it.

Before switching:

- Check the game on ProtonDB.
- Check the game's official support page.
- Search recent reports from Linux users.
- Keep Windows dual boot if that one game matters.

## GPU Notes

| GPU | Current Linux reality |
| :--- | :--- |
| AMD Radeon | Usually the easiest path. Kernel + Mesa handle most drivers. Newer hardware benefits from newer kernels and Mesa. |
| Intel Arc / integrated | Generally good on newer kernels and Mesa. Very old distro releases can lag on new hardware. |
| NVIDIA Turing and newer | Current driver branches are usable, and some distros are moving users to NVIDIA open kernel modules. Follow distro packaging. |
| NVIDIA GTX 10xx / Pascal and older | Watch driver branch support. Arch notes that NVIDIA 590 drops Pascal and older support, requiring legacy 580xx packaging there. |

## Filesystem Rules For Games

- Use ext4 or Btrfs for Linux game libraries.
- Avoid NTFS for Proton game libraries.
- Keep Steam libraries on mounted drives with stable mount points.
- Do not put games in paths with odd permissions inherited from Windows.

## Game Launchers

Useful tools:

- Steam: [store.steampowered.com](https://store.steampowered.com/)
- Proton: [github.com/ValveSoftware/Proton](https://github.com/ValveSoftware/Proton)
- Heroic Games Launcher: [heroicgameslauncher.com](https://heroicgameslauncher.com/)
- Lutris: [lutris.net](https://lutris.net/)
- Bottles: [usebottles.com](https://usebottles.com/)

Use one launcher per game when possible. Stacking wrappers makes troubleshooting harder.

## Troubleshooting Flow

1. Update the system.
2. Reboot after kernel, Mesa, or NVIDIA updates.
3. Test default Proton first.
4. Try Proton Experimental or a newer beta only for that game.
5. Check logs from Steam or the launcher.
6. Remove custom launch options and test clean.
7. Check whether the issue is anti-cheat, video codec, launcher login, or GPU-specific.

## Official Sources

- Proton releases: [github.com/ValveSoftware/Proton/releases](https://github.com/ValveSoftware/Proton/releases)
- Bazzite releases: [github.com/ublue-os/bazzite/releases](https://github.com/ublue-os/bazzite/releases)
- Mesa release notes: [docs.mesa3d.org/relnotes](https://docs.mesa3d.org/relnotes.html)
- Arch NVIDIA 590 note: [archlinux.org/news](https://archlinux.org/news/nvidia-590-driver-drops-pascal-support-main-packages-switch-to-open-kernel-modules/)
- Flathub verification: [docs.flathub.org/docs/for-users/verification](https://docs.flathub.org/docs/for-users/verification)
