# macOS Apps & Package Managers

macOS app safety is mostly about source quality, update path, and permissions. A clean signed app from the developer is usually better than a repacked copy from a download site.

## Safer App Sources

| Source | Good for | Notes |
| :--- | :--- | :--- |
| App Store | Mainstream apps, family purchases, simple updates | Strong default for normal users. |
| Developer website | Pro tools, browsers, utilities | Prefer signed and notarized apps from the actual developer. |
| Homebrew | Command-line tools and many GUI casks | Best for developers and power users on supported macOS. |
| MacPorts | Unix tools, older Mac workflows, isolated `/opt/local` tree | Good alternative, especially when Homebrew support is not a fit. |
| TestFlight | Beta apps from known developers | Only join betas you actually trust. |

## Avoid

- Cracked apps, "pre-activated" DMGs, and repacked installers.
- Search-result download mirrors when the developer has an official site.
- Apps asking for Accessibility or Full Disk Access without a clear reason.
- Browser extensions from unknown publishers.
- Package manager one-liners copied from random blogs.

## Homebrew Basics

Install Homebrew only from the official Homebrew site or docs. On current Homebrew:

| Mac type | Default prefix |
| :--- | :--- |
| Apple silicon | `/opt/homebrew` |
| Intel Mac | `/usr/local` |

Common commands:

```bash
brew update
brew upgrade
brew install git
brew install --cask visual-studio-code
brew cleanup
brew doctor
```

Rules:

- Do not run `brew` with `sudo`.
- Keep Homebrew in the default prefix unless you have a strong reason.
- Prefer one package manager per toolchain.
- Use `brew doctor` when commands start resolving to the wrong binary.

## MacPorts Basics

MacPorts installs into `/opt/local` and uses `port`:

```bash
sudo port selfupdate
sudo port upgrade outdated
sudo port install git
```

Use MacPorts when you prefer its packaging style, need ports that are better maintained there, or are working with older macOS setups where Homebrew's supported baseline is not a good fit.

## App Removal

| App type | Clean removal |
| :--- | :--- |
| App Store app | Delete from Launchpad or Finder. |
| Direct app | Use the developer uninstaller if provided. |
| Homebrew formula | `brew uninstall name` |
| Homebrew cask | `brew uninstall --cask name` |
| MacPorts port | `sudo port uninstall name` |

Be careful with "cleaner" apps. They can remove shared data, browser profiles, license files, or helper tools you still need.

## Official Sources

- Gatekeeper and runtime protection: [support.apple.com/guide/security/sec5599b66df/web](https://support.apple.com/guide/security/gatekeeper-and-runtime-protection-sec5599b66df/web)
- Protecting against malware in macOS: [support.apple.com/guide/security/sec469d47bd8/web](https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web)
- Homebrew installation docs: [docs.brew.sh/Installation](https://docs.brew.sh/Installation.html)
- Homebrew FAQ: [docs.brew.sh/FAQ](https://docs.brew.sh/FAQ)
- MacPorts install guide: [macports.org/install.php](https://www.macports.org/install.php)

