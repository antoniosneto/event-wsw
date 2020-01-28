getCard = speaker => {
    return `
    <div class="speaker__card">
        <div class="card__header ${speaker.class}">
            <img src="${speaker.img}" alt="Imagem de ${speaker.title}, ${speaker.subtitle}">
            <div class="header__title">
                <h3>${speaker.title}</h3>
                <p>${speaker.subtitle}</p>
            </div>
        </div>
        <div class="card__description">${speaker.description}</div>
    </div>
    `;
};

const speakers = [
    {
        img: "./assets/pedro-vasconselos-palestrando.png",
        title: "Pedro <br class='mobile'>Vasconselos",
        subtitle: "COO da Beer or Coffee",
        description:
            "<p>Agora sim, um texto falando sobre esse evento, que vamos conseguir bater a meta e chamar todos os convidados, espero que tudo dê certo.<p>E aqui, não fique de fora em.</p></p>"
    },

    {
        img: "./assets/pedro-vasconselos-palestrando.png",
        class: "inverse",
        title: "Pedro <br class='mobile'>Vasconselos",
        subtitle: "COO da Beer or Coffee",
        description:
            "<p>Agora sim, um texto falando sobre esse evento, que vamos conseguir bater a meta e chamar todos os convidados, espero que tudo dê certo.<p>E aqui, não fique de fora em.</p></p>"
    },

    {
        img: "./assets/pedro-vasconselos-palestrando.png",
        title: "Pedro <br class='mobile'>Vasconselos",
        subtitle: "COO da Beer or Coffee",
        description:
            "<p>Agora sim, um texto falando sobre esse evento, que vamos conseguir bater a meta e chamar todos os convidados, espero que tudo dê certo.<p>E aqui, não fique de fora em.</p></p>"
    }
];

getHtml = () => {
    let string = "";
    for (i in speakers) {
        const content = getCard(speakers[i]);
        string += content;
    }
    const div = document.querySelector(".speakers");
    div.innerHTML = string;
};

getHtml();
