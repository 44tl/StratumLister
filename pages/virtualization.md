# Virtualization Basics

Virtualization allows you to run multiple operating systems on a single physical machine. This is incredibly useful for testing software, isolating malware, or running incompatible applications.

## Common Hypervisors

A hypervisor is the software that creates and runs virtual machines (VMs).

### Type 2 Hypervisors (Runs on your OS)
These are the easiest to start with.
- **VirtualBox:** Free and open-source. Great for beginners, supports many guest OS types.
- **VMware Workstation Player:** Free for personal use. Often provides better graphical performance than VirtualBox.
- **Parallels Desktop:** The premium choice for macOS users (especially Apple Silicon) to run Windows or Linux.

### Built-in Options
- **Hyper-V (Windows):** Built into Windows Pro/Enterprise. Excellent performance for Windows guests.
- **Windows Sandbox:** A lightweight desktop environment to safely run applications in isolation. It resets completely when closed.
- **KVM (Linux):** Kernel-based Virtual Machine. Built into the Linux kernel, offering near-native performance. Often managed via `virt-manager`.

## Best Practices for VMs
1. **Allocate Resources Wisely:** Don't give a VM all your CPU cores or RAM. Leave enough for your host OS.
2. **Use Snapshots:** Before making a risky change or running suspicious software in a VM, take a snapshot. You can instantly revert if something goes wrong.
3. **Guest Additions / Tools:** Always install the hypervisor's guest tools (e.g., VirtualBox Guest Additions) for better resolution, clipboard sharing, and performance.
4. **Network Isolation:** If testing malware, configure the VM's network adapter to 'Host-Only' or disconnect it entirely to prevent it from reaching your local network.
