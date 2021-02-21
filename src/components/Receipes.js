import React from 'react';
import '../App.css'

const Receipes=(props)=>{
    const {receipes}=props;
    return(
       <div className="card-columns">
           {
               receipes.map(receipe=> (
                <div class="col-md3">
              <div class="card py-2 text-center">
                  <img src={receipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle" />
           <div class="card-body">
           <h5>{receipe.recipe.label}</h5>
               </div>
               <ul class="list-group list-group-flush">
                   {
                       receipe.recipe.ingredientLines.map(ingredient=><li className="list-group-item">{ingredient}</li>)
                   }
               </ul>
                  </div>
                </div>
               ))
           }
       </div>
    )
}

export default Receipes;