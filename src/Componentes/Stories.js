export default function Stories() {
  const Storys = [
    {
      img: "./assets/9gag.svg",
      usuario: "9gag",
    },
    {
      img: "./assets/meowed.svg",
      usario: "meowed",
    },
    {
      img: "./assets/barked.svg",
      usario: "barked",
    },
    {
      img: "./assets/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    {
      img: "./assets/wawawicomics.svg",
      usuario: "wawawicomics",
    },
    {
      img: "./assets/respondeai.svg",
      usuario: "respondeai",
    },
    {
      img: "./assets/filomoderna.svg",
      usuario: "filomoderna",
    },
    {
      img: "./assets/memeriagourmet.svg",
      usuario: "memeriagourmet",
    },
  ];

  return (
   
      <div class="esquerda">
        <div class="stories">
          {Storys.map((story) => (
            <div class="story">
              <img class="imagem" src={story.img} alt={story.usuario} />
              <div class="usuario">{story.usuario}</div>
            </div>
          ))}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </div>
  );
}
