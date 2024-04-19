import { useState } from "react"

const Index = () => {

    const [listItem, setListItem] = useState('');

    const handleChange = (e) => {
        e.preventDefault()

        setListItem(e.target.value)
    }

    return (
        <div>
            <h3>To-Do List</h3>
            <form>
                <input type='text' onChange={handleChange}/><button>Add</button>
            </form>
        </div>
    )
}

export default Index