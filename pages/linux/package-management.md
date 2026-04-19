# Linux Package Management

Use the package system that belongs to your distro. Most Linux breakage comes from mixing instructions across ecosystems.

## Package Manager Map

| Distro family | System packages | Typical commands |
| :--- | :--- | :--- |
| Debian, Ubuntu, Mint | APT / dpkg | `apt update`, `apt upgrade`, `apt install`, `apt remove` |
| Fedora | DNF / RPM | `dnf upgrade --refresh`, `dnf install`, `dnf remove` |
| Arch | pacman / PKGBUILD | `pacman -Syu`, `pacman -S`, `pacman -Rns` |
| openSUSE Leap | Zypper / RPM | `zypper refresh`, `zypper update`, `zypper install` |
| openSUSE Tumbleweed | Zypper / RPM | `zypper dup` for full distribution snapshots |
| Universal desktop apps | Flatpak | `flatpak install`, `flatpak update`, `flatpak uninstall` |

## Source Priority

1. Distro repository for drivers, kernels, libraries, desktop environments, core tools, and CLI tools.
2. Flatpak for desktop apps when you want newer app versions or sandboxing.
3. Official vendor repository only when the vendor documents it clearly.
4. Manual `.deb`, `.rpm`, AppImage, or tarball only when there is no better source.
5. Avoid random scripts from comments, paste sites, and old blogs.

## Flatpak Rules

Flatpak is useful for browsers, media apps, chat apps, launchers, and creative tools. It is not a magic security boundary.

Use:

- Flathub app pages.
- Verified Flathub apps when possible.
- Flatseal for reviewing permissions.

Avoid:

- Giving every app full filesystem access.
- Installing duplicate Flatpaks and distro packages for the same app unless you know which one launches.
- Assuming a community-maintained Flatpak is official.

Flathub supports a verified-only remote subset:

```bash
flatpak remote-add --if-not-exists --subset=verified --title='Flathub Verified' flathub-verified https://dl.flathub.org/repo/flathub.flatpakrepo
```

## AUR Rules

The AUR is not an official binary repository. It is a community build recipe system for Arch users.

Before installing:

- Read the PKGBUILD.
- Check the upstream source.
- Check comments for current breakage.
- Avoid abandoned packages.
- Avoid AUR helpers if you do not understand what they execute.

## PPAs and Vendor Repos

On Ubuntu and Mint, PPAs can replace system libraries and cause upgrade problems.

Use a PPA only when:

- It is maintained by the upstream project or a trusted distro maintainer.
- You know how to remove it with `ppa-purge`.
- You are not using it for core system libraries unless required.

Vendor repositories are acceptable when they are official and well documented, such as browser, editor, or container tooling repos. They still increase maintenance surface.

## Do Not Mix These

- Debian packages on Arch.
- Ubuntu PPAs on Debian.
- Random Fedora COPR repos on production systems.
- Tumbleweed instructions on Leap without checking package names.
- `pip install --user` as a way to replace distro Python tooling.
- `sudo npm -g` for system services unless you know the rollback path.

## Useful Cleanup Commands

```bash
# Debian, Ubuntu, Mint
sudo apt autoremove

# Fedora
sudo dnf autoremove

# Arch
sudo pacman -Rns package-name

# Flatpak unused runtimes
flatpak uninstall --unused
```

## Official Sources

- Flathub verification: [docs.flathub.org/docs/for-users/verification](https://docs.flathub.org/docs/for-users/verification)
- Flatpak setup: [flatpak.org/setup](https://flatpak.org/setup/)
- Arch AUR overview: [wiki.archlinux.org/title/Arch_User_Repository](https://wiki.archlinux.org/title/Arch_User_Repository)
- Fedora package management: [docs.fedoraproject.org](https://docs.fedoraproject.org/)
- Debian package management: [debian.org/doc/manuals/debian-reference/ch02.en.html](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html)
- openSUSE package management: [en.opensuse.org/Portal:Zypper](https://en.opensuse.org/Portal:Zypper)
