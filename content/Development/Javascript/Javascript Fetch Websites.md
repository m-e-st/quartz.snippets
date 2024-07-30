---
date: 2022-10-31
tags:
  - javascript
  - code sample
---

### How To Run Curl In Javascript With Code Examples

[How To Run Curl In Javascript With Code Examples](https://www.folkstalk.com/2022/07/how-to-run-curl-in-javascript-with-code-examples.html)

```javascript
var url = "www.yahoo.com"; 
var xhr = new XMLHttpRequest(); 
xhr.open("GET", url); 
xhr.onreadystatechange = function () { 
	if (xhr.readyState === 4) { 
		console.log(xhr.status); 
		console.log(xhr.responseText); 
	}
}; 
xhr.send();
```

### Fetch Explanations

https://www.mediaevent.de/javascript/fetch.html

### Check Online with fetch
https://stackoverflow.com/questions/5224197/javascript-check-if-server-is-online

```javascript
function checkOnline(url, callback) {
	const timeout = 2000;
	const controller = new AbortController();
	const signal = controller.signal;
	const options = { mode: 'no-cors', signal };
	return fetch(url, options)
		.then(setTimeout(() => { controller.abort() }, timeout))
		.then(response => callback(url, true))
		.catch(error => callback(url, false));
}
```

### Check Online with Image
[Javascript: Check if server is online? - Stack Overflow](https://stackoverflow.com/questions/5224197/javascript-check-if-server-is-online)

```js
function checkServerStatus(callback, fqdn, imagepath="/enteliweb/images/refresh.png") {
    let img = new Image();
    img.onload = function() { callback(fqdn, true); };
    img.onerror = function() { callback(fqdn, false); };
    img.src = "https://" + fqdn + imagepath;
}
```