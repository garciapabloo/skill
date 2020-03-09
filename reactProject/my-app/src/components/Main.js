import React from 'react'
import Data from './Cards.json'


class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          data: [
            {
              "id": 1,
              "title": "Javascript",
              "description": "Learn amazing street workout and calisthenics",
              "img": "/js.png"
            },
            {
              "id": 2,
              "title": "CSS",
              "description": "Learn the secrets of bodyweight techniques",
              "img": "/css.png"
            },
            {
              "id": 3,
              "title": "HTML",
              "description": "Train anytime, everywere and become a superhero!",
              "img": "/html.png"
            },
            {
              "id": 4,
              "title": "Java",
              "description": "Learn the secrets of bodyweight techniques",
              "img": "/java.png"
            },
            {
              "id": 5,
              "title": "Node JS",
              "description": "Learn the secrets of bodyweight techniques",
              "img": "/nodejs.png"
            },
            {
              "id": 6,
              "title": "React",
              "description": "Learn the secrets of bodyweight techniques",
              "img": "/react.png"
            }
          ]
        }
    }


    /// DENTRO DE LA DISPOSITIVA 20 ESTA EL FETCH CON LA PROMESA, COMPLETO DE COMO 
/// PASAR LOS DATOS DEL JSON A EL ARCHIVO MAIN EN MI CASO.
/// CREAR UN ARRAY VACIO (MOVIES), Y COPIAR EL COMPONENTDIDMOUNT.



///crear el render.


render (){
    return(
            <>

      {this.state.data.map((card)=> {
        return(
    <div className="card mb-3" style="max-width: 540px;">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={card.img} className="card-img" alt="..."/>
    {/* colocar en formato jsx las fotos de manera dinamica desde el json. */}
      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.description}</p>
        <button type="button" className="btn btn-outline-info">Button</button>
      </div>
    </div>
  </div>
</div>

        )
      })}

</>
    )
}
}



export default Main;