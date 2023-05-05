import { useState } from "react";


export default function Curtidas(props){ 



    return(


<div class="curtidas">
              <img src={props.img} alt="respondeai" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e
                <strong>outras <span data-test="likes-number">{props.likes} </span> pessoas</strong>
              </div>
            </div>


    )

}


