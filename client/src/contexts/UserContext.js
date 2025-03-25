import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    acessToken: '',
    userLoginHandler: () => null,
});