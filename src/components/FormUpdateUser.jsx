import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TOKEN, updateMeAction, URL } from "../redux/action";

const FormUpdateUser = (props) => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.main.user.me);
    const [file, setFile] = useState(null);

    const [nome, setNome] = useState(me.name);
    const [cognome, setCognome] = useState(me.surname);
    const [nomeA, setNomeA] = useState(me.username);
    const [sommario, setSommario] = useState(me.title);
    const [località, setLocalità] = useState(me.area);
    const [bio, setBio] = useState(me.bio);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            name: nome,
            surname: cognome,
            username: nomeA,
            title: sommario,
            area: località,
            bio: bio,
            email: me.email,
            _id: me._id,
        };
        if (file) {
            let formData = new FormData();
            formData.append("profile", file);
            try {
                let response = await fetch(URL + "/profile/" + me._id + "/picture", {
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                if (response.ok) {
                    dispatch(updateMeAction(user));
                }
            } catch (e) {}
        } else {
            dispatch(updateMeAction(user));
        }
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modifica Introduzione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setNome(e.target.value);
                            }}
                            value={nome}
                            type="text"
                            placeholder="Nome"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCognome">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setCognome(e.target.value);
                            }}
                            value={cognome}
                            type="text"
                            placeholder="Cognome"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNomeA">
                        <Form.Label>Nome Aggiuntivo</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setNomeA(e.target.value);
                            }}
                            value={nomeA}
                            type="text"
                            placeholder="Nome Aggiuntivo"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSomm">
                        <Form.Label>Sommario</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setSommario(e.target.value);
                            }}
                            value={sommario}
                            type="text"
                            placeholder="Sommario"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocal">
                        <Form.Label>Località</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setLocalità(e.target.value);
                            }}
                            value={località}
                            type="text"
                            placeholder="Città,Regione,Stato"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocal">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setBio(e.target.value);
                            }}
                            value={bio}
                            as="textarea"
                            placeholder="Qualcosa di te..."
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocal">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </Form.Group>
                    <div className="text-end">
                        <Button onClick={props.onHide} variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default FormUpdateUser;
