import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteNews,
    getAllCommentsAction,
    getCommentsByIdAction,
    getNewsById,
    setMeAction,
} from "../redux/action";
import Moment from "react-moment";
import FeedModal from "./FeedModal";
import FeedEditModal from "./FeedEditModal";
import { useNavigate, useParams } from "react-router-dom";

export const MainFeed = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const loaderComment = useSelector((state) => state.main.loaderComment);
    const me = useSelector((state) => state.main.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.main.comments.allComments);
    const commentsById = useSelector((state) => state.main.comments.commentsById);
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {
        console.log("params di feed", postId);
        dispatch(setMeAction());
        if (postId) {
            dispatch(getCommentsByIdAction(postId));
        }
        dispatch(getAllCommentsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <FeedEditModal show={editModalShow} onHide={() => setEditModalShow(false)} />
            <FeedModal show={modalShow} onHide={() => setModalShow(false)} />
            {me && (
                <>
                    <div
                        className="feedProfileDivMedia mb-2"
                        style={theme ? styles.light : styles.dark}
                    >
                        <div className="banner">
                            <div className="bg_image">
                                <div className="bg_image_feed mb-5">
                                    <img src="/hero.jpg" width="100%" height="90" alt="hero" />
                                    <div>
                                        <img
                                            className="main_feed_foto_image"
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
                    <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                        <Row>
                            <Col xs={1} className="me-3">
                                <img src={me.image} alt="" className="navImgFeed " />
                            </Col>
                            <Col xs={10} className="ps-4">
                                <Form.Control
                                    type="text"
                                    placeholder="Avvia un post"
                                    className="rounded-pill mt-2 p-2 ps-3 newPostInput"
                                    readOnly={true}
                                    onClick={() => setModalShow(true)}
                                />
                            </Col>
                        </Row>
                        <Row className="text-center mt-3 fw-bold text-secondary">
                            <Col xs={3} md={3} lg={2}>
                                <div className="mainFeedHover" onClick={() => setModalShow(true)}>
                                    <i className="bi bi-image fs-5"></i> <span>Foto</span>
                                </div>
                            </Col>
                            <Col xs={3} md={3} lg={2}>
                                <div className="mainFeedHover">
                                    <i className="bi bi-play-btn-fill fs-5"></i>
                                    <span> Video</span>
                                </div>
                            </Col>
                            <Col xs={3} md={3} lg={4}>
                                <div className="mainFeedHover">
                                    <i className="bi bi-briefcase-fill fs-5"></i>{" "}
                                    <span>Offerta di lavoro</span>
                                </div>
                            </Col>
                            <Col xs={3} md={3} lg={4}>
                                <div className="mainFeedHover">
                                    <i className="bi bi bi-file-text-fill fs-5"></i>{" "}
                                    <span>Scrivi un articolo</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </>
            )}

            <div className="divider mb-2"></div>

            {postId && commentsById && (
                <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                    <Row>
                        <Col xs={1} className="me-3">
                            <img
                                src={me.image}
                                alt=""
                                className="navImgFeed"
                                width="50"
                                height="50"
                            />
                        </Col>
                        <Col xs={7} className="ps-4">
                            <span
                                className="fw-bold userLink"
                                onClick={() => {
                                    navigate("../others/" + commentsById.user._id);
                                }}
                            >
                                {commentsById.username}{" "}
                            </span>
                            <br />
                            <Moment format="DD-MM-YY HH:mm">{commentsById.createdAt}</Moment>
                        </Col>
                        <Col xs={3} className="text-end">
                            {
                                <>
                                    <Button
                                        className="rounded-pill"
                                        size="sm"
                                        variant={theme ? "outline-light" : "secondary"}
                                        onClick={() => {
                                            dispatch(getNewsById(commentsById._id));
                                            setEditModalShow(true);
                                        }}
                                    >
                                        <i className="bi bi-pencil text-dark fs-5"></i>
                                    </Button>
                                    <Button
                                        className="rounded-pill"
                                        size="sm"
                                        variant={theme ? "outline-light" : "secondary"}
                                        onClick={() => {
                                            dispatch(deleteNews(commentsById._id));
                                        }}
                                    >
                                        <i className="bi bi-trash3 text-dark fs-5 "></i>
                                    </Button>
                                </>
                            }
                            <Button
                                className="rounded-pill"
                                size="sm"
                                variant={theme ? "outline-light" : "secondary"}
                            >
                                <i className="bi bi-three-dots text-dark fs-5"></i>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{commentsById.text}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            {commentsById.image && (
                                <img src={commentsById.image} alt="" width="100%" />
                            )}
                        </Col>
                    </Row>
                    <Row className="text-secondary mt-1">
                        <Col>
                            <p>
                                <i className="bi bi-hand-thumbs-up-fill text-primary"></i> 32.998
                            </p>
                        </Col>
                        <Col className="text-end">
                            <p>672 commenti - 425 condivisioni</p>
                        </Col>
                    </Row>
                    <div className="divider"></div>
                    <Row className="text-center mt-3 fw-bold text-secondary">
                        <Col xs={3}>
                            <div className="mainFeedHover">
                                <i className="bi bi-hand-thumbs-up fs-4"></i> Consiglia
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="mainFeedHover">
                                <i className="bi bi-chat-text fs-4"></i> Commenta
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="mainFeedHover">
                                <i className="bi bi-arrow-90deg-right fs-4"></i> Condividi
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="mainFeedHover">
                                <i className="bi bi bi-send-fill fs-4"></i> Invia
                            </div>
                        </Col>
                    </Row>
                </div>
            )}

            {console.log(comments)}
            {loaderComment && me && !postId ? (
                <div className="my-3 text-center">
                    <Spinner animation="border" variant="secondary" />
                </div>
            ) : (
                comments &&
                !postId &&
                comments.map((comment, i) => {
                    return (
                        <div key={i} className="feedDiv" style={theme ? styles.light : styles.dark}>
                            <Row>
                                <Col xs={1} className="me-3">
                                    <img
                                        src={comment.user.image}
                                        alt=""
                                        className="navImgFeed"
                                        width="50"
                                        height="50"
                                    />
                                </Col>
                                <Col xs={7} className="ps-4">
                                    <span
                                        className="fw-bold userLink"
                                        onClick={() => {
                                            navigate("../others/" + comment.user._id);
                                        }}
                                    >
                                        {comment.username}{" "}
                                    </span>
                                    <br />
                                    <Moment format="DD-MM-YY HH:mm">{comment.createdAt}</Moment>
                                </Col>
                                <Col xs={3} className="text-end">
                                    {comment.user?._id === me._id && (
                                        <>
                                            <Button
                                                className="rounded-pill"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(getNewsById(comment._id));
                                                    setEditModalShow(true);
                                                }}
                                            >
                                                <i className="bi bi-pencil text-dark fs-5"></i>
                                            </Button>
                                            <Button
                                                className="rounded-pill"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(deleteNews(comment._id));
                                                }}
                                            >
                                                <i className="bi bi-trash3 text-dark fs-5 "></i>
                                            </Button>
                                        </>
                                    )}
                                    <Button
                                        className="rounded-pill"
                                        size="sm"
                                        variant={theme ? "outline-light" : "secondary"}
                                    >
                                        <i className="bi bi-three-dots text-dark fs-5"></i>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{comment.text}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    {comment.image && (
                                        <img src={comment.image} alt="" width="100%" />
                                    )}
                                </Col>
                            </Row>
                            <Row className="text-secondary mt-1">
                                <Col>
                                    <p>
                                        <i className="bi bi-hand-thumbs-up-fill text-primary"></i>{" "}
                                        32.998
                                    </p>
                                </Col>
                                <Col className="text-end">
                                    <p>672 commenti - 425 condivisioni</p>
                                </Col>
                            </Row>
                            <div className="divider"></div>
                            <Row className="text-center mt-3 fw-bold text-secondary">
                                <Col xs={3}>
                                    <div className="mainFeedHover">
                                        <i className="bi bi-hand-thumbs-up fs-4"></i> Consiglia
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className="mainFeedHover">
                                        <i className="bi bi-chat-text fs-4"></i> Commenta
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className="mainFeedHover">
                                        <i className="bi bi-arrow-90deg-right fs-4"></i> Condividi
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className="mainFeedHover">
                                        <i className="bi bi bi-send-fill fs-4"></i> Invia
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })
            )}
        </>
    );
};
