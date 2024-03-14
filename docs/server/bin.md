# Binary Installation

## Preface

Currently, binary downloads for all versions are available. Please visit GitHub for details.

Currently, only SQLite is supported as the database. Support for other databases will be provided in the future.

## Installation Steps  (Assuming the binary file you downloaded is named getneko)
1.Check if the environment requirements are met.

2.Download the binary file.

3.Use the command `cd` to navigate to the directory you just created.

4.Grant executable permissions with `chmod +x ./getneko` (Linux only).

5.Run the binary file `./getneko`.

Note: The default port is 61223, which can be specified using the `-port` flag. If you need to view the Swagger documentation, please add the `-doc` flag. The URL will be `http://ip:port/swagger/index.html`.
