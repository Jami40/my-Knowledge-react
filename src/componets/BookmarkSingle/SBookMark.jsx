const SBookMark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-white p-2 rounded-xl mb-2">
            <h5 className="text-xl font-semibold">{title}</h5>
            
        </div>
    );
};

export default SBookMark;