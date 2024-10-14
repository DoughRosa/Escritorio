import suspensao from '../assets/imagens/suspensao.png';
import cassacao from '../assets/imagens/cassacao.png';
import bafometro from '../assets/imagens/bafometro.png';
import ppd from '../assets/imagens/ppd.png';
import multas from '../assets/imagens/multas.png';
import velocidade from '../assets/imagens/velocidade.png';
import manobra from '../assets/imagens/manobra.png';

const cardTransito = [
  {
    key: "suspensao",
    img: suspensao,
    titulo: "Suspensão da CNH",
    texto:
      "Suspensão por pontos ou por infração gravíssima autossuspensiva.",
  },
  {
    key: "cassacao",
    img: cassacao,
    titulo: "Cassação da CNH",
    texto:
      "Não perca o direito de dirigir. A cassação da CNH pode ser revertida em muito casos de acordo com a Lei.",
  },
  {
    key: "bafometro",
    img: bafometro,
    titulo: "Lei Seca / Bafômetro",
    texto:
      "Recusou ou teve o bafômetro positivo? Evite a suspensão da CNH e multa gravíssima.",
  },
  {
    key: "ppd",
    img: ppd,
    titulo: "Multas na CNH Provisória",
    texto:
      "Se você teve uma multa grave ou gravíssimana, ou foi multado duas vezes por infrações médias durante a CNH provisória (ppd).",
  },
  {
    key: "velocidade",
    img: velocidade,
    titulo: "Multas por Excesso de Velocidade",
    texto:
      "Multas por excesso de velodidade podem levar a suspensão da CNH automaticamente, consulte para saber a situação da sua carteira.",
  },
  {
    key: "multas",
    img: multas,
    titulo: "Multas no Geral",
    texto:
      "Desenvolvo a defesa para qualquer tipo de penalidade por infração de trânsito.",
  },
  {
    key: "parcerias",
    img: manobra,
    titulo: "Parcerias",
    texto:
      "É advogado e seu escritório não atua com Direito de Trânsito? Entre em contato, possuo parceria com diversos advogados e você também pode ser um deles.",
  },
];

export default cardTransito;
