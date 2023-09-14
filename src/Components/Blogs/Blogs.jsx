import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-2/3 mt-20">
            {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;