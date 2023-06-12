import { signInWithEmailAndPassword } from "firebase/auth";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { auth } from "../../firebase/config";
import { useState } from "react";
import Input from "../Input";
import { FaPaperPlane } from "react-icons/fa";
import FluidButton from "./FluidButton";

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
			className="overflow-hidden flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault();
				signin();
			}}
		>
            <Input icon={<MdAlternateEmail/>} id="signin-email" type="email" placeholder="email" onChange={e => setEmail(e)}/>
            <Input icon={<BsShieldLock/>} id="signin-password" type="password" placeholder="password" onChange={e => setPassword(e)}/>
            <FluidButton icon={<FaPaperPlane/>}>
                Send
            </FluidButton>
		</form>
	);
}
