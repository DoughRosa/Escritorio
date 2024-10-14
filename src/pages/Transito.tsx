import PageDefault from "../components/PageDefault";
import cardTransito from '../config/cardTransito';
import fotoTransito from '../assets/imagens/fotoTransito.png';
import fotoTransito2 from '../assets/imagens/fotoTransito2.png';

function Transito() {
  return (
    <PageDefault>
      <div className="containerPenal">
        <h1>SAIBA COMO POSSO TE AJUDAR</h1>
        <div className="rowPenal">
          <div className="cardPenal">
            {cardTransito.map((item) => (
              <div className="card" style={{ display: "flex" }}>
                <div>
                  <img className="cardImg" src={item.img} alt="" />
                </div>
                <div className="cardCorpo">
                  <div className="cardTitulo">
                    <h3>{item.titulo}</h3>
                  </div>
                  <div className="cardTexto">
                    <p>{item.texto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="divFotos">
            <img className="fotoPenal" src={fotoTransito} alt="" />
            <img className="fotoPenal" src={fotoTransito2} alt="" />
          </div>
        </div>
      </div>
    </PageDefault>
  );
}

export default Transito;
