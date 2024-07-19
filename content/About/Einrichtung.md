Hier wird die Einrichtung dieses Informationspools **snippets** beschrieben.

### Anlage

- Die Quartz-Umgebung ist im WWW-Development-Verzeichnis `.../quartz/snippets` abgelegt. Der Inhalte-Order `contents` ist auf das Nexcloud-Library-Verzeichnis `snippets` symbolisch verlinkt.
- Die Quartz-Umgebung wurde gemäß [quartz-Anleitung](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository) in das *eigene* Github-Repository `quartz.snippets` abgelegt.
- Das Github-Repositiory wurde gemäß [quartz-Anleitung](https://quartz.jzhao.xyz/hosting) mit einer Cloudflare-Page verbunden.

> [!todo] Anbindung an eine eigene Subdomain,

> [!todo] Persönliches Farbschema erarbeiten.



###### Dateien:
... auf der obersten Ebene
- [`index.md`](index) ist die Eingangsseite für Quartz
- [`Readme.md`](Readme) ist die Beschreibungsseite für `nextcloud`-Kollektive

... [[About]]
- [`Einrichtung.md`](Einrichtung) ist **diese** Datei


> [!caution] Achtung
> Anderungen durch Obsidian werden **nicht** automatisch in die Quartz-Blogseite übernommen. Eine Veröffentlichung erfolgt i.d.R erst mit dem nächsten Quartz-Generierungslauf (*Automatisierung steht noch aus*)

### Links
- https://quartz.jzhao.xyz/
- https://quartz.jzhao.xyz/configuration

### Modifikationen

`.../quartz.config.ts`
	- `pageTitle: "📒 Dokumentation"`
	- `analytics: { }`
	- `locale: "de-DE"`

`.../quartz/i18n/locales/de-DE.ts`
	- `readingTime:` -> `Lesezeit ${minutes} min`