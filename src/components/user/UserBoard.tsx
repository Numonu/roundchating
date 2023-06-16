import { useContext } from "react";
import { IoIosWifi } from "react-icons/io";
import { IUserContextProps, UserContext } from "../../context/UserProvider";

export default function UserBoard() {
	const { user } = useContext(UserContext) as IUserContextProps;
	const usernameHandler = user && (user?.displayName || user?.email);
	return (
		<div className="flex flex-col items-center py-8">
			<div className="bg-gradient-to-t from-pink-500 via-orange-500 to-yellow-500 w-1/3 mb-4 p-1 max-w-[200px] aspect-square rounded-full">
				<img
					className="bg-zinc-800 rounded-full"
					src={`https://robohash.org/${usernameHandler}.png`}
					alt="user profile"
				/>
			</div>
			<h1 className="text-xl">{usernameHandler ?? "@Anonymous"}</h1>
			<h2 className="text-emerald-300 flex items-center">
				<IoIosWifi className="inline text-2xl mr-2" />
				<span className="text-lg font-medium">Online</span>
			</h2>
			{!user && (
				<p className="text-red-300 text-center mb-4">
					Login or create a new account to access! 🐱‍🚀
				</p>
			)}
		</div>
	);
}
