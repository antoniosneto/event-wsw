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
        img: "./assets/paulo-emilio.png",
        title: "Paulo Emílio",
        subtitle: "Diretor da Sales In Mind",
        description:
            "<p>Adminstrador de Empresas, Especialista em Gestão Estratégica de Negócios pela UFMG, Pós-Graduado em Gestão de Projetos pelo IETEC e Mestre em Administração pela FPL.</p><p>Trajetória de mais de 34 anos ocupando posições de liderança em grandes e médias empresas com vasta experiência em gestão, vendas e marketing.</p><p>Foi Gerente Regional da Unidas Rent a Car e da Águia Branca Cargas em Minas Gerais. É Coordenador e Professor do Curso de Pós-Graduação em Engenharia de Vendas, Diretor de Educação e Operações do IETEC, e Diretor da Sales in Mind Consultoria e Treinamento em Vendas.</p>"
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
