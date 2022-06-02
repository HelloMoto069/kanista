import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogOut } from 'react-icons/io'
import M from 'materialize-css'
import { IconContext } from 'react-icons/lib';


export default function Signup() {

  const navKaro = useNavigate()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const PostData = () => {


    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "Bro... Sahi E-Mail Daalo...", classes: 'rounded toast-container #c62828 red darken-3' })
      return
    }


    fetch('http://localhost:7000/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password

      })
    }).then(res =>
      res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: 'rounded toast-container #c62828 red darken-3' });
        }
        else {
          M.toast({ html: data.message, classes: 'rounded toast-container #43a047 green darken-1' });
          navKaro('/signin')
        }
      }).catch((err) => {
        console.log(err);
      })


    // const data = { "name" : name, "email" : email, "password" : password };

    //         fetch("http://localhost:7000/signup", {

    //           // Adding method type
    //           method: "POST",

    //           // Adding body or contents to send
    //           body: JSON.stringify({
    //               nm: name,
    //               eml: email,
    //               pass: password
    //           }),

    //           // Adding headers to the request
    //           headers: {
    //               "Content-type": "application/json; charset=UTF-8"
    //           }
    //       })

    //       // Converting to JSON
    //       .then(response => response.json())

    //       // Displaying results to console
    //       .then(json => console.log(json));
  }

  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <div className='mycard input-field'>
          <div className="card auth-card input-field">
            <h2>Welcome to Kanista</h2>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='e-Mail ID'
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />

            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>Sign Up
              <IoMdLogOut size='1.7em' className='react-icons' />
            </button>

            <h5>
              <Link to='/signin'>Sign-In Karna Hai..!!!</Link>
            </h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
