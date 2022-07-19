import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import auth from '../../Firebase/Firebase-init';

/* steps for create requireAuth 

* 1. create a component and (react-router > docs > authentication > stackBlitz > function RequireAuth and emplement code.. on 2steps)
* 2. destructure children in component this oppourtunity gaves us form react-router-dom on app.js inside the requireAuth component was its called requireAuth-children component ...
* 3. Get-user: find user in useAuthState state form react-firebase-hook... and get user form useAuthState and call the auth and import auth from firebase-init.js inside the useAuthState(auth)...
* 4. set location useing useLocation from react-router-dom
* 5. condition : if user are not present then return user in login route to login and the state element was dynamically set our location for our from then replace our destination... 
* 6. return children from requiredAuth children location in app.js...

*/

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;