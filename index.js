import { libm, outChar, outChar2 } from "./config.js";

// console.log("ver");
// console.log(libm.lib_ver(outNumber));



// let libVer = outNumber.deref();
// console.log(outNumber)

// console.log(libVer)

console.log("conectar");
console.log(libm.rf_init_com(3,115200));
// console.log("close");
// console.log(libm.rf_ClosePort());
// console.log("color");
// console.log(libm.rf_light(0,1));
// console.log(libm.rf_beep(0,35));
console.log("leer");
console.log(libm.rf_M1_read(0,0,outChar,outChar2));
// console.log(libm.rf_M1_read(0,8));
// var x = 63
// var n = 0
// while (n<x+1){
//   console.log("prueba: " + n)
// console.log(libm.rf_M1_read(0,n,outChar,outChar2));
//   n = n+1
// }
// let char = outChar.deref();
// let char2 = outChar2.deref();
// console.log("salidas")
// console.log(char);
// console.log(char2);
// console.log(libm.rf_request(0,'REQ_ALL',data));
