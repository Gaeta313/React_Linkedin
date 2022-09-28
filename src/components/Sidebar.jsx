import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { getAllUsersAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OtherUsers from "./OtherUsers";

export const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.main.users.allUsers);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);

    useEffect(() => {
        dispatch(getAllUsersAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="sideDiv mb-2" style={theme ? styles.light : styles.dark}>
                <a href="#!" className="d-flex">
                    Modifica il profilo pubblico e l'URL{" "}
                    <i className="bi bi-question-circle-fill ms-auto"></i>
                </a>
                <div className="divider"></div>
                <a href="#!" className="d-flex">
                    Aggiungi il tuo profilo in un'altra lingua{" "}
                    <i className="bi bi-question-circle-fill ms-auto"></i>
                </a>
                <p></p>
            </div>
            <div className="sideDiv mb-2" style={theme ? styles.light : styles.dark}>
                <p className="fw-bold">Persone che potresti conoscere</p>
                {users &&
                    users.map(
                        (user, i) =>
                            i < 6 && (
                                <div className="d-flex mb-3" key={user._id}>
                                    <img
                                        src={user.image}
                                        width="50"
                                        height="50"
                                        alt=""
                                        className="sideImg"
                                    />
                                    <div>
                                        <span className="fw-bold text-secondary">
                                            {user.name} {user.surname}
                                        </span>
                                        <br />
                                        <span>{user.title}</span>
                                        <br />
                                        <Button
                                            className="mt-2 rounded-pill fw-bold"
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => {
                                                navigate("/others/" + user._id);
                                            }}
                                        >
                                            Collegati
                                        </Button>
                                    </div>
                                </div>
                            )
                    )}
            </div>
            <div className="sideDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "/sidebar_img/promosso.png" : "/sidebar_img/promosso_dark.png"}
                    alt=""
                    width="100%"
                />
            </div>
            {/* <div className="sideDiv text-center" style={theme ? styles.light : styles.dark}>
                <img
                    src={
                        theme ? "/sidebar_img/consultate.png" : "/sidebar_img/consultate_dark.png"
                    }
                    alt=""
                />
            </div> */}
        </>
    );
};
