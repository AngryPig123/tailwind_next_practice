'use client'
import React, {useCallback, useEffect, useRef, useState} from "react";
import ProductModalContainer from "@/components/productmodal/ProductModalContainer";
import ProductModalCardContainer from "@/components/productmodal/ProductModalCardContainer";
import ProductModalContent from "@/components/productmodal/ProductModalContent";
import {useModalStore} from "@/store/ModalStore";

export default function OpenModalPage() {

    const {isModalOpen, openModal, closeModal} = useModalStore();
    const modalRef = useRef<HTMLDialogElement>(null);

    const handlerModalOpen = () => {
        openModal();
    };

    const handlerModalClose = useCallback(() => {
        closeModal();
    }, [closeModal]);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handlerModalClose();
        }
    }, [handlerModalClose]);

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside, isModalOpen]);

    const contentData = {
        image: "/product-modal/images/headphone.png",
        shipping: "Free Shipping",
        title: "Free Shipping",
        price: "Free Shipping",
        salePrice: "Free Shipping",
        description: "Free Shipping",
        stock: "Free Shipping"
    }

    return (
        <>
            <dialog
                className="fixed inset-0 m-auto max-w-[90%] max-h-[90%] z-[9999] overflow-auto"
                ref={modalRef}
                open={isModalOpen}
            >
                <ProductModalContainer>
                    <ProductModalCardContainer>
                        <ProductModalContent contentData={contentData}/>
                    </ProductModalCardContainer>
                </ProductModalContainer>
            </dialog>

            <div>
                <img
                    className="mx-auto duration-200 w-60 hover:scale-105 hover:cursor-pointer"
                    src={`/product-modal/images/headphone.png`}
                    alt="headphone"
                    onClick={handlerModalOpen}
                />
            </div>
        </>
    )

}
