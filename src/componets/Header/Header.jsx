import propile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between items-center border-b-2 py-5'>

           <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
           <img src={propile} alt="" />
            
        </div>
    );
};

export default Header;