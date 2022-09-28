import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { User } from "./components/User";
import { MyNavbar } from "./components/MyNavbar";
import { useSelector } from "react-redux";
import { Feed } from "./components/Feed";
import OtherUsers from "./components/OtherUsers";

function App() {
    const theme = useSelector((state) => state.userTheme.theme);

    return (
        <BrowserRouter>
            <div
                style={
                    theme ? { backgroundColor: "rgb(243, 242, 239)" } : { backgroundColor: "black" }
                }
            >
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/feed/" element={<Feed />} />
                    <Route path="/feed/:postId" element={<Feed />} />
                    <Route path="/others/:userId" element={<OtherUsers />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
