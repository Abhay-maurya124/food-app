import React, { useState } from 'react'

const Register = () => {

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

  const handlechange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleform = async (e) => {
    e.preventDefault()
    try {
      // like we are sending the response of user to the backend from the front end
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // 🔹 Tells the server we are sending JSON data
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
          //  This turns your JavaScript object into a JSON string.
          //   backend expects JSON, not plain JS object.
        })
      })
      const data = await response.json()
      console.log("Server response:", data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-300 flex items-center justify-center p-6">
      <form onSubmit={handleform} className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-sm">

        <input
          type="text"
          name='name'
          value={credentials.name}
          onChange={handlechange}
          placeholder='Username'
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />

        <input
          type="email"
          name='email'
          value={credentials.email}
          onChange={handlechange}
          placeholder='Email'
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />

        <input
          type="password"
          name='password'
          value={credentials.password}
          onChange={handlechange}
          placeholder='password'
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
