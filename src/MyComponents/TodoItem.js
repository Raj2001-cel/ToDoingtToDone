import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    let mystyle = {
        border: '1px solid',
        width: '70%',
        margin: '10px'
        
    }
    return (
        <>
        <div style={mystyle}>
         <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>X</button> 
        </div>
        <hr/> 
        </>
    )
}
