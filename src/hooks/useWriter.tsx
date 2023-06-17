import {useContext , useState} from "react";
import { IRoomContextProps, RoomContext } from "../context/RoomProvider";
import { IUserContextProps, UserContext } from "../context/UserProvider";
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useWriter(){

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
				//
			}
		}
	}

	const sendMessage = async () => {
		setLoading(true);
		try {
			await addDoc(collection(db, room), {
				message,
				owner: user?.displayName || user?.email,
				timestamp: serverTimestamp(),
			});
			await updateStatus();
			setMessage("");
		} catch (error) {
			//
		}
		setLoading(false);
	};


    return{
        message , 
        loading,
        loadingRoom,
        sendMessage,
        setMessage,
    }
}