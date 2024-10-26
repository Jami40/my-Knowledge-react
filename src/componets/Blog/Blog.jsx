import PropTypes from 'prop-types';
import image from '../../images/icons8-bookmark-24.png'
const Blog = ({blog,handleclick,handleReadingClick}) => {
    const {title,hashtags,id}=blog;
    return (
        <div>
            <img className='rounded-xl pb-5' src={blog.cover} alt="" />
            <div className='flex justify-between items-center pb-4'>
                <div className='flex items-center gap-3'>
                <img className='w-16 h-16' src={blog.author_img} alt="" />
                <div>
                    <h5 className='font-bold text-[22px]'>{blog.author}</h5>
                    <span className='text-[#11111199]'>{blog.posted_date}</span>
                </div>
                </div>

                <div className='flex gap-2'>
                   <span className='text-[#11111199]'>{blog.reading_time} min read</span>
                   <button onClick={()=>handleclick(blog)}> <img src={image} alt="" /></button>
                </div>
            </div>

            <h2 className='text-4xl font-bold pb-6'>{title}</h2>
            <p>
                {
                    hashtags.map(hash=> <span key={blog.id} className='text-[#11111199] pr-2'><a href="">#{hash}</a></span>)

                }
            </p>

            <div className='py-5'>
            <button onClick={()=>handleReadingClick(id,blog.reading_time)} className='text-[#6047EC] font-bold underline'>Mark as read</button>
            </div>
            <hr className='pb-5' />
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleclick:PropTypes.func,
    handleReadingClick:PropTypes.func
}

export default Blog;