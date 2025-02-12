import './TodoContainer.css'

const TodoContainer = ({children}) => {
    return(
        <div className='TodoContainer'>
            <div className='title'>일정 관리</div>
            <div className='content'>{children}</div>
        </div>
    );
}

export default TodoContainer