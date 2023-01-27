import './LoginBtn.css';

export function LoginFirstButtons () {
    return (
        <div className="login-buttons-container">
            <button className="login-btn google-btn">Sign In with Google</button>
            <button className="login-btn facebook-btn">Sign In with Facebook</button>
            <button className="login-btn phone-btn">Sign In with Your Phone</button>
            <button className="login-btn apple-btn">Sign In with Apple</button>
            <button className="login-btn acc-btn">Already Have an Account?<br></br>Log In Here</button>
        </div>
    )
};