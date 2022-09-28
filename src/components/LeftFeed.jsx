import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMeAction } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const LeftFeed = () => {
    const me = useSelector((state) => state.main.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setMeAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {me && (
                <>
                    <div className="feedProfileDivHead" style={theme ? styles.light : styles.dark}>
                        <div className="banner">
                            <div className="bg_image">
                                <div className="bg_image_feed mb-5">
                                    <img src="/hero.jpg" width="100%" height="70" alt="hero" />
                                    <div>
                                        <img
                                            className="feed_foto_image"
                                            src={me.image}
                                            alt=""
                                            onClick={() => {
                                                setTimeout(() => {
                                                    navigate("/");
                                                }, 500);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Container className="myContainer">
                                <div className="info_contatto_feed text-center mb-2">
                                    <span
                                        className="fw-bold pointer"
                                        onClick={() => {
                                            setTimeout(() => {
                                                navigate("/");
                                            }, 500);
                                        }}
                                    >
                                        {me.name} {me.surname}
                                    </span>{" "}
                                    <br />
                                    <span className="small">{me.title}</span>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="feedProfileDiv" style={theme ? styles.light : styles.dark}>
                        <p className="d-flex p">
                            Chi ha visitato il tuo profilo? <span className="ms-auto">75</span>
                        </p>
                        <p className="d-flex p">
                            Visualizzazioni del tuo post <span className="ms-auto">2.150</span>
                        </p>
                    </div>
                    <div className="feedProfileDiv" style={theme ? styles.light : styles.dark}>
                        <i className="d-flex">Accedi a strumenti e informazioni in esclusiva</i>
                        <b className="d-flex">
                            <i className="bi bi-slash-square-fill me-2"></i> Prova Premium gratis
                        </b>
                    </div>
                    <div
                        className="feedProfileDivBottom"
                        style={theme ? styles.light : styles.dark}
                    >
                        <p className="fw-bold text-secondary">
                            <i className="bi bi-bookmark-fill me-2"></i> I miei elementi
                        </p>
                    </div>
                </>
            )}
            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "/feedbar_img/recenti.png" : "/feedbar_img/recenti_dark.png"}
                    alt=""
                    width="90%"
                />
            </div>
        </div>
    );
};
