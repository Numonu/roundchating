import { collection, serverTimestamp, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState , useContext} from "react";
import { IRoomContextProps, RoomContext } from "../context/RoomProvider";

export default function ChatWriter() {
	const { room } = useContext(RoomContext) as IRoomContextProps;
	const [message, setMessage] = useState<string>("");

	const updateStatus = async () => {
		await updateDoc(doc(db , room , "status"), {
			timestamp : serverTimestamp()
		});
	}

	const sendMessage = async () => {
		try {
			await addDoc(collection(db, room), {
				message,
				owner: "admin",
				timestamp: serverTimestamp(),
			});
			await updateStatus();
			setMessage("");
		} catch (error) {
			return null;
		}
	};

	return (
		<div className="bg-indigo-700">
			<input
				type="text"
				placeholder="send message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}
