---
date: 2024-07-33
---

Hier wird die Einrichtung dieses Informationspools **snippets** beschrieben.

### Anlage

- Die Quartz-Umgebung ist im WWW-Development-Verzeichnis `.../quartz/snippets` abgelegt. Der Inhalte-Order `contents` ist auf das Nexcloud-Library-Verzeichnis `snippets` symbolisch verlinkt.
- Die Quartz-Umgebung wurde in das *eigene* Github-Repository `quartz.snippets` abgelegt --> [quartz-Anleitung Repository](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository)
- Das Github-Repositiory wurde gemäß mit einer Cloudflare-Page verbunden --> [quartz-Anleitung Hosting](https://quartz.jzhao.xyz/hosting) 
- Anbindung an eigene Subdomain
	- Cloudflare hostname: **quartz-snippets.pages.dev**.
	- [cloudflare Anleitung](https://developers.cloudflare.com/pages/configuration/custom-domains/)
	- **snippets.hwn.de** --> "My DNS provider"
	- CNAME-Record beim eigenen DNS-Provider angelegt.
	- Zertifikat wird automatisch von Cloudflare erstellt und eingespielt.

> [!caution] Offene Punkte
>  - Persönliches Farbschema erarbeiten.

###### Dateien:
... auf der obersten Ebene
- [`index.md`](infothek/index.md) ist die Eingangsseite für Quartz

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
	- `baseUrl: "quartz-snippets.pages.dev"`
	- `Plugin.ContentIndex({ ` ...  `enableRSS: false })`
	
`.../quartz/i18n/locales/de-DE.ts`
	- `readingTime:` -> `Lesezeit ${minutes} min`