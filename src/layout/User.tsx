import UserForms from "../components/user/UserForms";

export default function User() {
	return (
		<div className="bg-neutral-50 overflow-hidden">
			<div className="px-4">
				<div className="flex flex-col items-center py-8">
					<img
						className="bg-red-500 w-1/3 mb-4 max-w-[200px] aspect-square rounded-full"
						src="https://robohash.org/leidy.png"
						alt="user profile"
					/>
					<h1 className="text-xl opacity-70">@Anonymous</h1>
					<h2 className="text-emerald-300 text-lg font-medium">
						Online
					</h2>
				</div>
				<UserForms/>
			</div>
		</div>
	);
}
