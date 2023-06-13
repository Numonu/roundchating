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
	const [disabled , setDisabled] = useState(false);

	const [username , setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signup = async () => {
		setDisabled(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
            alert("User Created!");
		} catch (error) {
            alert("Fail!");
			return null;
		}
		setDisabled(false);
	};

	return (
		<form
			className="overflow-hidden flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault();
				signup();
			}}
		>
            <Input icon={<AiOutlineUser/>} id="signup-username" type="text" placeholder="username" onChange={e => setUsername(e)}/>
			<Input icon={<MdAlternateEmail/>} id="signup-email" type="email" placeholder="email" onChange={e => setEmail(e)}/>
            <Input icon={<BsShieldLock/>} id="signup-password" type="password" placeholder="password" onChange={e => setPassword(e)}/>
			<FluidButton icon={<FaPaperPlane/>} disabled={disabled}>
                Send
            </FluidButton>
		</form>
	);
}
