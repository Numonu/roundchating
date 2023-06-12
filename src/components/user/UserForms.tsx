import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const enum Display {
	SIGNIN,
	SIGNUP,
}
export default function UserForms() {
	const [display, setDisplay] = useState<Display>(Display.SIGNUP);
	//
	const classHandler = {
        guider : "",
        form : "",
    };
	switch (display) {
		case Display.SIGNIN:
			classHandler.guider = "translate-x-0";
            classHandler.form = "grid-cols-[1fr_0fr]";
			break;
		case Display.SIGNUP:
			classHandler.guider = "translate-x-full";
            classHandler.form = "grid-cols-[0fr_1fr]";
			break;
		default:
			break;
	}
	return (
		<>
			<div className="relative grid grid-cols-2 text-center text-lg capitalize">
				<div
					className={`bg-sky-500 absolute w-1/2 h-[5%] bottom-0 transition-transform ${classHandler.guider}`}
				></div>
				<button
					className="w-full py-2"
					onClick={() => setDisplay(Display.SIGNIN)}
				>
					<h2>Sign in</h2>
				</button>
				<button
					className="w-full py-2"
					onClick={() => setDisplay(Display.SIGNUP)}
				>
					<h2>Sign up</h2>
				</button>
			</div>
            <div className={`py-4 grid grid-flow-col transition-[grid-template-columns] ${classHandler.form}`}>
                <SignIn/>
                <SignUp/>
            </div>
		</>
	);
}
