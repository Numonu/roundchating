import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { FaPaperPlane } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import {
	Display,
	ISceneContextProps,
	SceneContext,
} from "../../context/SceneProvider";

export default function UserNav() {
	const { setScene } = useContext(SceneContext) as ISceneContextProps;

	const goToRooms = () => setScene(Display.ROOMS);

	const closeAccount = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			return null;
		}
	};
	return (
		<div className="flex flex-col gap-4">
			<button
				className="bg-indigo-600 py-2 rounded-md flex justify-center items-center gap-2"
				onClick={goToRooms}
			>
				<FaPaperPlane className="text-base"/>
				<span>View Rooms</span>
			</button>
			<button
				className="bg-neutral-300 py-2 rounded-md flex justify-center items-center gap-2"
				onClick={closeAccount}
			>
                <RiLogoutBoxLine className="text-xl"/>
				<span>Close Account</span>
			</button>
		</div>
	);
}
