import { IRoomContextProps, RoomContext } from "../context/RoomProvider";
import { useContext } from "react";

const roomList = [
	"Global",
	"Universal",
	"Local",
]
export default function Rooms() {
	const {setRoom} = useContext(RoomContext) as IRoomContextProps;
	return (
		<div className="bg-pink-500 overflow-hidden">
			<div>
				<input type="text" placeholder="Searh Some Room"/>
			</div>
			<div className="flex flex-col">
				{
					roomList.map(e => {
						return <button onClick={() => setRoom(e)}>
							{e}
						</button>
					})
				}
			</div>
		</div>
	);
}
