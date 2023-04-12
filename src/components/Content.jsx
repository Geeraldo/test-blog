import React from 'react'

const Content = () => {
  return (
    <div className="w-full my-5 mx-10 h-full">
      <div className="grid grid-cols-12 gap-2 mx-10">
        <div className="col-span-4">
          <div>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
            </div>
            <div>
              <p className="text-3xl text-bold mx-5">Categories</p>
            <div className="hero h-10 object-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80")`, backgroundPosition: "50 px" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-4xl font-bold">Culture</h1>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-2 ">
            <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-slate-100">
                <img className="w-auto" src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <div className="px-6 py-4 ml-3" >
                  <div className="flex flex-nowrap">
                  <div className="mb-2 mx-2 text-bold">
                    <p className="text-gray-500 text-md">Food</p>
                  </div>
                  <div className="mb-2 mx-2 text-bold">
                    <p className="text-gray-500 text-md">Nov 2022</p>
                  </div>
                  </div>
                  <div className="text-bold text-black text-lg">
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="my-5">
                    <p className="text-grey-500 text-base-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ea!</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-slate-100">
                <img className="w-auto" src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <div className="px-6 py-4">
                  <div className="flex flex-nowrap">
                  <div className="mb-2 mx-2 text-bold">
                    <p className="text-gray-500 text-md">Food</p>
                  </div>
                  <div className="mb-2 mx-2 text-bold">
                    <p className="text-gray-500 text-md">Nov 2022</p>
                  </div>
                  </div>
                  <div className="text-bold text-black text-lg">
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="my-5">
                    <p className="text-grey-500 text-base-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ea!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Content