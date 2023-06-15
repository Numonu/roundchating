interface IChatCardProps {
	config : {
		message: string;
		owner: string;
		disablePic: boolean;
		ownMessage: boolean;
	}
}
export default function ChatCard({
	config
}: IChatCardProps) {
	return (
		<div className={`flex items-center gap-2 ${config.ownMessage ? "self-end" : "self-start"}`}>
			{!config.ownMessage && (
				<img
					className={`w-8 aspect-square rounded-full ${config.disablePic && "invisible"}`}
					src={`https://robohash.org/${config.owner}`}
					alt={config.owner}
				/>
			)}
			<div className={`max-w-xs p-2 rounded-xl md:max-w-md ${config.ownMessage ? "bg-indigo-600 rounded-br-none" : "bg-zinc-900 rounded-bl-none"}`}>
				{config.message}
			</div>
		</div>
	);
}
