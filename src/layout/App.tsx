import { useState } from "react";
import Chat from "./Chat";
import Rooms from "./Rooms";
import User from "./Users";

enum display{
    CHAT,
    ROOMS,
    USER
}
export default function App() {
    const [viewRooms , setViewRooms] = useState<display>(display.CHAT);
    //
    let classHandler;
    switch (viewRooms) {
        case display.USER:
            classHandler = "grid-cols-[1fr_0fr_0fr]";
            break;
        case display.ROOMS:
            classHandler = "grid-cols-[0fr_1fr_0fr]";
            break;
        case display.CHAT:
            classHandler = "grid-cols-[0fr_0fr_1fr]";
            break;
        default:
            break;
    }
    //
	return (
		<div className="h-screen grid grid-rows-[min-content_1fr]">
			<header className="bg-emerald-500">Header</header>
			<div className={`grid transition-[grid-template-columns] ${classHandler}`}>
                <User/>
				<Rooms/>
				<Chat/>
			</div>
		</div>
	);
}
