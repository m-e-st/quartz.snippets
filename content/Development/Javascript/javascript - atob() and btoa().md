---
date: 2022-11-21
tags:
  - javascript
  - code sample
---

### atob und btoa selbst gemacht

> Quelle: [www.a-coding-project.de](https://www.a-coding-project.de/ratgeber/javascript/artikel/quelltext-schuetzen)
> 21.11.2022
```js
var base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcd'+  
              'efghijklmnopqrstuvwxyz0123456789+/';  
  
function encode(decStr)  
{  
 var bits;  
 var dual;  
 var i = 0;  
 var encOut = '';  
 while(decStr.length >= i + 3)  
 {  
 bits = (decStr.charCodeAt(i++) & 0xff) <<16 |  
 (decStr.charCodeAt(i++) & 0xff) <<8 |  
 decStr.charCodeAt(i++) & 0xff;  
 encOut += base64s.charAt((bits & 0x00fc0000) >>18) +  
 base64s.charAt((bits & 0x0003f000) >>12) +  
 base64s.charAt((bits & 0x00000fc0) >> 6) +  
 base64s.charAt((bits & 0x0000003f));  
 }  
 if(decStr.length -i > 0 && decStr.length -i < 3)  
 {  
 dual = Boolean(decStr.length -i -1);  
 bits = ((decStr.charCodeAt(i++) & 0xff) <<16) |  
 (dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);  
 encOut += base64s.charAt((bits & 0x00fc0000) >>18) +  
 base64s.charAt((bits & 0x0003f000) >>12) +  
 (dual ? base64s.charAt((bits & 0x00000fc0) >>6) : '=') +  
 '=';  
}  
return(encOut);  
}

function decode(encStr)  
{  
 var bits;  
 var decOut = '';  
 var i = 0;  
 for(; i<encStr.length; i += 4)  
 {  
 bits = (base64s.indexOf(encStr.charAt(i)) & 0xff) <<18 |  
 (base64s.indexOf(encStr.charAt(i +1)) & 0xff) <<12 |  
 (base64s.indexOf(encStr.charAt(i +2)) & 0xff) << 6 |  
 base64s.indexOf(encStr.charAt(i +3)) & 0xff;  
 decOut += String.fromCharCode((bits & 0xff0000) >>16, (bits & 0xff00) >>8, bits & 0xff);  
 }  
 if(encStr.charCodeAt(i -2) == 61)  
 {  
 return(decOut.substring(0, decOut.length -2));  
 }  
 else if(encStr.charCodeAt(i -1) == 61)  
 {  
 return(decOut.substring(0, decOut.length -1));  
 }  
 else {return(decOut)};  
}
```
