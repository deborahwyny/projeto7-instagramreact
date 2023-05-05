export default function Story({story}){
    return (
        <div class="story">
              <img class="imagem" src={story.img} alt={story.usuario} />
              <div class="usuario">{story.usuario}</div>
            </div>
    )
}