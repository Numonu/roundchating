import UserBoard from "../components/user/UserBoard";
import UserForms from "../components/user/UserForms";

export default function User() {
	return (
		<div className="bg-neutral-50 overflow-hidden">
			<div className="px-4">
				<UserBoard/>
				<UserForms/>
			</div>
		</div>
	);
}
