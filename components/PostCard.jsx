import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {

  
  // let imageUrl = post.featuredImage.url;
  // console.log(imageUrl)

  return (
    <div className="bg-white shadow-lg max-w-sm rounded-md p-0  mt-8 mb-8 pb-8 xl:mx-auto lg:p-2  ">
      
      <div className="relative overflow:hidden shadow-md  mb-6">
        {/* {post.featuredImage.url &&(
          )} */}
           <img src={post.featuredImage.url}
           alt={post.title}
           className="object-top  h-40 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        
        
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-amber-900  text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img height="40px" width="40px" src={post.author.photo.url} alt={post.author.name} className="align-middle rounded-full" />
          <p className="inline align-middle ml-2 text-lg font-semibold">{post.author.name}</p>
        </div>
        <div className="text-sm text-gray-700">
          <svg className="h-8 w-8 inline mr-2 text-amber-900" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
          <span>{moment(post.createdAt).format('DD MMM YYYY')}</span>
        </div>

      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-2 lg:px-10 mb-8'>{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='p-3 rounded-full cursor-pointer text-lg text-white font-bold transition duration-700 transform hover:-translate-y-1 inline-block bg-amber-700'>Continue reading...</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard