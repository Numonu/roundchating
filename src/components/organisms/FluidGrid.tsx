import { useContext } from "react";
import Chat from "../../layout/Chat";
import Rooms from "../../layout/Rooms";
import User from "../../layout/User";
import { ISceneContextProps, SceneContext } from "../../context/SceneProvider";

export default function FluidGrid() {
	const { classHandler } = useContext(SceneContext) as ISceneContextProps;
	return (
		<div
			className={`grid transition-[grid-template-columns] ${classHandler}`}
		>
			<User />
			<Rooms />
			<Chat />
		</div>
	);
}
