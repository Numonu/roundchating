import { useContext } from "react";
import { IRoomContextProps, RoomContext } from "../../context/RoomProvider";
import ChatCard from "./ChatCard";
import { IUserContextProps, UserContext } from "../../context/UserProvider";
import ChatSkeleton from "./ChatSkeleton";
import useHeight from "../../hooks/useHeight";
import useMesagges from "../../hooks/useMessages";

export default function ChatBody() {
	const { height, node } = useHeight();
	const { messages } = useMesagges();
	//
	const { user } = useContext(UserContext) as IUserContextProps;
	const { loadingRoom } = useContext(RoomContext) as IRoomContextProps;

	return (
		<div
			className="bg-zinc-800 relative px-2 py-4 flex flex-col gap-2 overflow-y-scroll"
			ref={node}
			style={{ height: height }}
		>
			{(() => {
				let lastOwner = "";
				const query = messages.map((e, i, arr) => {
					lastOwner = e.owner;
					//
					const config = {
						message: e.message,
						owner: e.owner,
						ownMessage: user?.displayName === lastOwner,
						disablePic: arr[i + 1]?.owner === lastOwner,
					};
					//
					return <ChatCard config={config} />;
				});
				return query;
			})()}
			<ChatSkeleton enable={loadingRoom} />
		</div>
	);
}
