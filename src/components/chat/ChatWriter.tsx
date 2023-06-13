import { collection, serverTimestamp, addDoc, updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState , useContext} from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import { IUserContextProps, UserContext } from "../../context/UserProvider";

export default function ChatWriter() {
	const {user} = useContext(UserContext) as IUserContextProps;
	const { room } = useContext(RoomContext) as IRoomContextProps;
	const [message, setMessage] = useState<string>("");

	const updateStatus = async () => {
		const docRef = doc(db, room, "status");
		const docSnap = await getDoc(docRef);
		if(docSnap.exists()){
			await updateDoc(docRef, {
				lastupdate : serverTimestamp()
			});
		}
		else{
			try {
				await setDoc(doc(db , room , "status") , {
					lastupdate : serverTimestamp()
				})
			} catch (error) {
				return null;
			}
		}
	}

	const sendMessage = async () => {
		try {
			await addDoc(collection(db, room), {
				message,
				owner: user?.displayName,
				timestamp: serverTimestamp(),
			});
			await updateStatus();
			setMessage("");
		} catch (error) {
			return null;
		}
	};

	return (
		<div className="bg-indigo-600 grid grid-cols-[1fr_min-content]">
			<input
				className="p-2 outline-none"
				type="text"
				placeholder="send message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button className="text-xl px-3" onClick={sendMessage}>
				<RiSendPlane2Fill/>
			</button>
		</div>
	);
}
