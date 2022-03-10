import './Square.css'

const Square = (props) => {
    return (
        <button onClick={props.onClick} className='Square'>{props.value}</button>
    );
}

export default Square;
