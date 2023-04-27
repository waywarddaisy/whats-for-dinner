import './sign-in.styles.scss';
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';



const SignIn=()=>{

    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div className="sign-in-container">
            <h1>Sign In Page</h1>
            <button onClick ={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
};

export default SignIn;


