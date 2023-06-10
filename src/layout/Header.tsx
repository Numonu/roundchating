import { BiLeftArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
export default function Header() {
	return (
		<header className="bg-sky-400 p-2 flex justify-between">
			<button className="flex items-center gap-2 text-xl cursor-pointer">
				<BiLeftArrow/>
				<span>Rooms</span>
			</button>
			<div className="flex items-center text-2xl">
				<FiMoreVertical />
			</div>
		</header>
	);
}
