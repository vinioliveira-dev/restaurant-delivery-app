import './LoginPage.css';

import { LoginFirstButtons } from "../../Components/SignIn/LoginFirstButtons";

export function LoginPage () {
    

    return( 
        <div className="login-page">
            <h1 className="login-page-title">Enjoy your life.<br></br>Leave all the rest with <span>Resdeli</span></h1>
            <LoginFirstButtons />
        </div> 
    )
}