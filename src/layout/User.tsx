import UserBoard from "../components/user/UserBoard";
import UserForms from "../components/user/UserForms";
import UserNav from "../components/user/UserNav";
import { IUserContextProps, UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function User() {
	const { user } = useContext(UserContext) as IUserContextProps;

	return (
		<div className="bg-zinc-950 scroll relative overflow-y-auto">
			<div className="absolute inset-0">
				<div className="px-4 max-w-[450px] mx-auto">
					<UserBoard />
					{user ? <UserNav /> : <UserForms />}
				</div>
			</div>
		</div>
	);
}
