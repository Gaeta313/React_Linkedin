import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import Carousel from "better-react-carousel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormUpdateUser from "./FormUpdateUser";
import { useLocation } from "react-router-dom";

const ProfileBanner = () => {
    const location = useLocation();
    const me = useSelector((state) => state.main.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        console.log("LOCATION", location);
    }, []);

    return (
        <div className="mainDiv mb-2" style={theme ? styles.light : styles.dark}>
            <div className="firstDiv">
                <div className="banner">
                    <div className="bg_image">
                        <div className="bg_image_container">
                            {location.pathname.search("others") === -1 ? (
                                <img src="/hero.jpg" width="100%" alt="hero" />
                            ) : (
                                <img src="http://placekitten.com/700/200" width="100%" alt="" />
                            )}
                        </div>
                    </div>
                    {
                        <Container className="myContainer">
                            <div className="personal_information">
                                <div className="profile_foto d-flex mb-4">
                                    <div className="profile_foto_container">
                                        <img
                                            className="profile_foto_image"
                                            src={me.image}
                                            alt="user_img"
                                            onClick={() => setModalShow(true)}
                                        />
                                    </div>
                                    <div className="d-flex section_icon">
                                        <div className="icona_Profilo">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48"
                                                width="70%"
                                                height="48px"
                                            >
                                                <path
                                                    fill="#0288D1"
                                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                                />
                                                <path
                                                    fill="#FFF"
                                                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="icona_Profilo">
                                            {location.pathname.search("others") === -1 && (
                                                <Button
                                                    className="rounded-pill"
                                                    size="sm"
                                                    variant={theme ? "outline-light" : "light"}
                                                    onClick={() => setModalShow(true)}
                                                >
                                                    <i className="bi bi-pencil text-dark fs-4"></i>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="info_contatto">
                                    <Row>
                                        <Col>
                                            <div>
                                                <h2>
                                                    {me.name} {me.surname}
                                                </h2>
                                                <h5>{me.title}</h5>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="d-flex mb-3">
                                        <span className="me-3">{me.area} </span>{" "}
                                        <span>
                                            {" "}
                                            <a href="#!">Informazioni di contatto</a>
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <a href="#!">150 Collegamenti</a>
                                    </div>

                                    <div className="d-flex ">
                                        <Button
                                            className=" mx-2 profilo_btn"
                                            variant="primary"
                                            id="mediaBtns"
                                        >
                                            Disponibile per
                                        </Button>

                                        <Button
                                            className="mx-2 profilo_btn fw-bold"
                                            variant="outline-primary"
                                            id="mediaBtns"
                                        >
                                            Aggiungi sezione del profilo
                                        </Button>

                                        <Button
                                            className="mx-2 profilo_btn"
                                            variant="outline-dark"
                                            id="mediaBtns"
                                        >
                                            Altro
                                        </Button>
                                    </div>

                                    <div className="my-3">
                                        <Carousel
                                            className="justify-content-center"
                                            cols={2}
                                            rows={1}
                                            gap={5}
                                            loop
                                            scrollSnap
                                        >
                                            <Carousel.Item>
                                                <div className="element">
                                                    <p>
                                                        <b>Disponibile a lavorare</b>
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit.
                                                    </p>
                                                    <a href="#!">
                                                        {" "}
                                                        <b> Vedi tutti i dettagli </b>{" "}
                                                    </a>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className="element">
                                                    <p>
                                                        <b>Fai sapere che stai facendo selezione</b>
                                                    </p>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                    <a href="#!">
                                                        {" "}
                                                        <b> Inizia </b>{" "}
                                                    </a>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className="element">
                                                    <p>
                                                        <b>Titolo</b>
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit.
                                                    </p>
                                                    <a href="#!">Link</a>
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    }
                </div>
            </div>
            <FormUpdateUser show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
};

export default ProfileBanner;
