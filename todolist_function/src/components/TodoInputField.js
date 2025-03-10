import { MdAdd } from "react-icons/md";
import './TodoInputField.css';

const TodoInputField = () => {
    return(
        <form className='TodoInputField'>
            <input placeholder='할 일을 입력하세요.'/>
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInputField;