import { useState } from 'react';

export const useModal = (visible = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(visible);

    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        openModal,
        closeModal,
    };

};
