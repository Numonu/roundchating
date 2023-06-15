import UserBoard from "../components/user/UserBoard";
import UserForms from "../components/user/UserForms";
import UserNav from "../components/user/UserNav";
import { IUserContextProps, UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function User() {
	const { user } = useContext(UserContext) as IUserContextProps;

	return (
		<div className="bg-gradient-to-t from-zinc-950 to-zinc-900 overflow-hidden">
			<div className="px-4 max-w-[500px] mx-auto">
				<UserBoard />
				{user ? <UserNav /> : <UserForms />}
			</div>
		</div>
	);
}
