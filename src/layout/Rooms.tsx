import { BsSearch } from "react-icons/bs";
import RoomCard from "../components/rooms/RoomCard";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const roomList = ["North","South" ,"East", "West"];
export default function Rooms() {
	const [search , setSearch] = useState("");
	return (
		<div className="bg-zinc-900 overflow-hidden">
			<div className="border-zinc-600 h-full flex flex-col gap-[2px] border-l-2 border-r-2">
				<div className="border-zinc-600 w-full px-4 py-2 flex items-center gap-3 border-b-2">
					<BsSearch />
					<input
						className="bg-transparent grow outline-none"
						type="text"
						placeholder="Search for a room"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="p-2 rounded-full hover:bg-zinc-600 transition-colors cursor-pointer">
						<AiOutlinePlus className="text-2xl"/>
					</button>
				</div>
				<div>
					{roomList.filter(e => e.includes(search)).map((e, i) => {
						return <RoomCard key={i} room={e} />;
					})}
				</div>
			</div>
		</div>
	);
}
