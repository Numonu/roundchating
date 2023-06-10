import { useState } from "react";

enum display{
    CHAT,
    ROOMS,
    USER
}
export default function App() {
    const [viewRooms , setViewRooms] = useState<display>(display.USER);
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
				<div className="bg-blue-500 overflow-hidden">
                    Profile Aside
                    <br />
                    <button onClick={() => setViewRooms(display.ROOMS)}>Show Rooms</button>
                </div>
				<div className="bg-pink-500 overflow-hidden">
                    Rooms Aside
                    <br />
                    <button onClick={() => setViewRooms(display.USER)}>Show User</button>
                    <br />
                    <button onClick={() => setViewRooms(display.CHAT)}>Show Chat</button>
                </div>
				<div className="bg-emerald-500 grid grid-rows-[min-content_1fr_min-content] overflow-hidden">
					<div className="bg-red-500">Search</div>
					<div className="bg-sky-500">
                        Chat Aside
                        <br />
                        <button onClick={() => setViewRooms(display.ROOMS)}>Show Rooms</button>
                    </div>
					<div className="bg-indigo-700">Input</div>
				</div>
			</div>
		</div>
	);
}
