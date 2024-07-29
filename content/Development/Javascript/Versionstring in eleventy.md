
https://docs.npmjs.com/cli/v10/commands/npm-version

```sh
git add .
git commit -m "$@"
git push origin main
npm version patch -m "$@"
```
 In den eleventy Programmen muss dann überall `{{ site.version }}` durch `{{ pkg.version }}` ersetzt werden, damit die Versionsnummer aus `package.json` verwendet wird.

Klassischerweise wird der Versionstring im Layout `base.njk` gesetzt und via CSS `::after` das Element mit dem id `versionstring` in `footer.njk` gesetzt.