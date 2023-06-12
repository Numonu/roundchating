import { UserInfo, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext , useState} from "react";
import { auth } from "../firebase/config";

export interface IUserContextProps {
    user : UserInfo | null;
}
export const UserContext = createContext<IUserContextProps | null>(null);
export default function UserProvider({children}:{children:ReactNode}){
    const [user , setUser] = useState<UserInfo | null>(null);
	//
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
    });
    return (
        <UserContext.Provider value={{user}}>
			{children}
		</UserContext.Provider>
    )
}