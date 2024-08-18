import React from "react";
import PricingCardsContainer from "@/components/pricingcards/PricingCardsContainer";

export default function ProductModalPageLayout({children}: { children: React.ReactNode }) {

    return (
        <>
            <PricingCardsContainer>
                {children}
            </PricingCardsContainer>
        </>
    )

}