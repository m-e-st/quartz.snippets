## Referenzen

### Kryptographie

https://crypto.stanford.edu/sjcl/ ==> http://bitwiseshiftleft.github.io/sjcl/

https://stackoverflow.com/questions/11982073/encrypt-in-javascript-with-sjcl-and-decrypt-in-php

```php
var sjcl = require('./sjcl');
console.log(sjcl.encrypt('a_key', 'secured_message', { mode: 'ccm', iv: sjcl.random.randomWords(3, 0) }));
```

To get:

```json
{"iv":"YAKkgmNCcVawQtiB","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"CwEDE4PXBzY=","ct":"pJ7nmnAGXiC9AD29OADlpFdFl0d/MxQ="}
```

So, given:

```swift
$password = 'a_key';
$input = json_decode('{"iv":"YAKkgmNCcVawQtiB","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"CwEDE4PXBzY=","ct":"pJ7nmnAGXiC9AD29OADlpFdFl0d/MxQ="}', true);
```

We can decrypt in PHP 7.1.0 as follows:

```perl
$digest   = hash_pbkdf2('sha256', $password, base64_decode($input['salt']), $input['iter'], 0, true);
$cipher   = $input['cipher'] . '-' . $input['ks'] . '-' . $input['mode'];
$ct       = substr(base64_decode($input['ct']), 0, - $input['ts'] / 8);
$tag      = substr(base64_decode($input['ct']), - $input['ts'] / 8);
$iv       = base64_decode($input['iv']);
$adata    = $input['adata'];

$dt = openssl_decrypt($ct, $cipher, $digest, OPENSSL_RAW_DATA, $iv, $tag, $adata);
var_dump($dt);
```