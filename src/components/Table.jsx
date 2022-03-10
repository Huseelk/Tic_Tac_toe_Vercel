import Square from './Square';
import './Table.css';

const Table = ({square, click}) => {
    return (
        <div className='Table'>
            {
                square.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

export default Table;