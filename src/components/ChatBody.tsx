import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

type Message = {
	owner : string,
	message : string,
	timestamp : string
}
export default function ChatBody() {
	const [messages , setMessages] = useState<Message[]>([]);
	useEffect(() => {
		const q = query(collection(db, "Global"), orderBy("timestamp", "asc"));
		const result:Message[] = [];
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			setMessages(result);
		});
	}, []);
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
