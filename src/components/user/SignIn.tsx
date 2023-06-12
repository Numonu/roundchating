import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
export default function SignIn() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const signin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
            alert("User Login!");
		} catch (error) {
            alert("Fail!");
			return null;
		}
	};

	return (
		<form
			className="overflow-hidden flex flex-col"
			onSubmit={(e) => {
				e.preventDefault();
				signin();
			}}
		>
			<h1>Sign In</h1>
            <p className="">
                Sign in and start chating!
            </p>
			<input
				required
				type="email"
				placeholder="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				required
				type="password"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	);
}
