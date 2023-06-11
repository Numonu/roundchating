import { ReactNode, createContext , useState} from "react";

export interface IRoomContextProps {
    room : string
    setRoom : React.Dispatch<React.SetStateAction<string>>
}
export const RoomContext = createContext<IRoomContextProps | null>(null);
export default function RoomProvider({children}:{children:ReactNode}){
    const [room , setRoom] = useState<string>("Global");
	//
    return (
        <RoomContext.Provider value={{room , setRoom}}>
			{children}
		</RoomContext.Provider>
    )
}