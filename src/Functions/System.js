import { libm } from "../config.js";

export const InitCom = (portNumber, baudRate = 115200) => {
  return libm.rf_init_com(portNumber, baudRate);
};

export const Beep = (icDev, mSec) => {
  return libm.rf_beep(icDev, mSec);
};
