# Configuration requirement

## Database

Currently, only SQLite is supported. The source code already includes a database tool built with Go.

## Hardware requirement

Currently supported systems and architectures include:

| system  | structure                                            |
| ------- | ---------------------------------------------------- |
| windows | amd64(x86-64) , arm64                                |
| linux   | i386(x86-32) , amd64(x86-64) , arm , arm64 , riscv64 |
| macos   | amd64(x86-64) , arm64                                |

Note: Compatibility testing has only been performed on amd64(x86-64) Windows and amd64(x86-64) Linux. If you encounter issues running on your device, please raise an issue on GitHub.