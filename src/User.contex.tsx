import { createContext, useContext } from "react";

export interface UserContextData {
  firstName: string;
  lastName: string;
  username: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setUsername: (username: string) => void;
}

export const UserContextDefaultValue: UserContextData = {
  firstName: "",
  lastName: "",
  username: "",
  setFirstName: (firstName: string) => {},
  setLastName: (lastName: string) => {},
  setUsername: (username: string) => {},
};

export const UserContext = createContext<UserContextData>(UserContextDefaultValue);
export const useUserContext = () => useContext(UserContext);
