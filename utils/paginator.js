const paginate = (posts)=>{
    const postsPerPage = 2
    const pages = Math.ceil(posts.length / postsPerPage)

    const newPosts = Array.from({length:pages},(_, index)=>{
        const start = index * postsPerPage
        return posts.slice(start, start + postsPerPage)
    })
    return newPosts
}

export default paginate