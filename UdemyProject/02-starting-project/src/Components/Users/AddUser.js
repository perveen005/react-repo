import React from 'react'

export const AddUser = () => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    };
  return (
    <form onSubmit ={addUserHandler}>
        <label htmlFor="username" >UserName</label>
        <input id ="username" type ="text"/>
        <label htmlFor="username" >Age(years)</label>
        <input id ="username" type ="number"/>
        <button type="submit">Add User</button>
    </form>
  )
}
