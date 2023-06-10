import { BiLeftArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
export default function Header() {
	return (
		<header className="bg-sky-400 p-2 flex justify-between">
			<div className="flex items-center gap-2 text-xl">
				<BiLeftArrow/>
				<span>Rooms</span>
			</div>
			<div className="flex items-center text-2xl">
				<FiMoreVertical />
			</div>
		</header>
	);
}
