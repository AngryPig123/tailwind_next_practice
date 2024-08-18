import React from "react";

export default function ProductModalContainer({children}: { children: React.ReactNode }) {

    return (
        <>
            {/* Global Container */}
            <div className="flex items-center justify-center min-h-screen bg-slate-100">
                {children}
            </div>
        </>
    )

}