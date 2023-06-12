import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
export default function SignUp() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const signup = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
            alert("User Created!");
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
				signup();
			}}
		>
			<h1>Sign Up</h1>
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
