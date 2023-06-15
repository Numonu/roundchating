import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ChatSkeleton({enable}:{enable:boolean}) {
	return (
		<div
			className={`bg-zinc-800 absolute inset-0 flex items-center justify-center transition-opacity duration-300 delay-200 ${
				enable ? "opacity-100" : "opacity-0"
			}`}
		>
			<AiOutlineLoading3Quarters className="text-3xl animate-spin" />
		</div>
	);
}
