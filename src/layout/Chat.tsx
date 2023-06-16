import ChatBody from "../components/chat/ChatBody";
import ChatWriter from "../components/chat/ChatWriter";
import RoomTitle from "../components/rooms/RoomTitle";

export default function Chat() {
	
	return (
		<div className="bg-zinc-800 grid grid-rows-[min-content_1fr_min-content] overflow-hidden">
			<RoomTitle/>
			<ChatBody/>
			<ChatWriter/>
		</div>
	);
}
