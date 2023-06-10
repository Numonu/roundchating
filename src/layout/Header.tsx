import { useContext } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { Display, ISceneContextProps, SceneContext } from "../context/SceneProvider";
export default function Header() {
	const { scene, setScene } = useContext(SceneContext) as ISceneContextProps;
    //
	let functionHanlder;
	switch (scene) {
		case Display.CHAT:
			functionHanlder = () => setScene(Display.ROOMS);
			break;
		case Display.ROOMS:
			functionHanlder = () => setScene(Display.USER);
			break;
		case Display.USER:
			functionHanlder = () => setScene(Display.CHAT);
			break;
		default:
			break;
	}

	return (
		<header className="bg-sky-400 p-2 flex justify-between">
			<button
				className="flex items-center gap-2 text-xl cursor-pointer"
				onClick={functionHanlder}
			>
				<BiLeftArrow />
				<span className="capitalize">{scene}</span>
			</button>
			<div className="flex items-center text-2xl cursor-pointer">
				<FiMoreVertical />
			</div>
		</header>
	);
}
