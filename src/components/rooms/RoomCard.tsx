import { useContext } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import { Display, ISceneContextProps, SceneContext } from "../../context/SceneProvider";
import { BiWorld } from "react-icons/bi";
import { ImEnter } from "react-icons/im";

export default function RoomCard({key , room , }:{key:string | number , room :string}) {

    const { setRoom , room:currentRoom } = useContext(RoomContext) as IRoomContextProps;
	const { setScene } = useContext(SceneContext) as ISceneContextProps;

    const goToRoom = (e: string) => {
		setRoom(e);
		setScene(Display.CHAT);
	};

	return (
		<button
			className="border-zinc-600 flex justify-between items-center w-full p-4 border-b-2 hover:bg-zinc-950 transition-colors"
			key={key}
			onClick={() => goToRoom(room)}
		>
            <div className={`flex items-center gap-2 ${currentRoom == room && "text-indigo-600"}`}>
                <BiWorld className="text-xl"/>
                {room}
            </div>
            <ImEnter className="text-xl text-neutral-50"/>
		</button>
	);
}
