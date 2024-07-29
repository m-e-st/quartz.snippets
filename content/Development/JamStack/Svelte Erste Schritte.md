Update von Node v14 auf Node v18 war erforderlich
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
Quelle: https://github.com/nodesource/distributions/blob/master/README.md

---

Das Verzeichnis wird mit "SvelteKit" erstellt (über `npm`)
```bash
npm create svelte@latest firstapp
cd firstapp
npm install
npm run dev -- --open
```
Mit dem letzten Befehl startet ein neues Browserfentser auf http://localhost:5173/  
SvelteKit empfiehlt [Stackblitz](https://stackblitz.com)

Quelle: https://kit.svelte.dev/
und: https://svelte.dev/docs

Und an dieser Stelle endet das Experiemnt erst ein mal. 
`npm run build` funktioniert nicht und wirft eine Fehlermeldung aus.

---

