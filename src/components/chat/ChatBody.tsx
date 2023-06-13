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

type Message = {
	owner: string;
	message: string;
	timestamp: string;
};
export default function ChatBody() {
	const {user} = useContext(UserContext) as IUserContextProps;
	const { room } = useContext(RoomContext) as IRoomContextProps;
	const [messages, setMessages] = useState<Message[]>([]);

	const requestMessages = () => {
		const q = query(collection(db, room), orderBy("timestamp", "asc"));
		const result: Message[] = [];
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				result.push(doc.data() as Message);
			});
			setMessages(result);
		});
	};

	useEffect(requestMessages, [room]);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, room, "status"), requestMessages);
		return unsub;
	}, [room]);

	return (
		<div className="px-2 py-4 flex flex-col gap-2">
			{(() => {
				let lastOwner = "";
				const query = messages.map((e,i,arr) => {
					lastOwner = e.owner;
					//
					const disablePic = arr[i + 1]?.owner === lastOwner;
					const ownMessage = user?.displayName === lastOwner;
					//
					return <ChatCard message={e.message} owner={e.owner} ownMessage={ownMessage} disablePic={disablePic}/>;
				});
				return query;
			})()}
		</div>
	);
}
