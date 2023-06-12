import { IRoomContextProps, RoomContext } from "../context/RoomProvider";
import { useContext } from "react";
import {
	Display,
	ISceneContextProps,
	SceneContext,
} from "../context/SceneProvider";

const roomList = ["Global", "Universal", "Local"];
export default function Rooms() {
	const { setRoom } = useContext(RoomContext) as IRoomContextProps;
	const { setScene } = useContext(SceneContext) as ISceneContextProps;

	const goToRoom = (e: string) => {
		setRoom(e);
		setScene(Display.CHAT);
	};

	return (
		<div className="bg-pink-500 overflow-hidden">
			<div>
				<input type="text" placeholder="Searh Some Room" />
			</div>
			<div className="flex flex-col">
				{roomList.map((e , i) => {
					return <button key={i} onClick={() => goToRoom(e)}>{e}</button>;
				})}
			</div>
		</div>
	);
}
