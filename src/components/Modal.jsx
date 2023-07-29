import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"



const Modal = ({onClose, isOpen, children}) => {
  return createPortal (
    <>
        {isOpen && (
            <>
                <div className="grid items-center h-screen backdrop-blur w-screen absolute top-0 z-[100]">
                    <div className="m-auto relative min-h-[200px] min-w-[40%] bg-white p-4 z-[200]">
                        <div className="flex justify-end">
                            <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer self-end"/>
                        </div>
                        {children}
                    </div>
                </div>
            </>
        )}
    </>
  ,document.getElementById("modal-root"))
}

export default Modal