import './List.css';
import ToDo from '../Todo/Todo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '1.2rem'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;