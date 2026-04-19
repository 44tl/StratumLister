# macOS Device Picker

Pick a Mac by support path, memory, storage, repair state, and ownership status. The chip name matters, but it is not the whole purchase.

## Quick Recommendation

| Situation | Better pick | Why |
| :--- | :--- | :--- |
| General laptop | Apple silicon MacBook Air with 16GB+ RAM | Silent, efficient, fast enough for most users, and on the main support path. |
| Heavy creative/dev work | MacBook Pro, Mac Studio, or higher-memory Mac mini | Better sustained performance, more ports, and higher memory ceilings. |
| Budget desktop | Apple silicon Mac mini | Strong value if you already have monitor, keyboard, and mouse. |
| Used Mac | Newest Apple silicon model you can afford | Better update runway and battery efficiency than most Intel Macs. |
| Intel-only workflow | Late Intel Mac only if required | Boot Camp, old plugins, old lab gear, or x86 virtualization can justify Intel. |
| Unsupported experiment | Spare Intel Mac with good backup | OpenCore Legacy Patcher is useful, but it adds maintenance risk. |

## Practical Minimums

| Spec | Minimum | Better target |
| :--- | :--- | :--- |
| RAM | 8GB only for light browsing/docs | 16GB+ for a Mac you want to keep. |
| Storage | 256GB only if most data is external/cloud | 512GB+ for normal users; 1TB+ for media/dev work. |
| Chip | M1 or newer for most users | Newer M-series chip if budget allows. |
| Battery | Under 80% health means budget for service | High health and normal cycle count. |
| OS support | Compatible with current macOS if daily-use | Current macOS plus several years of likely headroom. |

## Used Mac Checklist

Before money changes hands:

- Open System Settings and confirm there is no management or MDM profile you do not recognize.
- Confirm Find My / Activation Lock is removed by the seller.
- Check the exact model in About This Mac and compare it with Apple's macOS compatibility list.
- Check battery health and cycle count on laptops.
- Inspect ports, keyboard, speakers, camera, microphone, Wi-Fi, Bluetooth, Touch ID, and display.
- Run Apple Diagnostics if possible.
- Ask for original receipt or proof of ownership on expensive units.
- Wipe and reinstall before using it with your accounts.

## Apple Silicon vs Intel

| Area | Apple silicon | Intel |
| :--- | :--- | :--- |
| Updates | Best current path. | Nearing or past the main support path depending on model. |
| Battery | Much better on laptops. | Usually worse, especially older models. |
| Windows | Virtualized ARM Windows only. | Boot Camp support on many Intel Macs. |
| Legacy x86 tools | Rosetta helps many apps, not kernel extensions or all low-level tools. | Native x86 compatibility. |
| Linux | Improving but model dependent. | Matureer Linux support on many older models. |

## Red Flags

- "Locked but easy to unlock."
- "Company Mac, but they forgot to remove management."
- Very low price with no charger, no proof, and no reset.
- Swollen battery, display coating damage, liquid marks, dead ports, or broken Touch ID.
- Seller refuses to erase it in front of you.
- Intel Mac sold as "same as M-series" for modern battery life or long-term updates.

## Official Sources

- macOS Tahoe compatibility: [support.apple.com/122867](https://support.apple.com/en-us/122867)
- Latest macOS versions: [support.apple.com/109033](https://support.apple.com/en-us/109033)
- Remove Activation Lock: [support.apple.com/HT201441](https://support.apple.com/en-us/HT201441)
- Apple Diagnostics: [support.apple.com/102550](https://support.apple.com/en-us/102550)
