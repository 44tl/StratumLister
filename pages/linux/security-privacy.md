# Linux Security & Privacy

Linux is not automatically secure because it is Linux. Most real risk comes from outdated packages, untrusted software sources, weak passwords, exposed remote services, and no backup path.

## Baseline Rules

- Update regularly.
- Use full disk encryption on laptops.
- Keep a tested backup.
- Install software from distro repositories or verified upstream sources.
- Use a standard user account for daily work.
- Use `sudo` intentionally and read commands before running them.
- Keep SSH disabled unless you actually need it.
- Do not expose admin panels, Samba shares, or SSH to the internet without a plan.

## Updates

```bash
# Debian, Ubuntu, Mint
sudo apt update
sudo apt upgrade

# Fedora
sudo dnf upgrade --refresh

# Arch
sudo pacman -Syu

# openSUSE Leap
sudo zypper refresh
sudo zypper update

# Flatpak apps
flatpak update
```

Reboot after kernel, libc, Mesa, NVIDIA, systemd, firmware, or bootloader updates.

## Firewall Defaults

| Distro | Typical firewall path |
| :--- | :--- |
| Ubuntu / Mint | `ufw` is common and simple. |
| Fedora | firewalld is the default path. |
| openSUSE | firewalld is standard. |
| Arch | Choose and configure one. Nothing is magic by default. |
| Debian | Depends on install profile. Check before exposing services. |

Do not open ports because a guide says "allow all local network" without explaining why.

## App Sandboxing

Flatpak helps isolate desktop apps, but permissions matter.

Check:

- Filesystem access.
- Device access.
- Background behavior.
- Session bus access.
- Network access.

Prefer verified Flathub apps for sensitive apps. A verified app means the developer has confirmed ownership of the app ID through Flathub's process.

Verified-only Flathub remote:

```bash
flatpak remote-add --if-not-exists --subset=verified --title='Flathub Verified' flathub-verified https://dl.flathub.org/repo/flathub.flatpakrepo
```

## SSH Hardening

If you enable SSH:

- Use key-based login.
- Disable password login when practical.
- Keep `PermitRootLogin no`.
- Use a firewall.
- Do not expose SSH to the public internet unless you need it.
- Watch logs for repeated attempts.

## Privacy Notes

- Browser choice matters more than distro choice for normal web privacy.
- Use a password manager and phishing-resistant 2FA for critical accounts.
- DNS encryption is useful, but it does not make all browsing private.
- VPNs do not make unsafe downloads safe.
- Telemetry claims should be checked against distro documentation, not forum screenshots.

## Avoid

- Running random "hardening" scripts without reading them.
- Disabling updates to avoid breakage.
- Installing security tools from unknown GitHub forks.
- Giving Flatpaks broad filesystem access because something did not work once.
- Exposing Docker, Cockpit, SSH, or Samba without firewall rules.
- Assuming no malware targets Linux desktops.

## Official Sources

- Flathub verified apps: [docs.flathub.org/docs/for-users/verification](https://docs.flathub.org/docs/for-users/verification)
- Debian security information: [debian.org/security](https://www.debian.org/security/)
- Ubuntu security notices: [ubuntu.com/security/notices](https://ubuntu.com/security/notices)
- Fedora security docs: [docs.fedoraproject.org](https://docs.fedoraproject.org/)
- Arch security page: [security.archlinux.org](https://security.archlinux.org/)
- openSUSE security: [en.opensuse.org/Portal:Security](https://en.opensuse.org/Portal:Security)
