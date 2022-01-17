import React, { useState } from 'react'
import BlogList from './BlogList'


const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    )
    // Outputs as "Fri Feb 17 2017 01:00:00 GMT+0100"


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blog" />

        </div>
    )
}

export default Home
