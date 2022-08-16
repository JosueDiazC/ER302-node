import ByteBuffer from "byte";
import { Request } from "../Functions/ISO14443A.js";

export const Test1 = () => {
  RequestOption();
};


const RequestOption = () => {
  var bb = ByteBuffer.allocate(1024);
  bb.putChar('0x26');
  const response = Request(0,0x26);
  console.log("Estatus:")
  console.log(response.status)
}
