import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
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
		<div className="flex flex-col">
			<button onClick={goToRooms}>View Rooms</button>
			<button onClick={closeAccount}>Close Account</button>
		</div>
	);
}
