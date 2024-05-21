import Facebook from "../../assets/icons/redesocial-facebook.svg"
import Instagram from "../../assets/icons/redesocial-instagram.svg"
import X from "../../assets/icons/redesocial-x.svg"
import Gmail from "../../assets/icons/redesocial-gmail.svg"
import Threads from "../../assets/icons/redesocial-threads.svg"
import Whatsapp from "../../assets/icons/redesocial-whatsapp.svg"



import './footer.css'
function Footer(){
    return (
        <footer className="footerContainer">
            <div className="socialNetwork">
                <a href=""><img width="32" src={Facebook} alt="facebook" /></a>
                <a href=""><img width="32" src={Instagram} alt="instagram" /></a>
                <a href=""><img width="32" src={X} alt="x/twitter" /></a>
                <a href=""><img width="32" src={Gmail} alt="gmail" /></a>
                <a href=""><img width="32" src={Threads} alt="threads" /></a>
                <a href=""><img width="32" src={Whatsapp} alt="whatsapp" /></a>
            </div>
            <span className="footerCopyright">Copyright 2024 - Todos direitos reservados</span>
        </footer>
    )
}

export default Footer