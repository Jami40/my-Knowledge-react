import SBookMark from "../BookmarkSingle/SBookMark";

const Bookmark = ({bookmarks,reading_time}) => {
    console.log(bookmarks)
    return (
        <div className="lg:w-1/3">
            <div className="pb-5">
                <h3  className="text-[20px] font-bold">Spend time on read : {reading_time} </h3>
            </div>
            <div className="p-5 bg-[#1111110D] rounded-xl">
               <h2 className="text-3xl">Bookmarked Blogs : {bookmarks.length}</h2>
               <div className="py-4">
                {
                    bookmarks.map( (bookmark,idx) => <SBookMark key={idx} bookmark={bookmark}></SBookMark>)
                }
               </div>
            </div>

            
        </div>
    );
};

export default Bookmark;