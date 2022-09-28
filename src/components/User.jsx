import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllExperiencesAction, setMeAction } from "../redux/action";
import MainUser from "./MainUser";
import { MyFooter } from "./MyFooter";
import { Sidebar } from "./Sidebar";

export const User = () => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.main.user.me);

    useEffect(() => {
        dispatch(setMeAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (me) dispatch(getAllExperiencesAction(me._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [me]);

    return (
        <Container className="mt-4">
            {me && (
                <Row>
                    <Col xs={8} id="mainWidth">
                        <MainUser />
                    </Col>

                    <Col xs={4} id="displaySide">
                        <Sidebar />
                    </Col>
                </Row>
            )}
            <MyFooter />
        </Container>
    );
};
