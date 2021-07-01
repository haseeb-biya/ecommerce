import React from 'react'
import Container from '@material-ui/core/Container'
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'

const SignInAndSignUpPage = () => {
    return ( 
        <Container>
            <div className="sign-in-and-sign-up" >
                <SignIn /> 
                <SignUp />
            </div>
        </Container>
    )
}
export default SignInAndSignUpPage;
