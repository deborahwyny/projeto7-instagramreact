import Curtidas from "./Curtidas";
import { useState } from "react";


export default function Post ({poste}){


  const  numeroCurtidas = 101523

  const hearts = [<ion-icon data-test="like-post" onClick={like} name="heart-outline"></ion-icon>, <ion-icon ata-test="like-post" class="heart-red" onClick={dislike} name="heart"></ion-icon>]
  const salvo = [<ion-icon data-test="save-post" onClick={save} name="bookmark-outline"></ion-icon>, <ion-icon data-test="save-post" onClick={unsave} name="bookmark"></ion-icon>]


  let [curtida, setCurtida] = useState(numeroCurtidas) 
  let [heart, setHeart] = useState(hearts[0]) 
  let [salvando, setSalvando] = useState(salvo[0])
  
  function like(){
    setCurtida(curtida++)
    setHeart(hearts[1])
  }

  function dislike(){
    setCurtida(curtida--)
    setHeart(hearts[0])

  }

  let curtiu = false

  function curtidaFoto(){
    setCurtida(curtida++)
    setHeart(hearts[1])
    curtiu = true
    console.log(curtiu)

  }





function save(){
  setSalvando(salvo[1]);
}

function unsave(){
  setSalvando(salvo[0]);
}





    return (
        
        <div data-test="post" class="post">
          <div class="topo">
            <div class="usuario">
              <img src={poste.foto} alt="meowed" />
              {poste.userName}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div class="conteudo">
            <img data-test="post-image" onClick={curtidaFoto} src={poste.conteudo} alt="gato-telefone" />
          </div>
          <div class="fundo">
            <div class="acoes">
              <div>
                {heart}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>

              <div>
              {salvando}

              </div>
            </div>

           <Curtidas img = {poste.curtidas} likes={curtida} /> 

          </div>
        </div>
      
    )
}