// import React, { useState } from 'react'

// const Login = () => {
//     const [credential, setcredential] = useState({ name: "", email: "", password: "" })

// const handlechange = (e)=>{
//     setcredential({...credential,[e.target.name]:e.target.value })
// }

//     const handleform = async (e) => {
//         e.preventDefault()


//         try {
//             const response = await fetch("https://example.com/api/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ name: credential.name, password: credential.password, email: credential.email })
//             })

//             const data = await response.json()
//             console.log("Server response:", data)
//         } catch (err) {
//             console.error("POST failed:", err)
//         }
//     }
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//             <form method='POST' onSubmit={handleform} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">

//                 <input
//                     type="text"
//                     placeholder='Name'
//                     name='name'
//                     value={credential.name}
//                     onChange={handlechange}
//                     className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />

//                 <input
//                     type="email"
//                     required
//                     placeholder='E-mail'
//                     name='email'
//                     value={credential.email}
//                     onChange={handlechange}
//                     className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />

//                 <input
//                     type="password"
//                     required
//                     placeholder='Password'
//                     name='password'
//                     value={credential.password}
//                     onChange={handlechange}
//                     className="w-full mb-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />

//                 <button
//                     type='submit'
//                     className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//                 >
//                     Log-In
//                 </button>

//             </form>
//         </div>
//     )
// }

// export default Login

import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <form method='POST'>
                <input type="text" />
                <input type="text" />
                <Link to="/createuser">
                    I am new user
                </Link>
            </form>
        </div>
    )
}

export default Login