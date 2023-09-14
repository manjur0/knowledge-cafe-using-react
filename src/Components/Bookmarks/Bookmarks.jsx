
import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='w-1/3 mx-auto'>
            <div className="text-center">
                <h4 className="text-3xl ">Bookmarked: {bookmarks.length}</h4>
            </div>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;