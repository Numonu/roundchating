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
			className="bg-black w-[90%] p-4 rounded-md max-w-[500px]"
			onClick={(e) => e.stopPropagation()}
			onSubmit={(e) => {
				e.preventDefault();
                connectToNewRoom();
			}}
		>
			<h1 className="text-xl font-medium mb-2">Create or Join a Room</h1>
			<input
				className="border-zinc-700 bg-transparent w-full py-2 mb-6 border-b-2 outline-none"
				required
				type="text"
				value={roomName}
				placeholder="Room Name"
				onChange={(e) => setRoomName(e.target.value)}
			/>
			<div
				className="w-full grid grid-cols-1 gap-2 md:grid-cols-2"
			>
                <button className="bg-indigo-600 py-2 rounded-md hover:bg-indigo-700 transition-colors">
					Create
				</button>
				<button className="bg-zinc-800 py-2 rounded-md hover:bg-zinc-900 transition-colors">
					Join
				</button>
			</div>
		</form>
	);
}
