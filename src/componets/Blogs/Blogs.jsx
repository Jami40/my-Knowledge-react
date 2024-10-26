import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleclick,handleReadingClick}) => {
    const [blogs,setBlogs] = useState([])

    useEffect( () =>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="lg:w-2/3">

            {/* <h2>Blogs : {blogs.length}</h2> */}
            <div>
                {
                    blogs.map(blag=><Blog key={blag.id} handleclick={handleclick} handleReadingClick={handleReadingClick} blog={blag}></Blog>)
                }
            </div>
            
        </div>
    );
};

Blog.propTypes ={
    handleclick:PropTypes.func,
    handleReadingClick:PropTypes.func
}

export default Blogs;