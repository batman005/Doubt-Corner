import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import EntryCard from '../components/EntryCard';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import { EntryPage, PageHeader } from './style';

function Signup() {
  return (
    <EntryPage>
    <PageHeader to="/">DOUBT CORNER</PageHeader>
    <EntryCard>
        <h2>Signup</h2>
        <form onSubmit = {(e) => e.preventDefault()}>
        <InputGroup>
              <label htmlFor='signup-name'>Full Name</label>
               <Input type = "text" placeholder="Pura naam" id="signup-name" />
               </InputGroup>
            <InputGroup>
              <label htmlFor='Signup-email'>Email Address</label>
               <Input type = "text" placeholder="name@email.com" id="signup-email" />
               </InputGroup>
               <InputGroup>
               <label htmlFor='signup-password'>password</label>
               <Input type = "password" placeholder="Password" id="signup-password" />
            </InputGroup>
            <InputGroup>
               <label htmlFor='signup-password'>repeat-password</label>
               <Input type = "password" placeholder="RepeatPassword" id="signup-repeat-password" />
            </InputGroup>
            <Button type="submit" full>Sign up</Button>
        </form>
        <span>
            Already have an account?
            <Link to = "/login">Log in</Link>
        </span>
    </EntryCard>
</EntryPage>
  )
}


export default Signup;