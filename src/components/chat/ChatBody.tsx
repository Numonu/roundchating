import { useContext } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import ChatCard from "./ChatCard";
import { IUserContextProps, UserContext } from "../../context/UserProvider";
import ChatSkeleton from "./ChatSkeleton";
import useMesagges from "../../hooks/useMessages";

export default function ChatBody() {
	const { messages } = useMesagges();
	//
	const { user } = useContext(UserContext) as IUserContextProps;
	const { loadingRoom } = useContext(RoomContext) as IRoomContextProps;

	return (
		<div
			className="relative"
		>
			<div className="scroll absolute inset-0 px-2 py-4 flex flex-col gap-2 overflow-y-auto">
				{(() => {
					let lastOwner = "";
					const query = messages.map((e, i, arr) => {
						lastOwner = e.owner;
						//
						const config = {
							message: e.message,
							owner: e.owner,
							ownMessage: (user?.displayName || user?.email) === lastOwner,
							disablePic: arr[i + 1]?.owner === lastOwner,
						};
						//
						return <ChatCard config={config} />;
					});
					return query;
				})()}
			</div>
			<ChatSkeleton enable={loadingRoom} />
		</div>
	);
}
