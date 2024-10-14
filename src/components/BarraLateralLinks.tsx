import { Link } from "react-router-dom";
import navigation from "../config/navigation";
import { useState } from "react";
import BotaoMenu from "./BotaoMenu";

function BarraLateralLinks() {
  const [visibilidade, setVisibilidade] = useState(false);

  const handleClick = () => {
    setVisibilidade(!visibilidade);
  };

  return (
    <div className="menuCelular">
        <BotaoMenu action={handleClick}/>
        {navigation.map((item) => (
        <div className={visibilidade ? 'barraLateralAtiva' : 'barraLateral'} style={{ padding: '10px', borderRadius: '10px' }}>
          <Link to={item.url}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default BarraLateralLinks;
