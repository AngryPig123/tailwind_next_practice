export default function PricingCards(
    {data}: { data: PricingCardDataType }
) {

    return (
        <>
            <div className={`${data.highlight ? `bg-violet-600 ` : `bg-slate-700 `}rounded-xl text-white`}>

                {/* upper container */}
                <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                    <div className="text-center uppercase">
                        {data.upper.type}
                    </div>
                    <h2 className="mt-10 font-serif text-5lx text-center">
                        {data.upper.size}
                    </h2>
                    <h3 className="mt-2 text-center">
                        {data.upper.pay}
                    </h3>
                    <div className="flex justify-center">
                        <a href="#"
                           className={
                            `inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800 ${data.highlight && `bg-violet-800`}`
                           }>
                            Purchase
                        </a>
                    </div>
                </div>

                {/* border container */}
                <div className="border-t border-slate-700"></div>
                {/* lower container */}
                <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                    {/* list container */}
                    <div className="flex flex-col space-y-2">
                        {/* list items */}
                        {data.contents.map((item, i) => {
                            return (
                                <>
                                    <div className="flex justify-center" key={i}>
                                        <img
                                            className="w-5 h-5"
                                            src={"check.svg"}
                                            alt="check"
                                        />
                                        <span className="text-sm ml-1">{item}</span>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )

}