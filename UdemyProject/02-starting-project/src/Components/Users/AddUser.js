import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";
import { ErrorModal } from "../UI/ErrorModal";
import { Wrapper } from "../Helpers/Wrapper";
export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const[error,setError] =useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
        setError({
            title : 'Invalid Input',
            message : 'Please enter a non empty age and name'
        })

        return;
    }
    if(+enteredAge <1){
        setError({
            title : 'Invalid Age',
            message : 'Age should not be less than one'
        })
        return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const usernameChangeHandler = (event) =>
    setEnteredUsername(event.target.value);
  const ageChangeHandler = (event) => setEnteredAge(event.target.value);

  const errorHandler = () => setError(null);
  return (
    <Wrapper>
    {error &&<ErrorModal  title = {error.title} message ={error.message} onConfirm ={errorHandler}/>}
    <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username">UserName</label>
              <input
                  id="username"
                  type="text"
                  onChange={usernameChangeHandler}
                  value={enteredUsername} />
              <label htmlFor="username">Age(years)</label>
              <input
                  id="username"
                  type="number"
                  onChange={ageChangeHandler}
                  value={enteredAge} />
              <Button type="submit">Add User</Button>
          </form>
      </Card>
      </Wrapper>
  );
};
