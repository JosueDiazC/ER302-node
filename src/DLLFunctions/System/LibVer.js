import ref from "ref-napi";

var out = ref.types.int;
var outPtr = ref.refType(out)
var outPtrPtr = ref.refType(outPtr)

const LivBer = () => {
    return {
        lib_ver: ["int", [outPtrPtr]]
    }
} 

export default LivBer;