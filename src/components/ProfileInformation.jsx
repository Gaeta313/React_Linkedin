import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileInformation = () => {
    
    const me = useSelector((state) => state.main.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    return (
        <div className="mainDiv mb-2" style={theme ? styles.light : styles.dark}>
            {  <Container className="myContainer mt-3">
                <h5 className="mb-4">
                    <b> Informazioni</b>{" "}
                </h5>
                <p>{me.bio}</p>
            </Container>}
        </div>
    );
};

export default ProfileInformation;
