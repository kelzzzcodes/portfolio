import React, { useState } from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { db, storage } from '../../firebase.config'

import { toast } from 'react-toastify'

export default function projectform() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    year: '',

    websiteLink: '',
    createdAt: Timestamp.now().toDate(),
  })

  const [progress, setProgress] = useState(0)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.image ||
      !formData.year ||
      !formData.websiteLink
    ) {
      alert('Please fill all the fields')
      return
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`,
    )

    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )
        setProgress(progressPercent)
      },
      (err) => {
        console.log(err)
      },
      () => {
        setFormData({
          title: '',
          description: '',
          image: '',
          year: '',

          websiteLink: '',
        })

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const projectRef = collection(db, 'projects')
          addDoc(projectRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            year: formData.year,
            websiteLink: formData.websiteLink,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast('Article added successfully', { type: 'success' })
              setProgress(0)
            })
            .catch((err) => {
              toast('Error adding article', { type: 'error' })
            })
        })
      },
    )
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gray-300 h-[calc(100vh_-_64px)]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex mt-8 mb-8">
          <h2 className="text-5xl font-extrabold">Project Form</h2>
        </div>

        <div className="w-full flex flex-col  gap-4 justify-center items-center   border-2 border-gray-500 p-4 text-lg md:w-[640px] rounded-md">
          <div className="flex flex-col gap-4  items-start w-full  ">
            <label className=" font-extrabold text-2xl">Project Image</label>
            <input
              type="file"
              name="image"
              accept="/image/*"
              onChange={(e) => handleImageChange(e)}
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
            />
          </div>

          <div className="flex flex-col gap-4  items-start  w-full">
            <label className="font-extrabold text-2xl">Year</label>
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={(e) => handleChange(e)}
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
            />
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <label className="font-extrabold text-2xl">Title</label>
            <input
              type="text"
              name="title"
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-extrabold text-2xl">Description</label>
            <textarea
              name="description"
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex flex-col gap-4  items-start  w-full">
            <label className=" font-extrabold text-2xl">Website Link</label>
            <input
              type="text"
              name="websiteLink"
              placeholder="Website Link"
              value={formData.websiteLink}
              onChange={(e) => handleChange(e)}
              className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
            />
          </div>
          {progress === 0 ? null : (
            <div>
              <div className=" mt-2 bg-green-300" style={{ width: `${progress}%` }}>
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button
            className="w-full  bg-blue-800 cursor-pointer hover:bg-transparent border-[1px] border-transparent  hover:border-gray-800 text-xl text-white hover:text-black font-bold py-2 px-4 md:py-6 md:px-16 transition duration-1000 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
