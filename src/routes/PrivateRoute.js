import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";


function PrivateRoute({
    children,
    redirectTo = '/login',
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={redirectTo}/>
};

export default PrivateRoute;