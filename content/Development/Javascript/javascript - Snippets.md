Best Tutoriel on IIFE: https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/

#### Zip with javascript

> https://stackoverflow.com/questions/8608724/how-to-zip-files-using-javascript
> 22. Nov. 2022

1.  Download jszip zip file from [http://github.com/Stuk/jszip/zipball/master](http://github.com/Stuk/jszip/zipball/master)
2. Extract the zip and find jszip.js file inside dist folder
3.  Import jszip.js file in your html file like below
    
    ```html
    <script type="text/javascript" src="jszip.js"></script>
    ```
    
4. Add below function in your code and call it
    
    ```js
    onClickDownload: function () {
        var zip = new JSZip();
        for (var i = 0; i < 5; i++) {
            var txt = 'hello';
            zip.file("file" + i + ".txt", txt);
        }
        zip.generateAsync({
            type: "base64"
        }).then(function(content) {
            window.location.href = "data:application/zip;base64," + content;
        });       
    }
    ```

>  It's a pretty bad idea to generate the output in Base64, and even a worse idea to use a Data URI like that. A waste of memory and CPU. Use a blob URL instead.
       
> Excellent, I changed the type to 'blob' and it worked like a charm! I used an anchor link on the page to trigger the download instead of changing the page url.
```js
var uriContent = URL.createObjectURL(contentBlob); 
var lnkDownload = document.getElementById('lnkDownload'); 
lnkDownload.download = 'MyDownload.zip'; 
lnkDownload.href = uriContent; 
lnkDownload.click();
```

#### Gender Detection

https://github.com/davidemiceli/gender-detection/blob/master/genders/female.js

#### Modals with CSS and Javascript

https://www.w3schools.com/howto/howto_css_modals.asp

