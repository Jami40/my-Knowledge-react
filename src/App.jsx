import { useState } from 'react'
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import Bookmark from './componets/Bookmarks/Bookmark'
import Header from './componets/Header/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([])
  const [reading_time,setReading_time]=useState(0)
 
  const handleclick=blogs=>{
    const newBookMarks=[...bookmarks,blogs]
    setBookmarks(newBookMarks)
  }
  const handleReadingClick=(id,time) =>{
    setReading_time(reading_time+time)

    // 
    const remainigBookmarks=bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainigBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='w-10/12 mx-auto py-5 flex gap-4'>
         <Blogs handleclick={handleclick} handleReadingClick={handleReadingClick}></Blogs>
         <Bookmark bookmarks={bookmarks} reading_time={reading_time}></Bookmark>
      </div>
    </>
  )
}

export default App
