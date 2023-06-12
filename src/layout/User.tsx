import UserBoard from "../components/user/UserBoard";
import UserForms from "../components/user/UserForms";
import UserNav from "../components/user/UserNav";
import { IUserContextProps, UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function User() {
	const { user } = useContext(UserContext) as IUserContextProps;

	return (
		<div className="bg-neutral-50 overflow-hidden">
			<div className="px-4">
				<UserBoard />
				{user ? <UserNav /> : <UserForms />}
			</div>
		</div>
	);
}
