import React,{useState, useEffect} from 'react'
import {getPosts} from '../services'
import paginate from './paginator'

const useFetchForHome = () => {

  const[loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
    const getAllPosts = async()=>{
      const results = await getPosts()
      // console.log(results)
      setPosts(paginate(results.edges))
      setLoading(false)
    
     }
  
  
    
  
    useEffect(()=>{

      getAllPosts()
      
    },[])
    return {loading, posts}
}

export default useFetchForHome