import Header from "./Header";
import SceneProvider from "../context/SceneProvider";
import FluidGrid from "../components/FluidGrid";
import UserProvider from "../context/UserProvider";

export default function App() {
	return (
		<div className="h-screen grid grid-rows-[min-content_1fr] text-neutral-50">
			<UserProvider>
				<SceneProvider>
					<Header />
					<FluidGrid />
				</SceneProvider>
			</UserProvider>
		</div>
	);
}
