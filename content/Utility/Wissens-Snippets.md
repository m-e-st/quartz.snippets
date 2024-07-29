#### ASCII Tabelle

https://tools.piex.at/ascii-tabelle/

#### Gnome Zeichen

https://wiki.gnome.org/Design/Apps/CharacterMap

#### PDF Tools

2023-01-03: https://tools.pdf24.org/de/pdf-verschluesseln


#### Office Templates

https://dohliam.github.io/libreoffice-impress-templates/


### Google Fonts lokal hosten

Schöne Schriften | c't | Heise Magazine](https://www.heise.de/select/ct/2022/21/2224509084837524407)


### Firefox "same origin"-Prüfung abschalten

[Same-Origin-Policy im Firefox für lokale Dateien deaktivieren](https://seeseekey.net/archive/126538/ "Permalink zu Same-Origin-Policy im Firefox für lokale Dateien deaktivieren")

about:config
privacy.file_unique_origin


### Lorem ipsum in MS-Office
**Word kann Blind-Texte selbst erzeugen (Lorem)**

[Tipps](https://www.schieb.de/tipps) / Von [Jörg Schieb](https://www.schieb.de/author/admin "Alle Beiträge von Jörg Schieb ansehen") / 01. Apr. 2008 / [Word](https://www.schieb.de/tag/word)

Wer ein Layout plant oder eine Seite gestaltet, füllt Textbereiche gewöhnlich mit so genannten „Blindtexten“. Das sind sinnlose Textfragmente, die nur zeigen sollen, wie der Text im Layout später aussieht. Word kann auf Knopfdruck solche Blindtexte generieren: Word ist mit einer speziellen Funktion ausgestattet, die wahlweise deutsche oder lateinische Blindtexte generiert.

Hört sich verrückt an, funktioniert aber. Um Blindtexte in beliebiger Länge zu erzeugen, an den Anfang einer Zeile die folgende Formel eingeben:

=rand(x,y)

Wobei „x“ die Zahl der Absätze und „y“ die Anzahl der Sätze pro Absatz festlegt. Für zehn Absätze mit je drei Sätzen lautet die Formel:

=rand(10,3)

Nach Drücken der [Return]-Taste erscheint der Fülltext. Die Funktion eignet sich ideal, um das Layout eines Dokuments zu prüfen, ohne manuell Beispieltexte tippen oder kopieren zu müssen. Und wer statt deutschsprachiger Blindtexte lieber lateinische Absätze wünscht, kann auch die folgende Formel verwenden:

=lorem(x,y)

Übrigens: Sollte es nicht klappen und nach Drücken der [Return]-Taste kein Blindtext erscheinen, ist vermutlich die Option „Während der Eingabe ersetzen“ im Dialogfenster „AutoKorrektur-Optionen“ deaktiviert. Dann einfach die Funktion einschalten und die Formel erneut eingeben.
