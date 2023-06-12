import Header from "./Header";
import SceneProvider from "../context/SceneProvider";
import FluidGrid from "../components/FluidGrid";

export default function App() {
   
	return (
		<div className="h-screen grid grid-rows-[min-content_1fr] text-neutral-50">
			<SceneProvider>
				<Header />
				<FluidGrid />
			</SceneProvider>
		</div>
	);
}
