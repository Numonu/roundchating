import { MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
	children: ReactNode;
	handleClose: MouseEventHandler<HTMLDivElement>;
}

export default function Modal({ children, handleClose }: IModalProps) {
	return createPortal(
		<div
			className="bg-black text-neutral-50 bg-opacity-70 backdrop-blur-md left-0 top-0 absolute w-screen h-screen flex items-center justify-center"
			onClick={handleClose}
		>
			{children}
		</div>,
		document.body
	);
}
