import React from 'react'

const BlogList = ({ blogs, title }) => {

    return (
        <div className='blog-list'>
            <h1><strong>{title}</strong></h1>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList