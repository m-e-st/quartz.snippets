https://quartz.jzhao.xyz/

Quartz is a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites. Thousands of students, developers, and teachers are [already using Quartz](https://quartz.jzhao.xyz/showcase) to publish personal notes, websites, and [digital gardens](https://jzhao.xyz/posts/networked-thought) to the web

##### Installation
```
git clone https://github.com/jackyzha0/quartz.git [folder]
cd [folder]
npm i
npx quartz create
```


> [!NOTE] Projekt einrichten
> Es muss im content-Ordner eine Datei `index.md` geben (mit kleinem `i`). Damit diese Seite eine ordentliche Überschrift hat, muss folgendes *frontmatter* benutzt werden
> ```
> ---
> title="Welcome to this project"
> ---
> ```

##### Konfiguration
- https://quartz.jzhao.xyz/configuration
- Datei: `quartz.config.ts`
- `pageTitle`: title of the site. This is also used when generating the RSS Feed for your site.
- `analytics`: what to use for analytics on your site. Values can be
	- `null`: don’t use analytics
- `locale`: used for [i18n](https://quartz.jzhao.xyz/features/i18n) and date formatting --> `de-DE`
- `baseUrl`: This is normally the deployed URL of your site (e.g. `quartz.jzhao.xyz`)
- `theme`: configure how the site looks.
	- `colors`: controls the theming of the site.
	    - `light`: page background
	    - `lightgray`: borders
	    - `gray`: graph links, heavier borders
	    - `darkgray`: body text
	    - `dark`: header text and icons
	    - `secondary`: link colour, current [graph](https://quartz.jzhao.xyz/features/graph-view) node
	    - `tertiary`: hover states and visited [graph](https://quartz.jzhao.xyz/features/graph-view) nodes
	    - `highlight`: internal link background, highlighted text and code
	    - `textHighlight`: markdown highlighted text background

##### Front Matter
- https://quartz.jzhao.xyz/authoring-content#syntax
```
- `title`: Title of the page. If it isn’t provided, Quartz will use the name of the file as the title.
- `description`: Description of the page used for link previews.
- `aliases`: Other names for this note. This is a list of strings.
- `tags`: Tags for this note.
- `draft`: Whether to publish the page or not. This is one way to make pages private in Quartz.
- `date`: A string representing the day the note was published. Normally uses `YYYY-MM-DD` format.
```

#### Run
https://quartz.jzhao.xyz/build

`npx quartz build --serve`

