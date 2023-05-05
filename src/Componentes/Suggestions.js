import Suggestion from "./Suggestion";


export default function Suggestions() {

const sugestao = [{
   img:"./assets/bad.vibes.memes.svg", nome:"bad.vibes.memes", },
   {
    img:"./assets/chibirdart.svg", 
    nome: "chibirdart"
   },
   {img:"./assets/chibirdart.svg", 
   nome:"chibirdart"
   },
   {
    img:"./assets/razoesparaacreditar.svg", 
    nome:"razoesparaacreditar" 
   },
   {
    img:"./assets/adorable_animals.svg",
     nome:"adorable_animals"
   },
   {
    img:"./assets/smallcutecats.svg",
     nome:"smallcutecats"
   }
]

  
    return (
        <div class="sidebar">
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestao.map((item) => (
          <Suggestion props = {item}/>
          
))}

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div> 
      </div>
      
    );
        
        }