import React from "react";

export default function OpenModalPageLayout({children}: { children: React.ReactNode }) {


    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-sky-100">
                {children}
            </div>
        </>
    )

}