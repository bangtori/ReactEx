import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdOutlineRemoveCircleOutline
} from "react-icons/md";
import './TodoItem.css'
import cn from 'classnames'

const TodoItem = ({todo}) => {
    const {text, checked} = todo;
    
    return(
        <div className="TodoItem">
            <div className={cn('checkBox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
                </div>
            <div className="removeBtn"><MdOutlineRemoveCircleOutline /></div>
        </div>
    );
};

export default TodoItem