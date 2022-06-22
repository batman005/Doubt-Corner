import React from 'react'
import Button from '../components/Button';
import EntryCard from '../components/EntryCard';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import Navbar from '../components/Navbar';
import { EntryPage ,PageHeader } from './style';

function RaiseDoubt() {
  return (
    <EntryPage>
        <Navbar/>
        <PageHeader to="/">Raise Doubt</PageHeader>
        <EntryCard>
            <form onSubmit = {(e) => e.preventDefault()}>
                <InputGroup>
                  <label htmlFor='Title'>Title</label>
                   <Input type = "text" placeholder="Title" id="raise-title" />
                   </InputGroup>
                   <InputGroup>
                   <label htmlFor='Description'>Description</label>
                   <Input type = "Text" placeholder="Description" id="raise-desciption" />
                </InputGroup>
                <Button type="submit" full>Submit</Button>
            </form>
        </EntryCard>
    </EntryPage>
  )
}


export default RaiseDoubt;