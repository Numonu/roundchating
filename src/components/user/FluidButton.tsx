import { ReactNode } from "react";
interface IFluidButtonProps {
	disabled? : boolean;
	type?: "button" | "submit";
	icon?: ReactNode;
	children: ReactNode;
}
export default function FluidButton({
	disabled,
	icon,
	type,
	children,
}: IFluidButtonProps) {
	return (
		<button
			className="bg-indigo-600 py-2 rounded-md flex justify-center items-center gap-2 disabled:opacity-50 hover:bg-indigo-700 transition-colors"
			disabled={disabled || false}
			type={type ?? "submit"}
		>
			<span className="text-base">{icon}</span>
			<span>{children}</span>
		</button>
	);
}
