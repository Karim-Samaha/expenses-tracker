import { CheckCircle, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
interface ModalProps {
  isOpen: boolean;
  triger?: ReactNode;
  successCb?: () => void;
  failCb?: () => void;
  content: () => ReactNode;
  isCrashModal?: boolean;
}

const ModalComponet: React.FC<ModalProps> = ({
  isOpen,
  triger,
  successCb,
  failCb,
  content,
}) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);
  return (
    <div>
      {triger && triger}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>
        {content()}
      </Modal>
    </div>
  );
};

export default ModalComponet;
