import ffi from "ffi-napi";
import ref from "ref-napi";
import ClosePort from "./DLLFunctions/System/ClosePort.js";
import InitCom from "./DLLFunctions/System/InitCom.js";
import LivBer from "./DLLFunctions/System/LibVer.js";
import Light from "./DLLFunctions/System/Light.js";
import Beep from "./DLLFunctions/System/Beep.js";
import M1Read from "./DLLFunctions/ISO14443A/M1Read.js";
import Request from "./DLLFunctions/ISO14443A/Request.js";

export var outNumber = ref.alloc("int");

export var outChar = ref.alloc("char");
export var outChar2 = ref.alloc("char");

export const functions = {
  ...LivBer(),
  ...InitCom(),
  ...ClosePort(),
  ...Light(),
  ...Beep(),
  // * ISO14443A functions
  ...M1Read(),
  ...Request(),
};

export var libm = ffi.Library("./MasterRD", functions);
