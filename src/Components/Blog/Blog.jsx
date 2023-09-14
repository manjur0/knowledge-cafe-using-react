import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div className='md:mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex gap-3'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span >{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold ">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=""> #{hash}</a></span>)
                }
            </p>
            <button
                className='text-[#6047EC] underline font-bold'
                onClick={() => handleReadingTime(reading_time)}
            >Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;