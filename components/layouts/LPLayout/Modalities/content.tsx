import Image from "next/image";

export const tabs = [
  {
    id: "ecommerce",
    label: "E-COMMERCES",
    descriptionStart: "Os e-commerces da",
    highlightWord: "Bluemonster",
    descriptionEnd: "transformam sua loja em uma vitrine aberta 24h.",
    extra: "\nAumente suas vendas de forma prática, segura e profissional.",

    image: "/images/pictures/ncell.webp",
    ideal:
      "Ideal para empresas que desejam aumentar a visibilidade e venda de produtos.",
    benefitsTitle: "Benefícios de ter um e-commerce",
    idealFor: [
      "Óticas",
      "Loja de Roupa",
      "Loja de Sapato",
      "Loja de eletronicos",
      "Pizzaria",
      "Relojoarias",
      "Joias e semijoias",
      "Loja de suplementos",
      "Perfumaria",
      "Decoração",
      "Autopeças",
      "Loja de automóveis",
      "Loja de bicicletas",
      "Petshops",
      "Aluguel de trajes",
      "Aluguel de veículos",
      "Floricultura",
      "Adega e distribuidores de bebida",
      "Outros",
    ],
    benefits: [
      {
        icon: (
          <Image
            src="/images/icons/icon-visibility.svg"
            width={32}
            height={32}
            alt="Aumento de visibilidade de produtos"
            priority
          />
        ),
        title: "Aumento de visibilidade de produtos",
        description:
          "Montar um site custa muito menos que abrir uma filial além de dar uma maior escala de alcance.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-brand-authority.svg"
            width={32}
            height={32}
            alt="Autoridade de Marca"
            priority
          />
        ),
        title: "Autoridade de Marca",
        description:
          "Ter um domínio próprio passa profissionalismo e destaque na concorrência (ex: www.sualoja.com)",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-e-commerce.svg"
            width={32}
            height={32}
            alt="Vendas Online"
            priority
          />
        ),
        title: "Vendas Online",
        description:
          "Você tem a possibilidade de vender diretamente pelo seu canal de vendas online: whatsapp, instagram ou telefone.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-autonomy.svg"
            width={32}
            height={32}
            alt="Autonomia"
            priority
          />
        ),
        title: "Autonomia",
        description:
          "Com nosso Sistema de Gerenciamento você tem autonomia de adicionar, editar e excluir produtos diretamente no site.",
      },
    ],
  },
  {
    id: "landing",
    label: "LANDING PAGES",
    descriptionStart:
      "Mais visibilidade, mais autoridade, mais clientes! As Landing Pages servem para captar leads de forma orgânica na busca do",
    highlightWord: "Google,",
    descriptionEnd:
      "além de aumentar a credibilidade da sua marca e destacar seus serviços de forma clara e profissional.",
    image: "/images/pictures/engebee.webp",
    ideal:
      "Ideal para empresas e profissionais que desejam aumentar a visibilidade de seus serviços.",
    benefitsTitle: "Benefícios de ter uma landing page",
    idealFor: [
      "Contabilidade",
      "Consultores",
      "Advogados",
      "Despachantes",
      "Corretores de imóveis",
      "Psicólogos",
      "Nutricionistas",
      "Médicos especialistas",
      "Personal Trainers",
      "Estúdio de bem estar",
      "Professores particulares",
      "Coaches",
      "Mentores",
      "Eletricistas",
      "Encanadores",
      "Chaveiros",
      "Técnicos de informática",
      "Assistência técnica",
      "Serviços de limpeza",
      "Outros",
    ],
    benefits: [
      {
        icon: (
          <Image
            src="/images/icons/icon-streamline.svg"
            width={32}
            height={32}
            alt="Aumento de visibilidade de serviços"
            priority
          />
        ),
        title: "Aumento de visibilidade de serviços",
        description:
          "Apareça para clientes que estão pesquisando exatamente o serviço que você oferece.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-brand-authority.svg"
            width={32}
            height={32}
            alt="Autoridade e credibilidade"
            priority
          />
        ),
        title: "Autoridade e credibilidade",
        description:
          "Uma Landing Page profissional transmite confiança e faz você se destacar da concorrência.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-customers.svg"
            width={32}
            height={32}
            alt="Mais clientes, mais negócios"
            priority
          />
        ),
        title: "Mais clientes, mais negócios",
        description:
          "Formulários e botões de ação transformam visitantes em novas oportunidades de negócio todos os dias.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-money.svg"
            width={32}
            height={32}
            alt="Menor custo"
            priority
          />
        ),
        title: "Menor custo",
        description:
          "Por se tratar de um site com uma página única, as Landing pages costumar ter um custo menor de desenvolvimento.",
      },
    ],
  },
  {
    id: "blog",
    label: "BLOG",
    descriptionStart:
      "O blog serve para profissionais que buscam ser referência em um assunto por meio de conteúdos digitais.",
    descriptionEnd:
      "\nSe você gosta de escrever artigos e deseja compartilhar conhecimento esse é o módulo perfeito para você.",
    image: "/images/pictures/garfo.webp",
    idealFor: [
      "Crítica de cinema",
      "Crítica de restaurante",
      "Escritores",
      "Influenciadores",
      "Profissionais liberais",
      "Dicas de profissão",
      "Professores & Mentores",
      "Coaches",
      "Fotógrafos",
      "Designers",
      "Artistas visuais",
      "Colecionadores",
      "Turismo",
      "Nutricionistas",
      "Podcasters",
      "Jornalistas",
      "Roteiristas",
      "Redatores",
      "Outros",
    ],
    ideal: "Ideal para criadores de conteúdo.",
    benefitsTitle: "Benefícios de ter um blog pessoal",
    benefits: [
      {
        icon: (
          <Image
            src="/images/icons/icon-people.svg"
            width={32}
            height={32}
            alt="Engaje audiência"
            priority
          />
        ),
        title: "Engaje audiência",
        description:
          "Aumente sua audiência e crie mais conexão com seus leitores postando conteúdo de valor quando quiser.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-brand-authority.svg"
            width={32}
            height={32}
            alt="Autoridade e credibilidade"
            priority
          />
        ),
        title: "Autoridade e credibilidade",
        description:
          "Se torne referência para o seu nicho e conquiste novos leitores para o seu blog pessoal.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-map-search.svg"
            width={32}
            height={32}
            alt="Apareça nas buscas do google"
            priority
          />
        ),
        title: "Apareça nas buscas do google",
        description:
          "Aumente as chances de ser encontrado no Google por meio de palavras chaves inseridas no código.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-dollar.svg"
            width={32}
            height={32}
            alt="Monetize seu conteúdo"
            priority
          />
        ),
        title: "Monetize seu conteúdo",
        description:
          "Crie anúncios de parcerias, venda cursos e treinamentos diretamente no seu blog pessoal.",
      },
    ],
  },
  {
    id: "institucional",
    label: "SITE INSTITUCIONAL",
    descriptionStart:
      "Um site institucional apresenta sua empresa de forma profissional, fortalece sua marca e transmite confiança, sendo um cartão de visitas digital que gera oportunidades.",
    descriptionEnd:
      "\nDiferente das outras modalidades, os sites intitucionais contam com uma quantidade maior de informação divida por páginas e assuntos.",
    image: "/images/pictures/garfo.webp",
    idealFor: [
      "Startups",
      "Bancos e Fintechs",
      "Construtoras",
      "Empresas de médio e grande porte",
      "Ongs",
      "Shoppings",
      "Hotéis",
      "Escritórios de contabilidade",
      "Escritórios de advocacia",
      "Consultorias",
      "Imobiliárias",
      "Arquitetura & Engenharia",
      "Cooperativas",
      "Centros comerciais",
      "Franquias",
      "Redes de serviços",
      "Agências de turismo",
      "Escolas",
      "Faculdades",
      "Laboratórios",
      "Outros",
    ],
    ideal: "Ideal para empresas que desejam aumentar a credibilidade da marca.",
    benefitsTitle: "Benefícios de ter um site institucional",
    benefits: [
      {
        icon: (
          <Image
            src="/images/icons/icon-voice.svg"
            width={32}
            height={32}
            alt="Credibilidade"
            priority
          />
        ),
        title: "Credibilidade",
        description:
          "Sua empresa transmite mais profissionalismo e confiança já no primeiro contato do cliente.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-world.svg"
            width={32}
            height={32}
            alt="Mais visibilidade"
            priority
          />
        ),
        title: "Mais visibilidade",
        description:
          "Apareça no Google e seja encontrado por quem procura exatamente o que você oferece.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-briefcase.svg"
            width={32}
            height={32}
            alt="Mais oportunidades de negócio"
            priority
          />
        ),
        title: "Mais oportunidades de negócio",
        description:
          "Seus serviços e contatos ficam disponíveis 24h, aumentando as chances de novos clientes.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-brand.svg"
            width={32}
            height={32}
            alt="Fortalecimento da marca"
            priority
          />
        ),
        title: "Fortalecimento da marca",
        description:
          "Mostre seus diferenciais e conquiste espaço no mercado do seu nicho e na mente do consumidor.",
      },
    ],
  },
  {
    id: "cardapio",
    label: "CARDÁPIO DIGITAL",
    descriptionStart:
      "O cardápio online da Bluemonster coloca seus pratos no celular do cliente, com fotos atrativas e com integração com seu sistema de comandas. Moderno, fácil de atualizar e pronto para fornecer um melhor atendimento à seus clientes.",
    image: "/images/pictures/rockbar.webp",
    idealFor: [
      "Bares",
      "Restaurantes",
      "Pubs",
      "Hamburguerias",
      "Pizzarias",
      "Lanchonetes",
      "Cafeterias",
      "Doceiras",
      "Sorveterias",
      "Cervejarias",
      "Sushi Bars",
      "Churrascarias",
      "Marmitas fitness",
      "Deliverys em geral",
      "Outros",
    ],
    ideal:
      "Ideal para empresas que desejam aumentar a visibilidade e venda de produtos.",
    benefitsTitle: "Benefícios de ter um cardápio digital",
    benefits: [
      {
        icon: (
          <Image
            src="/images/icons/icon-people.svg"
            width={32}
            height={32}
            alt="Mais praticidade para o cliente"
            priority
          />
        ),
        title: "Mais praticidade para o cliente",
        description:
          "Seu cardápio sempre disponível na palma da mão do cliente, sem depender de impressos desatualizados.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-autonomy.svg"
            width={32}
            height={32}
            alt="Atualizações rápidas e simples"
            priority
          />
        ),
        title: "Atualizações rápidas e simples",
        description:
          "Adicione ou exclua itens, altere preços, fotos e promoções em minutos. Fácil, rápido e sem custo extra.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-tablet.svg"
            width={32}
            height={32}
            alt="Experiência moderna e atrativa"
            priority
          />
        ),
        title: "Experiência moderna e atrativa",
        description:
          "Crie fotos e descrições que despertam o apetite do cliente e destacam seus pratos.",
      },
      {
        icon: (
          <Image
            src="/images/icons/icon-dollar.svg"
            width={32}
            height={32}
            alt="Menor custo"
            priority
          />
        ),
        title: "Menor custo",
        description:
          "Além da facilidade na manutenção, o cardápio online oferece um custo muito menor em relação ao cardápio físico. ",
      },
    ],
  },
];
