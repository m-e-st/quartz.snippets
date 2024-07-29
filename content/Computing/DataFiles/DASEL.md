Dasel (short for data-selector) allows you to query and modify data structures using selector strings. Comparable to [jq](https://github.com/stedolan/jq) / [yq](https://github.com/kislyuk/yq), but supports JSON, YAML, TOML, XML and CSV with zero runtime dependencies.

- https://github.com/TomWright/dasel
- https://daseldocs.tomwright.me/
- https://lindevs.com/install-dasel-on-ubuntu


````bash
sudo wget -qO /usr/local/bin/dasel https://github.com/TomWright/dasel/releases/latest/download/dasel_linux_amd64
sudo chmod a+x /usr/local/bin/dasel
dasel --version
```