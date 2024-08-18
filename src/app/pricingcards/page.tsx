import PricingCard from "@/components/pricingcards/PricingCard";
import {CardData} from "@/constants/pricingcards/PricingCardsConstants";

export default function PricingCards() {

    const cards: PricingCardDataType[] = CardData;

    return (
        <>
            {cards && cards.map((item) => {
                return (
                    <>
                        <PricingCard data={item}/>
                    </>
                )
            })}
        </>
    )

}

