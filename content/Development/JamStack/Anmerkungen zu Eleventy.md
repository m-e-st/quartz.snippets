

https://www.raresportan.com/eleventy-part-five/

### html-minifier 4.0.0

https://www.npmjs.com/package/html-minifier

### Aufsetzen einer neuen Eleventy-Umgebung

https://www.11ty.dev/docs/getting-started/

```bash
mkdir eleventy-sample
cd eleventy-sample
npm init -y

eleventy
npm install

```


```
mkdir src
mkdir src/_data
mkdir src/_includes
mkdir src/_layouts
mkdir src/static
mkdir src/static/lib
mkdir src/static/res
mkdir src/static/img
echo "/* main.css */" >src/static/res/main.css
echo "/* main.js */" >src/static/res/main.js
```


##### package.json

Enthält die Unterstützung für
- **htmlminifier**
- **lucideIcons**

```json
{
  "name": "...",
  "version": "0.1.0",
  "description": "...",
  "main": ".eleventy.js",
  "scripts": {
    "clean": "del public",
    "dev": "eleventy --serve --watch",
    "build": "ELEVENTY_ENV=production eleventy",
    "postbuild": "./uglify.sh",
    "browse": "firefox -p \"eleventy\" -browser -new-tab localhost:8080"
  },
  "author": "Michael Stumpp",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/m-e-st/.../issues"
  },
  "homepage": "https://github.com/m-e-st/...#readme",
  "dependencies": {
    "@11ty/eleventy": "^1.0.2",
    "@grimlink/eleventy-plugin-lucide-icons": "^1.0.4",
    "del-cli": "^5.0.0",
    "html-minifier": "^4.0.0"
  }
}
```

##### .eleventy.js

Enthält die Unterstützung für
- **htmlminifier**
- **lucideIcons**

```js
const htmlMinifier = require ('html-minifier');
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function (eleventyConfig) {

    //~ eleventyConfig.addPlugin(lucideIcons, {
        //~ "class": "custom-class",
        //~ "width": 24,
        //~ "height": 24,
        //~ "stroke": "currentColor",
        //~ "stroke-width": 2
    //~ });
    eleventyConfig.addPlugin(lucideIcons);

	eleventyConfig.addTransform ('htmlMinifier', content => {
		if (process.env.ELEVENTY_ENV === 'production') {
			return htmlMinifier.minify (content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true,
			});
		}
		return content;
	});
  	
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static/**");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	
	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "public",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true	// 1.1 Enable eleventy to pass dirs specified above
	};
};
```

### Some default files in ./src

```js
module.exports = {
	title: "...",
	description: "...",
	caption: "...",
	version : "0.1.0",
	mail: "michael@stumpp.name",

	url : {
		home: "/",
		main: "https://web.stumpp.name",
		impressum: "/impressum.html",
		info: "https://web.stumpp.name",
		this: "https://web.stumpp.name"
	},
	author: {
		name: "Michael Stumpp",
		year: 2023,
		hide: false,
		mail: "michael@stumpp.name",
		code: "&#x6d;&#x69;&#x63;&#x68;&#x61;&#x65;&#x6c;&#x40;&#x73;&#x74;&#x75;&#x6d;&#x70;&#x70;&#x2e;&#x6e;&#x61;&#x6d;&#x65;"
	}, 

	prod:  process.env.ELEVENTY_ENV === 'production',
	stage: process.env.ELEVENTY_ENV !== 'production'
}
