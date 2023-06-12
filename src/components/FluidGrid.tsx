import { useContext } from "react";
import Chat from "../layout/Chat";
import Rooms from "../layout/Rooms";
import User from "../layout/User";
import { ISceneContextProps, SceneContext } from "../context/SceneProvider";
import RoomProvider from "../context/RoomProvider";
import UserProvider from "../context/UserProvider";

export default function FluidGrid() {
	const { classHandler } = useContext(SceneContext) as ISceneContextProps;
	return (
		<div
			className={`grid transition-[grid-template-columns] ${classHandler}`}
		>
			<UserProvider>
				<User />
				<RoomProvider>
					<Rooms />
					<Chat />
				</RoomProvider>
			</UserProvider>
		</div>
	);
}
