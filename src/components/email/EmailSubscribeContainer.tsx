import React from "react";

export default function EmailSubscribeContainer({children}: { children: React.ReactNode }) {

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-zinc-700">
                {/* pricingcards */}
                <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
                    {/* flex container */}
                    <div className="flex flex-col md:flex-row rounded-l-xl">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )

}