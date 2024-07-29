

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
[Solution from Github](https://github.com/kangax/html-minifier/issues/1135): **switch to html-minifier-terser**
NPM Libraries
- https://www.npmjs.com/package/html-minifier
- https://www.npmjs.com/package/html-minifier-terser
- https://github.com/terser/html-minifier-terser/issues/37 --> Differences *the difference is that html-minifier-terser uses terser instead of uglify-js to support ES6 and newer.*