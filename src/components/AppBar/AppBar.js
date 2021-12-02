import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { authSelectors } from "../../redux/auth";
import s from "./AppBar.module.css";


function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <header className={s.container}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;