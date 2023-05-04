export default function User(props){

  function handleClick(){
    const nomeUsuario = prompt("Qual é o seu nome de usuário?");

  }


  return (
      <div class="sidebar">
      <div class="usuario">
        <img src={props.imagem} alt="imagem de perfil"/>
        <div class="texto">
          <span>
            <strong>{props.username}</strong>
            <button onClick={handleClick}> <ion-icon name="pencil"></ion-icon></button>
          </span>

        </div>
      </div>
      </div>
  )


  
}