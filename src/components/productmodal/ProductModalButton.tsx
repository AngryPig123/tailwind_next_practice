import {ReactNode} from "react";

export default function ProductModalButton({children, imagePath}: { children: ReactNode, imagePath: string }) {

    return (
        <>
            <button
                className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shawod-sm
                                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150
                                    ">
                <img src={imagePath} alt="weight image"/>
                {children}
            </button>

        </>
    )

}