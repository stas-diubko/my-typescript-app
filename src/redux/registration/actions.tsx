import { RegisterActions, DoRegister } from "./types";

const prefix = "@@register";

export function doInit(data: DoRegister) {
  return { type: `${prefix}/${RegisterActions.DO_REGISTER}`,
   data};
}