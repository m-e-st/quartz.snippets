---
tags:
  - javascript
  - solution
  - jam stack
---

Dieses Problem tritt bei allen meinen Eleventy-Projekten auf, welche html-minifier zur Kompression nutzen. Zur Auflösung ist es notwendig, von der nicht mehr unterstützten NLM `html-minifier` auf das Drop-In-Replacement `html-minifier-terser` zu wechseln 

### Problem

> [!bug]  html-minifier has an unfixable bug

```
# npm audit report

html-minifier  *
Severity: high
kangax html-minifier REDoS vulnerability - https://github.com/advisories/GHSA-pfq8-rq6v-vf5m
No fix available
node_modules/html-minifier

1 high severity vulnerability

Some issues need review, and may require choosing
a different dependency.
```
---

### Lösung

- Datei `.eleventy.js`
```

```

- Datei `.pakcage.json`

- Befehle
```sh
npm remove html-minifier
npm install html-minifier-terser
```

### Referenzen

[Solution from Github](https://github.com/kangax/html-minifier/issues/1135): **switch to html-minifier-terser**
NPM Libraries
- https://www.npmjs.com/package/html-minifier
- https://www.npmjs.com/package/html-minifier-terser
- https://github.com/terser/html-minifier-terser/issues/37 --> Differences *the difference is that html-minifier-terser uses terser instead of uglify-js to support ES6 and newer.*