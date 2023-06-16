import { collection, serverTimestamp, addDoc, updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState , useContext} from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import { IUserContextProps, UserContext } from "../../context/UserProvider";
import { BiLoaderAlt } from "react-icons/bi";

export default function ChatWriter() {
	const {user} = useContext(UserContext) as IUserContextProps;
	const { room , loadingRoom} = useContext(RoomContext) as IRoomContextProps;
	const [message, setMessage] = useState("");
	const [loading , setLoading] = useState(false);

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
		setLoading(true);
		try {
			await addDoc(collection(db, room), {
				message,
				owner: user?.displayName,
				timestamp: serverTimestamp(),
			});
			await updateStatus();
			setMessage("");
		} catch (error) {
			alert("Fail");
		}
		setLoading(false);
	};

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
