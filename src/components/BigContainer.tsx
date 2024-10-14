import React from "react";

interface BigContainerProps {
    children: React.ReactNode
};

function BigContainer({children}: BigContainerProps) {
    return(
        <div className="bigContainer">
            {children}
        </div>
    );
};

export default BigContainer;