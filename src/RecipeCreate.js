import React, { useState } from "react";
import "./App.css"

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData);
    addRecipe(formData)
    setFormData(initialFormData)
  }
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr className="row">
            <td>
              <input onChange={handleChange} id="name" name="name" type="text" placeholder="Name" required={true} />
            </td>
            <td>
              <input onChange={handleChange} id="cuisine" name="cuisine" type="text" placeholder="Cuisine" required={true} />
            </td>
            <td>
              <input onChange={handleChange} id="photo" name="photo" type="url" placeholder="Url" required={true} />
            </td>
            <td>
              <textarea onChange={handleChange} id="ingredients" name="ingredients" type="text" placeholder="Ingredients" required={true} rows={3} />
            </td>
            <td>
              <textarea onChange={handleChange} id="preparation" name="preparation" type="text" placeholder="Preparation" required={true} rows={3} />
            </td>
            <td>
              <button onChange={handleChange} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
