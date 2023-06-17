import { useState , useContext , useEffect , useCallback } from "react";
import { IRoomContextProps, RoomContext } from "../context/RoomProvider";
import { collection, doc, getDocs, onSnapshot, orderBy, query, startAfter } from "firebase/firestore";
import { db } from "../firebase/config";

type Message = {
	owner: string;
	message: string;
	timestamp: string;
};

export default function useMesagges(){
	const [messages, setMessages] = useState<Message[]>([]);
	const { room , setLoadingRoom } = useContext(RoomContext) as IRoomContextProps;
	const [startQueryAt, setStartQueryAt] = useState(0);

    const requestMessages = useCallback(() => {

		const q = query(collection(db, room), orderBy("timestamp", "asc") , startAfter(startQueryAt));
		const result: Message[] = [];

		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			setStartQueryAt(result.length);
			//
			setMessages(result);
			setLoadingRoom(false);
			//
		}).catch(() => {
			requestMessages();
		})	
	} , [room , startQueryAt , setLoadingRoom]);

	useEffect(() => {
        const unsub = onSnapshot(doc(db, room, "status"), requestMessages);
		return unsub;
	}, [requestMessages, room]);
    
    useEffect(() => {
		requestMessages();
		setStartQueryAt(0);
	}, [room, requestMessages]);

    return{
        messages
    }
}