import { useState } from "react";

export default function User(props) {
  let [username, setNome] = useState("catanacomics");
  let [imagem, setImagem] = useState("./assets/catanacomics.svg");


  function perguntanome() {
    const nomeUsuario = prompt("Qual é o seu nome de usuário?");
    // setNome(nomeUsuario);

    if (nomeUsuario === "") {
    } else {
      setNome(nomeUsuario);
    }

    console.log(nomeUsuario);
  }


  function trocafoto() {
    const fotoUsuario = prompt('Digite o link de sua foto de perfil:');

    if (fotoUsuario === "") {
    }
    else {
      setImagem(fotoUsuario);

    }
  }

  return (
    <div class="sidebar">
      <div class="usuario">
       <button ><img data-test="profile-image" onClick={trocafoto} src={imagem} alt="imagem de perfil" /></button> 
        <div class="texto">
          <span>
            <strong data-test="name">{username}</strong>
            <button data-test="edit-name" onClick={perguntanome}>
              {" "}
              <ion-icon name="pencil"></ion-icon>
            </button>
          </span>
        </div>
        
      </div>
    </div>
  );
  console.log(trocafoto)
}
