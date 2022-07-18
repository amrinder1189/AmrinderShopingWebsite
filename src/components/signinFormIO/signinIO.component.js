import {useState} from 'react'

import {createUserDocumentFromAuth, signInWithGooglePopup,signInWithEmailandPassword} from '../../utility/firebase'
// import {UserContext} from '../../context/user.context'

import FormInput from '../forminput/forminput.component'
import '../signinFormIO/signin.scss'
import Button from '../button/button.component'

const defaultFormFields = {
    email:'',
    password:'',
}



const SignInForm = () => {

 
    const[formFields,setFormFields] = useState(defaultFormFields);
    const{email,password} = formFields;

    // const{setCurrentUser} = useContext(UserContext)

    const changehandler = (event) => {

        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});

    }


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    // signing the user in    
    const handleForm = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInWithEmailandPassword(email,password);
            // console.log(response);
            // setCurrentUser(user);
            resetFormFields();
        }
        catch(error){
            alert("Sign in not successful");
            console.log('user sign in failed', error);
        }

    }

    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup();
        // createUserProfileDocument(response);
        // console.log(response);
        await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user)
        
      };


    return(

        <div className='sign-up-container'>
        <h3>Have an account !</h3>
            <span>Sign IN using the email and the password</span>

            <form onSubmit={handleForm}>
             

                

        <FormInput
          label='Email'
          type='email'
          required
          autoComplete="off"
          onChange={changehandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          autoComplete="off"
          onChange={changehandler}
          name='password'
          value={password}
        />

       
       <div className="buttonscontainer">
      <Button buttonType="inverted" type='submit'>Sign In</Button>
      <Button buttonType="google" type="button" onClick={logGoogleUser}>Google</Button>
      </div>

            </form>
        </div>


    );



}

export default SignInForm;