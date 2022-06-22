import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';



function Home() {
  return (
    <>
    <Navbar />
      <h2> Home </h2>
      <br/>
     <Button as={Link} to="/raisedoubt">RaiseDoubt</Button>
    </>
  )
}


export default Home;