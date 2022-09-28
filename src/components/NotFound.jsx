import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={6} className="text-center">
                    <h2 className="text-danger">404 - Page Not Found</h2>
                    <Button
                        className="m-3"
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/");
                            }, 500);
                        }}
                    >
                        Back to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
