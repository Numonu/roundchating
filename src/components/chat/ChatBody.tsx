import {
	onSnapshot,
	doc,
	collection,
	getDocs,
	orderBy,
	query,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState, useContext } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import ChatCard from "./ChatCard";
import { IUserContextProps, UserContext } from "../../context/UserProvider";
import ChatSkeleton from "./ChatSkeleton";

type Message = {
	owner: string;
	message: string;
	timestamp: string;
};
export default function ChatBody() {
	const {user} = useContext(UserContext) as IUserContextProps;
	const { room } = useContext(RoomContext) as IRoomContextProps;

	const [messages, setMessages] = useState<Message[]>([]);
	const [onRequest , setOnRequest] = useState(false);

	const requestMessages = () => {
		setOnRequest(true);
		//
		const q = query(collection(db, room), orderBy("timestamp", "asc"));
		const result: Message[] = [];

		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			setMessages(result);
			setOnRequest(false);
		});
		//
	};

	useEffect(requestMessages, [room]);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, room, "status"), requestMessages);
		return unsub;
	}, [room]);

	return (
		<div className="relative px-2 py-4 flex flex-col gap-2">
			{(() => {
				let lastOwner = "";
				const query = messages.map((e,i,arr) => {
					lastOwner = e.owner;
					//
					const config = {
						message : e.message,
						owner : e.owner,
						ownMessage : user?.displayName === lastOwner,
						disablePic : arr[i + 1]?.owner === lastOwner
					}
					//
					return <ChatCard config={config}/>;
				});
				return query;
			})()}
			<ChatSkeleton enable={onRequest}/>
		</div>
	);
}
