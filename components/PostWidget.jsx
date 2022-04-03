import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {

  const [relatedPosts,setRelatedPosts] = useState([])

  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories, slug)
      .then((result) => {
        setRelatedPosts(result);
      });
    }else{
      getRecentPosts()
      .then((result)=>{
        setRelatedPosts(result)
      });
    }

  },[slug]);

  return (
    <div className="bg-white max-w-sm shadow-lg rounded-lg p-8 mt-8 mb-8">
      <h3 className="text-xl border-b pb-8 mb-8 font-semibold">
        {slug ? "Similar Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post,index)=>(
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url} alt={post.title} height="80px" width="80px" className="align-middle rounded" />
          </div>
          <div className="flex-grow ml-8">
            <p className="text-amber-900 font-xs">
              {moment(post.createdAt).format('DD MMM YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget