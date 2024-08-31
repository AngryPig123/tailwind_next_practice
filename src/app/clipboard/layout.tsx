import React from "react";
import classes from "./page.module.css"
import {Metadata} from "next";

//  타이틀 설정, 메타 데이터 설정.
export const metadata: Metadata = {
    title: 'clip board project',
    description: 'myDescription',
};

export default function ClipBoardLayout(
    {children}: { children: React.ReactNode }
) {

    return (
        <>
            <div className={classes.background}>
                {children}
            </div>
        </>
    )

}