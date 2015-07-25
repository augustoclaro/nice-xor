# nice-xor
Nice javascript xor key encryption.

## Installation:

```sh
npm install nice-xor
```

## How to use:

```javascript
var xor = require('nice-xor');

var text = 'this is a nice string test';
var key = 'nice key';

var encryptedText = xor.crypt(text, key);
console.log("'" + text + "' encrypted with '" + key + "' is: " + encryptedText);

var decryptedText = xor.decrypt(encryptedText, key);
console.log("'" + encryptedText + "' decrypted with '" + key + "' is: " + decryptedText);

var wrongDecryptedText = xor.decrypt(encryptedText, key);
console.log("'" + encryptedText + "' decrypted with 'wrong key' is: " + wrongDecryptedText);
```

## How it works

Internally, nice-xor converts your string and key to binary and performs an xor operation.
Because the resulting binary is not always a readable text when converted, it's converted to hexadecimal.

The decryption process is very similar, converting the hexadecimal back to binary and performing again the xor operation, then converting the resulting binary back to the original string.

Example:

For better understanding, let's manually encrypt the string 'nice' with the key 'xor':
The string 'nice' converted to binary is '01101110011010010110001101100101'.
The string 'xor' converted to binary is '011110000110111101110010'.

Firts, we align both binaries, repeating the key characteres until it has the same length as the string:

```sh
01101110011010010110001101100101
011110000110111101110010
```

Repeat the first 8 characteres of the key to align:

```sh
01101110011010010110001101100101
01111000011011110111001001111000
```

Then you perform the xor operation on the respective characteres of both strings, which means equal characters result to 0 and different characters result to 1:

```sh
01101110011010010110001101100101
01111000011011110111001001111000
----------------------------------------------------------
00010110000001100001000100011101
```

If you decode the resulting binary, you won't have a readable string, so finally convert it to hex:

```sh
1606111d
```

When you decode, it reverses all operations, transforming hex to binary, then performing the xor with the key (which means that any small difference on the key will result a totally different string) and then finally converting it again to text.
