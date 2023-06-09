import { ReactNode, createContext , useEffect, useState} from "react";

export interface IRoomContextProps {
    room : string
    loadingRoom : boolean
    setRoom : React.Dispatch<React.SetStateAction<string>>
    setLoadingRoom : React.Dispatch<React.SetStateAction<boolean>>
}
export const RoomContext = createContext<IRoomContextProps | null>(null);
export default function RoomProvider({children}:{children:ReactNode}){
    const [room , setRoom] = useState("North");
    const [loadingRoom , setLoadingRoom] = useState(false);
	//
    useEffect(() => {
		setLoadingRoom(true);
	} , [room]);
    //
    return (
        <RoomContext.Provider value={{room , setRoom , loadingRoom , setLoadingRoom}}>
			{children}
		</RoomContext.Provider>
    )
}