export default function UserBoard() {
	return (
			<div className="flex flex-col items-center py-8">
				<img
					className="bg-red-500 w-1/3 mb-4 max-w-[200px] aspect-square rounded-full"
					src="https://robohash.org/leidy.png"
					alt="user profile"
				/>
				<h1 className="text-xl opacity-70">@Anonymous</h1>
				<h2 className="text-emerald-300 text-lg font-medium">Online</h2>
				<p className="text-red-300 text-center mb-4">
					Inicia sesion o crea una nueva cuenta para acceder! 🐱‍🚀
				</p>
			</div>
	);
}
