import { Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
    const isLoggedIn = false;
    return (  
            <>
            {isLoggedIn ? 
                <>
                {props.children}
                </>: <>
                <Navigate to={'/user/login'}/>
                </>
            }
            </>

    );
}
 
export default PrivateRoutes;