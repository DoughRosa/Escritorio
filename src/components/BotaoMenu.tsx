import menu from '../assets/imagens/menu.png'

interface BotaoMenuProps {
  action: () => void;
}

function BotaoMenu({ action }: BotaoMenuProps) {
  return (
    <button className='botaoMenuCelular' onClick={action}>
      <img className='botaoMenu' src={menu} alt="" />
    </button>
  );
}

export default BotaoMenu;