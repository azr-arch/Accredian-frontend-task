import { createContext, ReactNode, useContext, useState } from "react";
import { ReferralModal } from "./modal/referral-modal";

interface ModalContextProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);

        // To disable scroll
        document.body.style.overflow = "hidden";
    };

    const onClose = () => {
        setIsOpen(false);

        // Enable scroll
        document.body.style.overflow = "unset";
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                onOpen,
                onClose,
            }}
        >
            {children}
            <ReferralModal isOpen={isOpen} onClose={onClose} />
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw Error("useModal must be used with in Modal Provider");
    }

    return context;
};
