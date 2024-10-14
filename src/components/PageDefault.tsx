import React from "react";
import FooterSite from "./FooterSite";
import HeaderSite from "./HeaderSite";
import MainSite from "./MainSite";
import BotaoWhats from "./BotaoWhats";

interface PageDefaultProps{
    children: React.ReactNode;
}

function PageDefault ({children}: PageDefaultProps){
    return(
        <>
            <HeaderSite/>
                <MainSite>
                    {children}
                </MainSite>
                <BotaoWhats/>
            <FooterSite/>
        </>
    );
};

export default PageDefault;