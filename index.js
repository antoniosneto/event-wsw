getCard = (speaker) => {
    return `
    <div class="speaker__card ${speaker.class}">
        <img src="${speaker.img}" alt="Imagem de ${speaker.title}, ${speaker.subtitle}">
        <div class="card__content">
            <h3>${speaker.title}</h3>
            <p>${speaker.subtitle}</p>
            <div class="card__description">${speaker.description}</div>
        </div>
    </div>
    `;
};

const speakers = [
    {
        img: "./assets/matthaeus-carvalho.png",
        title: "Matthaeus <br class='mobile'>Carvalho",
        subtitle: "Sócio-fundador da Aceleradora Saturno",
        description:
            "<p>Desde 2017 gerencia equipes remotas e se comunica remotamente com clientes.</p><p>Iniciou com sua Agência Forseti, agência de marketing digital, que já nasceu sem escritório com um time distribuído pelo Brasil.</p><p>Recentemente , criou o projeto 'Mentalidade Remota' que visa levar conteúdos sobre gestão e trabalho remoto para donos de empresas, líderes, gestores e profissionais de RH.</p><p>Atualmente é sócio-fundador da Aceleradora Saturno, onde investe em lançamentos de infoprodutos.</p>"
    },

    {
        img: "./assets/breno-fagundes.png",
        class: "inverse",
        title: "Breno <br class='mobile'>Fagundes",
        subtitle: "Owner da empresa VIEW",
        description:
            "<p>Pioneiro de Belo Horizonte, Breno se tornou Nômade Digital em meados de 2018 ao mesmo tempo que adotou o minimalismo como estilo de vida.</p><p>Proprietário da Empresa VIEW que atua no segmento de Marketing com cases e campanhas nacionais e internacionais se destacando em gestão de mídias sociais, branding & marketing assets.</p>"
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
