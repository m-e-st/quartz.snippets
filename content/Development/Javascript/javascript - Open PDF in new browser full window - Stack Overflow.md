---
date: 2022-10-31
tags:
  - javascript
  - code sample
---

#### Open PDF locally with javascript

```js
function base64ToArrayBuffer(data) { 
	const bString = window.atob(data); 
	const bLength = bString.length; 
	const bytes = new Uint8Array(bLength); 
	for (let i = 0; i < bLength; i++) { 
		bytes[i] = bString.charCodeAt(i); 
	} 
	return bytes; 
} 
function base64toPDF(base64EncodedData, fileName = 'file') { 
	const bufferArray = base64ToArrayBuffer(base64EncodedData); 
	const blobStore = new Blob([bufferArray], { type: 'application/pdf' }); 
	if (window.navigator && window.navigator.msSaveOrOpenBlob) { 
		window.navigator.msSaveOrOpenBlob(blobStore); 
		return; 
	} 
	const data = window.URL.createObjectURL(blobStore); 
	const link = document.createElement('a'); 
	document.body.appendChild(link); 
	link.href = data; link.download = `${fileName}.pdf`; 
	link.click(); 
	window.URL.revokeObjectURL(data); 
	link.remove(); 
}
```

[javascript - Open PDF in new browser full window - Stack Overflow](https://stackoverflow.com/questions/4735968/open-pdf-in-new-browser-full-window)