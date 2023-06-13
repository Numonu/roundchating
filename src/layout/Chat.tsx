import ChatBody from "../components/chat/ChatBody";
import ChatWriter from "../components/chat/ChatWriter";

export default function Chat() {
	
	return (
		<div className="bg-zinc-800 grid grid-rows-[1fr_min-content] overflow-hidden">
			<ChatBody/>
			<ChatWriter/>
		</div>
	);
}
