import Header from "./Header";
import SceneProvider from "../context/SceneProvider";
import FluidGrid from "../components/FluidGrid";
import UserProvider from "../context/UserProvider";

export default function App() {
	return (
		<div className="text-neutral-50 h-screen grid grid-rows-[min-content_1fr] overflow-hidden">
			<UserProvider>
				<SceneProvider>
					<Header />
					<FluidGrid />
				</SceneProvider>
			</UserProvider>
		</div>
	);
}
