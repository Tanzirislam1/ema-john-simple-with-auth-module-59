/* steps of firebase authentication

1. Create a new firebase project in console.firebase.google.com..

2. Register App from Web-App </> give web-app name and hosting then click continue...

3. npm install firebase on cmd and copy the firebase initialize code and create a file on src and paste code then import getAuth and give app in getAuth(app) and export default auth...

4. firebase settings > Authentication > enable a provider which provider you want...we are enabled email and password auth

5. create Login , Create Signup component , setup login and Signup routes

6. attach every form-filed with handler and fix every form-field to form-submit handler useing OnSubmit...

7. # with npm 
npm install --save react-firebase-hooks

8. signup / Create user : createUserWithEmailAndPassword from react-firebase-hooks..

9. if user is created redirected for good user Experience to the expected page in login.js.. 
ex: login-page...
const from = location?.state?.from?.pathname || "/";

    if(user){
        navigate(from, {replace: true});
    } then...step-10

10. useSignInWithEmailAndPassword for login...

11. create requireAuth component (for protected-route) => check user exists also track user location..
**steps for create requireAuth : 

* 1. create a component and (react-router > docs > authentication > stackBlitz > function RequireAuth and emplement code.. on 2steps)
* 2. destructure children in component this oppourtunity gaves us form react-router-dom on app.js inside the requireAuth component was its called requireAuth-children component ...
* 3. Get-user: find user in useAuthState state form react-firebase-hook... and get user form useAuthState and call the auth and import auth from firebase-init.js inside the useAuthState(auth)...
* 4. set location useing useLocation from react-router-dom
* 5. condition : if user are not present then return user in login route to login and the state element was dynamically set our location for our from then replace our destination... 
* 6. return children from requiredAuth children location in app.js...

12. In Route wrap protected Component by using Require Auth Component

*/


/* Firebase hosting steps..
1. npm install -g firebase-tools
2. firebase login
3. firebase init
4. firebase deploy

*/