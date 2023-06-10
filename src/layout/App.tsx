import { createContext, useState } from "react";
import Chat from "./Chat";
import Rooms from "./Rooms";
import User from "./User";
import Header from "./Header";

enum Display {
	CHAT,
	ROOMS,
	USER,
}
interface ISceneContextProps {
    setScene: React.Dispatch<React.SetStateAction<Display>>;
    scene: Display;
}
const SceneContext = createContext<ISceneContextProps | null>(null);
export default function App() {
	const [scene, setScene] = useState<Display>(Display.CHAT);
	//
	let classHandler;
	switch (scene) {
		case Display.USER:
			classHandler = "grid-cols-[1fr_0fr_0fr]";
			break;
		case Display.ROOMS:
			classHandler = "grid-cols-[0fr_1fr_0fr]";
			break;
		case Display.CHAT:
			classHandler = "grid-cols-[0fr_0fr_1fr]";
			break;
		default:
			break;
	}
	//
	return (
		<SceneContext.Provider value={{ setScene, scene }}>
			<div className="h-screen grid grid-rows-[min-content_1fr]">
				<Header />
				<div
					className={`grid transition-[grid-template-columns] ${classHandler}`}
				>
					<User />
					<Rooms />
					<Chat />
				</div>
			</div>
		</SceneContext.Provider>
	);
}
