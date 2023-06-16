import { useContext } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
export default function RoomTitle() {
    const {room} = useContext(RoomContext) as IRoomContextProps;
	return (
		<div className="flex items-center gap-4 px-2 pt-2">
			<div className="bg-zinc-600 grow h-[0.15rem]"></div>
			<div>Public Room : {room}</div>
			<div className="bg-zinc-600 grow h-[0.15rem]"></div>
		</div>
	);
}
