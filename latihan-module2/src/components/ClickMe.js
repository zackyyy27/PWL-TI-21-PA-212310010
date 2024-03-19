const ClickMe = ({children, onClickbtn }) =>{
    return (
    <button type='button' onClick={() => onClickbtn }>
    {children} 
    </button>
    );
};

export default ClickMe;