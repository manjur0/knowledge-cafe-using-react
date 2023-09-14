
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className=' md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
