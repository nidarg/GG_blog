import React, {useState, useEffect, useRef} from 'react'

import { submitComment } from '../services'

const CommentsForm = ({slug}) => {

  const [error, setError] = useState(false)
  const[localStorage, setLocalStorage] = useState(null)
  const[showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(()=>{
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')

  },[])

  const handleCommentSubmit=()=>{
    setError(false)

    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current

    if(!comment || !name || !email){
      setError(true)
      return
    }

    const commentObj = {name, email, comment, slug}

    if(storeData){
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    }else{window.
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((res)=>{
        setShowSuccessMessage(true)
        setTimeout(()=>{
          setShowSuccessMessage(false)
        },3000)
      })

  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentEl}  
        cols="30" rows="10" 
        placeholder='comment'
        name='comment'
        className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700 text-2xl"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input ref={nameEl} type="text" 
          placeholder='Name'
          name='name'
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700 text-2xl"

        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input ref={emailEl} type="text" 
            placeholder='Email'
            name='email'
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700 text-2xl"

          />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
        <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value='true' />
        <label htmlFor='storeData' className='ml-2 text-gray-500 cursor-pointer'>Save my e-mail and name for the next time I comment.</label>
        </div>
       
      </div>
      {error && <p className='text-lg text-amber-900'>All fields are required</p>}
      <div className="mt-8">
        <button type='button' 
          onClick={handleCommentSubmit}
          className="p-2 text-lg rounded-lg bg-gray-200 transition duration-500 ease hover:bg-amber-900 hover:text-white inline-block font-bold">
            Post Comment
        </button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm