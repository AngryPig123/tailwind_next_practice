import {ReactNode} from "react";

export default function ProductModalStock({children}: { children: ReactNode }) {

    return (
        <>
            <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                <div className="text-sm">
                    {children}
                </div>
            </div>
        </>
    )

}