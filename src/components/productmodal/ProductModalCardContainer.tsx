import {ReactNode} from "react";

export default function ProductModalCardContainer({children}: { children: ReactNode }) {

    return (
        <>
            <div
                className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl
                    shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                {children}
            </div>
        </>
    )

}