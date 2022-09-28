import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperienceAction, putExperienceAction, URL, TOKEN, setLoaderAction } from "../redux/action";

const FormEditExperience = (props) => {
    const dispatch = useDispatch();
    const [currentExp, setCurrentExp] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
    });
    const [file, setFile] = useState(null);

    const [role, setRole] = useState(currentExp.role);
    const [company, setCompany] = useState(currentExp.company);
    const [startDate, setStartDate] = useState(currentExp.startDate);
    const [endDate, setEndDate] = useState(currentExp.endDate);
    const [description, setDescription] = useState(currentExp.description);
    const [area, setArea] = useState(currentExp.area);
    const expId = useSelector((state) => state.main.user.expId);
    const me = useSelector((state) => state.main.user.me);
    const singleExp = useSelector((state) => state.main.user.singleExp);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");
        let experience = {
            role: role,
            company: company,
            startDate: startDate,
            endDate: endDate,
            area: area,
            description: description,
        };
        console.log(experience);
        if (file) {
            dispatch(setLoaderAction(true))
            let formData = new FormData();
            formData.append("experience", file);
            try {
                let response = await fetch(
                    URL + "/profile/" + me._id + "/experiences/" + expId + "/picture",
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${TOKEN}`,
                        },
                    }
                );

                if (response.ok) {
                    dispatch(putExperienceAction(me._id, expId, experience));
                }
            } catch (e) {}
        } else {
            dispatch(putExperienceAction(me._id, expId, experience));
        }
    };

    const func = async () => {
        try {
            const response = await fetch(URL + "/profile/" + me._id + "/experiences/" + expId, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            });

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                setCurrentExp(data);
                setRole(data.role);
                setCompany(data.company);
                setStartDate(data.startDate);
                setEndDate(data.endDate);
                setArea(data.area);
                setDescription(data.description);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        func();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(expId);
        func();
    }, [expId]);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modifica Esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setRole(e.target.value);
                            }}
                            value={role}
                            type="text"
                            placeholder="Role"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCognome">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setStartDate(e.target.value);
                            }}
                            value={startDate?.toString()}
                            type="date"
                            placeholder="Start Date"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNomeA">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setEndDate(e.target.value);
                            }}
                            value={endDate?.toString()}
                            type="date"
                            placeholder="End Date"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSomm">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setArea(e.target.value);
                            }}
                            value={area}
                            type="text"
                            placeholder="Area"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocal">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setCompany(e.target.value);
                            }}
                            value={company}
                            type="text"
                            placeholder="Company"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocal">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            value={description}
                            as="textarea"
                            placeholder="Description..."
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

export default FormEditExperience;
