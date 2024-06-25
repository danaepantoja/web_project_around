export class Card {
    constructor(name, link) {
      this.name = name;
      this.link = link;
      this.#render();
    }
  
    #render() {
      const template = document.querySelector("#element-template").content;
      this.element = template.querySelector(".element").cloneNode(true);
  
      this.#setMarkup();
      this.#addEventListeners();
    }
  
    #setMarkup() {
      const imageElement = this.element.querySelector(".element__image");
      const titleElement = this.element.querySelector(".element__title");
  
      titleElement.innerText = this.name;
      imageElement.src = this.link;
      imageElement.alt = this.name;
    }
  
    #addEventListeners() {
      const buttonTrash = this.element.querySelector(".button_trash");
      const buttonLike = this.element.querySelector(".button_like");
      const openImage = this.element.querySelector(".element__image");
  
      buttonTrash.addEventListener("click", () => this.#handleDelete());
      buttonLike.addEventListener("click", () => this.#handleLike());
      openImage.addEventListener("click", () => this.#handleOpenImage());
    }
  
    #handleDelete() {
      this.element.remove();
    }
  
    #handleLike() {
      const buttonLike = this.element.querySelector(".button_like");
      buttonLike.classList.toggle("button_like-black");
    }
  
    #handleOpenImage() {
      const popupImage = document.querySelector(".popup_content_image");
      document.querySelector(".image-grand").src = this.link;
      document.querySelector(".image-grand").alt = this.name;
      document.querySelector(".image-text").innerText = this.name;
      togglePopup(popupImage);
    }
  
    getElement() {
      return this.element;
    }
  }
  
 
  export function togglePopup(popup) {
    popup.classList.toggle("popup_show");
  }
  
 
  const cards = [
        {
          name: "Valle de Yosemite",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
        },
        {
          name: "Lago Louise",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
        },
        {
          name: "Montañas Calvas",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
        },
        {
          name: "Latemar",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
        },
        {
          name: "Parque Nacional de la Vanoise",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
        },
        {
          name: "Lago di Braies",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
        },
      ];
  
  cards.forEach((item) => {
    const card = new Card(item.name, item.link);
    document.querySelector(".elements").append(card.getElement());
  });