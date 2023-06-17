import { RiSendPlane2Fill } from "react-icons/ri";
import { BiLoaderAlt } from "react-icons/bi";
import useWriter from "../../hooks/useWriter";
export default function ChatWriter() {
	
	const {message , setMessage , loading , loadingRoom , sendMessage} = useWriter();

	return (
		<div className="grid grid-cols-[1fr_min-content]">
			<input
				className="bg-zinc-700 p-2 outline-none"
				type="text"
				placeholder="Send Message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button className="bg-indigo-600 text-2xl px-3" onClick={sendMessage} disabled={loading || loadingRoom}>
				{
					(loading || loadingRoom) ? <BiLoaderAlt className="animate-spin"/> : <RiSendPlane2Fill/>
				}
			</button>
		</div>
	);
}
