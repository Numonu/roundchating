export default function App() {
	return (
		<div className="h-screen grid grid-rows-[min-content_1fr]">
			<header className="bg-emerald-500">Header</header>
			<div className="grid grid-cols-[0fr_0fr_1fr]">
				<div className="bg-blue-500 overflow-hidden">
                    Profile Aside
                </div>
				<div className="bg-pink-500 overflow-hidden">
                    Rooms Aside
                </div>
				<div className="bg-emerald-500 grid grid-rows-[min-content_1fr_min-content]">
					<div className="bg-red-500">Search</div>
					<div className="bg-sky-500">Content</div>
					<div className="bg-indigo-700">Input</div>
				</div>
			</div>
		</div>
	);
}
