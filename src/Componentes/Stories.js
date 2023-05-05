import Story from "./Story";

export default function Stories() {
  const Storys = [
    {
      img: "./assets/9gag.svg",
      usuario: "9gag",
    },
    {
      img: "./assets/meowed.svg",
      usuario: "meowed",
    },
    {
      img: "./assets/barked.svg",
      usuario: "barked",
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
   
      
        <div class="stories">
          {Storys.map((item) => (
            < Story story = {item}/>
          ))}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
     
  );
}
