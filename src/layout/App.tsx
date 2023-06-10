import Header from "./Header";
import SceneProvider from "../context/SceneProvider";
import FluidGrid from "../components/organisms/FluidGrid";

export default function App() {
	return (
		<div className="h-screen grid grid-rows-[min-content_1fr]">
			<SceneProvider>
				<Header />
				<FluidGrid />
			</SceneProvider>
		</div>
	);
}
