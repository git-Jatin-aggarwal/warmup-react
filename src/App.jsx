

function App() {

  return (
    <>
      <div className="h-screen w-screen flex">

        <nav className="w-[15%] h-screen bg-zinc-50 flex  flex-col items-center pt-5">
          <a className="py-3 px-5 border rounded border-blue-200 text-blue-300" href="/create">Add New Products</a>
          <hr className="w-[80%] my-3" />
          <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
          <ul className=" w-[80%]">
            <li className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              Cat 1</li>
            <li className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              Cat 1</li>
            <li className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              Cat 1</li>
            <li className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              Cat 1</li>
            <li className="mb-3 flex items-center">
              <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
              Cat 1</li>
            
          </ul>
        </nav>

        <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

          <div className="card p-5 border w-[18%] h-[30vh] shadow mr-3 mb-3 rounded flex justify-center items-center flex-col">

            <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url()"}}></div>
            <h1 className="hover:text-blue-300">Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
