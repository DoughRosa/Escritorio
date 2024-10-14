import PageDefault from "../components/PageDefault";
import fotoPenal from "../assets/imagens/penal.png";
import fotoPenal2 from '../assets/imagens/fotoPenal2.png'
import cardPenal from "../config/cardsPenal";

function Penal() {
  return (
    <PageDefault>
      <div className="containerPenal">
        <h1>SAIBA COMO POSSO TE AJUDAR</h1>
        <div className="rowPenal">
          <div className="divFotos">
            <img className="fotoPenal" src={fotoPenal} alt="" />
            <img className="fotoPenal" src={fotoPenal2} alt="" />
          </div>
          <div className="cardPenal">
            {cardPenal.map((item) => (
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
        </div>
      </div>
    </PageDefault>
  );
}

export default Penal;
