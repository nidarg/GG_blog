import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'



const Header = () => {

    const[categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(newCategories=>setCategories(newCategories))
    },[])


  return (
    <div className='container  max-w-3xl xl:text-amber-900 mx-auto px-14 mb-8 text-white'>
        <div className=" border-b-4 border-b-white xl:border-amber-900 w-full inline-block  py-8">
            <div className="md:float-left block">
                <Link href= '/'>
                    <span className="cursor-pointer font-bold text-3xl">
                        D' ale Batranului...
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category, index)=>{
                    return (
                        <Link key={index} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle ml-4 font-semibold text-2xl cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Header