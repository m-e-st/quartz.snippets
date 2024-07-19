Hier wird die Einrichtung dieses Informationspools beschrieben.

> [!info] Die inhaltliche Struktur der Dokumentation ist in [[Readme]] beschrieben.

###### Dieser Informationspool ...
- ... kann über `nextcloud`-Kollektive aufgerufen werden --> [`index.md`](index)
- ... kann über Obsidian bearbeitet und benutzt werden --> vault: `~/cloud/ionos/Kollektive`
- ... kann über die Quartz-Blogseite angezeigt werden --> *host wird noch festgelegt.*

###### Dateien:
... auf der obersten Ebene
- [`index.md`](index) ist die Eingangsseite für Quartz
- [`Readme.md`](Readme) ist die Beschreibungsseite für `nextcloud`-Kollektive
- [`Einrichtung.md`](Einrichtung) ist **diese** Datei

Alle Verzeichnisse darunter sind (u.a.) einzelne `nextcloud`-Kollektive und können über die `nextcloud`-Kollektive-App bearbeitet werden. 



> [!caution] Achtung
> Anderungen durch Obsidian bzw. die `nextcloud`-Kollektive-App werden **nicht** automatisch in die Quartz-Blogseite übernommen. Eine Veröffentlichung erfolgt i.d.R erst mit dem nächsten Quartz-Generierungslauf (*Automatisierung steht noch aus*)

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