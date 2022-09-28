import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllExperiencesAction, getUserByIdAction, setMeAction } from "../redux/action";
import MainUser from "./MainUser";
import { MyFooter } from "./MyFooter";
import { Sidebar } from "./Sidebar";

const OtherUsers = () => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.main.user.me);
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getUserByIdAction(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    useEffect(() => {
        if (me) dispatch(getAllExperiencesAction(me._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [me]);

    return (
        <Container className="mt-4">
            {me && (
                <Row>
                    <Col xs={8}>
                        <MainUser />
                    </Col>

                    <Col xs={4}>
                        <Sidebar />
                    </Col>
                </Row>
            )}
            <MyFooter />
        </Container>
    );
};

export default OtherUsers;
