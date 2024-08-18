import {ReactNode} from "react";

export default function ProductModalContainer({children}: { children: ReactNode }) {

    return (
        <>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                {children}
            </div>
        </>
    )

}