import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const FeedFooter = () => {
    const theme = useSelector((state) => state.userTheme.theme);
    return (
        <div
            className="text-center feedFooter my-4"
            style={theme ? { color: "black" } : { color: "white" }}
        >
            <span className="d-flex justify-content-center mb-1">
                <a href="#!" className="me-3 nav-link">
                    Informazioni
                </a>
                <a href="#!" className="nav-link">
                    Accessibilità
                </a>
            </span>
            <div className="d-flex justify-content-center mb-1">
                <a href="#!" className="me-3 nav-link">
                    Centro Assistenza
                </a>

                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Privacy e condizioni"
                    menuVariant="light"
                >
                    <NavDropdown.Item href="#action/3.1">
                        Informativa sulla privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Contratto di licenza</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Informativa sui Cookie</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Informativa sul copyright
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mb-1">
                <a href="#!" className="nav-link">
                    Opzioni per gli annunci pubblicitari
                </a>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <a href="#!" className="me-3 nav-link">
                    Pubblicità
                </a>

                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Servizi alle aziende"
                    menuVariant="light"
                >
                    <NavDropdown.Item href="#action/3.1">
                        Informativa sulla privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Contratto di licenza</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Informativa sui Cookie</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Informativa sul copyright
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <p className="d-flex justify-content-center">
                <a href="#!" className="me-3 nav-link">
                    Scarica l'app Linkedin
                </a>
                <a href="#!" className="nav-link">
                    Altro
                </a>
            </p>
            <p>
                {" "}
                <img
                    src="/icons/LI-Logo.png"
                    width="60px"
                    style={{ marginTop: "-3px" }}
                    alt=""
                ></img>{" "}
                LinkedIn Corporation © 2022
            </p>
        </div>
    );
};

export default FeedFooter;
