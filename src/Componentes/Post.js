import Posts from "./Posts";

const postagens = [
  {
    foto: "./assets/meowed.svg",
    userName: "meowed",
    conteudo: "./assets/dog.svg",
    curtidas: "./assets/adorable_animals.svg",
  },
  {
    foto: "./assets/barked.svg",
    userName: "barked",
    conteudo: "./assets/gato-telefone.svg",
    curtidas: "./assets/respondeai.svg",
  },
];

export default function Post(props) {
  return (
    <div className="corpo">
      {postagens.map((poste) => (
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={poste.foto} alt="meowed" />
              {poste.userName}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div className="conteudo">
            <img src={poste.conteudo} alt="gato-telefone" />
          </div>
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>
            <div className="curtidas">
              <img src={poste.curtidas} alt="respondeai" />
              <div className="texto">
                Curtido por <strong>respondeai</strong> e{" "}
                <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
