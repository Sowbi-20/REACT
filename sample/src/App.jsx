import React from 'react'

const App = () => {
  return (
    <>
        <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
            <div className="h-auto w-[20%] flex justify-center items-center bg-blue-400">
                {/* <h1 className="text-white text-center text-3xl">LOGIN FORM</h1> */}
                <form className="h-auto w-[30%] flex flex-col justify-center items-center p-7 gap-4">
                    <input type="text" placeholder='Name' className="bg-blue-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-blue-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black"/>
                    <input type="text" placeholder='Email' className='bg-blue-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-blue-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <input type="tel" placeholder='Phone no' className='bg-blue-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-blue-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <input type="age" placeholder='Age' className='bg-blue-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-blue-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <button type="submit" className='w-full bg-blue-200 p-3 text-black shadow appearance-none border rounded-lg placeholder-blue-800 border-none hover:border-black'>Register</button>
                </form>
            </div>
        </div>
        
    </>
  )
}

export default App