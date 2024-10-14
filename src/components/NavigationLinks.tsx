import { Link } from "react-router-dom";
import navigation from "../config/navigation";


function NavigationLinks(){
    return(
        <>
            {
                navigation.map(item => (
                    <div className="navigation">
                        <Link to={item.url}>{item.label}</Link>
                    </div>
                ))
            }
        </>
    );
};

export default NavigationLinks