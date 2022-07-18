import SignUpForm from '../../components/signupform/Signup.component'
import SignInForm from '../../components/signinFormIO/signinIO.component'
import '../signIn/signin.scss'
const SignIn = () => {
    


    return(
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
 
export default SignIn;