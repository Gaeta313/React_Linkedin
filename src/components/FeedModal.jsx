import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postNews } from "../redux/action";

const FeedModal = (props) => {
    const [file, setFile] = useState(null);
    const me = useSelector((state) => state.main.user.me);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [imgPrew, setImgPrew] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);

        dispatch(postNews({ text: text }, file));
        setText("");
        props.onHide();
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Crea un post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="immaginePost">
                        <img src={me?.image} width="60" height="60" alt="" />
                    </div>
                    <div className="ms-3 d-flex flex-column justify-content-center">
                        <p className="mb-1">
                            <b>
                                {me?.name} {me?.surname}
                            </b>
                        </p>
                        <Button variant="outline-secondary rounded-pill" className="m-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match me-2"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm8 10a8 8 0 01-6 7.73l2.39-3a1.5 1.5 0 00.17-1.61l-1.16-2.31a1.5 1.5 0 00-1.33-.81H10v-.38a1 1 0 01.55-.9l.81-.4a1 1 0 011.15.19L13 11l.84-1.68a1.44 1.44 0 00.16-.67v-1a1.5 1.5 0 01.44-1.06L16 5.05A8 8 0 0120 12zM6.56 8.56A1.5 1.5 0 017 9.62v.76a1.5 1.5 0 00.44 1.06l1.12 1.12a1.5 1.5 0 001.06.44H10v1.38a1.5 1.5 0 00.44 1.06l1.12 1.12a1.5 1.5 0 01.44 1.06V20a8 8 0 01-8-8 7.91 7.91 0 011.44-4.56z"></path>
                            </svg>
                            Globale <i class="bi bi-caret-down-fill"></i>
                        </Button>
                    </div>
                </div>
                <div className="text mt-3">
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Di cosa vorresti parlare ?"
                        >
                            <Form.Control
                                as="textarea"
                                value={text}
                                placeholder="Leave a comment here"
                                style={{ height: "100px", border: "none" }}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </FloatingLabel>
                        <img src={imgPrew} width="100%" alt="" />
                        <Button variant="outline-light" style={{ color: "blue" }}>
                            <span class="artdeco-button__text">Aggiungi hashtag</span>
                        </Button>
                        <div className="d-flex mt-3 ">
                            <div className=" bottoniModale ">
                                <Button variant="primary" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="white"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                        onClick={() => {
                                            var input = document.createElement("input");
                                            input.type = "file";
                                            input.click();
                                            input.addEventListener("change", () => {
                                                console.log(input.files[0]);
                                                setFile(input.files[0]);
                                                let path = URL.createObjectURL(input.files[0]);
                                                console.log(path);
                                                setImgPrew(path);
                                            });
                                        }}
                                    >
                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                                    </svg>
                                </Button>
                                <Button variant="light" className="rounded-circle fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="gray"
                                        class="mercado-match"
                                        width="24"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                    </svg>
                                </Button>
                            </div>
                            <div className="section">
                                <Button variant="light" className="rounded-pill fs-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        data-supported-dps="16x16"
                                        fill="currentColor"
                                        class="mercado-match"
                                        width="16"
                                        height="35"
                                        focusable="false"
                                    >
                                        <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                    </svg>
                                    <span> Tutti</span>
                                </Button>
                            </div>
                            <div className="ms-auto">
                                <Button type="submit" variant="primary" className="rounded-pill">
                                    Pubblica
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default FeedModal;
