import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        <p>loading...</p>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ form: location }} replace />;
    } else {
        return children;
    }
};

export default RequireAuth;