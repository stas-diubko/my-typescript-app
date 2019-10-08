import { RegisterActions, DoRegister } from "./types";

export function doInit(data: DoRegister) {
  return { type: RegisterActions.DO_REGISTER, data};
}