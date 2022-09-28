import React from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";

export const MyFooter = () => {
    return (
        <Container>
            <footer className="mt-5">
                <Row>
                    <Col className="mb-2">
                        <img src="/icons/LI-Logo.png" alt="logo" width="100px" />
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3 fw-bold footerCol">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Informazioni
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Linee guida della community
                                </a>
                            </li>

                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Privacy e condizioni"
                                menuVariant="light"
                                className="mb-2"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Informativa sulla privacy
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Contratto di licenza
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Informativa sui Cookie
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Informativa sul copyright
                                </NavDropdown.Item>
                            </NavDropdown>

                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Sales Solutions
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Centro sicurezza
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="mb-3 fw-bold footerCol">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Accessibilità
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Carriera
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Opzioni di annuncio
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Mobile
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="mb-3 fw-bold footerCol">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Talent Solutions
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Soluzioni di marketing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Pubblicità
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#!" className="nav-link p-0 text-muted">
                                    Piccole imprese
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footerCol text-secondary">
                        <div className="d-flex mb-2">
                            <i className="bi bi-question-circle-fill fs-4 me-2"></i>
                            <div>
                                <span className="footerHover">Domande?</span>
                                <br />
                                <span className="small">Visita il nostro Centro assistenza.</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-gear-fill fs-4 me-2"></i>
                            <div>
                                <span className="footerHover">
                                    Gestisci il tuo account e la tua privacy
                                </span>
                                <br />
                                <span className="small">Vai alle impostazioni</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <span className="ps-2 small text-secondary">Seleziona lingua</span>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Italiano (Italiano)</option>
                            <option value="1">English (Inglese)</option>
                            <option value="2">Spanish (spagnolo)</option>
                            <option value="3">Deutsch (Tedesco)</option>
                        </select>
                    </Col>
                </Row>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
                    <p>LinkedIn Corporation © 2022</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-dark" href="#!">
                                <svg className="bi" width="24" height="24">
                                    <use href="#twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-dark" href="#!">
                                <svg className="bi" width="24" height="24">
                                    <use href="#instagram" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-dark" href="#!">
                                <svg className="bi" width="24" height="24">
                                    <use href="#facebook" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </Container>
    );
};
