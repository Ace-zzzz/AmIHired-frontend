import useModalStore from "../hooks/useModalStore"
import JobModal from '../components/JobModal'

const ModalProvider = () => {
    const { type, isOpen, onClose, data } = useModalStore();

    if (!isOpen) return null;

    return (
        <>
            {type === "createJob" && <JobModal isOpen={isOpen} onClose={onClose} />}
        </>
    )
}

export default ModalProvider;