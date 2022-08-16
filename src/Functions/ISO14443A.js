import ref from "ref-napi";
import { libm } from "../config.js";

export const Request = (icDev, model) => {
  const outChar = ref.alloc("char");

  const status = libm.rf_request(icDev, model, outChar);

  const pTagType = outChar.deref();
  
  return { status, outPuts: { pTagType } };
};

export const M1Read = (icDev, block) => {
  const outChar = ref.alloc("char");
  const outChar2 = ref.alloc("char");
  const status = libm.rf_M1_read(icDev, block, outChar, outChar2);
  const pData = outChar.deref();
  const pLen = outChar2.deref();
  return { status, outPuts: { pData, pLen } };
};
