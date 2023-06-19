import { useState } from 'react'
 import { db } from '../../firebase.config'
 import { collection, addDoc } from "firebase/firestore"; 

const ArticleForm = () => {
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')


  const dbRef = collection(db, "articles");
  const data = {
    link: link,
    title: title,

  
 };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    addDoc(dbRef,data)
      .then(() => {
        alert('Data Submitted')
      })
      .catch((error) => {
        alert(error.message)
      })
      setLink('');
      setTitle('');
     
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gray-300 h-[calc(100vh_-_64px)]">
      <div className="flex mt-8">
        <h2 className="text-5xl font-extrabold">Article Form</h2>
      </div>


      

      <div
        className="w-full flex  justify-center items-center  "
        
      >
        <form   onSubmit={handleSubmit}   className="flex flex-col gap-4  border-2 border-black p-4 w-auto text-lg md:w-[640px] rounded-md">
          <div className="flex flex-col gap-4  items-start  ">
            <label className=" font-extrabold text-2xl">Link</label>
            <input
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
            />
          </div>

          <div className="flex flex-col gap-4  items-start">
            <label className=" font-extrabold text-2xl">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
            />
          </div>


        
        

          <div className="mt-4">
            <button
              type="submit"
              className='w-full  bg-blue-800 cursor-pointer hover:bg-transparent border-[1px] border-transparent  hover:border-gray-800 text-xl text-white hover:text-black font-bold py-2 px-4 md:py-6 md:px-16 transition duration-1000 rounded-full'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ArticleForm
