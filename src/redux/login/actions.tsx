import { LoginRequest, LoginActions } from "./types";

export function doLogin(data: LoginRequest) {
    return { type: LoginActions.DO_LOGIN, data };
}