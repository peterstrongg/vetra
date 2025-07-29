'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState('login');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
      <div className="flex shadow-xl rounded-lg overflow-hidden w-full max-w-4xl bg-gray-950">
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center p-10 w-1/2 bg-indigo-900 text-white">
          <h2 className="text-4xl font-bold mb-4">🚀 Vetra</h2>
          <p className="text-lg">Power up your infrastructure automation</p>
          <div className="mt-6">
            <button
              onClick={() => setMode('login')}
              className={`px-6 py-2 mr-3 rounded ${
                mode === 'login' ? 'bg-white text-indigo-900' : 'bg-indigo-700 hover:bg-indigo-600'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`px-6 py-2 rounded ${
                mode === 'signup' ? 'bg-white text-indigo-900' : 'bg-indigo-700 hover:bg-indigo-600'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h3>
          <form className="space-y-4">
            {mode === 'signup' && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-gray-800 border border-indigo-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 border border-indigo-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-800 border border-indigo-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded font-semibold shadow transition transform hover:scale-105"
            >
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {mode === 'login' && (
            <p className="mt-4 text-sm text-gray-400">
              Don't have an account?{' '}
              <span
                className="text-indigo-300 hover:text-indigo-200 cursor-pointer"
                onClick={() => setMode('signup')}
              >
                Sign up here
              </span>
            </p>
          )}
          {mode === 'signup' && (
            <p className="mt-4 text-sm text-gray-400">
              Already registered?{' '}
              <span
                className="text-indigo-300 hover:text-indigo-200 cursor-pointer"
                onClick={() => setMode('login')}
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
