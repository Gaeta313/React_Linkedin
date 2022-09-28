import React from "react";
import { useSelector } from "react-redux";
import FeedFooter from "./FeedFooter";

export const RightFeed = () => {
    // const me = useSelector((state) => state.user.me);
    const theme = useSelector((state) => state.userTheme.theme);
    const styles = useSelector((state) => state.userTheme.styles);
    return (
        // <div className="feedDiv" style={theme ? styles.light : styles.dark}>
        //     RightFeed
        // </div>
        <>
            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "/feedbar_img/notizie.png" : "/feedbar_img/notizie_dark.png"}
                    alt="notizie"
                    width="100%"
                />
            </div>
            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "/sidebar_img/promosso.png" : "/sidebar_img/promosso_dark.png"}
                    alt="promosso"
                    width="100%"
                />
            </div>

            <FeedFooter />
        </>
    );
};
