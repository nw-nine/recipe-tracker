import React from "react";
import "./Recipe.css"
import "./App"

function Recipe({ recipe, deleteRecipe }){

    return (
        <tr>
            <td className="">{recipe.name}</td>
            <td className="">{recipe.cuisine}</td>
            <td className="">
               <img src={recipe.photo} alt="" /> 
            </td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
                <button className="" name="delete" onClick={() => deleteRecipe(recipe)}>Delete</button>
            </td>
        </tr>
    )
}

export default Recipe