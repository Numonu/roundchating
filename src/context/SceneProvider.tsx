import { ReactNode, createContext, useState } from "react";

export enum Display {
	CHAT = "chat",
	ROOMS = "rooms",
	USER = "user",
}
export interface ISceneContextProps {
    setScene: React.Dispatch<React.SetStateAction<Display>>;
    classHandler:string;
    scene: Display;
}
export const SceneContext = createContext<ISceneContextProps | null>(null);

export default function SceneProvider({children}:{children:ReactNode}){
    const [scene, setScene] = useState<Display>(Display.CHAT);
    //
	let classHandler;
	switch (scene) {
		case Display.USER:
			classHandler = "grid-cols-[1fr_0fr_0fr] sm:grid-cols-[1.5fr_0fr_2fr] xl:grid-cols-[1.5fr_1.5fr_3fr]";
			break;
		case Display.ROOMS:
			classHandler = "grid-cols-[0fr_1fr_0fr] sm:grid-cols-[0fr_1.5fr_2fr] xl:grid-cols-[1.5fr_1.5fr_3fr]";
			break;
		case Display.CHAT:
			classHandler = "grid-cols-[0fr_0fr_1fr] sm:grid-cols-[0fr_0fr_2fr] xl:grid-cols-[1.5fr_1.5fr_3fr]";
			break;
		default:
            classHandler = "grid-cols-[0fr_0fr_1fr]";
			break;
	}
	//
    return (
        <SceneContext.Provider value={{ setScene, scene , classHandler }}>
			{children}
		</SceneContext.Provider>
    )
}