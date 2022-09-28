import { Container } from "react-bootstrap";
import { Attivita } from "./Attivita";
import { Experiences } from "./Experiences";

import ProfileBanner from "./ProfileBanner";
import ProfileInformation from "./ProfileInformation";

const MainUser = ({ user }) => {
    return (
        <Container>
            <ProfileBanner user={user} />
            <ProfileInformation user={user} />
            <Experiences />
            <Attivita />
        </Container>
    );
};

export default MainUser;
