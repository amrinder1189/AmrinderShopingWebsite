import { useState , useContext} from 'react'
import { createAuthWithUserAndPassword, createUserDocumentFromAuth } from '../../utility/firebase'
import FormInput from '../forminput/forminput.component'
import './signup.scss'
import Button from '../button/button.component'
import{UserContext} from '../../context/user.context'

const defaultFormFields = {
    diplayName : '',
    email :'',
    password:'',
    confirmPassword : ''

}


const SignUpForm  =  () => {
  
  const {setCurrentUser} = useContext(UserContext)
    //setting the satet and using the usestate for handling the data in the form FormFields
    
    const [FormFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email,password,confirmPassword} = FormFields;
 

 

    console.log(FormFields)

    const changehandler = (event) => {
        const {name,value} = event.target;

        setFormFields({...FormFields, [name]:value});

    }

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    const handleForm = async (event) => {

        event.preventDefault();
        
        if(password !== confirmPassword) {
            alert("Password does not match");
            return;
        }

        try{
            const {user} = await createAuthWithUserAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName})
            // console.log(user);

            setCurrentUser(user);
            resetFormFields();
        }
        catch(error){
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
              }
        }


    }


    return(
        <div className='sign-up-container'>
        <h3>Don't have an account</h3>
            <span>Sign up using the email and the password</span>

            <form onSubmit={handleForm}>
             

                <FormInput
          label='Display Name'
          type='text'
          required
          autoComplete="off"
          onChange={changehandler}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          autoComplete="off"
          onChange={changehandler}
          name='confirmPassword'
          value={confirmPassword}
        />

      <Button buttonType="inverted" type='submit'>Sign Up</Button>


            </form>
        </div>
    );

}


export default SignUpForm;