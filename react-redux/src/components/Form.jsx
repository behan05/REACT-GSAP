import React, { useState } from 'react';
import btnStyle from "../styles/btn.module.css";
import "../styles/form.css";

import { useDispatch, useSelector } from 'react-redux';
import { addFormInfo } from "../features/formSlice";

function Form() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [designation, setDesignation] = useState('');
  const [contact, setContact] = useState('');

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.form);

  function formHandler(e) {
    e.preventDefault();

    if (!name || !age || !designation || !contact) {
      console.error("Please fill all fields!");
      return;
    }

    dispatch(addFormInfo({ name, age, designation, contact }))
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <fieldset>
          <legend>Fill Your Info</legend>

          <input type="text" name={name} id="" onChange={(e) => setName(e.target.value)} placeholder='your name please...' />

          <input type="number" name={age} id='' onChange={(e) => setAge(e.target.value)} placeholder='you age please...' />

          <input type="text" name="" id={designation} onChange={(e) => setDesignation(e.target.value)} placeholder='your designation please...' />

          <input type="tell" id='' name={contact} onChange={(e) => setContact(e.target.value)} placeholder='you contect number please...' />

          <div>
            <button className={btnStyle.btn} type='submit'>Confirm</button>
            <button className={btnStyle.btn} type='reset'>Reset</button>
          </div>
        </fieldset>
      </form>

      <div className="showData">
        <h2>User Information Below!</h2>
        <h3>you id: {selector.id}</h3>
        <h3>you name: {selector.name}</h3>
        <h3>you age: {selector.age}</h3>
        <h3>you designation: {selector.designation}</h3>
        <h3>you contact no: {selector.contact}</h3>
      </div>
    </>
  )
}

export default Form;