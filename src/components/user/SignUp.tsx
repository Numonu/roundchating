import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Input from "../Input";
import { FaPaperPlane } from "react-icons/fa";
import FluidButton from "./FluidButton";
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
			className="overflow-hidden flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault();
				signup();
			}}
		>
            <Input icon={<AiOutlineUser/>} id="signup-username" type="text" placeholder="username" onChange={e => setEmail(e)}/>
			<Input icon={<MdAlternateEmail/>} id="signup-email" type="email" placeholder="email" onChange={e => setEmail(e)}/>
            <Input icon={<BsShieldLock/>} id="signup-password" type="password" placeholder="password" onChange={e => setPassword(e)}/>
			<FluidButton icon={<FaPaperPlane/>}>
                Send
            </FluidButton>
		</form>
	);
}
