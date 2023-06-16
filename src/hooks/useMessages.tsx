type Message = {
	owner: string;
	message: string;
	timestamp: string;
};
import { useState , useContext , useEffect , useCallback } from "react";
import { IRoomContextProps, RoomContext } from "../context/RoomProvider";
import { collection, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useMesagges(){
	const [messages, setMessages] = useState<Message[]>([]);
	const { room , setLoadingRoom } = useContext(RoomContext) as IRoomContextProps;

    const requestMessages = useCallback(() => {

		const q = query(collection(db, room), orderBy("timestamp", "asc"));
		const result: Message[] = [];

		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			new Promise(res => setTimeout(res , 1000)).then(() => {
				setMessages(result);
				setLoadingRoom(false);
			})
		});
		
	} , [room , setLoadingRoom]);

	useEffect(() => {
        const unsub = onSnapshot(doc(db, room, "status"), requestMessages);
		return unsub;
	}, [requestMessages, room]);
    
    useEffect(requestMessages, [room, requestMessages]);

    return{
        messages
    }
}