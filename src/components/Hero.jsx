import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className="hero h-1/2 w-auto mx-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Techology</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero