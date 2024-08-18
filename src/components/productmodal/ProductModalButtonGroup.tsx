import {ReactNode} from "react";

export default function ProductModalButtonGroup({children}: { children: ReactNode }) {

    return (
        <>
            <div className="group">
                <button
                    className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700
                                    rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700
                                    group-hover:border-t-blue-700 group-hover:shadow-lg"
                >
                    <div
                        className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                        {children}
                    </div>
                </button>
            </div>
        </>
    )

}