# Network Troubleshooting

Use this when websites, game servers, Discord, DNS, or downloads are unreliable.

## Quick Checks

1. Reboot the router and PC.
2. Test another device on the same network.
3. Test wired Ethernet if possible.
4. Disable VPN temporarily.
5. Try another DNS provider.
6. Check whether only one app or every app is affected.

## Common Fixes

| Problem | First Fix |
| --- | --- |
| DNS failures | Change DNS, flush cache |
| High game latency | Use wired connection, close downloads |
| Packet loss | Test another cable, router port, or Wi-Fi band |
| VPN kills internet | Disable kill switch, reconnect, check DNS |
| Store or Windows Update fails | Disable proxy/VPN and reset network stack |

## Useful Commands

```powershell
ipconfig /flushdns
ping 1.1.1.1
ping example.com
tracert example.com
netsh winsock reset
```

Reboot after `netsh winsock reset`.

## Avoid

- Random "network optimizer" registry packs.
- Disabling IPv6 globally without a specific reason.
- Changing router firewall settings without notes.
