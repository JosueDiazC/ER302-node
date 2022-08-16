import ref from "ref-napi";

var charOut = ref.types.char;
var charOutPtr = ref.refType(charOut);
var charOutPtrPtr = ref.refType(charOutPtr);

const M1Read = () => {
  return {
    rf_M1_read: ["int", ["short", "char", charOutPtrPtr, charOutPtrPtr]],
  };
};

export default M1Read;
