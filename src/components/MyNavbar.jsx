import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Modal } from "react-bootstrap";
import { setDarkAction, setLightAction } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const MyNavbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const me = useSelector((state) => state.main.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    const handleModal = () => setShow(!show);

    return (
        <Navbar
            expand="lg"
            variant={theme ? "light" : "dark"}
            className="myNav py-0"
            style={theme ? styles.light : styles.dark}
        >
            <Container>
                <Navbar.Brand>
                    <i className="bi bi-linkedin blue fs-1"></i>
                </Navbar.Brand>
                <Form className="d-flex myForm" id="searchBar">
                    <i className="bi bi-search fs-5"></i>
                    <Form.Control
                        type="search"
                        placeholder="Cerca"
                        className="me-2"
                        aria-label="Search"
                        id="mySearch"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link
                            id="navLink"
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/feed");
                                }, 500);
                            }}
                        >
                            <i className="bi bi-house-door-fill"></i>
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link id="navLink">
                            <i className="bi bi-people-fill"></i>
                            <span>Rete</span>
                        </Nav.Link>
                        <Nav.Link id="navLink">
                            <i className="bi bi-briefcase-fill"></i>
                            <span>Lavoro</span>
                        </Nav.Link>
                        <Nav.Link id="navLink">
                            <i className="bi bi-chat-left-dots-fill"></i>
                            <span>Messaggistica</span>
                        </Nav.Link>
                        <Nav.Link id="navLink">
                            <i className="bi bi-bell-fill"></i>
                            <span>Notifiche</span>
                        </Nav.Link>
                        {me && (
                            <div id="navLink">
                                <img
                                    src={me.image}
                                    alt=""
                                    width="32"
                                    className="mx-auto navImg"
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate("/");
                                        }, 500);
                                    }}
                                />
                                <NavDropdown title="Tu" id="navbarScrollingDropdown">
                                    <div style={theme ? styles.light : styles.dark}>
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <div
                                                className="d-flex"
                                                onClick={() => {
                                                    setTimeout(() => {
                                                        navigate("/");
                                                    }, 500);
                                                }}
                                            >
                                                <img
                                                    src={me.image}
                                                    alt=""
                                                    className="me-3 navImgDd"
                                                />
                                                <div>
                                                    <p className="fw-bold">
                                                        {me.name} {me.surname}
                                                    </p>
                                                    <p>{me.title}</p>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    className="fw-bold mt-2 justify-content-center rounded-pill"
                                                    onClick={() => {
                                                        setTimeout(() => {
                                                            navigate("/");
                                                        }, 500);
                                                    }}
                                                >
                                                    Visualizza Profilo
                                                </Button>
                                            </div>
                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p className="fw-bold">Account</p>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p onClick={() => dispatch(setLightAction())}>
                                                Modalità Chiara
                                            </p>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p onClick={() => dispatch(setDarkAction())}>
                                                Modalità Scura
                                            </p>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p>Lingua</p>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p className="fw-bold">Gestisci</p>
                                            <p>Post e Attività</p>
                                            <p>Account pe la pubblicazione di off..</p>
                                            <p>Lingua</p>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            style={theme ? { color: "black" } : { color: "grey" }}
                                        >
                                            <p>Esci</p>
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </div>
                        )}
                        <div id="navLinkGrid">
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <NavDropdown
                                title="Lavoro"
                                id="navbarScrollingDropdown"
                                onClick={handleModal}
                            >
                                <Modal
                                    show={show}
                                    onHide={handleModal}
                                    backdrop="static"
                                    keyboard={false}
                                    id="myModal"
                                >
                                    <div
                                        className="modalDarkMode"
                                        style={theme ? styles.light : styles.dark}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Lavoro</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="fw-bold myModal mHeader">
                                                Scopri altri prodotti LinkedIn
                                            </div>
                                            <div className="myModal mBottom">
                                                <div className="row text-center">
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/learning.png"
                                                            alt="learning"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Learning</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/insights.png"
                                                            alt="insights"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Insights</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/offerta.png"
                                                            alt="offerta"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Pubblica</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/pubblicizza.png"
                                                            alt="pubblicizza"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Pubblicizza</p>
                                                    </div>
                                                    <div className="w-100"></div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/lead.png"
                                                            alt="lead"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Trova lead</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/gruppi.png"
                                                            alt="gruppi"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Gruppi</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/market.png"
                                                            alt="market"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Marketplace</p>
                                                    </div>
                                                    <div className="col">
                                                        <img
                                                            src="./modal_img/salary.png"
                                                            alt="salary"
                                                            width="50"
                                                            className="modalImg bg-white"
                                                        />
                                                        <p>Salary</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fw-bold myModal mHeader">
                                                Assistenza alle aziende di LinkedIn
                                            </div>
                                            <div className="myModal">
                                                <p>
                                                    <span className="fw-bold">
                                                        Talent Solutions
                                                    </span>
                                                    <br />
                                                    <span>Trova, attrai, assumi</span>
                                                </p>
                                                <p>
                                                    <span className="fw-bold">Sales Solutions</span>
                                                    <br />
                                                    <span>
                                                        Sblocca nuove opportunità di vendita
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="fw-bold">
                                                        Pubblica offerta di lavoro gratuita
                                                    </span>
                                                    <br />
                                                    <span>Pubblica offerta di lavoro gratuita</span>
                                                </p>
                                                <p>
                                                    <span className="fw-bold">
                                                        Marketing Solutions
                                                    </span>
                                                    <br />
                                                    <span>
                                                        Acquisisci clienti e fai crescere la tua
                                                        azienda
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="fw-bold">
                                                        Learning Solutions
                                                    </span>
                                                    <br />
                                                    <span>
                                                        Promuovi l'acquisizione di competenze nella
                                                        tua organizzazione
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="myModal mBottom">
                                                <span className="fw-bold">
                                                    Crea una pagina aziendale{" "}
                                                    <i class="bi bi-plus-lg"></i>
                                                </span>
                                            </div>
                                        </Modal.Body>
                                    </div>
                                </Modal>
                            </NavDropdown>
                        </div>
                        <Nav.Link id="navLink">
                            <i className="bi bi-signpost-fill"></i>
                            <span>Pubblica offerta di lavoro gratuita</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
