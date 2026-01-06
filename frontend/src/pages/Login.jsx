import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const handlechange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleform = async (e) => {
        e.preventDefault()
        try {
           const response = await fetch('/api/loginuser', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
    })
})
            const data = await response.json()
            console.log("Server response:", JSON.stringify(data))
            localStorage.setItem("authtoken", data.authtoken)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="text-gray-500 mt-2">Sign in to your account</p>
                    </div>

                    <form onSubmit={handleform}>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    value={credentials.email}
                                    onChange={handlechange}
                                    placeholder='Enter your email'
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    value={credentials.password}
                                    onChange={handlechange}
                                    placeholder='Enter your password'
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            New to our platform?{' '}
                            <Link
                                to="/createuser"
                                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Subtle decorative element */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            </div>
        </div>
    )
}

export default Login