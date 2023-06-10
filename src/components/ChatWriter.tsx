import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { useState } from "react";

export default function ChatWriter() {
	const [message, setMessage] = useState<string>("");

	const sendMessage = async () => {
		try {
			await addDoc(collection(db, "Global"), {
				owner: "admin",
				message,
				timestamp: serverTimestamp(),
			});
		} catch (error) {
			return null;
		}
	};
    
	return (
		<div className="bg-indigo-700">
			<input
				type="text"
				placeholder="send message"
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}
