import "../assets/css/Footer.css"
import adareLogo from "../assets/images/adareLogo.png"

export default function FooterN() {
    return (
        <>
            <footer className="footer-lg container-fluid text-center">
                <section className="container">
                    <article className="col-12">
                        <img src={adareLogo} alt="adareLogo" />
                        <h5 className="h5">(+503) 2205-0000</h5>
                        <p>1a calle Oriente, Centro Histórico de San Salvador, El Salvador</p>
                        <small>&copy; Todos los derechos reservados</small>
                    </article>
                </section>
            </footer>
        </>
    )
}