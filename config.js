import ffi from "ffi-napi";
import ref from "ref-napi";

var out = ref.types.int;
var outPtr = ref.refType(out)
var outPtrPtr = ref.refType(outPtr)
export var outNumber  = ref.alloc('int');

var charOut = ref.types.char;
var charOutPtr = ref.refType(charOut);
var charOutPtrPtr = ref.refType(charOutPtr);
export var outChar = ref.alloc('char');
export var outChar2 = ref.alloc('char');

export var libm = ffi.Library("./MasterRD", {
  lib_ver: ["int", [outPtrPtr]],
  rf_init_com: ["int", ["int", "long"]],
  rf_ClosePort: ['int', []],
  rf_light: ['int', ['int','int']],
  rf_beep: ['int', ['int','int']],
  rf_M1_read: ['int', ['short','char',charOutPtrPtr,charOutPtrPtr]],
  // rf_M1_read: ['int', ['short','char']],
  rf_request: ['int', ['int','char','int']],
});