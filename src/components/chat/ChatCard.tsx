interface IChatCardProps {
	message: string;
	owner: string;
	disablePic: boolean;
	ownMessage: boolean;
}
export default function ChatCard({
	message,
	owner,
	disablePic,
	ownMessage,
}: IChatCardProps) {
	return (
		<div className={`flex items-center gap-2 ${ownMessage ? "self-end" : "self-start"}`}>
			{!ownMessage && (
				<img
					className={`w-8 aspect-square rounded-full ${disablePic && "invisible"}`}
					src={`https://robohash.org/${owner}`}
					alt={owner}
				/>
			)}
			<div className={`max-w-xs p-2 rounded-xl md:max-w-md ${ownMessage ? "bg-indigo-600 rounded-br-none" : "bg-zinc-900 rounded-bl-none"}`}>
				{message}
			</div>
		</div>
	);
}
