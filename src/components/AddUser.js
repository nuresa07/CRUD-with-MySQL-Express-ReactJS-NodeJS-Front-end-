import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("Male")

  const navigate = useNavigate()

  const saveUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/users', {
        name, email, gender
      })
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>

          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className='input is-success' placeholder='input your name'
                type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success" type="email" placeholder="input your email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Gender</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <button type='submit' className='button is-success'>Save</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddUser