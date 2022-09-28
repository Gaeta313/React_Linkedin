import React, { useState } from "react";
import { Button, Col, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delteteExperienceAction, setExpIdAction } from "../redux/action";
import FormAddExperience from "./FormAddExperience";
import FormEditExperience from "./FormEditExperience";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";

export const Experiences = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const loader = useSelector((state)=> state.main.loader)
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const me = useSelector((state) => state.main.user.me);
    const experiences = useSelector((state) => state.main.user.experiences);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    return (
        <div className="mainDiv mb-1" style={theme ? styles.light : styles.dark}>
            <  Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Esperienza</b>{" "}
                   { location.pathname.search("others") === -1 && <div className="ms-auto">
                        <Button
                            className="rounded-pill fs-4"
                            size="sm"
                            variant={theme ? "outline-light" : "light"}
                            onClick={() => setModalShow(true)}
                        >
                            <i className="bi bi-plus-lg text-dark"></i>
                        </Button>
                    </div>}
                </h5>
                {experiences &&  loader ? <div className="my-3 text-center"><Spinner  animation="border" variant="secondary" /></div> :
                    experiences.map((experience, i) => (
                        <div key={i}>
                            <div className="d-flex mt-3" key={i}>
                                <Col xs={2}>
                                    <img
                                        src={experience.image}
                                        width="50"
                                        height="50"
                                        alt=""
                                        className="sideImg"
                                    />
                                </Col>

                                <Col xs={10}>
                                    <span className="fw-bold d-flex">
                                        {experience.role}
                                      { location.pathname.search("others") === -1 && <div className="ms-auto">
                                            <Button
                                                className="rounded-pill ms-auto"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(setExpIdAction(experience._id));
                                                    setEditModalShow(true);
                                                }}
                                            >
                                                <i className="bi bi-pencil text-dark fs-5"></i>
                                            </Button>
                                            <Button
                                                className="rounded-pill ms-auto"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(
                                                        delteteExperienceAction(
                                                            me._id,
                                                            experience._id
                                                        )
                                                    );
                                                }}
                                            >
                                                <i className="bi bi-trash3 text-dark fs-5 "></i>
                                            </Button>
                                        </div>}
                                    </span>

                                    <span>{experience.company}</span>
                                    <br />
                                    <span>
                                        <Moment format="DD-MM-YY HH:mm">
                                            {experience.startDate}
                                        </Moment>{" "}
                                        -{" "}
                                        <Moment format="DD-MM-YY HH:mm">
                                            {experience.endDate}
                                        </Moment>
                                    </span>
                                    <p>{experience.description}</p>
                                </Col>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}
            </Container>
            <FormAddExperience show={modalShow} onHide={() => setModalShow(false)} />
            <FormEditExperience show={editModalShow} onHide={() => setEditModalShow(false)} />
        </div>
    );
};
