import { onSnapshot , doc , collection, getDocs, orderBy, query} from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState , useContext } from "react";
import { IRoomContextProps, RoomContext } from "../context/RoomProvider";

type Message = {
	owner : string,
	message : string,
	timestamp : string
}
export default function ChatBody() {
	const {room} = useContext(RoomContext) as IRoomContextProps;
	const [messages , setMessages] = useState<Message[]>([]);

	const requestMessages = () => {
		const q = query(collection(db, room), orderBy("timestamp", "asc"));
		const result:Message[] = [];
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			setMessages(result);
		});
	}

	useEffect(requestMessages, [room]);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, room, "status"), requestMessages);
		return unsub;
	} , [room])


	return <div>
		{
			messages.map(e => {
				return <div>
					<h1>{e.message}</h1>
				</div>
			})
		}
	</div>;
}
