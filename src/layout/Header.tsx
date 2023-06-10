import { useContext } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { ISceneContextProps, SceneContext } from "./App";
export default function Header() {
    const { scene } = useContext(SceneContext) as ISceneContextProps;
	return (
		<header className="bg-sky-400 p-2 flex justify-between">
			<button className="flex items-center gap-2 text-xl cursor-pointer">
				<BiLeftArrow/>
				<span className="capitalize">{scene}</span>
			</button>
			<div className="flex items-center text-2xl cursor-pointer">
				<FiMoreVertical />
			</div>
		</header>
	);
}
