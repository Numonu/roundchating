import { useContext, useState } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import { Display, ISceneContextProps, SceneContext } from "../../context/SceneProvider";

export default function RoomPopup({ callback }: { callback: () => void }) {
	const [roomName, setRoomName] = useState("");
	const { setRoom } = useContext(RoomContext) as IRoomContextProps;
	const {setScene} = useContext(SceneContext) as ISceneContextProps;

	const connectToNewRoom = () => {
		setScene(Display.CHAT);
		setRoom(roomName);
		callback();
	};

	return (
		<form
			className="bg-black w-[90%] p-6 pt-12 rounded-md max-w-[500px]"
			onClick={(e) => e.stopPropagation()}
			onSubmit={(e) => {
				e.preventDefault();
                connectToNewRoom();
			}}
		>
			<h1 className="text-2xl font-medium mb-2">Join a secret room</h1>
			<p className="mb-4">
				Share the name of the room with your friends
			</p>
			<input
				className="border-zinc-700 bg-transparent w-full py-2 mb-6 border-b-2 outline-none focus:border-white"
				required
				type="text"
				value={roomName}
				placeholder="Room Name"
				onChange={(e) => setRoomName(e.target.value)}
			/>
			<div
				className="w-full flex justify-end gap-2"
			>
                <button className="bg-indigo-600 w-1/3 py-2 font-medium rounded-md hover:bg-indigo-700 transition-colors">
					Join
				</button>
			</div>
		</form>
	);
}
