import { ReactNode } from "react";
interface IFluidButtonProps {
	type?: "button" | "submit";
	icon?: ReactNode;
	children: ReactNode;
}
export default function FluidButton({
	icon,
	type,
	children,
}: IFluidButtonProps) {
	return (
		<button
			className="bg-indigo-600 py-2 rounded-md flex justify-center items-center gap-2"
			type={type ?? "submit"}
		>
			<span className="text-base">{icon}</span>
			<span>{children}</span>
		</button>
	);
}
