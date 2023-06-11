import { useState } from "react";
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
			<div className="relative grid grid-cols-2 text-center text-xl capitalize">
				<div
					className={`bg-sky-500 absolute w-1/2 h-[5%] bottom-0 transition-transform ${classHandler.guider}`}
				></div>
				<button
					className="bg-white bg-opacity-50 w-full py-3"
					onClick={() => setDisplay(Display.SIGNIN)}
				>
					<h2>Sign in</h2>
				</button>
				<button
					className="bg-white bg-opacity-50 w-full py-3"
					onClick={() => setDisplay(Display.SIGNUP)}
				>
					<h2>Sign up</h2>
				</button>
			</div>
            <div className={`p-4 grid grid-flow-col transition-[grid-template-columns] ${classHandler.form}`}>
                <form className="overflow-hidden flex flex-col">
                    <h1>Register Now</h1>
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <button>Submit</button>
                </form>
                <form className="overflow-hidden flex flex-col">
                    <h1>Register Now</h1>
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <button>Submit</button>
                </form>
            </div>
		</>
	);
}
