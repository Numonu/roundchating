import { collection, serverTimestamp, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function ChatWriter() {
	const [message, setMessage] = useState<string>("");

	const updateStatus = async () => {
		await updateDoc(doc(db , "Global" , "status"), {
			timestamp : serverTimestamp()
		});
	}

	const sendMessage = async () => {
		try {
			await addDoc(collection(db, "Global"), {
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
