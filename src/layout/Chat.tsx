import ChatBody from "../components/chat/ChatBody";
import ChatWriter from "../components/chat/ChatWriter";

export default function Chat() {
	
	return (
		<div className="bg-zinc-800 grid grid-rows-[min-content_1fr_min-content] overflow-hidden">
			<div className="bg-red-500">Search</div>
			<ChatBody/>
			<ChatWriter/>
		</div>
	);
}
