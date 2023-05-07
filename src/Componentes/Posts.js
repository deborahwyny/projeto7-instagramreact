import Post from "./Post";

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
  {
    foto: "https://t.ctcdn.com.br/6YVfrGCmglehpUg4maUyL93yclI=/400x400/smart/filters:format(webp)/i489931.jpeg",
    userName: "Netflix",
    conteudo: "https://cinema10.com.br/upload/noticias/2019-2/802396b6e9.jpg",
    curtidas: "https://akamai.sscdn.co/uploadfile/letras/fotos/0/4/a/e/04ae8fa7b1c5f93c543b4a876c091903.jpg"

  }
];

export default function Posts (props) {
  return (
    <div class="esquerda">
    <div class="posts">
      {postagens.map((item) => (
        <Post poste = {item}/>
       
      ))}
      
    </div>
    </div>
  
  );
}
