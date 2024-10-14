import BarraLateralLinks from "./BarraLateralLinks";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

function HeaderSite () {
    return(
        <div className="header">
            <BarraLateralLinks/>
            <div>
                <Logo/>
            </div>
            <div className="links">
                <NavigationLinks/>
            </div>
        </div>
    )
};

export default HeaderSite;