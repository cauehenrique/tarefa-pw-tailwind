const productList = [
  {
    title: "1984",
    description:
      "Publicado em 1949, o texto de Orwell nasceu destinado a polemica. Traduzido em mais de sessenta paises, virou minisserie, filmes, quadrinhos, mangas e ate uma opera. Ganhou holofotes em 1999, quando uma produtora holandesa batizou seu reality show de Big Brother.",
    imageSource:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhb-6lWrcFC0DorqSAsSMIYdizqdbIJkaXLiMdEf8lO5YxR-zkSG0ZjPMcSAsZGr3ISKWF_vqELkbsFUaT0oOu0cX0_Viajkq1atq7xoAgBkc0-QY_2cgQ&usqp=CAE",
  },
  {
    title: "JavaScript - O Guia Definitivo",
    description:
      "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer.",
    imageSource:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0AVcTuxZMCU41JtZGevJUaKGTlQCC2sbtw_SiXu8_l6DtDClsXRiOgJymZOvFPRRCH38T1TGummBW_x7u1hsWdpoEyFepN4mPcmQVNnYXXqs1jARE5jg5&usqp=CAE",
  },
];

const productImage = document.querySelector("#product-image");
const productTitle = document.querySelector("#product-title");
const productDescription = document.querySelector("#product-description");

const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");

const maximumIndex = productList.length - 1;
let productIndex = 0;

setProduct(0);

function setProduct(index) {
  productImage.src = productList[index].imageSource;
  productTitle.innerText = productList[index].title;
  productDescription.innerText = productList[index].description;
}

nextButton.addEventListener("click", () => {
  productIndex = Math.min(productIndex + 1, maximumIndex);
  setProduct(productIndex);
});

previousButton.addEventListener("click", () => {
  productIndex = Math.max(productIndex - 1, 0);
  setProduct(productIndex);
});
