import { useState } from "react";

const Index = () => {

    const [listItem, setListItem] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault()

        setListItem(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();

        setToDoList([
            listItem,
            ...toDoList
        ])

        setListItem('');
    }

    const handleCompleteTask = (todo) => {
        const updateArr = toDoList.filter(toDoItem => toDoList.indexOf(toDoItem) != toDoItem.indexOf(todo))

        setToDoList(updateArr);
    }

    return (
        <div>
            <h3>To-Do List</h3>
            <form>
                <input type='text' value={listItem} placeholder='what needs doing?' onChange={handleChange}/><button onClick={handleAdd}>Add</button>
            </form>
            <ul style={
                {
                    backgroundColor: 'black',
                    color: 'green'
                }
            }>
                {
                    toDoList.length >=1 ? toDoList.map((toDo, idx) => {
                        return <li key={idx}>{toDo}<button onClick={(e) => {
                            e.preventDefault();
                            handleCompleteTask(toDo)
                        }}>Done</button></li>
                    })
                    : "all done!"
                }
            </ul>
        </div>
    )
}

export default Index