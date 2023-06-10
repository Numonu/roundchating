import ChatBody from "../components/ChatBody";
import ChatWriter from "../components/ChatWriter";

export default function Chat() {
	
	return (
		<div className="bg-emerald-500 grid grid-rows-[min-content_1fr_min-content] overflow-hidden">
			<div className="bg-red-500">Search</div>
			<ChatBody/>
			<ChatWriter/>
		</div>
	);
}
