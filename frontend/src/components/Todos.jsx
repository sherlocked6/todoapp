import { useState } from "react"

export function Todos({todos}){

    const [completed, setCompleted] = useState(false);

    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={ async () => {
                    console.log(todo)
                    await fetch("http://localhost:3000/completed/",{
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }}
                    )
                    setCompleted(true)
                }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}