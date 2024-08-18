import React from "react";
import PricingCardsContainer from "@/components/pricingcards/PricingCardsContainer";

export default function PricingCards({children}: { children: React.ReactNode }) {

    return (
        <>
            <PricingCardsContainer>
                {children}
            </PricingCardsContainer>
        </>
    )

}