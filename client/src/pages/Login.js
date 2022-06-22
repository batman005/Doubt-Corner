import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import EntryCard from '../components/EntryCard';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import { EntryPage ,PageHeader } from './style';

function Login() {
  return (
    <EntryPage>
        <PageHeader to="/">DOUBT CORNER</PageHeader>
        <EntryCard>
            <h2>Log in</h2>
            <form onSubmit = {(e) => e.preventDefault()}>
                <InputGroup>
                  <label htmlFor='login-email'>Email Address</label>
                   <Input type = "text" placeholder="name@email.com" id="login-email" />
                   </InputGroup>
                   <InputGroup>
                   <label htmlFor='login-password'>Password</label>
                   <Input type = "password" placeholder="Password" id="login-password" />
                </InputGroup>
                <Button type="submit" full>Log in</Button>
            </form>
            <span>
                Don't have an account?
                <Link to = "/signup">Sign up</Link>
            </span>
        </EntryCard>
    </EntryPage>
  )
}


export default Login;