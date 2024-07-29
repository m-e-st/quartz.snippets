## Nutzung der Nextcloud-Notizen mit Obsidian

Umbenennen von *.txt nach *.md

`find . -name '*.txt' -exec sh -c 'mv "$0" "${0%.txt}.md"' {} \;`

Umstellen der Standard-Extension der Next-Cloud-Notizen.
[GITHUB Erläuterungen](https://github.com/nextcloud/notes/issues/257)
Notizen Einstellungen  --> Dateiendung für neue Notizen --> .md