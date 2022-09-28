import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getMyLastCommentsAction, setMeAction } from "../redux/action";

export const Attivita = () => {
    const location = useLocation();
    const loader = useSelector((state) => state.main.loader);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    const comments = useSelector((state) => state.main.comments.myLastComments);
    const dispatch = useDispatch();
    const me = useSelector((state) => state.main.user.me);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMyLastCommentsAction(me._id));
    }, [location]);

    return (
        <div className="mainDiv mb-1" style={theme ? styles.light : styles.dark}>
            {loader ? (
                <div className="my-3 text-center">
                    <Spinner animation="border" variant="secondary" />
                </div>
            ) : (
                <Container className="myContainer p-3">
                    <h5 className="d-flex">
                        <b>Attività</b>{" "}
                    </h5>
                    {comments &&
                        comments.map((comment, i) => (
                            <>
                                <Row key={i} className="my-3">
                                    <Col xs={2} className="me-5">
                                        <img
                                            src={comment.image}
                                            width="100"
                                            height="100"
                                            alt=""
                                            className="attivitaImg mt-2"
                                        />
                                    </Col>

                                    <Col xs={6} className="m-2 pointer">
                                        <div onClick={() => navigate("/feed/" + comment._id)}>
                                            <span>
                                                Pubblicato da: <b>{comment.user.username}</b>
                                            </span>
                                            <br />
                                            <span className="small">
                                                <Moment format="DD-MM-YY HH:mm">
                                                    {comment.updatedAt}
                                                </Moment>
                                            </span>
                                            <p>{comment.text}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="divider"></div>
                            </>
                        ))}
                </Container>
            )}
        </div>
    );
};
