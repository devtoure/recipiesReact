import React   from "react";
import './Recipies.css';

const Recipies = (props) => {
    return <div className="content">
        { props.recipies.map( (recipe , key ) =>
                <div className="recipilieOnly" key={recipe.recipe.label + '' + key}>
                    <div className="img">
                        <img src={recipe.recipe.image} alt=""/>
                        <h4 className="title">Aliment: { recipe.recipe.label}</h4>
                        <div className="explication">
                            <ul>
                                <li>Calories : { recipe.recipe.calories}</li>
                                <li>Times : { recipe.recipe.totalTime}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                       <ol>
                           { recipe.recipe.ingredientLines.map( ingredient =>
                            <li>{ ingredient }</li>
                           )}
                       </ol>
                    </div>
                </div>
                )}
            </div>;
}

export default Recipies ;