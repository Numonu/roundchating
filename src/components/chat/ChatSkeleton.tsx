import { ImSpinner9 } from "react-icons/im";

export default function ChatSkeleton({enable}:{enable:boolean}) {
	return (
		<div
			className={`bg-zinc-800 absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
				enable ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
			}`}
		>
			<ImSpinner9 className="text-3xl animate-spin" />
		</div>
	);
}
