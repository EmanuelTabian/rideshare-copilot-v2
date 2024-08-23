import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem 3rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

// Modal compound component originally designed by Jonas Schmedtmann.

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  // We are not able to attatch the handler directly on the button so we're cloning the element and attatch it here
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useCloseForm(close);

  if (name !== openName) return null;
  // Create a portel to append the element directly to the body in order to avoid event bubbling and capturing issues
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <button onClick={close}>
          <IoCloseCircleOutline />
        </button>
        <div>{cloneElement(children, { onCLoseModal: close })}</div>
      </StyledModal>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;