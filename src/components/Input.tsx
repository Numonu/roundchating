import { ReactNode } from "react";
interface IInputProps {
    icon? : ReactNode,
    id : string,
    type: string,
	pattern? : string,
	title?:string,
    placeholder : string,
    onChange : (e:string) => void;
}
export default function Input({ icon , id , type , placeholder , pattern, title, onChange}:IInputProps) {
	return (
		<label className="bg-zinc-800 px-2 py-3 flex items-center gap-3 text-xl rounded-md border-2 border-transparent focus-within:border-neutral-50 transition-colors" htmlFor={id}>
            <span className="text-3xl">
                {icon}
            </span>
			<input
                className="bg-transparent grow outline-none"
				required
				id={id}
				type={type}
				title={title}
				pattern={pattern}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
		</label>
	);
}
