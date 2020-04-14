
const Payment = () =>{
let secret = 'PkW64zMe5NVdrlPVNnjo2Jy9nOb7v1Xg' // Secret provided by Hesabe
      let ivCode = '5NVdrlPVNnjo2Jy9' // IV provided by Hesabe

key = aesjs.utils.utf8.toBytes(secret);
iv = aesjs.utils.utf8.toBytes(ivKey);

let payment = new hesabeCrypt(key, iv);

let encrypted = payment.encryptAes('XXXX') // Ecnryption

let decrypted = payment.decryptAes(encrypted);
}
export default Payment