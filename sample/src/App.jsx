import React from 'react'

const App = () => {
  return (
    <>
        <div className="h-screen w-screen bg-green-200 flex justify-center items-center">
            <div className="h-[80%] w-[80%] flex justify-center items-center bg-blue-400">
                {/* <h1 className="text-white text-center text-3xl">LOGIN FORM</h1> */}
                <form className="h-[50%] w-[70%] flex flex-col justify-center items-center p-7 gap-4">
                    <input type="text" placeholder='Name' className="bg-green-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-green-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black"/>
                    <input type="text" placeholder='Email' className='bg-green-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-green-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <input type="tel" placeholder='Phone no' className='bg-green-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-green-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <input type="age" placeholder='Age' className='bg-green-200 p-2 text-black shadow appearance-none border rounded-lg placeholder-green-800 border-none focus:outline-none focus:ring-2 focus:ring-black hover:border-black'/>
                    <button type="submit" className='w-full bg-green-200 p-3 text-black shadow appearance-none border rounded-lg placeholder-green-800 border-none hover:border-black'>Register</button>
                </form>
            </div>
        </div>
        
    </>
  )
}

export default App