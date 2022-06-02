import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import M from 'materialize-css'
import { IconContext } from 'react-icons/lib';

export default function SignIn() {

  const navKaro = useNavigate()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const PostData = () => {


    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "Bro... Sahi E-Mail Daalo...", classes: 'rounded toast-container #c62828 red darken-3' })
      return
    }


    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.error) {
          M.toast({ html: data.error, classes: "rounded toast-container #c62828 red darken-3" })
        }
        else if (data.email){
          M.toast({ html: data.email, classes: "rounded toast-container #c62828 red darken-3" })
        }
        else {
          M.toast({ html: "Welcome to The Kanista", classes: 'rounded toast-container #43a047 green darken-1' });
          navKaro('/')
        }
      }).catch((err) => {
        console.log(err);
      })

  }


  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <div className='mycard input-field'>
          <div className="card auth-card input-field">
            <h2>Welcome to Kanista</h2>
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
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"  onClick={()=>PostData()}>Sign In
              <IoMdLogIn size='1.7em' />
            </button>

            <h5>
              <Link to='/signup'>Sign-Up Karna Hai..!!!</Link>
            </h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
