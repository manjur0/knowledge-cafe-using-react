
import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='w-1/3 mx-auto mt-20'>
            <div className="text-center">
                <h3 className='text-3xl font-bold'>ReaSpent time on read : {readingTime}</h3>
                <h4 className="text-3xl ">Bookmarked: {bookmarks.length}</h4>
            </div>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.func
};

export default Bookmarks;