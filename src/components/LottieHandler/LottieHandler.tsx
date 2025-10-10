'use client'

import Lottie from "lottie-react";
import main from '@/assets/lotties/main.json';
import React from "react";

const lottieFilesMap = {
    main

};

type LottieHandlerProps = {
    type: keyof typeof lottieFilesMap;
    message?: string;
    className?: string;
    loop?: boolean;
    style?: React.CSSProperties
};
const LottieHandler = ({ type, message, className, loop, style }: LottieHandlerProps) => {
    const lottie = lottieFilesMap[type];
    // const messageStyle =
    //     type === "Error"
    //         ? { fontSize: "19px", color: "var(--red)" }
    //         : { fontSize: "19px", marginTop: "30px" };

    return (
        <div className={` ${className}`}>
            <Lottie animationData={lottie} style={style} loop={loop} />
            {/* {message && <h3 style={type === "Error"
                ? messageStyle : { margin: '120px auto', textAlign: 'center', color: 'var(--main-color)' }}
            // style={messageStyle}
            >{message}</h3>} */}
        </div>
    );
};

export default LottieHandler;
