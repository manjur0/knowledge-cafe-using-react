
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div>
            <div className='bg-slate-200 m-4 p-3 rounded-md'>
                <h2 className='text-2xl'>{title}</h2>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object

};

export default Bookmark;