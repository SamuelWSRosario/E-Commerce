import './header.css'
import Logo from '../../assets/logo/electronicsStore.png'
import Person from '../../assets/icons/person.svg'
import Carrinho from '../../assets/icons/carrinho.svg'
import Search from '../../assets/icons/search.svg'

function Header(){
    return (
        <header className='headerContainer center'>
            <div className='advertising'>
                <span className='advertising-item'>Promoção venda de Notebooks samsung 50% de desconto</span>
                <span className='advertising-item'>Intel i5 10th + Memoria ram de 16gb com FRETE GRATIS</span>
                <span className='advertising-item'>Placa de video 3080 NVIDIA ENVIOS INTERNACIONAIS</span>
                <span className='advertising-item'>ATENÇÂO NÃO COBRAMOS TAXA DE IMCS ATÉ 2026</span>
            </div>

            <nav className='navegationContainer center'>    
                <div className='searchBarContainer center'>
                    <a className='logoHeader' href="#"><img src={Logo} alt="Logo" /></a>
                    <div className='searchBar center'>
                        <input type="text" placeholder='pesquisar' />
                        <button><img src={Search} alt="Lupa" /></button>
                    </div>
                    <div className='itensAndAccount'>
                        <a href="#"><img src={Person} alt="Perfil" /></a>
                        <a href="#"><img src={Carrinho} alt="Carrinho" /></a>
                    </div>
                </div>
                
                <ul className='listLink center'>
                    <li><a href="#">Promoção</a></li>
                    <li><a href="#">Novos itens</a></li>
                    <li><a href="#">Envio internacional</a></li>
                    <li><a href="#">Envio nacional</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header