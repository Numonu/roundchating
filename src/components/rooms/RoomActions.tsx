import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../Modal";
import RoomPopup from "./RoomPopup";

export default function RoomActions() {
	const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

	return (
		<>
			<button
				className="p-2 rounded-full hover:bg-zinc-600 transition-colors cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				<AiOutlinePlus className="text-2xl" />
			</button>
			{showModal && (
				<Modal handleClose={closeModal}>
					<RoomPopup callback={closeModal}/>
				</Modal>
			)}
		</>
	);
}
