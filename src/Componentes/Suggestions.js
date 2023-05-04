import Suggestion from "./Suggestion";

export default function Suggestions() {
    return (
        <div class="sidebar">
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Suggestion img ="./assets/bad.vibes.memes.svg" nome="bad.vibes.memes"/>
        <Suggestion img ="./assets/chibirdart.svg" nome = "chibirdart" />
        < Suggestion img = "./assets/razoesparaacreditar.svg" nome= "razoesparaacreditar" />
        < Suggestion img = "./assets/adorable_animals.svg" nome = "adorable_animals" />
        <Suggestion img = "./assets/smallcutecats.svg" nome = "smallcutecats" />

    

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
  