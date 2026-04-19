# macOS Terminal & Homebrew

Terminal is powerful because it can change the system quickly. Keep commands simple, understand the target path, and avoid privilege escalation unless it is actually needed.

## Terminal First Steps

| Task | Command |
| :--- | :--- |
| Show current folder | `pwd` |
| List files | `ls` |
| Change folder | `cd path` |
| Show hidden files in a listing | `ls -la` |
| Find command path | `which name` |
| Show shell | `echo $SHELL` |
| Check macOS version | `sw_vers` |

macOS uses zsh as the default interactive shell on modern versions. Keep shell customizations small until you understand `.zshrc`, `.zprofile`, and `PATH`.

## Xcode Command Line Tools

Many developer tools need Apple's command line tools:

```bash
xcode-select --install
```

If installs fail after a macOS update, open Xcode once if installed, accept license prompts, and rerun toolchain setup.

## Homebrew Install Notes

Use the official installer from Homebrew. Current default prefixes:

| Mac | Prefix |
| :--- | :--- |
| Apple silicon | `/opt/homebrew` |
| Intel | `/usr/local` |

Apple silicon shells often need Homebrew added to shell startup:

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Confirm:

```bash
brew --prefix
brew doctor
```

## Daily Homebrew Commands

```bash
brew update
brew upgrade
brew outdated
brew install wget
brew install --cask rectangle
brew cleanup
brew doctor
```

For background services installed through Homebrew:

```bash
brew services list
brew services start name
brew services stop name
```

## PATH Sanity

If the wrong tool runs:

```bash
which python3
which git
echo $PATH
```

Common order for Apple silicon users is Homebrew's `/opt/homebrew/bin` before system paths when you intentionally want Homebrew tools. Avoid stuffing many duplicate paths into `.zshrc`.

## Sudo Rules

- `sudo` is for system administration, not normal package installs.
- Do not run `brew` with `sudo`.
- Read commands before pasting them.
- Be suspicious of commands that delete recursively, change ownership broadly, or disable security features.

## Useful Safe Commands

```bash
diskutil list
tmutil listbackups
system_profiler SPHardwareDataType
softwareupdate --list
softwareupdate --list-full-installers
```

Do not run destructive `diskutil`, `rm -rf`, or ownership commands unless you understand the exact path and have a backup.

## Official Sources

- Download and install macOS using Terminal: [support.apple.com/102662](https://support.apple.com/en-us/102662)
- Homebrew installation docs: [docs.brew.sh/Installation](https://docs.brew.sh/Installation.html)
- Homebrew FAQ: [docs.brew.sh/FAQ](https://docs.brew.sh/FAQ)
- MacPorts install guide: [macports.org/install.php](https://www.macports.org/install.php)

