export type ArcanaType = "maior" | "menor"

export type MinorSuit = "paus" | "copas" | "espadas" | "ouros"

export interface TarotCard {
  slug: string
  number: string
  name: string
  type: ArcanaType
  suit?: MinorSuit
  keywords: string[]
  upright: string
  reversed: string
  description: string
  image?: string
  fullDescription?: { title: string; content: string[] }[]
}

export const suitInfo: Record<
  MinorSuit,
  { name: string; element: string; theme: string; symbol: string }
> = {
  paus: {
    name: "Paus",
    element: "Fogo",
    theme: "Energia, paixão, criatividade e ação",
    symbol: "🜂",
  },
  copas: {
    name: "Copas",
    element: "Água",
    theme: "Emoções, relacionamentos e intuição",
    symbol: "🜄",
  },
  espadas: {
    name: "Espadas",
    element: "Ar",
    theme: "Pensamento, conflito, verdade e intelecto",
    symbol: "🜁",
  },
  ouros: {
    name: "Ouros",
    element: "Terra",
    theme: "Material, trabalho, dinheiro e corpo",
    symbol: "🜃",
  },
}

export const majorArcana: TarotCard[] = [
  {
    slug: "o-louco",
    number: "0",
    name: "O Louco",
    type: "maior",
    keywords: ["Início", "Espontaneidade", "Liberdade"],
    upright: "Novos começos, fé no desconhecido, aventura e inocência.",
    reversed: "Imprudência, decisões precipitadas, medo de arriscar.",
    description:
      "O Louco representa o início da jornada, o salto de fé rumo ao desconhecido. Carrega a pureza de quem ainda não foi moldado pela experiência e convida à confiança no fluxo da vida.",
    image: "/images/arcanos_maiores/0.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Louco\" representa a energia original sem limites, a liberdade total e o impulso criativo fundamental.",
          "Sendo o único Arcano Maior que não possui um número definido (frequentemente associado ao Zero), ele simboliza o começo perpétuo, uma força que atravessa todos os outros arcanos sem se fixar em nenhum."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Início e Potencial: É a carta dos novos começos, das oportunidades frescas e do início de uma jornada com uma \"página em branco\".",
          "Liberdade e Espontaneidade: Representa um ser desprendido de necessidades, complexos ou julgamentos, agindo com curiosidade e entusiasmo.",
          "O \"Salto de Fé\": Significa caminhar em direção ao desconhecido sem medo, confiando no fluxo da vida, mesmo sem ver claramente o caminho à frente.",
          "Transcendência e Loucura: A \"loucura\" aqui é vista como algo que escapa às normas comuns e à razão, podendo ser a sabedoria suprema do iniciado ou, em um sentido negativo, a irresponsabilidade e o caos."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Precipício: O Louco está prestes a caminhar para além da borda de um penhasco. Isso simboliza o salto no desconhecido, a imprevisibilidade da vida e a disposição de correr riscos sem o peso do medo ou do passado.",
          "O Olhar para o Alto: Ele não olha para onde pisa, mas sim para o céu. Isso reflete o seu idealismo, a conexão com o divino e uma mente voltada para aspirações espirituais. Por outro lado, também avisa sobre a falta de aterramento e o perigo de ignorar a realidade material.",
          "A Túnica Colorida: Coberta de flores e padrões geométricos, representa a juventude, a criatividade e a espontaneidade. É a personificação do caos alegre antes da ordem ser estabelecida.",
          "A Trouxa: Representa o substrato útil da experiência e a luz da consciência, carregando apenas o essencial.",
          "O Animal (Cão): Interpreta-se como o passado que empurra o indivíduo para frente ou como o instinto domado (o ego) que agora colabora com o ser essencial. Também é visto como um símbolo de proteção e fidelidade durante a jornada.",
          "A Rosa Branca: Presente em algumas versões (como o Tarot de Waite), simboliza a inocência, pureza e a inexperiência juvenil.",
          "As Montanhas de Gelo: Ao fundo, picos gelados e afiados representam os desafios intelectuais, as provações e a sabedoria fria que o aguardam no futuro. Elas lembram que a jornada espiritual exige esforço e superação."
          
        ]
      },
      {
        title: "O Louco em Leituras",
        content: [
          "Positivo (Em pé): Indica um enorme impulso de energia, uma liberação ou fuga de situações opressoras e a coragem para iniciar um novo projeto ou relação.",
          "Negativo (Invertido): Pode representar imprudência, escolhas irrefletidas, apatia ou o medo do desconhecido que impede o progresso. Também pode indicar que a pessoa está agindo de forma tola ou negligente, ignorando as consequências."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, o Louco é o alfa e o ômega. Ele é a energia divina que busca se materializar na realização total, representada pelo arcano O Mundo (XXI).",
          "Enquanto O Mundo é o desfecho infinito, O Louco é o começo incessante; juntos, eles delimitam o espaço onde todas as possibilidades humanas e espirituais se desenrolam."
        ]
      }
    ],
  },
  {
    slug: "o-mago",
    number: "I",
    name: "O Mago",
    type: "maior",
    keywords: ["Manifestação", "Poder", "Habilidade"],
    upright: "Capacidade de criar, foco, domínio dos recursos disponíveis.",
    reversed: "Manipulação, talentos desperdiçados, falta de clareza.",
    description:
      "O Mago é aquele que reúne os quatro elementos e transforma vontade em realidade. Simboliza o poder da concentração e a ponte entre o céu e a terra.",
    image:  "/images/arcanos_maiores/1.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Mago\" (Número I) representa a potencialidade pura, o início da ação e a capacidade de manifestar a vontade no mundo material.",
          "Enquanto o Louco é a energia indiferenciada, o Mago é a consciência ativa que escolhe um caminho e utiliza as ferramentas à sua disposição para criar a realidade."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Início e Manifestação: É a carta dos novos começos, indicando que agora é o momento perfeito para iniciar um projeto, trabalho ou relacionamento.",
          "Habilidade e Talento: Representa um indivíduo astuto, com grande destreza manual ou intelectual, capaz de resolver problemas com criatividade.",
          "Poder Pessoal: Simboliza a transição do \"potencial\" para a \"ação\", onde o indivíduo descobre e explora sua própria força interior para moldar seu destino.",
          "Palavras-chave: Manifestação, força de vontade, recursos, iniciativa, início, habilidade e diplomacia."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Mesa e os Elementos: Sobre sua mesa, o Mago possui os símbolos dos quatro naipes dos Arcanos Menores (Ouros, Copas, Espadas e Paus), o que indica que ele tem todos os recursos e elementos da vida (físico, emocional, mental e criativo) à sua disposição.",
          "Posição das Mãos: Uma mão aponta para o céu e a outra para a terra, simbolizando a conexão entre o mundo espiritual e o material (\"o que está em cima é como o que está embaixo\").",
          "O Infinito (Lemniscata): O símbolo do infinito acima de sua cabeça (ou o formato de seu chapéu) representa a harmonia, a eternidade e o potencial ilimitado do espírito.",
          "Vestimentas: Sua túnica vermelha simboliza paixão, energia vital e conhecimento, enquanto o branco representa a pureza de propósito.",
          "As Flores: Flores ao redor da figura indicam o florescimento de ideias e o crescimento espiritual."
        ]
      },
      {
        title: "O Mago em Leituras",
        content: [
          "Positivo (Em pé): Sugere que o consultor possui as ferramentas necessárias para ter sucesso e deve tomar a iniciativa. Indica inteligência rápida, discernimento e a capacidade de organizar a realidade conforme sua vontade.",
          "Negativo (Invertido): Pode representar trapaça, manipulação e charlatanismo. Também indica má gestão de talentos, hesitação paralisante ou alguém que usa suas habilidades para enganar os outros."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", o Mago é o primeiro passo consciente. Ele representa o momento em que o ser humano deixa de ser apenas um impulso e passa a ser o arquiteto de sua própria vida, unindo o poder espiritual ao poder material.",
          "Na numerologia do Tarot, ele é o ponto original de onde o universo individual surge, funcionando como a unidade que deve escolher um modo de agir para progredir."
        ]
      }
    ]
  },
  {
    slug: "a-sacerdotisa",
    number: "II",
    name: "A Sacerdotisa",
    type: "maior",
    keywords: ["Intuição", "Mistério", "Sabedoria interior"],
    upright: "Conhecimento oculto, intuição, silêncio e contemplação.",
    reversed: "Segredos revelados, desconexão da intuição, confusão.",
    description:
      "A Sacerdotisa guarda os mistérios entre o consciente e o inconsciente. Ela ensina a escutar a voz interior antes de qualquer ação.",
    image: "/images/arcanos_maiores/2.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Sacerdotisa\" (também conhecida como A Papisa, Número II) representa a acumulação, a intuição profunda e o conhecimento dos segredos essenciais que ainda não se manifestaram no mundo exterior.",
          "Enquanto o Mago é a ação consciente, a Sacerdotisa é o retiro espiritual, a gestação e a sabedoria que espera o momento certo para ser revelada."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Intuição e Sabedoria Interior: Representa a voz interna, as habilidades psíquicas e a percepção do que está oculto sob a superfície.",
          "Gestação e Potencial: É a carta da incubação, simbolizando um estado de espera fértil onde algo está sendo preparado para nascer.",
          "Mistério e Segredo: Atua como a guardiã do santuário oculto, detendo conhecimentos que não devem ser revelados levianamente.",
          "Palavras-chave: Fé, Conhecimento, Paciência, Intuição, Silêncio, Gestação, Mistério, Sabedoria e Virgindade."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "As Duas Colunas (Boaz e Jachin): Representam a dualidade do mundo (luz/sombra, masculino/feminino, positivo/negativo), indicando que o conhecimento da dualidade é essencial nesta etapa da jornada.",
          "O Véu e as Romãs: O véu atrás dela simboliza o que separa o consciente do inconsciente; as romãs representam a abundância, fertilidade e os mistérios divinos.",
          "O Livro ou Pergaminho (TORA): Representa a lei secreta e o conhecimento acumulado que só pode ser decifrado através da intuição e do contato com o Eu Superior.",
          "A Lua (aos pés ou na coroa): Simboliza sua conexão com o feminino divino, os ritmos biológicos e a soberania sobre o mundo emocional e intuitivo.",
          "O Ovo Branco (em algumas versões): Um detalhe destacado por Jodorowsky que reforça o simbolismo da gestação de si mesma e da promessa de um nascimento futuro.",
          "Cruz no Peito: Indica que, embora esteja no mundo material, ela pertence e obedece ao mundo espiritual."
        ]
      },
      {
        title: "A Sacerdotisa em Leituras",
        content: [
          "Positivo (Em pé): Indica que a resposta desejada está dentro do próprio consultente e que ele deve confiar em seus instintos. Sugere um período de estudo, retiro necessário ou a presença de uma guia espiritual feminina.",
          "Negativo (Invertido): Pode representar uma desconexão da intuição, bloqueios emocionais ou estar sendo excessivamente influenciado pelas opiniões de terceiros. Também pode indicar segredos perigosos, fofocas ou uma rigidez (frieza) que impede o fluxo da vida."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", a Sacerdotisa é o segundo passo, onde o herói aprende a silenciar o mundo externo para ouvir o interno. Ela representa a pureza total e a parte intacta da alma humana que nunca foi ferida, funcionando como um poço de purificação e confiança espiritual.",
          "Ela é o caminho da sabedoria passiva, ensinando que antes de criar (como a Imperatriz), é necessário saber acumular e refletir no silêncio do templo interior."
        ]
      }
    ]
  },
  {
    slug: "a-imperatriz",
    number: "III",
    name: "A Imperatriz",
    type: "maior",
    keywords: ["Abundância", "Fertilidade", "Cuidado"],
    upright: "Criatividade fértil, nutrição, prosperidade e beleza.",
    reversed: "Bloqueio criativo, dependência, descuido consigo mesmo.",
    description:
      "A Imperatriz é a mãe da natureza, símbolo de fartura e criação. Representa o florescimento de projetos e o cuidado generoso com a vida.",
    image: "/images/arcanos_maiores/3.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Imperatriz\" (Número III) representa a explosão criativa, a fecundidade universal e o desabrochar da vida em todas as suas formas.",
          "No Tarot, o número 3 simboliza a primeira ação do \"quadrado Terra\", um impulso adolescente e borbulhante que faz com que o potencial acumulado pela Sacerdotisa (II) ecloda para o mundo."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Fertilidade e Abundância: É a carta da \"Mãe do Tarot\", simbolizando o crescimento pessoal, a gravidez e a capacidade de dar luz a novas ideias, projetos ou vidas.",
          "Criatividade Adolescente: Representa uma força vital extrema, marcada pelo entusiasmo, pela sedução e pela falta de experiência — uma ação que ocorre por puro prazer de existir.",
          "Beleza e Natureza: Associada ao signo de Touro e ao planeta Vênus, ela rege a estética, o conforto e a conexão profunda com os ritmos da Terra.",
          "Palavras-chave: Fecundidade, criatividade, sedução, abundância, natureza, desejo, beleza, eclosão e nutrição."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Cetro de Globo: Na mão direita, ela ergue um cetro encimado por uma esfera, que representa a Terra ou o mundo material. Ela governa sobre a criação física com graça e autoridade natural, não pela força.",
          "A Coroa de Doze Estrelas: Na cabeça, ela usa uma coroa com 12 estrelas. Elas representam os doze signos do zodíaco e os doze meses do ano. Isso simboliza que, embora ela reine na Terra, seu poder tem origem e conexão direta com os ciclos cósmicos e o tempo astrológico.",
          "Trigo, Frutos e Rio: Cercada por trigo e vestida com estampas de romãs ou frutos, ela simboliza a colheita pronta e a riqueza material; o rio que flui ao fundo indica que sua energia está em constante movimento.",
          "O Vestido de Romãs: O padrão em sua túnica fluida é composto por romãs. Historicamente, a romã é um símbolo ancestral de fertilidade, sexualidade e do útero materno (uma alusão também à deusa Perséfone/Deméter). O corte folgado do vestido também costuma sugerir uma gravidez em curso.",
          "As Almofadas de Veludo Vermelho: Ela senta-se confortavelmente em um trono cercado por ricas almofadas vermelhas. Isso reflete o apreço pelo conforto, o prazer dos sentidos, a hospitalidade e o aspecto acolhedor do amor materno.",
          "O Escudo em Forma de Coração: Apoiado ao lado do trono, há um escudo cinza com o formato de um coração gravado com o símbolo astrológico de Vênus ($\ venus$). Vênus é o planeta do amor, da beleza, da harmonia, da criatividade e da atração. O escudo indica que o amor e a beleza são as suas maiores forças de proteção."
        ]
      },
      {
        title: "A Imperatriz em Leituras",
        content: [
          "Positivo (Em pé): Indica sucesso em projetos, recompensa pelo trabalho árduo, harmonia doméstica e uma fase de grande atrativo físico e vitalidade (\"glowing\"). Sugere que o consulente deve confiar em seu instinto e se permitir desfrutar dos prazeres da vida.",
          "Negativo (Invertido): Pode representar bloqueio criativo, esterilidade ou uma atitude excessivamente dependente e controladora. Também pode indicar amargura, infidelidade, vaidade fútil ou uma imagem negativa da própria aparência e feminilidade."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", a Imperatriz é o momento em que o buscador aprende a nutrir a si mesmo e aos outros. Ela é o passo onde a sabedoria passiva da Sacerdotisa se torna ação manifesta; o ovo finalmente se quebra para permitir o nascimento do ser.",
          "Ela ensina que o espírito deve se materializar na carne para ser belo, preparando o caminho para a estabilidade e as leis que serão impostas pelo Arcano seguinte, O Imperador (IIII)."
        ]
      }
    ]
  },
  {
    slug: "o-imperador",
    number: "IV",
    name: "O Imperador",
    type: "maior",
    keywords: ["Estrutura", "Autoridade", "Estabilidade"],
    upright: "Liderança, disciplina, ordem e proteção.",
    reversed: "Rigidez, controle excessivo, abuso de poder.",
    description:
      "O Imperador estabelece estrutura e fronteiras. Representa a figura paterna, a razão e a construção de bases sólidas.",
    image: "/images/arcanos_maiores/4.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Imperador\" (Número IIII ou IV) representa a estabilidade, a autoridade e o domínio completo sobre o mundo material.",
          "Enquanto a Imperatriz é a explosão criativa, o Imperador é a estrutura e a ordem que permitem que essa energia se materialize de forma sólida e segura no tempo e no espaço."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Poder e Responsabilidade: É a figura do \"Pai do Tarot\", simbolizando a proteção, o governo e a capacidade de assumir responsabilidades sobre o território e a vida de forma soberana.",
          "Racionalismo e Lógica: Representa uma mente organizada, pragmática e voltada para soluções concretas, priorizando a inteligência e o autocontrole sobre os impulsos emocionais.",
          "Fundação Sólida: Associado ao número 4 (o quadrado), indica segurança financeira, um lar estável e uma base inquebrantável para qualquer projeto.",
          "Palavras-chave: Autoridade, estabilidade, disciplina, estrutura, liderança, paternidade, segurança e pragmatismo."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Trono e as Cabeças de Carneiro: Sentado em um trono rígido e cinza (cor do concreto), ele demonstra solidez e frieza estratégica. As cabeças de carneiro (signo de Áries) simbolizam a força vital do grande iniciador e o poder soberano.",
          "O Cetro e o Globo: Ele segura um cetro (frequentemente a cruz Ankh) que representa o poder sobre a vida e as leis cósmicas, enquanto o globo em sua mão simboliza seu domínio total sobre o território manifestado.",
          "A Armadura sob o Manto: Por baixo de sua túnica real vermelha, o Imperador veste uma armadura de ferro completa. Isso indica que ele está sempre pronto para a batalha e para defender o que construiu. Mostra uma postura defensiva, controle emocional e a necessidade de se proteger contra vulnerabilidades externas. O vermelho de suas vestes reforça a paixão pelo poder, o comando e a energia marciana.",
          "As Montanhas Rochosas: Ao fundo, as montanhas são áridas, afiadas e desprovidas de vegetação (um contraste brutal com as florestas da Imperatriz). Elas simbolizam a ambição, as duras realidades do governo, a imutabilidade e os desafios estruturais.",
          "A Barba Branca e a Coroa: Sua longa barba branca simboliza a sabedoria acumulada pelo tempo, a experiência de vida e a ancestralidade. A coroa de ouro cravejada de joias sinaliza que sua autoridade é legítima e reconhecida."
        ]
      },
      {
        title: "O Imperador em Leituras",
        content: [
          "Positivo (Em pé): Indica uma situação financeira sólida, um lar equilibrado, ou o encontro com um aliado protetor e honesto. Sugere que o consultente deve ser assertivo, criar rotinas e assumir o controle de sua própria vida com disciplina.",
          "Negativo (Invertido): Pode representar tirania, inflexibilidade ou abuso de autoridade. Indica uma pessoa \"imdobrável\" que se recusa a ouvir os outros, ou, por outro lado, uma falta de disciplina que leva à ruína e ao fracasso na idade adulta."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", o Imperador é o estágio em que o herói aprende sobre leis, estrutura e responsabilidade social. Ele representa a perfeição do plano terrestre, funcionando como o arquiteto que ordena o caos e transforma o ideal em algo tangível.",
          "Sua lição espiritual é que a verdadeira liberdade nasce da obediência às leis universais e do domínio sobre os próprios instintos e paixões. Ele é o alicerce necessário para que o buscador possa, no passo seguinte, elevar-se ao mundo espiritual mediado pelo Hierofante (V)."
        ]
      }
    ]
  },
  {
    slug: "o-hierofante",
    number: "V",
    name: "O Hierofante",
    type: "maior",
    keywords: ["Tradição", "Ensino", "Fé"],
    upright: "Sabedoria espiritual, instituições, valores compartilhados.",
    reversed: "Dogmatismo, rebeldia, quebra de convenções.",
    description:
      "O Hierofante é o mestre das tradições e o elo entre o sagrado e o cotidiano. Convida ao aprendizado dentro de estruturas estabelecidas.",
    image: "/images/arcanos_maiores/5.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Hierofante\" (também conhecido como O Papa, Número V) representa o mediador, a ponte entre o mundo material e o espiritual, e a autoridade da tradição e do ensino organizado.",
          "Enquanto o Imperador (IIII) estabelece a ordem terrestre, o Hierofante comunica o conhecimento sagrado e indica um ideal que supera a simples segurança material."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Ensino e Sabedoria: É a carta do professor, do mestre e do guia que transmite leis morais e sabedoria acumulada.",
          "Ponte entre Mundos: Atua como um \"pontífice\" (construtor de pontes), unindo o Céu e a Terra, e traduzindo o divino para a linguagem humana.",
          "Tradição e Instituição: Refere-se a estruturas sociais e religiosas, respeitando normas formais, status quo e o caminho do \"fazer o que é certo\".",
          "Palavras-chave: Sabedoria, Ideal, Comunicação, Guia, Tradição, Mediação, Instituição e Fé."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Tiara e a Cruz Tripla: Sua coroa e seu cetro de três barras horizontais simbolizam o poder criador e a autoridade sobre os três mundos: divino, psíquico e físico.",
          "Duas Colunas: Sentado entre colunas que evocam a solidez do Templo de Salomão, simboliza a estabilidade e o equilíbrio da presença divina na Terra.",
          "As Duas Chaves: Situadas aos seus pés, representam o poder de \"ligar e desligar\" (abrir ou fechar) o acesso ao conhecimento e ao reino dos céus.",
          "Gesto de Bênção: Com a mão direita, ele abençoa e sinaliza que o conhecimento deve ser compartilhado com os discípulos.",
          "Os Dois Discípulos: Representam a via do estudo e do esforço (via seca) e a via da iluminação e revelação direta (via úmida).",
          "O Manto Vermelho: Simboliza a paixão pelo conhecimento e a energia vital que o sustenta, enquanto o branco da túnica representa a pureza de intenção e a conexão com o divino."
        ]
      },
      {
        title: "O Hierofante em Leituras",
        content: [
          "Positivo (Em pé): Indica uma grande proteção, o recebimento de conselhos confiáveis ou a necessidade de buscar conhecimento em instituições e mentores. Sugere estabilidade, conformidade com a moral e sucesso através da disciplina e do estudo de longo prazo.",
          "Negativo (Invertido): Pode representar dogmatismo rígido, hipocrisia, ou a sensação de estar aprisionado por regras obsoletas. Por outro lado, indica o desejo de seguir um caminho não tradicional, libertando-se de expectativas sociais para se tornar o próprio mestre."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", o Hierofante é o estágio da educação e iniciação. Ele representa o momento em que o buscador deixa de focar apenas no poder material do Imperador para resgatar seu poder espiritual.",
          "É a união do masculino e do feminino espiritual (em par com a Alta Sacerdotisa), ensinando que o indivíduo deve se tornar um canal para a vontade divina através da paz interior e da benevolência. Na astrologia, este arcano é frequentemente associado ao signo de Touro."
        ]
      }
    ]
  },
  {
    slug: "os-enamorados",
    number: "VI",
    name: "Os Enamorados",
    type: "maior",
    keywords: ["União", "Escolha", "Harmonia"],
    upright: "Amor, parcerias, decisões alinhadas com os valores.",
    reversed: "Desequilíbrio, escolhas difíceis, desalinhamento.",
    description:
      "Os Enamorados falam de uniões e das escolhas que definem o caminho. Representam o encontro de opostos e a busca por harmonia.",
    image: "/images/arcanos_maiores/6.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"Os Enamorados\" (ou O Namorado, Número VI) representa o âmbito emocional, a união e a necessidade de realizar escolhas fundamentais.",
          "Enquanto o Hierofante (V) introduz um ideal espiritual, os Enamorados marcam o momento em que o indivíduo deve decidir seu próprio caminho, movido pelo que realmente ama e deseja."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Escolha e Livre-arbítrio: Simboliza a encruzilhada da vida onde é preciso tomar uma decisão pessoal, saindo do impasse para avançar.",
          "Vida Afetiva e Social: Representa a beleza das relações humanas, a amizade, o compromisso e a união de opostos.",
          "Alinhamento de Valores: Refere-se a encontrar harmonia interna e externa, agindo em conformidade com as crenças e desejos da alma.",
          "Palavras-chave: Amor, união, desejo, escolha, equilíbrio, harmonia, âmbito emocional e prazer."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Anjo (ou Arcanjo Rafael): Situado no céu, representa o Eu Superior ou a força divina que observa e abençoa as uniões e as escolhas feitas com o coração. No Tarot de Marselha, é visto como Cupido/Eros, lançando a flecha do desejo.",
          "As Figuras Humanas: Em algumas versões, representam Adão e Eva no paraíso (o masculino e feminino primordiais); em outras, um trio humano simbolizando a complexidade das relações sociais e afetivas.",
          "O Sol: Situado ao fundo, simboliza a manifestação da divindade e a luz da consciência que ilumina a cena.",
          "As Árvores e a Serpente: Representam a Árvore da Vida e a do Conhecimento; a serpente simboliza o psiquismo obscuro ou o desejo instintivo que deve ser integrado.",
          "Os Sapatos Vermelhos (em Marselha): O personagem central usa sapatos vermelhos (como o Louco e o Imperador), indicando que seu amor é ativo, terreno e resultado de um trabalho prévio de amadurecimento.",
          "A Montanha: Representa o ponto de encontro entre o céu e a terra, e o objetivo final da ascensão humana e espiritual."
        ]
      },
      {
        title: "Os Enamorados em Leituras",
        content: [
          "Positivo (Em pé): Indica um relacionamento harmonioso, atração mútua, uma escolha acertada baseada no coração e a resolução de oposições em prol de algo maior. Sugere que o consultente está em paz com suas decisões e valores.",
          "Negativo (Invertido): Pode sinalizar conflitos internos, desarmonia no casal, uma escolha infeliz ou irresponsável, e a tendência a seguir a lógica fria em vez do desejo da alma. Também pode representar um triângulo amoroso problemático ou a incapacidade de se comprometer."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", os Enamorados representam o estágio em que o herói descobre a alteridade e o prazer de se refletir no outro.",
          "É o primeiro passo no chamado \"quadrado do Céu\" (numerologia 6), onde o indivíduo deixa de apenas suprir necessidades materiais para fazer o que ama. Este arcano ensina que a verdadeira realização nasce da tomada de consciência das forças que nos dividem e da busca por uma síntese construtiva e amante. Astrologicamente, é frequentemente associado ao signo de Gémeos."
        ]
      }
    ]
  },
  {
    slug: "o-carro",
    number: "VII",
    name: "O Carro",
    type: "maior",
    keywords: ["Vitória", "Vontade", "Direção"],
    upright: "Determinação, controle, avanço e conquista.",
    reversed: "Falta de rumo, agressividade, perda de controle.",
    description:
      "O Carro simboliza o triunfo conquistado pela vontade. Ensina a conduzir forças opostas na mesma direção rumo ao objetivo.",
    image: "/images/arcanos_maiores/7.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Carro\" (Número VII) representa o triunfo, a ação no mundo e a vitória da consciência sobre os conflitos internos.",
          "Enquanto os arcanos anteriores focavam na construção da personalidade e na escolha, O Carro simboliza o momento em que o indivíduo, tendo unificado suas tendências contrárias, avança resolutamente para conquistar seu destino."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Triunfo e Sucesso: É a carta do progresso e da vitória alcançada através da determinação e do esforço pessoal.",
          "Autodomínio e Vontade: Representa a capacidade de dirigir a própria vida com firmeza, mantendo o foco nos objetivos e superando obstáculos.",
          "Ação Consciente: Diferente da explosão criativa da Imperatriz, a ação do Carro é planejada e sabe exatamente para onde se dirige.",
          "Palavras-chave: Vitória, Ação, Determinação, Sucesso, Movimento, Conquista, Liderança e Viagem."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Veículo Cúbico: O carro em si é um bloco de pedra cinza maciça, de formato cúbico. Isso reforça que, embora esteja em movimento, o guerreiro carrega consigo a estabilidade da matéria e a firmeza de propósito. Ele está blindado contra as distrações externas.",
          "As Esfinges: Em vez de cavalos, o veículo é puxado por duas esfinges míticas, uma preta e a outra branca. Elas personificam forças opostas e complementares: luz e sombra, razão e emoção, o consciente e o inconsciente, ou os impulsos positivos e negativos.",
          "O Dossel e as Estrelas: Coberto por um manto com doze estrelas, indicando que o condutor trabalha em harmonia com as forças cósmicas e o zodíaco.",
          "As Máscaras nos Ombros: Representam o passado e o futuro, ou as polaridades positiva e negativa, que o príncipe equilibra ao agir no presente.",
          "O Disco Alado: Na frente do carro, há uma esfera com asas, um antigo símbolo egípcio (associado a Hórus/Rá) que representa a alma elevada, a inspiração espiritual e o triunfo do espírito sobre a matéria.",
          "O Lingam-Yoni: Logo abaixo do disco, há um símbolo vermelho que se assemelha a uma ferramenta ou dobradiça, mas que na tradição esotérica representa o Lingam e a Yoni (a união sagrada das energias masculina e feminina). Isso enfatiza a perfeita união de polaridades necessária para gerar movimento."
        ]
      },
      {
        title: "O Carro em Leituras",
        content: [
          "Positivo (Em pé): Indica um período de grande avanço, viagens bem-sucedidas, promoções e a certeza de que o consulente tem o poder necessário para triunfar em seus projetos. Sugere facilidade em alcançar metas e domínio sobre as emoções.",
          "Negativo (Invertido): Sinaliza que o consulente pode se sentir estagnado ou sem direção. Indica perda de controle, falta de foco, imprudência ou a tendência de deixar que os obstáculos impeçam o progresso em direção aos sonhos."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Herói\", O Carro encerra o primeiro septenário (focado no corpo e no consciente). Ele marca a transição em que o buscador deixa de apenas aprender para se tornar um veículo para o espírito, assumindo a direção de sua existência com maturidade.",
          "Numericamente, o 7 é o número mais ativo, simbolizando a totalidade do universo em movimento e a perfeição dinâmica. Astrologicamente, as fontes o associam frequentemente ao signo de Gémeos."
        ]
      }
    ]
  },
  {
    slug: "a-forca",
    number: "VIII",
    name: "A Força",
    type: "maior",
    keywords: ["Coragem", "Domínio", "Paciência"],
    upright: "Força interior, compaixão, controle suave dos instintos.",
    reversed: "Insegurança, impulsividade, dúvida sobre si.",
    description:
      "A Força revela o poder da gentileza sobre a brutalidade. É a coragem que doma os instintos com paciência e amor.",
    image: "/images/arcanos_maiores/8.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Força\" (Número XI ou VIII, dependendo da tradição) representa o domínio da inteligência e do espírito sobre os instintos animais, a coragem moral e a capacidade de enfrentar obstáculos com suavidade e determinação.",
          "No Tarot de Marselha, ela inicia a segunda série decimal, marcando um novo começo focado nas energias do inconsciente."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Força Interior e Coragem: Diferente da força física, este arcano simboliza a fortaleza da alma, a paciência e a perseverança para lidar com situações difíceis ou pessoas complicadas.",
          "Domínio do Instinto: Representa a capacidade de domar a própria \"fera\" interior — paixões, desejos e agressividade — não através da repressão, mas por meio da compreensão e da compaixão.",
          "Criatividade e Libido: É uma carta de grande potência vital e sexual, indicando o florescimento de energias profundas que impulsionam a ação no mundo.",
          "Palavras-chave: Autocontrolo, compaixão, determinação, influência, instinto, coragem, criatividade e renascimento."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Mulher e o Leão: A imagem de uma mulher abrindo ou fechando a boca do leão com a ponta dos dedos simboliza o poder da suavidade espiritual sobre a força bruta. O leão, com a cauda entre as pernas, demonstra submissão ao espírito.",
          "O Chapéu de Infinito (Lemniscata): Presente em muitas versões, o chapéu em forma de \"8\" deitado indica inteligência espiritual e conexão com o divino, assemelhando-se ao chapéu d'O Mago.",
          "As Vestes: Frequentemente veste branco (pureza de missão espiritual) com detalhes em vermelho (ação na matéria) e azul (espiritualidade).",
          "Os Seis Dedos e Unhas Vermelhas: Jodorowsky destaca um pé com seis dedos, simbolizando uma força excepcional, e unhas vermelhas que indicam vitalidade eterna e consciente.",
          "Posição do Leão: A cabeça do animal situa-se na altura da pelve da mulher, reforçando a ligação com a energia sexual e a força vital (Kundalini)."
        ]
      },
      {
        title: "A Força em Leituras",
        content: [
          "Positivo (Em pé): Indica que o consulente tem os recursos necessários para vencer seus medos e alcançar seus objetivos. Sugere o retorno da saúde após uma doença, o sucesso em novos empreendimentos e uma fase de grande vigor físico e mental.",
          "Negativo (Invertido): Pode sinalizar covardia, falta de autoconfiança ou permitir que a ansiedade e o medo bloqueiem o progresso. Também pode representar o \"lado selvagem\" descontrolado: explosões emocionais, agressividade, ou, por outro lado, uma repressão perigosa dos instintos."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, A Força marca o início do segundo septenário, voltado para o mundo inconsciente e espiritual. Enquanto O Mago (I) trabalha a inteligência no mundo material, A Força (XI) trabalha a inteligência nas profundezas da alma.",
          "Ela ensina que a verdadeira iluminação não vem da destruição do que é inferior ou \"vil\" em nós, mas sim da sua transmutação em luz e sabedoria. É o estágio em que o herói aprende a integrar sua natureza animal para que ela se torne o combustível de sua ascensão espiritual."
        ]
      }
    ]
  },
  {
    slug: "o-eremita",
    number: "IX",
    name: "O Eremita",
    type: "maior",
    keywords: ["Introspecção", "Busca", "Orientação"],
    upright: "Reflexão, sabedoria, busca por respostas internas.",
    reversed: "Isolamento, solidão excessiva, recusa em ouvir.",
    description:
      "O Eremita ilumina o caminho com sua lanterna interior. Representa o recolhimento necessário para encontrar a própria verdade.",
    image: "/images/arcanos_maiores/9.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Eremita\" (Número VIIII ou IX) representa a sabedoria, o desapego e a crise necessária para a transmutação espiritual.",
          "Enquanto os arcanos anteriores lidavam com a estabilidade e a ação no mundo, o Eremita marca o momento em que o buscador se retira para o interior de si mesmo, buscando respostas profundas e iluminando o próprio caminho com a luz da experiência acumulada."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Introspecção e Busca Interior: É a carta do \"soul searching\", indicando a necessidade de ficar sozinho para encontrar orientação interna e autoconhecimento.",
          "Crise e Passagem: Representa um momento de travessia e mudança profunda, onde se abandona o que é conhecido para caminhar em direção ao desconhecido.",
          "Prudência e Experiência: Simboliza o mestre secreto e a sabedoria que não busca deslumbrar, mas sim guiar com cautela e paciência.",
          "Palavras-chave: Solidão, Sabedoria, Desapego, Reflexão, Prudência, Silêncio, Crise e Guia Espiritual."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Lanterna Erguida: O Eremita segura a lanterna bem alto na mão direita, o lado associado à ação consciente e à razão. Ele não usa a luz para ver o horizonte distante, mas para iluminar o próximo passo com prudência.",
          "A Estrela de Seis Pontas: Dentro da lanterna, a fonte de luz é uma estrela dourada de seis pontas. Esse é um símbolo alquímico e místico profundo, formado pelo entrelaçamento do triângulo da água (voltado para baixo) e o triângulo do fogo (voltado para cima). Representa o equilíbrio perfeito entre o macrocosmo e o microcosmo, o divino e o humano. A mensagem aqui é clara: a única luz capaz de guiar a alma na escuridão vem de dentro, do conhecimento das leis universais.",
          "O Cajado: Na mão esquerda (associada à intuição e ao subconsciente), ele segura um longo cajado de madeira. Este cajado é o símbolo de sua autoridade espiritual, estabilidade e autoconfiança. Diferente do cetro real do Imperador, o cajado do Eremita serve de apoio e proteção na caminhada árdua. Representa também a coluna vertebral e o canal por onde a energia espiritual ascende.",
          "O Manto com Capuz: Ele veste uma capa cinza que cobre todo o seu corpo, funcionando como um casulo protetor. O cinza é a cor da neutralidade, do desapego do mundo material, da discrição e da modéstia. O manto simboliza a invisibilidade do sábio diante das distrações profanas.",
          "A Postura Curvada e o Olhar para Baixo: O homem idoso, de longa barba branca (símbolo de maturidade e do tempo cronológico), olha para baixo. Sua cabeça inclinada reflete o estado de profunda meditação e respeito pelo solo que pisa. Ele caminha devagar, medindo cada escolha.",
          "Caminhada de Costas: O Eremita é frequentemente descrito como alguém que avança andando de costas, contemplando o caminho já percorrido para criar a realidade do presente passo a passo.",
          "O Topo da Montanha Nevada: O Eremita está de pé, sozinho, no cume de uma montanha coberta de neve. As montanhas nevadas representam o isolamento necessário para alcançar os níveis mais altos de consciência. A neve simboliza a pureza do pensamento desprovido de paixões mundanas. Estar no topo significa que ele já completou grande parte de sua jornada intelectual e espiritual e agora está pronto para compartilhar sua luz com aqueles que ainda estão no vale abaixo, funcionando como um farol para outros buscadores."
        ]
      },
      {
        title: "O Eremita em Leituras",
        content: [
          "Positivo (Em pé): Indica um período fértil para estudos, terapia ou retiro espiritual. Sugere que o consulente deve confiar na sua voz interior e ser paciente, agindo com a prudência de quem não tem pressa para chegar ao fim.",
          "Negativo (Invertido): Pode representar o isolamento excessivo, a timidez paralisante ou a recusa em encarar responsabilidades no mundo real. Também pode sinalizar medo da morte, avareza espiritual, estagnação no passado ou uma crise que leva à tristeza e ao alcoolismo."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, o Eremita é o grau 9, o número das gestações (como os 9 meses de gravidez) e do coroamento dos esforços.",
          "Ele aparece após a perfeição da Justiça (VIII); ele ensina que a perfeição estática pode ser opressiva e que o ser deve entrar em crise para evoluir para um novo ciclo, representado pela Roda da Fortuna (X). Na \"Jornada do Herói\", ele representa o momento em que o buscador reconhece tanto sua luz quanto sua sombra, tornando-se um modelo e guia para os outros a partir de sua própria pureza e integridade. Astrologicamente, a tradição o associa frequentemente ao signo de Virgem."
        ]
      }
    ]
  },
  {
    slug: "a-roda-da-fortuna",
    number: "X",
    name: "A Roda da Fortuna",
    type: "maior",
    keywords: ["Ciclos", "Destino", "Mudança"],
    upright: "Sorte, viradas, ciclos naturais da vida.",
    reversed: "Resistência à mudança, má fase, falta de controle.",
    description:
      "A Roda da Fortuna gira constantemente, lembrando que tudo muda. Ensina a fluir com os ciclos e a aceitar o movimento do destino.",
    image: "/images/arcanos_maiores/10.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Roda da Fortuna\" (Número X) representa o encerramento de um ciclo e a iminência de uma nova etapa. Sendo o número dez, ela conclui a primeira série decimal dos Arcanos Maiores, simbolizando o momento de transição entre a busca ativa do primeiro septenário e o mergulho nas energias inconscientes que virão a seguir."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Destino e Mudança: Representa as alternâncias da sorte (boas ou más), flutuações e a natureza cíclica da vida. É um lembrete de que nada permanece igual e tudo é temporário.",
          "Impermanência e Eterno Retorno: Simboliza a instabilidade permanente e a sucessão incessante de nascimentos e mortes, sucessos e fracassos.",
          "Bloqueio ou Impulso: Pode indicar tanto uma paralisia que aguarda uma força externa para se mover quanto um impulso vital que acelera projetos ambiciosos.",
          "Palavras-chave: Destino, mudança, ciclos, fortuna, oportunidade, mutação, impermanência e renovação."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "As Letras na Roda (Os Quatro Mistérios): No círculo externo da grande roda alaranjada encontramos dois conjuntos de caracteres. As Letras Latinas (T - A - R - O): lidas no sentido horário a partir do topo formam TARO; dependendo do ponto de partida geram o anagrama místico TARO / ROTA / ORAT / TORA, e aludem também a Ator (Hathor). O ocultista Paul Foster Case sintetizou essa sequência na frase 'Rota Taro Orat Tora Ator' — a Roda do Tarot proclama a Lei de Hathor. Intercaladas com as latinas estão as Letras Hebraicas (יהוה), o Tetragrammaton (Yod‑He‑Vav‑He), indicando a assinatura divina por trás dos movimentos do destino.",
          "Os Símbolos Alquímicos Centrais: Nos raios internos da roda aparecem quatro símbolos alquímicos que regem o plano material e a estabilidade da vida: no topo, Mercúrio (a mente, a fluidez); à direita, Enxofre (paixão, energia ativa); à esquerda, Sal (inércia, cristalização material); na base, um símbolo de dissolução/água (fluxo e transformação). Esses signos indicam as forças que estruturam a matéria e tornam a roda operacional.",
          "As Três Criaturas (Ciclos da Matéria): Três figuras mitológicas interagem com a roda e representam fases da evolução: a Esfinge Azul (no topo) sentada com uma espada, símbolo do equilíbrio e da mente racional superior; Anúbis/Hermanúbis (à direita), a criatura que sobe, representando ascensão, crescimento e inteligência em expansão; e Tifão/A Serpente (à esquerda), que desce simbolizando involução, decadência material e as forças destrutivas que precipitam a mudança.",
          "Os Quatro Querubins (Os Quatro Evangelistas): Nos quatro cantos da carta flutuam figuras aladas — o Anjo/Homem (superior esquerdo, Aquário / Ar / Evangelista Mateus), a Águia (superior direito, Escorpião em sua oitava superior / Água / Evangelista João), o Touro (inferior esquerdo, Touro / Terra / Evangelista Lucas) e o Leão (inferior direito, Leão / Fogo / Evangelista Marcos). Todos seguram livros abertos, lendo a Lei Cósmica: apesar da aparência caótica das mudanças, existe uma ordem universal inscrita que pode ser percebida pelo espírito."
        ]
      },
      {
        title: "A Roda da Fortuna em Leituras",
        content: [
          "Positivo (Em pé): Indica que a sorte está mudando para melhor, trazendo abundância, bom karma e a realização de planos manifestados. Sugere que o consultente deve abraçar as mudanças e deixar o passado para trás.",
          "Negativo (Invertido): Pode representar resistência ao aprendizado ou mudanças indesejadas e desafiadoras. Também pode sinalizar um bloqueio ou a repetição de ciclos por incapacidade de aprender com as experiências passadas."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, A Roda da Fortuna marca a passagem da perfeição estática da Justiça (VIII) e da crise introspectiva do Eremita (VIIII) para o dinamismo de um novo começo.",
          "Ela ensina que a consciência deve se elevar acima das vicissitudes do destino para encontrar o centro imóvel do ser. Espiritualmente, encerra o ciclo do \"corpo/consciente\" e prepara o buscador para os mistérios do \"espírito/supraconsciente\". Astrologicamente, é frequentemente associada ao planeta Júpiter e, no plano físico, ao sistema digestivo."
        ]
      }
    ]
  },
  {
    slug: "a-justica",
    number: "XI",
    name: "A Justiça",
    type: "maior",
    keywords: ["Equilíbrio", "Verdade", "Causa e efeito"],
    upright: "Honestidade, responsabilidade, decisões justas.",
    reversed: "Injustiça, desonestidade, fuga das consequências.",
    description:
      "A Justiça pesa as ações com imparcialidade. Representa a lei do karma e a importância da verdade e do equilíbrio.",
    image: "/images/arcanos_maiores/11.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Justiça\" (Número VIII no Tarot de Marselha ou XI na tradição de Waite) representa o equilíbrio, a lei e a perfeição alcançada através do rigor e da clareza.",
          "Enquanto o Carro (VII) representa a ação triunfante no mundo, A Justiça simboliza a estabilização e a necessidade de pesar o que é necessário e cortar o que é supérfluo para viver em harmonia com as leis universais."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Lei e Karma: É a carta da causa e efeito (\"colhemos o que semeamos\") e da responsabilidade pelas próprias ações.",
          "Equilíbrio e Verdade: Representa a busca pela objetividade, agindo sem ser dominado pelas emoções ou preconceitos para encontrar o \"justo meio\".",
          "Maternidade: Em certas abordagens psicológicas, é vista como um arquétipo da mãe normativa ou a mãe grávida (visto que o 8 é o número de gestação plena antes do parto no 9).",
          "Palavras-chave: Equilíbrio, Verdade, Responsabilidade, Decisão, Rigor, Imparcialidade e Consequência."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Balança: Representa o equilíbrio das forças, a ponderação de opções e a justiça distributiva que dá a cada um o que merece. Curiosamente, no Tarot de Marselha, nota-se uma assimetria deliberada (o fiel da balança não está perfeitamente no centro), sugerindo que a perfeição estática é inumana e deve ser dinâmica.",
          "A Espada: Símbolo da força distributiva, da lógica e da decisão final. Ela é usada para punir ou para \"cortar\" o que é inútil ou subjetivo na alma.",
          "O Olhar Frontal: A Justiça é uma das poucas figuras que olha diretamente para o observador, funcionando como um espelho da consciência que convida à introspecção honesta.",
          "O Trono e a Coroa: Simbolizam a soberania sobre o mundo material e a autoridade moral; a coroa frequentemente possui um círculo central que sugere um \"terceiro olho\" de inteligência espiritual.",
          "Cores: Suas vestes vermelhas indicam a atividade na matéria, enquanto o azul-celeste e o branco simbolizam a pureza de intenção e a espiritualidade que guiam suas decisões."
        ]
      },
      {
        title: "A Justiça em Leituras",
        content: [
          "Positivo (Em pé): Indica um desfecho justo em uma situação, sucesso em batalhas legais se o consultente estiver correto e a necessidade de ser honesto consigo mesmo. Sugere ordem, disciplina e estabilidade material ou emocional.",
          "Negativo (Invertido): Pode sinalizar injustiça, desequilíbrio, falta de responsabilidade, ou alguém que está tentando evitar as consequências de seus atos. Também pode representar um perfeccionismo rígido e paralisante ou complicações burocráticas e processos legais desfavoráveis."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na numerologia do Tarot, o 8 representa a perfeição do plano espiritual (o dobro da estabilidade material do 4). Na \"Jornada do Louco\", este é o momento em que o buscador deve assumir a responsabilidade total por sua vida e aprender a ver a realidade sem as máscaras do ego.",
          "Ela ensina que a verdadeira liberdade não é o caos, mas a obediência lúcida às leis da natureza e do espírito, servindo como preparação para a crise de sabedoria que virá com o Eremita (VIIII)."
        ]
      }
    ]
  },
  {
    slug: "o-enforcado",
    number: "XII",
    name: "O Enforcado",
    type: "maior",
    keywords: ["Pausa", "Rendição", "Nova perspectiva"],
    upright: "Entrega, sacrifício consciente, mudança de visão.",
    reversed: "Estagnação, resistência, sacrifícios em vão.",
    description:
      "O Enforcado vê o mundo de cabeça para baixo. Ensina que a rendição e a pausa podem revelar novas perspectivas.",
    image: "/images/arcanos_maiores/12.jpg",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Enforcado\" (ou O Dependurado, Número XII) representa a parada, a meditação profunda e a doação de si mesmo.",
          "Na jornada do Tarot, ele corresponde ao estado de acumulação e gestação no mundo do inconsciente, simbolizando um momento de suspensão em que o indivíduo escolhe não escolher para permitir que um novo ser nasça dentro de si."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Surrender e Perspectiva: É a carta da rendição ao fluxo da vida, convidando a olhar para os obstáculos ou experiências sob um novo ângulo ou ponto de vista.",
          "Pausa e Gestação: Indica um estado de espera fértil, como um feto no útero, onde nada se faz externamente enquanto uma transformação profunda ocorre internamente.",
          "Sacrifício e Desapego: Refere-se à renúncia das ambições do ego e ao sacrifício dos laços com o passado para atingir a sabedoria.",
          "Palavras-chave: Sacrifício, Parada, Meditação, Gestação, Entrega, Profundidade, Suspensão e Repouso."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Posição Invertida: O personagem está de cabeça para baixo, o que sugere uma inversão do olhar e das prioridades; o intelecto é colocado abaixo para que o espírito se torne receptivo à sabedoria profunda.",
          "As Mãos Escondidas: Cruzadas atrás das costas, simbolizam a não ação e a incapacidade de escolher, indicando que não é o momento de intervir no mundo material.",
          "As Duas Árvores: O personagem está suspenso entre duas árvores com doze galhos cortados, que representam os laços sacrificados com o passado (ou os 12 signos do zodíaco/12 apóstolos) para que a alma se liberte.",
          "O Halo (Auréola): A luz ao redor da cabeça do personagem representa a iluminação espiritual, indicando que a sua \"queda\" é, na verdade, uma ascensão na consciência.",
          "A Perna Dobrada: Forma uma cruz ou um ângulo reto sobre a perna esticada, simbolizando a estabilização do espírito sobre a matéria ou a realização da Grande Obra alquímica."
        ]
      },
      {
        title: "O Enforcado em Leituras",
        content: [
          "Positivo (Em pé): Sugere uma pausa necessária para reflexão, cura interior ou um período de estudo e aprofundamento espiritual. Indica que o consulente deve confiar no destino e deixar as coisas seguirem seu curso natural sem forçar decisões.",
          "Negativo (Invertido): Pode sinalizar estagnação, resistência à mudança, ou a sensação de estar preso em um relacionamento ou carreira que não leva a lugar nenhum. Também pode representar procrastinação, sacrifício inútil sem retorno ou a recusa em ver uma situação sob outra perspectiva."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, o Enforcado representa o momento em que o buscador aprende a sacrificar o ego à Essência. Ele é o reflexo invertido do arcano O Mundo (XXI): enquanto a mulher nua dança em plena realização, o Enforcado está imóvel em plena meditação; ambos representam o contato profundo consigo mesmo.",
          "Espiritualmente, ele ensina que a verdadeira liberdade nasce da obediência à lei cósmica e que o silêncio e a não ação são passos fundamentais para o renascimento que virá no arcano seguinte, a Morte (XIII)."
        ]
      }
    ]
  },
  {
    slug: "a-morte",
    number: "XIII",
    name: "A Morte",
    type: "maior",
    keywords: ["Transformação", "Fim", "Renascimento"],
    upright: "Encerramento de ciclos, transformação profunda, recomeço.",
    reversed: "Resistência ao fim, medo de mudar, apego.",
    description:
      "A Morte raramente é literal: ela anuncia transformação. Representa o fim de um ciclo para que algo novo possa nascer.",
    image: "/images/arcanos_maiores/13.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Morte\" (ou O Arcano sem nome, Número XIII) representa a transformação profunda, a limpeza necessária e o fim de um ciclo que permite o nascimento do novo.",
          "No Tarot de Marselha, esta carta não possui nome na legenda inferior para evitar o medo irracional, sendo focada na ideia de mutação e renovação em vez do fim absoluto."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Fim e Novo Começo: É a carta do \"fora com o velho e dentro com o novo\", indicando que uma fase importante da vida está chegando ao fim e que é impossível escapar dessa mudança.",
          "Transformação e Revolução: Simboliza uma mudança radical de estado, uma revolução que ocorre nas profundezas do ser para eliminar o que não serve mais.",
          "Purificação e Eliminação: Atua como um processo de \"ceifa\" do ego e de ideias obsoletas, limpando o terreno para que a vida possa florescer novamente.",
          "Palavras-chave: Transformação, Mutação, Eliminação, Novo Início, Desapego, Transmutação, Revolução e Renascimento."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Esqueleto: A Morte é representada por um esqueleto vivo montado em um cavalo. O esqueleto é o que resta quando tudo o que é supérfluo (a carne, o ego, as aparências) é desintegrado. Ele simboliza a fundação indestrutível da vida e a verdade nua e crua.",
          "A Armadura Negra: Diferente do guerreiro do Carro ou do Imperador, sua armadura é preta e opaca. O preto aqui simboliza a ausência de luz que precede a criação, o mistério do invisível e a natureza implacável dessa transição. A armadura mostra que essa força é blindada contra qualquer apelo ou suborno humano.",
          "O Cavalo Branco: O cavalo não é assustador; é um animal imponente e puramente branco. O branco é a cor da pureza e da iluminação. Isso indica que a Morte atua como uma força purificadora, removendo o que está estagnado para restaurar a inocência original da alma (lembrando o cão branco do Louco e a rosa da Imperatriz).",
          "A Rosa Branca de 5 Pétalas: Na mão esquerda, o cavaleiro carrega uma bandeira preta ostentando uma rosa branca heráldica (associada à rosa dos York e à tradição Rosacruz). Suas cinco pétalas simbolizam os cinco sentidos e a imortalidade da alma através da mudança. Ela é o símbolo vivo da vida que brota da própria destruição.",
          "O Rei Morto: Caído no chão, com sua coroa de ouro jogada na lama. Isso demonstra que o poder temporal, a riqueza e o status são inúteis diante da transformação. Ninguém, por mais poderoso que seja, pode impedir o avanço do tempo.",
          "O Sacerdote: Vestido com trajes dourados, ele permanece de pé, de mãos postas, enfrentando o cavaleiro diretamente. Ele representa a fé, a religião estruturada e o conhecimento espiritual. Ele aceita o destino com reverência e submissão consciente, sabendo que a morte faz parte do plano divino.",
          "A Jovem Mulher: Ela vira o rosto e se ajoelha na lama, em um misto de tristeza e negação. Representa a beleza, a juventude e o desejo humano de se apegar ao que é passageiro, sofrendo pela resistência em aceitar o fim das coisas.",
          "A Criança: Pequena e inocente, ela se ajoelha de frente para o cavaleiro, entregando-lhe flores. A criança não tem preconceitos, medo do futuro ou apego ao passado. Ela encara a Morte com curiosidade e aceitação pura, simbolizando a mente livre que compreende intuitivamente que o fim é apenas o começo de uma nova brincadeira.",
          "O Barco no Rio: À esquerda, no rio que corre ao fundo (o rio da vida e da memória), há um pequeno barco navegando. Isso alude ao mito de Caronte e à travessia das almas, reforçando que a vida continua fluindo e se movimentando mesmo durante as transições mais sombrias.",
          "As Duas Torres e o Sol Nascente: No canto superior direito, o sol amarelo brilhante está nascendo (ou se pondo) entre duas grandes torres de pedra (as mesmas torres que reaparecerão mais tarde na carta da Lua e da Morte). Esse sol representa a imortalidade, a iluminação espiritual e a promessa do amanhecer. Ele deixa claro que, além do portal escuro das torres da transformação, a luz da nova vida já está garantida."
        ]
      },
      {
        title: "A Morte em Leituras",
        content: [
          "Positivo (Em pé): Indica uma libertação saudável, o fim de um sofrimento e o início de um capítulo mais elevado. Sugere que o consultente deve ser corajoso para deixar o passado para trás. Muito raramente refere-se à morte física, focando-se quase sempre em mudanças psicológicas ou de situação.",
          "Negativo (Invertido): Sinaliza resistência à mudança, estagnação ou o ato de se segurar a algo que não serve mais por medo do desconhecido. Pode representar angústia, pessimismo, cólera interiorizada ou um luto mal resolvido."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, a Morte segue o arcano O Enforcado (XII); enquanto o Enforcado representa a gestação imóvel e a meditação, a Morte é o momento em que a casca se rompe para que o ser possa emergir.",
          "Ela é a \"porta da vida\" na jornada mística, sendo essencial para que o buscador perdoe o passado e alquimize seu ser, preparando o caminho para a cura e a harmonia que serão trazidas pelo arcano seguinte, A Temperança (XIIII)."
        ]
      }
    ]
  },
  {
    slug: "a-temperanca",
    number: "XIV",
    name: "A Temperança",
    type: "maior",
    keywords: ["Equilíbrio", "Moderação", "Cura"],
    upright: "Harmonia, paciência, síntese e moderação.",
    reversed: "Excessos, desequilíbrio, impaciência.",
    description:
      "A Temperança mistura opostos com paciência alquímica. Ensina a arte do equilíbrio e da moderação para alcançar a cura.",
    image: "/images/arcanos_maiores/14.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Temperança\" (Número XIIII ou 14) representa a cura, a proteção espiritual e a circulação harmoniosa das energias.",
          "Após a limpeza radical realizada pelo Arcano XIII (A Morte), a Temperança surge para restabelecer o fluxo vital, trazendo paz, serenidade e o equilíbrio necessário entre os opostos."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Harmonia e Equilíbrio: Simboliza o domínio dos desejos e a moderação, convidando ao \"caminho do meio\" e à temperança das paixões.",
          "Proteção e Guia: Frequentemente associada à figura do anjo da guarda, representa uma benevolência universal que vigia e protege o indivíduo de perigos e erros fatais.",
          "Alquimia Interior: É considerada o símbolo da Grande Obra alquímica, representando a entrada do espírito na matéria e a transfusão de fluidos vitais.",
          "Palavras-chave: Cura, Moderação, Harmonia, Proteção, Fluxo, Paciência, Equanimidade e Benevolência."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Anjo Andrógino: A figura central é um anjo, tradicionalmente associado ao Arcanjo Miguel ou a um guia solar. Ele possui feições andróginas (nem puramente masculinas, nem femininas), o que simboliza a união perfeita de todas as polaridades (razão e intuição, ação e receptividade).",
          "As Grandes Asas Vermelhas: As asas vermelhas representam o fogo espiritual, a paixão divina elevada e a imensa força vital que sustenta o processo de cura.",
          "O Fluxo Impossível: O anjo segura duas taças douradas e transfere água de uma para a outra. O detalhe mágico é que o líquido flui em um ângulo quase diagonal, desafiando a gravidade. Isso simboliza a alquimia mística, o ato de combinar elementos opostos para criar uma substância nova e equilibrada (o caminho do meio). Representa também o fluxo constante do subconsciente sendo refinado pela consciência.",
          "Um Pé na Água, Um Pé na Terra: O anjo mantém o pé esquerdo imerso na água azul e o pé direito apoiado na terra firme. A água representa as emoções, a intuição e o inconsciente, já a terra representa a matéria, a realidade física e o consciente. Essa postura única mostra que o ser iluminado sabe navegar no mundo dos sentimentos sem se afogar, mantendo-se devidamente aterrado na realidade prática. É a perfeita definição de inteligência emocional.",
          "O Símbolo nas Vestes: No peito de sua túnica branca, há um triângulo laranja inscrito dentro de um quadrado branco. O quadrado representa a Terra, as leis materiais e a estrutura do mundo físico. O triângulo representa o divino, o espírito e a trindade sagrada. Esse símbolo indica que o espírito divino (triângulo) está encarnado e operando de forma equilibrada dentro das limitações da matéria (quadrado).",
          "O Sol Metamórfico: No final do caminho, acima das montanhas, brilha um sol nascente em forma de coroa dourada. Essa coroa simboliza o objetivo final da jornada alquímica: a iluminação espiritual, a conquista da Grande Obra e o despertar da consciência superior."
        ]
      },
      {
        title: "A Temperança em Leituras",
        content: [
          "Positivo (Em pé): Indica um período de recuperação física ou emocional, reconciliação e bons presságios para associações. Sugere que o consultante deve ser paciente, ter uma visão de longo prazo e agir com diplomacia e abertura mental.",
          "Negativo (Invertido): Sinaliza desequilíbrio, impulsividade e falta de propósito. Pode representar uma resistência à mudança, excessos, instabilidade ou a sensação de que as coisas não estão destinadas a se unir no momento."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Herói\", a Temperança marca o equilíbrio entre a mente e o coração no segundo septenário (o plano da alma). Numerologicamente, como o grau 4 da segunda série decimal, ela espelha a estabilidade do Imperador (IIII), mas transpondo-a para o plano espiritual e psíquico.",
          "Ela ensina que a verdadeira liberdade nasce da sintonia com o Divino e da capacidade de manobrar as forças da natureza com graciosidade. É o estágio de purificação final antes de enfrentar as profundezas do inconsciente representadas pelo Diabo (XV)."
        ]
      }
    ]
  },
  {
    slug: "o-diabo",
    number: "XV",
    name: "O Diabo",
    type: "maior",
    keywords: ["Apego", "Tentação", "Sombra"],
    upright: "Vícios, materialismo, prisões autoimpostas.",
    reversed: "Libertação, consciência, quebra de correntes.",
    description:
      "O Diabo revela as correntes que nós mesmos criamos. Convida a olhar para a sombra, os apegos e os desejos que aprisionam.",
    image: "/images/arcanos_maiores/15.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Diabo\" (Número XV) representa as forças do inconsciente, a paixão e a energia criativa bruta.",
          "Na jornada do Tarot, ele funciona como uma ponte para as profundezas do ser, confrontando o buscador com suas sombras, desejos materiais e vínculos que podem tanto escravizar quanto servir de combustível para a iluminação."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Tentação e Materialismo: Representa a sedução pelas coisas do mundo material e o desejo de satisfazer as paixões a qualquer preço.",
          "Criatividade e Poder: É uma carta de imensa potência criativa e talento, sendo frequentemente associada ao riso e ao poder bruto que pode ser canalizado.",
          "Apego e Prisão: Simboliza correntes mentais ou emocionais, comportamentos aditivos (vícios) e a incapacidade de se libertar de situações ou relacionamentos tóxicos.",
          "Exploração da Sombra: Convida a olhar para o que está escondido no inconsciente e a reconhecer a própria natureza animal sem preconceitos.",
          "Palavras-chave: Tentação, Desejo, Criatividade, Obsessão, Dinheiro, Inconsciente, Apego e Poder Bruto."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Figura Andrógina: O personagem principal mistura traços humanos e animais (como asas de morcego e chifres), representando as potências primitivas e a libido universal que reside no sistema nervoso humano.",
          "A Tocha: Segura na mão esquerda, indica o desejo de levar a luz da consciência para as trevas da matéria ou do inconsciente.",
          "Os Personagens Acorrentados: Um homem e uma mulher (ou dois diabretes) estão presos a um pedestal, o que simboliza a escravidão ao instinto ou uma co-dependência onde as mãos estão escondidas nas costas, indicando falta de ação livre.",
          "O Segredo das Correntes: Este é o detalhe mais importante da carta: as correntes em volta dos pescoços deles são visivelmente largas e folgadas. Eles poderiam facilmente passar as mãos pela cabeça e se libertar a qualquer momento. No entanto, eles permanecem ali, estáticos. Isso simboliza que o aprisionamento é voluntário e psicológico. O Diabo não os segura pela força; eles estão presos pelo próprio conforto, medo ou negação.",
          "O Bloco Retangular: O Diabo senta-se em um meio-cubo preto de pedra. Enquanto o carro cúbico e o trono do Imperador representavam a estabilidade estrutural saudável, este bloco estreito representa uma fundação incompleta, cega e sufocante. O fundo inteiramente preto reforça o estado de ignorância espiritual e a falta de visão além da matéria.",
          "O Pentagrama Invertido: Às vezes presente na testa, simboliza a inteligência voltada para a matéria ou para forças destrutivas quando mal canalizada."
        ]
      },
      {
        title: "O Diabo em Leituras",
        content: [
          "Positivo (Em pé): Pode sinalizar uma grande entrada de dinheiro, sucesso em negócios, contratos promissores ou uma criatividade transbordante que deve ser aproveitada. No âmbito afetivo, indica uma paixão intensa e magnetismo.",
          "Negativo (Desafiador): Alerta para o perigo de obsesão, ganância, relações abusivas ou dependências (drogas, álcool). Pode representar mentiras que escravizam ou a perda de foco por conta de impulsos irracionais.",
          "Perspectiva Invertida: Muitas vezes é vista como uma carta melhor em leituras modernas, significando a realização de que algo é tóxico, a quebra de correntes, a libertação de crenças limitantes e o início de um trabalho profundo com a própria sombra."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, o Diabo inicia o terceiro septenário, voltado para o supraconsciente e o espírito. Ele é o inverso espiritual do Hierofante (V): enquanto o Papa guia para o ideal celeste, o Diabo exige uma descida ao abismo interno para encontrar o \"diamante no lótus\" oculto na matéria.",
          "Ele ensina que o iniciado não deve destruir seus instintos, mas dominá-los e sublimá-los. Esta prova de fogo e escuridão é necessária para que a consciência se purifique antes da explosão de liberdade e abertura representada pelo arcano seguinte, A Torre (XVI)."
        ]
      }
    ]
  },
  {
    slug: "a-torre",
    number: "XVI",
    name: "A Torre",
    type: "maior",
    keywords: ["Ruptura", "Revelação", "Caos"],
    upright: "Mudança súbita, colapso de estruturas falsas, despertar.",
    reversed: "Medo da mudança, desastre evitado, resistência.",
    description:
      "A Torre desmorona o que foi construído em bases falsas. Embora abrupta, sua queda abre espaço para uma verdade mais sólida.",
    image: "/images/arcanos_maiores/16.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Torre\" (Número XVI, também conhecido em francês como La Maison Dieu) representa a abertura, a emergência do que estava confinado e a libertação de estruturas obsoletas.",
          "Na jornada do Tarot, ela sinaliza um momento de grande alívio espiritual e a quebra de barreiras que impediam o fluxo da vida e da consciência."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Libertação e Abertura: É a carta do transbordamento e da saída para o exterior. Simboliza a quebra de cascas mentais ou emocionais que mantinham o ser prisioneiro.",
          "Mudança Súbita: Representa uma mutação inesperada, um choque ou uma \"estocada do destino\" que, embora possa parecer brutal, abre o único caminho possível para o desenvolvimento espiritual.",
          "Alegria e Celebração: Diferente de interpretações catastróficas, é vista como uma carta de festa, dança e celebração da vida.",
          "Palavras-chave: Abertura, Templo, Alegria, Emergência, Libertação, Mutação, Ruptura e Celebração."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Torre (O Corpo): A torre é feita de tijolos cinzentos e sólidos, construída no topo de uma montanha rochosa e íngreme. Ela representa as estruturas mentais rígidas, os dogmas, as falsas seguranças e as defesas psicológicas que erguemos para nos isolar do fluxo da vida.",
          "O Fogo e a Escuridão: Labaredas de fogo saem das janelas, mostrando que a destruição consome a estrutura de dentro para fora. O fundo completamente preto (o mesmo do Diabo) reforça que essa crise acontece em um momento de profunda escuridão espiritual, funcionando como um despertar forçado.",
          "O Raio: Um relâmpago massivo corta o céu escuro e atinge o topo da torre. Esse raio simboliza a intervenção divina súbita, um lampejo de verdade ou um insight espiritual violento que destrói a ignorância. Ele vem de fora e de cima, escapando totalmente ao controle humano.",
          "A Queda da Coroa: O impacto do raio arranca uma grande coroa dourada que servia de teto para a torre. A coroa representa o ego humano, a arrogância, o orgulho e a falsa crença de que estamos acima das leis naturais ou divinas (relembrando a coroa do Rei que caiu na lama na carta da Morte). Simboliza também a queda do poder temporal e intelectual que se julgava absoluto.",
          "Os Personagens: Duas pessoas (um homem e uma mulher, novamente ecoando o casal de Os Amantes e O Diabo) são ejetadas e caem de cabeça para baixo em direção ao abismo. Cair de cabeça para baixo simboliza uma mudança radical e dolorosa de perspectiva. Tudo o que eles conheciam e o chão onde pisavam desapareceu. A queda representa o colapso do status, do conforto ilusório e o choque de realidade que acompanha as grandes perdas materiais ou quebras de expectativa.",
          "As Gotas Douradas: Flutuando no ar, ao lado da torre, há 22 faíscas ou gotas douradas que parecem folhas. Na tradição esotérica, elas têm o formato da letra hebraica Yod, que é a primeira letra do nome de Deus (Tetragrammaton) e representa a centelha divina de criação. Há exatamente 22 dessas gotas na imagem, o que corresponde perfeitamente ao número total de Arcanos Maiores do Tarot e às 22 trilhas da Árvore da Vida cabalística. Isso envia uma mensagem oculta crucial: mesmo no caos e na destruição aparente, a graça divina e a luz espiritual estão presentes. A destruição não é um castigo cruel, mas um ato de misericórdia para libertar a alma de sua própria prisão."
        ]
      },
      {
        title: "A Torre em Leituras",
        content: [
          "Positivo (Em pé): Indica uma separação saudável, o fim de um confinamento, um segredo revelado ou uma grande expressão de criatividade. Pode sinalizar um sucesso súbito ou um \"golpe fulminante\" de sorte. Curiosamente, pode também ser indicação de uma energia sexual explosiva e gratificante.",
          "Negativo (Desafiador/Invertido): Pode representar o medo da mudança, a resistência a uma transformação necessária ou uma catástrofe resultante do orgulho excessivo. Também pode sinalizar uma expulsão brutal, um divórcio doloroso ou um \"parto difícil\" emocional."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, A Torre inicia o processo de cura e renovação após a descida às profundezas representada pelo Diabo (XV).",
          "Ela marca o momento em que o iniciado compreende que Deus não está no \"além\", mas na própria matéria e no corpo. Espiritualmente, representa a abertura do chacra coronário e a passagem da prova iniciática, preparando o ser para canalizar a luz cósmica que será plenamente manifestada no arcano seguinte, A Estrela (XVII)."
        ]
      }
    ]
  },
  {
    slug: "a-estrela",
    number: "XVII",
    name: "A Estrela",
    type: "maior",
    keywords: ["Esperança", "Inspiração", "Serenidade"],
    upright: "Fé renovada, cura, otimismo e propósito.",
    reversed: "Desânimo, falta de fé, desconexão.",
    description:
      "A Estrela brilha após a tempestade, trazendo esperança e inspiração. Representa a renovação da fé e a calma após o caos.",
    image: "/images/arcanos_maiores/17.jpg",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Estrela\" (Número XVII) representa a esperança, a generosidade e o momento em que o ser humano, após as provações anteriores, encontra sua verdade interior e seu lugar no mundo.",
          "É a primeira carta do Tarot a apresentar um ser humano nu e despojado de máscaras, simbolizando a pureza, a vulnerabilidade e a conexão direta com as forças cósmicas."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Esperança e Sorte: É considerada uma carta de proteção espiritual e de \"boa estrela\", indicando que o consultante está no caminho certo e que a paz está entrando em sua vida.",
          "Autenticidade e Verdade: Representa o ato de não mais se esconder, expondo-se ao mundo em sua essência mais profunda e honesta.",
          "Dádiva e Abundância: Simboliza a ação de nutrir e embelezar o entorno, doando sem nada exigir em troca, em um fluxo perpétuo de purificação.",
          "Palavras-chave: Esperança, fé, cura, inspiração, generosidade, destino, natureza e renovação."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Sereia de Duas Caudas: Em vez de estar com os pés na terra e na água, a figura central emerge inteiramente do mar. A sereia representa uma imersão total nas águas profundas do inconsciente coletivo, das emoções puras e do mistério psíquico. Segurar as duas caudas abertas simboliza o domínio sobre as polaridades da matéria e do espírito. Ela está em perfeito equilíbrio com sua natureza animal/instintiva e sua consciência espiritual.",
          "O Leite e o Sangue: De seus seios, a sereia jorra dois líquidos diretamente no oceano: um fluxo vermelho (à esquerda) e um fluxo branco (à direita). Isso faz alusão direta à alquimia mística: o fluxo vermelho representa o princípio ativo, solar, masculino (o enxofre alquímico ou a força vital); o fluxo branco representa o princípio receptivo, lunar, feminino (o mercúrio alquímico ou a pureza espiritual). Ao jorrar ambos no mar, ela está fertilizando e renovando a matriz da vida.",
          "O Olho de Hórus: No topo, há uma estrela central de oito pontas, mas com um formato alongado e radiante. No centro dela, há um losango vermelho contendo o Olho que Tudo Vê (ou o Olho de Hórus). Isso simboliza a onisciência divina, o despertar do terceiro olho e a percepção da verdade nua e crua após a queda da Torre. É a mente divina iluminando a noite da alma.",
          "As Estrelas Periféricas: Ao redor da estrela central, encontram-se 6 estrelas menores (completando o número tradicional de 7 estrelas no céu da carta, excluindo o Sol e a Lua literais que foram inseridos nas laterais). Cada estrela de seis pontas (Hexagrama) traz um símbolo astrológico clássico da tradição hermética representando os planetas Marte, Mercúrio, Vênus, Saturno e Urano, além do Sol e da Lua.",
          "A Pomba Branca: No canto direito, uma pomba branca voa em direção ao centro. Diferente do tradicional pássaro Íbis que repousa na árvore do Rider-Waite-Smith, a pomba é o símbolo universal da paz, do Espírito Santo, da entrega de uma promessa cumprida (como a pomba da Arca de Noé que anuncia o fim do dilúvio) e da descida da graça divina sobre a Terra."
        ]
      },
      {
        title: "A Estrela em Leituras",
        content: [
          "Positivo (Em pé): Indica um período de cura e renovação, onde a pessoa se sente alinhada com seu propósito de vida. Sugere inspiração para artistas, boa saúde, sucesso em empreendimentos e a realização de um desejo profundo.",
          "Negativo (Invertido): Pode sinalizar uma perda de fé, pessimismo ou o sentimento de estar sobrecarregado pela situação. Pode representar também a dispersão de energia, o desperdício de talentos ou uma exigência afetiva constante que nunca é satisfeita."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, A Estrela inicia o terceiro septenário, voltado para o supraconsciente e o espírito. Após a quebra de estruturas obsoletas na Torre (XVI), o buscador finalmente encontra o seu \"local sagrado\", onde pode atuar no mundo em harmonia com os ritmos cósmicos.",
          "Ela representa a consciência crística ativa, funcionando como uma guia espiritual interna que nos permite transformar qualquer lugar em um templo através do serviço e da entrega ao Divino."
        ]
      }
    ]
  },
  {
    slug: "a-lua",
    number: "XVIII",
    name: "A Lua",
    type: "maior",
    keywords: ["Ilusão", "Intuição", "Inconsciente"],
    upright: "Sonhos, medos ocultos, intuição e mistério.",
    reversed: "Clareza, superação de medos, verdade revelada.",
    description:
      "A Lua ilumina o reino do inconsciente, das ilusões e dos sonhos. Convida a confiar na intuição em meio à incerteza.",
    image: "/images/arcanos_maiores/18.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"A Lua\" (Número XVIII) representa a potência feminina receptiva, o mundo dos sonhos, do inconsciente e do imaginário.",
          "Situada em pleno coração da noite, ela simboliza o mistério da alma e os processos secretos de gestação que ocorrem na escuridão, funcionando como um espelho que reflete a luz do Sol."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Intuição e Mistério: É a carta da sensibilidade profunda, da clarividência e do conhecimento que não é racional, mas discursivo e intuitivo.",
          "Inconsciente e Ilusão: Remete ao reino das sombras, onde a imaginação pode correr solta, criando tanto poesias maravilhosas quanto pesadelos e confusões mentais.",
          "Mãe Cósmica: Representa o arquétipo materno por excelência, ligada aos ritmos biológicos, às marés e aos ciclos femininos.",
          "Palavras-chave: Noite, intuição, receptividade, mistério, gestação, sonho, imaginação, magnetismo e incerteza."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Rosto de Perfil: Ao contrário do Sol, a Lua não nos olha de frente; seu rosto de perfil sugere que uma parte dela permanece invisível, representando o que está oculto.",
          "O Crustáceo (Lagosta): Situado nas águas matriciais, representa o ego ou o \"eu\" que aspira à união com o astro; ele segura duas esferas nas pinças como oferendas das profundezas.",
          "Os Dois Cães (ou Lobo e Cão): Simbolizam a fraternidade e a dualidade entre o eu domesticado/civilizado e o eu selvagem/instintivo, ambos uivando e nutrindo-se das gotas coloridas lançadas pelo astro.",
          "As Duas Torres: Representam polaridades da energia ou os limites do conhecimento; uma é aberta (receptiva) e a outra fechada como \"dentes cerrados\".",
          "As Gotas e Raios: As gotas que sobem em direção à Lua indicam uma troca energética entre a Terra e o cosmos; os raios vermelhos e azuis simbolizam vitalidade oculta e espiritualidade."
        ]
      },
      {
        title: "A Lua em Leituras",
        content: [
          "Positivo (Em pé): Indica um período fértil para a divinação, poesia e meditação. Sugere uma conexão profunda com o feminino e a mãe, além de ser um presságio de viagens por mar ou o encontro com verdades ocultas. No trabalho, pode representar uma fase de inspiração artística.",
          "Negativo (Invertido/Desafiador): Pode sinalizar confusão, paranoia, depressão ou estar preso em fantasias irreais. Pode indicar também mentiras, chantagens, instabilidade emocional ou um \"vampirismo\" de energia."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, A Lua pertence ao terceiro septenário, o plano do espírito e do supraconsciente. Ela marca a \"noite escura da alma\", onde o herói deve atravessar o caminho perigoso da imaginação antes de atingir a objetividade solar.",
          "Numericamente, o 18 simboliza a perfeição da intuição e da arte. Astrologicamente, as fontes associam este arcano ao signo de Peixes. Ela ensina que para ser é preciso mergulhar no nada e tornar-se um receptáculo vazio capaz de refletir a totalidade da luz."
        ]
      }
    ]
  },
  {
    slug: "o-sol",
    number: "XIX",
    name: "O Sol",
    type: "maior",
    keywords: ["Alegria", "Sucesso", "Vitalidade"],
    upright: "Felicidade, clareza, êxito e energia positiva.",
    reversed: "Otimismo turvo, atrasos, brilho temporário ofuscado.",
    description:
      "O Sol irradia alegria, sucesso e vitalidade. É a carta da clareza, da verdade e da celebração da vida.",
    image: "/images/arcanos_maiores/19.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Sol\" (Número XVIIII ou XIX) representa o arquétipo paterno universal, a clareza mental e a alegria de viver.",
          "Após atravessar o caminho perigoso da imaginação e da noite na Lua (XVIII), o Sol surge no zênite para iluminar a realidade, eliminando as sombras e trazendo o sucesso, a união e a verdade."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Sucesso e Felicidade: É considerada uma das cartas mais positivas do Tarot, indicando que os \"dias sombrios acabaram\" e que a iluminação foi alcançada.",
          "União e Fraternidade: Simboliza relacionamentos sinceros, a amizade profunda, o amor humano em estado puro e a ajuda mútua.",
          "Nova Construção: Refere-se ao início de algo sólido e claro, como um casamento feliz, a obtenção de um sucesso profissional ou uma realização artística.",
          "Palavras-chave: Calor, Amor, Vitalidade, Sucesso, Verdade, Nova Vida, Inteligência, Realização e Felicidade."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Astro Radiante: O Sol olha diretamente para o observador (como a Justiça e o Julgamento), sinalizando que ele revela a verdade sem disfarces. Seus raios representam a irradiação da energia vital e da consciência espiritual.",
          "Os Gêmeos (ou a Criança): No Tarot de Marselha, dois personagens se ajudam a atravessar um rio, simbolizando a parte consciente do ser guiando a parte animal/primitiva em direção à alegria. Na versão de Waite, uma criança nua sobre um cavalo branco representa a inocência, a pureza e a força vitoriosa do espírito.",
          "O Muro de Tijolos: Marca o limite do domínio humano e funciona como uma proteção contra as amarras do passado, permitindo a construção de um \"mundo novo\".",
          "O Estandarte Vermelho: A criança segura com a mão esquerda um enorme estandarte ou bandeira de tecido vermelho vivo que flui dinamicamente ao seu redor. O vermelho é a cor da ação, do sangue, da paixão pela vida e da energia solar manifestada. O estandarte simboliza a vitória, o triunfo público e a renovação da força vital que agora corre livre e desimpedida pelo ser..",
          "Girassóis: Sinais de crescimento, nutrição e o alimento da imortalidade que cresce em direção à luz."
        ]
      },
      {
        title: "O Sol em Leituras",
        content: [
          "Positivo (Em pé): Indica um período de grande vigor físico, saúde e prosperidade. É uma promessa de que tudo vai melhorar, trazendo clareza para resolver problemas e a assinatura de bons contratos.",
          "Negativo (Invertido/Desafiador): Nas fontes modernas, mesmo invertido não é um arcano totalmente negativo, mas sinaliza uma luta para ver o lado bom das coisas ou uma alegria ofuscada. Pode representar também vaidade, arrogância, isolamento ou uma \"seca\" emocional causada pelo excesso de racionalismo."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, O Sol pertence ao terceiro septenário, o plano do espírito e do supraconsciente. Ele representa a vitória da consciência sobre a ilusão, funcionando como a luz do conhecimento que aquece a alma.",
          "Na jornada do herói, é o momento em que se entra no \"jardim primordial como uma criança\", purificado e pronto para o despertar final que ocorrerá no arcano seguinte, O Julgamento (XX), antes da realização total no Mundo (XXI)."
        ]
      }
    ]
  },
  {
    slug: "o-julgamento",
    number: "XX",
    name: "O Julgamento",
    type: "maior",
    keywords: ["Despertar", "Renovação", "Chamado"],
    upright: "Renascimento, avaliação, chamado para um propósito maior.",
    reversed: "Autocrítica severa, dúvida, recusa ao chamado.",
    description:
      "O Julgamento anuncia um despertar e um chamado para algo maior. Representa o momento de avaliar o passado e renascer.",
    image: "/images/arcanos_maiores/20.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Julgamento\" (Número XX) representa o renascimento, a emergência de uma nova consciência e o chamado irresistível para uma vida superior.",
          "Situado entre o Sol (XVIIII) e o Mundo (XXI), ele simboliza o momento culminante em que o ser humano, após as provações da jornada, desperta para sua verdadeira vocação e integra seu passado para avançar rumo à realização total."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Despertar e Vocação: É a carta do \"chamado\", indicando uma súbita clareza sobre o propósito de vida e o despertar espiritual.",
          "Renascimento: Simboliza a ressurreição de algo que estava adormecido ou esquecido, permitindo que o indivíduo deixe para trás seu \"velho eu\" (o caixão/tumba) para se tornar seu Eu Superior.",
          "Avaliação e Acerto de Contas: Refere-se a um processo profundo de autoanálise, perdão e retificação de erros passados.",
          "Palavras-chave: Vocação, Renascimento, Consciência, Chamado, Redenção, Transcendência, Transmutação e Julgamento Final."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "O Anjo nas Nuvens: Emergindo dos céus cercado por nuvens cinzentas, o Arcanjo Gabriel personifica o chamado da consciência superior ou a voz do divino. Ele não está ali para castigar, mas para despertar.",
          "As Asas Vermelhas: Assim como na Temperança, as asas vermelhas simbolizam o fogo do espírito, a energia vital e a paixão divina que impulsionam a transformação.",
          "A Trombeta de Ouro com Sete Raios: Da boca da trombeta saem linhas retas que representam os raios de som e vibração cósmica. O som da trombeta é a verdade que ecoa e quebra o transe da ignorância material.",
          "A Bandeira com a Cruz Vermelha: Presa à trombeta, há uma bandeira branca com uma cruz vermelha simétrica (a Cruz de São Jorge). Este é um símbolo esotérico universal de equilíbrio e união de opostos (horizontal e vertical, matéria e espírito). Representa também o ponto de encontro onde a dualidade é superada.",
          "Os Caixões de Pedra Cinza: Os caixões abertos não representam a morte física literal, mas sim as antigas prisões mentais, os velhos hábitos, o passado kármico e o estado de morte em vida (viver no piloto automático). Emergir deles significa que a alma finalmente se libertou do que a mantinha estagnada.",
          "A Nudez: Assim como no Sol e nas Estrelas, as figuras estão completamente nuas. Diante do Julgamento final da própria consciência, não há espaço para máscaras, status social, roupas ou defesas egoicas. É a vulnerabilidade e a verdade essencial do ser.",
          "A Atitude de Reverência: O homem, a mulher e a criança encaram o anjo de braços abertos ou mãos postas. Seus rostos expressam adoração, alívio e aceitação. Eles acolhem o chamado espiritual com prontidão, prontos para a transição definitiva.",
          "O Casal e a Criança: Em primeiro plano, vemos um homem (à esquerda), uma mulher (à direita) e uma criança de costas (no centro). Esta trindade representa os três aspectos da mente humana: o consciente, o subconsciente e o superconsciente (a criança, que unifica ambos).",
          "As Figuras ao Fundo: Mais atrás, há outro grupo de três pessoas na mesma posição, sugerindo que este processo de redescoberta e ressurreição é universal e coletivo, afetando toda a humanidade e todas as dimensões do ser.",
          "O Mar Azul: Os caixões flutuam sobre um oceano calmo e azul. A água aqui representa o grande repositório das emoções humanas e do inconsciente coletivo. O fato de os caixões estarem abertos sobre a água indica que os segredos e traumas guardados no fundo da mente foram trazidos à superfície e purificados.",
          "As Montanhas de Gelo ao Fundo: No horizonte, vemos imensas cordilheiras nevadas e pontiagudas (as mesmas montanhas que o Louco avistava de longe e onde o Eremita buscou isolamento). Aqui, as montanhas representam os limites do pensamento abstrato e os picos da realização intelectual. Elas sugerem que o julgamento e o chamado vêm de um lugar imutável, elevado e eterno."]
      },
      {
        title: "O Julgamento em Leituras",
        content: [
          "Positivo (Em pé): Indica um período de grande clareza, cura de doenças e sucesso em questões jurídicas ou profissionais. Sugere que o consultante está \"subindo de nível\" em sua carreira ou relacionamentos, agindo com mais consciência e honestidade.",
          "Negativo (Invertido/Desafiador): Pode sinalizar resistência à mudança, medo de ouvir o próprio chamado ou uma autocrítica excessivamente dura. Pode representar também a incapacidade de perdoar a si mesmo ou aos outros, ficando preso a erros e oportunidades perdidas do passado."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na estrutura do Tarot, O Julgamento marca o fim do terceiro septenário, focado no supraconsciente. Ele ensina que a verdadeira liberdade nasce da aceitação da ajuda espiritual e da vontade de se transformar em um novo ser.",
          "É o estágio em que o buscador compreende que não é um indivíduo isolado, mas parte de uma obra comum e divina. Este arcano é o prelúdio necessário para a visão total da realidade que será entregue n'O Mundo (XXI)."
        ]
      }
    ]
  },
  {
    slug: "o-mundo",
    number: "XXI",
    name: "O Mundo",
    type: "maior",
    keywords: ["Realização", "Completude", "Integração"],
    upright: "Conclusão, conquista, plenitude e celebração.",
    reversed: "Ciclos inacabados, falta de fechamento, atrasos.",
    description:
      "O Mundo encerra a jornada do Louco com a sensação de completude. Representa a realização plena e a integração de todas as lições.",
    image: "/images/arcanos_maiores/21.png",
    fullDescription: [
      {
        title: "Visão Geral",
        content: [
          "O arcano \"O Mundo\" (Número XXI) representa a realização suprema, o coroamento de todos os esforços e a integração total do ser com o universo.",
          "Ele é o ponto culminante da jornada do Tarot, simbolizando o momento em que o buscador atinge a plenitude, a iluminação e a harmonia perfeita entre o espírito e a matéria."
        ]
      },
      {
        title: "Significados Gerais",
        content: [
          "Conclusão e Sucesso: É a carta do \"final feliz\" e do sucesso absoluto em qualquer empreendimento, indicando que um ciclo importante foi concluído com maestria.",
          "Plenitude e Unidade: Representa um estado de consciência onde nada falta, onde o indivíduo se sente em casa no mundo e em paz consigo mesmo.",
          "Expansão e Viagens: Frequentemente associada a viagens longas, mudanças para outros países ou sucesso em nível internacional.",
          "Palavras-chave: Realização, Plenitude, Sucesso, Totalidade, Integração, Êxtase, Recompensa e Unidade."
        ]
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Mulher Dançante: Uma mulher — frequentemente interpretada na tradição esotérica como um ser andrógino ou a Anima Mundi (a alma do mundo) — dança livremente no centro da carta. Ela flutua, sugerindo que superou o peso e as limitações puramente materiais, movendo-se em sincronia com o ritmo do cosmos.",
          "O Manto Roxo: Um tecido purpúreo envolve suavemente o corpo da mulher. O roxo é a cor da realeza, da espiritualidade elevada e da transmutação, cobrindo o ponto de encontro das polaridades físicas.",
          "A Guirlanda ou Mandorla: A dançarina está cercada por uma grande guirlanda de folhas de louro em formato oval (ou de uma Mandorla). O louro é o símbolo clássico da vitória, do triunfo e da conquista eterna. O formato oval representa o ovo cósmico, o útero da criação e o portal por onde a consciência entra e sai dos ciclos da existência.",
          "Os Laços em Forma de Infinito: No topo e na base da guirlanda, o arranjo é amarrado por fitas vermelhas cruzadas que imitam perfeitamente o símbolo do infinito ou a lemniscata ($\infty$). Isso indica que, embora um ciclo tenha se encerrado (o fim do baralho), a vida opera em uma espiral eterna de evolução contínua.",
          "As Quatro Figuras (Tetramorfo): Nos cantos da carta, aparecem o Anjo, a Águia, o Touro e o Leão, que representam os quatro Evangelistas, os quatro elementos (Água, Ar, Terra, Fogo) e as quatro energias humanas (emocional, intelectual, material e criativa) plenamente realizadas.",
          "As Duas Varinhas: Na mão esquerda e na mão direita, ela segura dois pequenos bastões brancos idênticos. Eles representam as duas polaridades da energia universal (ativo/passivo, masculino/feminino, macrocosmo/microcosmo). Ao contrário do Mago (Arcano I), que tinha apenas um bastão voltado para o céu para canalizar a energia, a figura do Mundo possui maestria sobre as duas forças simultaneamente, equilibrando-as com naturalidade na própria vida.",
          "A Pernas da Dançarina: Suas pernas formam uma cruz (a perna direita cruza por trás da esquerda), uma postura que espelha exatamente (mas de forma invertida e livre) a posição do Enforcado (Arcano XII). Enquanto o Enforcado estava preso de cabeça para baixo em sacrifício e estagnação, a dançarina do Mundo está de pé e flutuando, mostrando que o aprendizado foi integrado e o sacrifício transformou-se em liberdade de movimento."
        ]
      },
      {
        title: "O Mundo em Leituras",
        content: [
          "Positivo (Em pé): Indica que o consultante alcançou seus objetivos e que o reconhecimento público ou a recompensa financeira estão a caminho. Sugere harmonia doméstica, um casamento feliz ou a cura definitiva de uma enfermidade.",
          "Negativo (Invertido/Desafiador): Pode representar um começo difícil ou um sentimento de fracasso por estar \"fechado dentro da casca\". Indica resistência em encerrar um ciclo que já não serve mais ou a incapacidade de desfrutar do sucesso alcançado."
        ]
      },
      {
        title: "A Jornada Espiritual",
        content: [
          "Na \"Jornada do Louco\", o Mundo é o Ômega, o fim infinito que permite o início de um novo ciclo em um nível superior. Ele ensina que a verdadeira liberdade não é apenas o impulso cego do Louco (0), mas a capacidade de se manifestar plenamente dentro das leis da criação.",
          "Espiritualmente, representa a Consciência Cósmica, onde o iniciado compreende que o corpo humano é o verdadeiro templo da divindade e que a vida é uma celebração perpétua."
        ]
      }
    ]
  },
]

const suitRanks: { number: string; name: string }[] = [
  { number: "Ás", name: "Ás" },
  { number: "2", name: "Dois" },
  { number: "3", name: "Três" },
  { number: "4", name: "Quatro" },
  { number: "5", name: "Cinco" },
  { number: "6", name: "Seis" },
  { number: "7", name: "Sete" },
  { number: "8", name: "Oito" },
  { number: "9", name: "Nove" },
  { number: "10", name: "Dez" },
  { number: "Pajem", name: "Pajem" },
  { number: "Cavaleiro", name: "Cavaleiro" },
  { number: "Rainha", name: "Rainha" },
  { number: "Rei", name: "Rei" },
]

const minorMeanings: Record<MinorSuit, { upright: string[]; reversed: string[]; desc: string[]; kw: string[][] }> = {
  paus: {
    kw: [
      ["Inspiração", "Potencial", "Início"],
      ["Planejamento", "Decisão", "Futuro"],
      ["Expansão", "Visão", "Progresso"],
      ["Celebração", "Lar", "Estabilidade"],
      ["Conflito", "Competição", "Tensão"],
      ["Vitória", "Reconhecimento", "Confiança"],
      ["Defesa", "Coragem", "Persistência"],
      ["Rapidez", "Movimento", "Notícias"],
      ["Resiliência", "Cautela", "Limite"],
      ["Sobrecarga", "Responsabilidade", "Esforço"],
      ["Exploração", "Entusiasmo", "Descoberta"],
      ["Ousadia", "Impulso", "Aventura"],
      ["Carisma", "Determinação", "Liderança"],
      ["Visão", "Liderança", "Empreendimento"],
    ],
    upright: [
      "Faísca de inspiração, novo projeto criativo e potencial em ação.",
      "Planejamento do futuro, decisões e o primeiro passo de uma jornada.",
      "Expansão, visão de longo prazo e progresso em andamento.",
      "Celebração, harmonia no lar e marcos felizes.",
      "Conflitos saudáveis, competição e energia dispersa.",
      "Vitória pública, reconhecimento e autoconfiança.",
      "Defender a própria posição com coragem e persistência.",
      "Movimento rápido, notícias e progresso acelerado.",
      "Resiliência diante do cansaço, cautela e defesa.",
      "Carregar peso em excesso, responsabilidades acumuladas.",
      "Entusiasmo de explorar, descobertas e curiosidade.",
      "Ação impulsiva, aventura e energia em movimento.",
      "Carisma, paixão e determinação para liderar.",
      "Liderança visionária, empreendedorismo e domínio criativo.",
    ],
    reversed: [
      "Atrasos criativos, falta de direção e ideias paradas.",
      "Medo do desconhecido, falta de planejamento.",
      "Atrasos, obstáculos e planos frustrados.",
      "Instabilidade no lar, transições difíceis.",
      "Evitar conflitos, tensão reprimida.",
      "Falta de reconhecimento, insegurança.",
      "Sentir-se sobrecarregado, ceder à pressão.",
      "Pressa excessiva, comunicação atrapalhada.",
      "Teimosia, esgotamento, defensividade.",
      "Delegar tarefas, aliviar fardos.",
      "Inquietação, falta de foco, adiar planos.",
      "Imprudência, atrasos e frustração.",
      "Ciúmes, impulsividade, energia mal direcionada.",
      "Autoritarismo, decisões precipitadas.",
    ],
    desc: [
      "O Ás de Paus traz a centelha inicial da inspiração e do desejo de criar.",
      "O Dois de Paus fala de planejamento e da escolha de um caminho a seguir.",
      "O Três de Paus indica expansão e a recompensa de olhar adiante.",
      "O Quatro de Paus celebra estabilidade, festas e harmonia.",
      "O Cinco de Paus mostra competição e desafios que estimulam o crescimento.",
      "O Seis de Paus anuncia vitória, reconhecimento e confiança renovada.",
      "O Sete de Paus pede que se defenda aquilo que se conquistou.",
      "O Oito de Paus traz velocidade, notícias e eventos em rápido movimento.",
      "O Nove de Paus mostra resiliência mesmo diante do cansaço.",
      "O Dez de Paus revela o peso das responsabilidades assumidas.",
      "O Pajem de Paus é o mensageiro entusiasmado de novas ideias.",
      "O Cavaleiro de Paus avança com ousadia, paixão e impulso.",
      "A Rainha de Paus irradia carisma, calor e determinação.",
      "O Rei de Paus lidera com visão, coragem e empreendedorismo.",
    ],
  },
  copas: {
    kw: [
      ["Amor", "Novos sentimentos", "Intuição"],
      ["Parceria", "Atração", "União"],
      ["Amizade", "Celebração", "Comunidade"],
      ["Apatia", "Contemplação", "Tédio"],
      ["Perda", "Luto", "Decepção"],
      ["Nostalgia", "Memórias", "Inocência"],
      ["Ilusão", "Escolhas", "Fantasia"],
      ["Abandono", "Busca", "Mudança"],
      ["Satisfação", "Desejos", "Gratidão"],
      ["Harmonia", "Família", "Plenitude"],
      ["Sensibilidade", "Criatividade", "Mensagem"],
      ["Romance", "Charme", "Idealismo"],
      ["Compaixão", "Acolhimento", "Intuição"],
      ["Equilíbrio emocional", "Generosidade", "Calma"],
    ],
    upright: [
      "Transbordar de emoções, amor novo e abertura espiritual.",
      "Conexão mútua, parcerias e atração profunda.",
      "Amizade, comemoração e apoio da comunidade.",
      "Apatia, contemplação e oportunidades não percebidas.",
      "Luto, decepção e foco na perda.",
      "Nostalgia, lembranças felizes e reencontros.",
      "Muitas opções, ilusões e sonhos a serem filtrados.",
      "Deixar para trás o que não satisfaz em busca de algo maior.",
      "Contentamento emocional, desejos realizados e gratidão.",
      "Plenitude familiar, harmonia e felicidade duradoura.",
      "Sensibilidade, criatividade e mensagens emocionais.",
      "Romance, charme e propostas vindas do coração.",
      "Compaixão, acolhimento e profunda intuição.",
      "Maturidade emocional, generosidade e serenidade.",
    ],
    reversed: [
      "Emoções reprimidas, vazio interior, amor bloqueado.",
      "Desequilíbrio na relação, rupturas e tensões.",
      "Conflitos sociais, isolamento, desentendimentos.",
      "Despertar, aceitar oportunidades, sair do tédio.",
      "Aceitação, perdão e seguir em frente.",
      "Preso ao passado, idealizar o que foi.",
      "Clareza nas escolhas, dissipar ilusões.",
      "Medo de mudar, voltar ao conhecido.",
      "Insatisfação apesar das conquistas.",
      "Desarmonia familiar, valores em conflito.",
      "Insegurança emocional, criatividade bloqueada.",
      "Promessas vazias, instabilidade emocional.",
      "Dependência emocional, carência.",
      "Frieza emocional, repressão de sentimentos.",
    ],
    desc: [
      "O Ás de Copas anuncia um novo fluxo de amor e emoção.",
      "O Dois de Copas celebra a união e a conexão entre duas pessoas.",
      "O Três de Copas reúne amigos em celebração e apoio mútuo.",
      "O Quatro de Copas mostra apatia e oportunidades ignoradas.",
      "O Cinco de Copas trata do luto e do foco naquilo que se perdeu.",
      "O Seis de Copas evoca nostalgia, memórias e inocência.",
      "O Sete de Copas apresenta múltiplas opções e ilusões.",
      "O Oito de Copas fala de abandonar o que já não basta.",
      "O Nove de Copas é a carta dos desejos realizados.",
      "O Dez de Copas representa plenitude emocional e familiar.",
      "O Pajem de Copas traz mensagens sensíveis e criativas.",
      "O Cavaleiro de Copas avança guiado pelo romance e ideal.",
      "A Rainha de Copas acolhe com compaixão e intuição.",
      "O Rei de Copas equilibra emoção e razão com serenidade.",
    ],
  },
  espadas: {
    kw: [
      ["Clareza", "Verdade", "Ruptura mental"],
      ["Indecisão", "Impasse", "Trégua"],
      ["Mágoa", "Dor", "Tristeza"],
      ["Descanso", "Recuperação", "Pausa"],
      ["Conflito", "Derrota", "Tensão"],
      ["Transição", "Passagem", "Alívio"],
      ["Estratégia", "Cautela", "Engano"],
      ["Limitação", "Prisão mental", "Medo"],
      ["Ansiedade", "Pesadelos", "Preocupação"],
      ["Fim doloroso", "Crise", "Rendição"],
      ["Curiosidade", "Vigilância", "Verdade"],
      ["Ação rápida", "Lógica", "Determinação"],
      ["Imparcialidade", "Clareza", "Independência"],
      ["Autoridade intelectual", "Verdade", "Disciplina"],
    ],
    upright: [
      "Avanço mental, verdade nítida e novas ideias rompendo barreiras.",
      "Decisão difícil, impasse e equilíbrio precário.",
      "Mágoa, dor emocional e revelações dolorosas.",
      "Descanso necessário, recuperação e contemplação.",
      "Conflito, derrota e vitórias vazias.",
      "Transição rumo a águas mais calmas.",
      "Estratégia, cautela e jogos mentais.",
      "Sensação de limitação e prisões da própria mente.",
      "Ansiedade, preocupação e pensamentos noturnos.",
      "Fim doloroso, fundo do poço e rendição.",
      "Curiosidade mental, vigilância e busca pela verdade.",
      "Pensamento veloz, lógica afiada e ação decidida.",
      "Imparcialidade, clareza e independência intelectual.",
      "Autoridade da razão, verdade e disciplina mental.",
    ],
    reversed: [
      "Confusão mental, ideias bloqueadas, falta de clareza.",
      "Decisão tomada, sair do impasse.",
      "Cura da mágoa, perdão e recuperação.",
      "Retomar a ação, esgotamento, inquietude.",
      "Reconciliação, fim do conflito.",
      "Resistência à mudança, bagagem emocional.",
      "Confissão, mudança de estratégia.",
      "Libertação mental, superação do medo.",
      "Alívio da ansiedade, enfrentar os medos.",
      "Recuperação, evitar o pior, renascer.",
      "Fofoca, dispersão, falta de foco.",
      "Impulsividade, pressa e agressividade.",
      "Frieza, julgamento severo, isolamento.",
      "Tirania, manipulação, racionalidade excessiva.",
    ],
    desc: [
      "O Ás de Espadas corta as ilusões com clareza e verdade.",
      "O Dois de Espadas mostra um impasse que exige decisão.",
      "O Três de Espadas representa a dor de uma mágoa profunda.",
      "O Quatro de Espadas convida ao descanso e à recuperação.",
      "O Cinco de Espadas trata de conflitos e vitórias vazias.",
      "O Seis de Espadas leva de águas turbulentas a outras mais calmas.",
      "O Sete de Espadas alerta para estratégia, astúcia e engano.",
      "O Oito de Espadas revela prisões criadas pela própria mente.",
      "O Nove de Espadas expressa ansiedade e noites de preocupação.",
      "O Dez de Espadas marca o fim doloroso e o fundo do poço.",
      "O Pajem de Espadas é curioso, vigilante e sedento por verdade.",
      "O Cavaleiro de Espadas avança veloz, guiado pela lógica.",
      "A Rainha de Espadas julga com clareza e imparcialidade.",
      "O Rei de Espadas governa pela razão, verdade e disciplina.",
    ],
  },
  ouros: {
    kw: [
      ["Oportunidade", "Prosperidade", "Início material"],
      ["Equilíbrio", "Adaptação", "Malabarismo"],
      ["Colaboração", "Maestria", "Trabalho em equipe"],
      ["Segurança", "Posse", "Controle"],
      ["Dificuldade", "Perda", "Insegurança"],
      ["Generosidade", "Troca", "Caridade"],
      ["Avaliação", "Paciência", "Investimento"],
      ["Dedicação", "Aprimoramento", "Habilidade"],
      ["Independência", "Conforto", "Autossuficiência"],
      ["Riqueza", "Legado", "Estabilidade"],
      ["Estudo", "Planejamento", "Manifestação"],
      ["Diligência", "Rotina", "Confiabilidade"],
      ["Prosperidade", "Praticidade", "Nutrição"],
      ["Abundância", "Sucesso", "Segurança"],
    ],
    upright: [
      "Nova oportunidade material, prosperidade e prosperar.",
      "Equilíbrio entre prioridades e adaptação às mudanças.",
      "Trabalho em equipe, maestria e colaboração.",
      "Segurança material, controle e apego ao que se tem.",
      "Dificuldades financeiras, perda e insegurança.",
      "Generosidade, troca justa e caridade.",
      "Avaliar progresso, paciência e investimentos.",
      "Dedicação ao ofício e aprimoramento de habilidades.",
      "Independência, conforto e autossuficiência.",
      "Riqueza duradoura, legado e estabilidade familiar.",
      "Estudo, planejamento e manifestar metas.",
      "Trabalho diligente, rotina e confiabilidade.",
      "Prosperidade prática e cuidado nutridor.",
      "Abundância, sucesso material e segurança plena.",
    ],
    reversed: [
      "Oportunidade perdida, planos materiais frustrados.",
      "Desorganização financeira, sobrecarga.",
      "Falta de trabalho em equipe, qualidade comprometida.",
      "Apego excessivo, ganância, insegurança.",
      "Recuperação financeira, fim das dificuldades.",
      "Dívidas, generosidade com segundas intenções.",
      "Impaciência, investimentos mal feitos.",
      "Perfeccionismo, esforço sem propósito.",
      "Dependência material, excessos.",
      "Instabilidade financeira, conflitos por herança.",
      "Falta de foco nos estudos, planos no papel.",
      "Tédio, estagnação, falta de progresso.",
      "Insegurança material, descuido com o próprio bem-estar.",
      "Insegurança financeira, controle excessivo.",
    ],
    desc: [
      "O Ás de Ouros semeia uma nova oportunidade de prosperidade.",
      "O Dois de Ouros equilibra prioridades em constante movimento.",
      "O Três de Ouros valoriza colaboração e maestria no trabalho.",
      "O Quatro de Ouros mostra o apego à segurança e à posse.",
      "O Cinco de Ouros trata da dificuldade material e do desamparo.",
      "O Seis de Ouros celebra generosidade e trocas justas.",
      "O Sete de Ouros convida à paciência e à avaliação dos frutos.",
      "O Oito de Ouros é a carta da dedicação e do aprimoramento.",
      "O Nove de Ouros desfruta de conforto e autossuficiência.",
      "O Dez de Ouros representa riqueza, legado e estabilidade.",
      "O Pajem de Ouros estuda e planeja a manifestação de metas.",
      "O Cavaleiro de Ouros trabalha com diligência e constância.",
      "A Rainha de Ouros nutre com praticidade e prosperidade.",
      "O Rei de Ouros colhe abundância, sucesso e segurança.",
    ],
  },
}

const minorFullDescriptions: Record<string, { title: string; content: string[] }[]> = {
  "as-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Potencial Criativo e Sexual: Representa a energia vital e instintiva em sua forma pura e inicial, antes de ser colocada em prática.",
        "Centelha de Inspiração: É o \"vá em frente\" do espírito para novos empreendimentos, ideias em crescimento e projetos apaixonantes.",
        "Fecundidade e Vigor: Associado ao elemento Fogo, simboliza o impulso para povoar o universo, o poder curativo e a força de vontade.",
        "Palavras-chave: Criação, Desejo, Início, Fogo, Vitalidade, Inspiração e Virilidade.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Mão e a Nuvem: Uma mão, surgindo de uma nuvem, segura o bastão pela parte mais fina; o fato de mostrar a palma indica um impulso central e puro.",
        "A Dádiva Divina: O fato de a mão sair do nada (das nuvens) indica que essa nova energia, ideia ou oportunidade é um vislumbre de inspiração que vem de uma força superior ou do inconsciente. Não é algo planejado logicamente, mas sim um impulso ou um estalo intuitivo que nos convida à ação.",
        "O Bastão Vermelho: Simboliza a força da natureza que cresce; sua ponta alargada evoca o sexo feminino, sugerindo que a energia criativa é andrógina.",
        "Marcas de Cortes: Os galhos cortados ao longo do bastão indicam que a energia não pode ser fabricada, apenas canalizada através de escolhas conscientes.",
        "O Castelo no Topo da Colina: Bem ao fundo, à esquerda, avista-se um castelo fortificado em uma montanha íngreme. O castelo simboliza a meta de longo prazo, a estabilidade, a ambição arquitetada e o sucesso que pode ser alcançado se a energia do bastão for canalizada com foco e determinação. É o destino final da jornada que está apenas começando.",
      ],
    },
    {
      title: "O Ás de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de grande energia para vencer dificuldades e levar projetos adiante. É um bom presságio para novos começos que exigem determinação e trabalho duro.",
        "Negativo (Invertido/Desafiador): Pode sinalizar bloqueios criativos, problemas sexuais, falta de refinamento, brutalidade ou uma simples perda de energia vital.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Ás representa o Grau 1 (a totalidade em potência) no centro Sexual e Criativo.",
        "No ciclo de transformação dos naipes, o Dez de Ouros (matéria e prosperidade plena) evolui para o Ás de Paus, indicando que a abundância material gera a necessidade de nova criação e reprodução.",
        "Ele corresponde simbolicamente ao leão presente no Arcano XXI (O Mundo).",
      ],
    },
  ],
  "tres-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Três de Ouros representa o Grau 3 do centro material, simbolizando a explosão vital na matéria, o entusiasmo inicial em projetos concretos e o primeiro passo prático após a fase de gestação. Na numerologia do Tarot, o número três é o primeiro nível essencialmente ativo, representando uma energia adolescente que irrompe sem um objetivo final totalmente definido, mas com grande vigor.",
        "Início Prático e Trabalho: Indica o começo de um novo trabalho, a chegada dos primeiros clientes ou o primeiro dia após uma reforma ou operação de saúde.",
        "Investimento e Benefício: Simboliza um investimento material que começa a produzir seu primeiro benefício, marcando o momento de 'abrir a semente'.",
        "Crescimento e Fecundação: No plano biológico, pode representar a fecundação e o crescimento celular, ou a hiperatividade corporal que, embora produtiva, pode levar ao esgotamento.",
        "Palavras-chave: Explosão vital, novo trabalho, investimento inicial, primeiros lucros, fecundação e entusiasmo material.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Escultor/Artesão: À esquerda, em cima de um banco de madeira, está o jovem operário. Ele segura suas ferramentas de trabalho (um cinzel e um martelo) e está esculpindo diretamente a estrutura de pedra. Ele representa a força prática, a execução técnica e o trabalho manual especializado.",
        "O Arquiteto/Mestre de Obras: No centro, segurando uma planta ou pergaminho que contém o desenho do projeto, está uma figura com vestes escuras. Ele representa o planejamento, o intelecto, a estratégia e a visão estrutural.",
        "O Sacerdote/Clérigo: À direita, vestindo um manto amarelo, está o representante da igreja. Ele simboliza o cliente, a autoridade institucional ou o propósito maior por trás daquela construção (o significado espiritual ou os valores do projeto).",
        "O Banco de Madeira e a Escuta Ativa: O entalhador está elevado em relação aos outros dois homens por estar em cima do banco. No entanto, ele está virado de perfil, olhando para trás para ouvir as orientações e feedbacks do arquiteto e do clérigo. Esse arranjo visual mostra que, embora ele seja o executor prático, ele respeita a liderança teórica dos outros. Da mesma forma, os dois homens olham para cima com atenção, validando a habilidade do artesão. Existe uma ausência de ego na imagem; todos trabalham focados na excelência da obra.",
        "Os Três Pentáculos Cravados no Arco gótico: No topo da imagem, inseridos perfeitamente dentro de uma rosácea ou arcada gótica esculpida na pedra, estão as três moedas de ouro. O fato de estarem integradas à arquitetura do edifício simboliza que a prosperidade e os frutos materiais nesta carta são o resultado direto de um trabalho estruturado, simétrico e duradouro. O padrão triangular que elas formam reflete estabilidade e a perfeita união de corpo, mente e propósito (as três figuras abaixo).",
        "O Foco na Execução: O fundo por trás do arco gótico é preto. No simbolismo do Tarot, esse fundo escuro foca a nossa atenção inteiramente no plano terreno e no interior do santuário, indicando que o foco do momento deve ser a dedicação minuciosa e concentrada ao trabalho atual.",
        "O Manto Amarelo do Sacerdote: O amarelo brilhante nas vestes do clérigo ilumina o lado direito da carta, trazendo a energia do intelecto estimulado, da clareza e da validação mental para o esforço coletivo que está sendo feito."
      ],
    },
    {
      title: "O Três de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza sucesso inicial em empreendimentos, boa resposta física a tratamentos e um desejo ardente de construir algo novo.",
        "Negativo (Desafiador): Indica o risco de decepção ou dispersão: explodir em energia e acabar fazendo 'qualquer coisa' sem foco. Pode representar hiperatividade que esgota o indivíduo ou efeitos empresariais descontrolados.",
      ],
    },
    {
      title: "Contexto Evolutivo",
      content: [
        "Este Arcano corresponde simbolicamente à potência criadora de A Imperatriz (III) e à força transformadora do Arcano sem Nome (XIII). Marca a transição da acumulação passiva (Dois de Ouros) para a estabilidade sólida do Grau 4, funcionando como o motor que coloca a vida material em movimento dinâmico.",
      ],
    },
  ],
  "dois-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Dois de Ouros representa o Grau 2 do centro material, simbolizando um estado de acumulação, gestação e preparação no plano físico, financeiro ou corporal. Na numerologia do Tarot, o número dois indica uma recepção passiva que prepara uma ação futura, funcionando como uma promessa ou um contrato em fase de elaboração.",
        "Contrato em Preparação: Indica um acordo, aliança ou contrato que está sendo gestado, mas que ainda não foi assinado ou concretizado.",
        "Acumulação de Recursos: Representa o desejo de economizar, a recuperação de forças físicas ou um embrião em formação.",
        "Equilíbrio e Flutuação: Reflete a necessidade de lidar com duas situações ao mesmo tempo, buscando harmonia entre o que se possui e o que se deseja adquirir.",
        "Palavras-chave: Gestação material, promessas, preparação, dualidade física, saúde em recuperação e investimento inicial.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Equilíbrio em Movimento: Um jovem dança ou se equilibra sobre um pé só, enquanto manipula duas grandes moedas de ouro. Sua postura corporal é sinuosa e instável, indicando que a estabilidade nesta carta não vem de ficar parado (como no Quatro de Ouros), mas sim da capacidade de se mover e se adaptar constantemente.",
        "O Chapéu Alto: Ele usa um chapéu vermelho peculiar e extremamente alto. Esse adereço cômico ou teatral remete à figura de um artista de rua ou bobo da corte, simbolizando que lidar com os altos e baixos da rotina exige jogo de cintura, um toque de leveza e resiliência psicológica para não deixar as moedas caírem.",
        "O Laço do Infinito (Lemniscata): As duas moedas de ouro estão conectadas por um grande laço verde que forma o símbolo do infinito ou lemniscata. Esse símbolo revela que a circulação de energia e recursos é contínua. O dinheiro vai e vem, o tempo se esgota e se renova. O laço verde liga a matéria à natureza viva e mutável, indicando que o consultante tem a habilidade latente de gerenciar essa dualidade (trabalho vs. vida pessoal, gastos vs. ganhos) de forma perpétia, desde que mantenha o ritmo.",
        "As Roupas Coloridas: O malabarista veste roupas vibrantes em tons de amarelo e vermelho, com sapatos verdes. O amarelo traz a agilidade mental necessária para tomar decisões rápidas na organização do dia a dia. O vermelho injeta a força física e a paixão para dar conta das demandas. Os sapatos verdes mostram que, apesar de estar dançando e se equilibrando, seus pés (as bases de sua ação) mantêm uma conexão viva e prática com o solo.",
        "As Flutuações da Vida: Atrás do jovem, o cenário exibe um mar azul com ondas picadas e agitadas. Dois navios com velas içadas navegam por essas águas instáveis, subindo e descendo com as ondas. Os navios representam o comércio, as finanças globais, as parcerias e os grandes projetos em andamento. O fato de estarem enfrentando um mar turbulento reforça o pano de fundo da carta: o ambiente externo é imprevisível e cheio de altos e baixos. No entanto, os navios continuam flutuando e navegando, mostrando que a instabilidade faz parte da jornada e pode ser dominada com perícia."
      ],
    },
    {
      title: "O Dois de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza um período de repouso corporal necessário ou a fase preparatória de um negócio promissor. Indica que o consultante está lidando bem com as mudanças e mantendo o equilíbrio em meio às flutuações da vida.",
        "Negativo (Invertido/Desafiador): Alerta para a preguiça, paralisia ou dificuldades financeiras (como o esforço para chegar ao fim do mês). Pode indicar desequilíbrio, gastos excessivos ou a recusa em se alimentar e cuidar do próprio corpo.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Este Arcano situa-se no quadrado Terra da numerologia do Tarot, correspondendo à passividade d'A Papisa (II) e d'O Enforcado (XII). É a 'semente' material que acumula substância: se esse estado se prolongar demais, corre o risco de estagnar e 'apodrecer' por falta de movimento.",
        "O desafio do Dois de Ouros é preparar o terreno sólido para a explosão criativa e o investimento que ocorrerão no Grau 3.",
      ],
    },
  ],
  "rainha-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "A Rainha de Espadas representa a maturidade e a plena posse do centro intelectual, simbolizando uma mente afiada, independente e capaz de discernir a verdade sem a interferência das emoções.",
        "Maturidade Intelectual: Representa alguém (frequentemente uma mulher independente ou uma figura de autoridade) que é direta, não faz rodeios e toma decisões baseadas na lógica.",
        "Clareza e Independência: Indica uma pessoa confiável e autossuficiente que, embora tenha passado por provações, agora enxerga sua situação com total clareza.",
        "Desapego Emocional: É considerada a menos emocional de todas as rainhas, podendo parecer, às vezes, um pouco distante ou fria.",
        "Palavras-chave: Lógica, inteligência, independência, clareza mental, objetividade, severidade e discernimento.",
      ],
    },
    {
      title: "Simbolismo Visual(Rider-Waite)",
      content: [
        "O Olhar Direto para o Futuro: A Rainha está sentada de perfil, olhando firmemente para a direita. Sua expressão facial é séria, focada e impassível, denotando integridade, sobriedade e uma mente que não se deixa enganar por bajulações ou ilusões.",
        "A Espada Erguida na Mão Direita: Ela segura uma longa espada verticalmente com a mão direita, apoiando-a firmemente no braço de seu trono. A lâmina perfeitamente reta aponta para o céu, simbolizando a justiça, a clareza de pensamento e o compromisso inabalável com a verdade. Ao contrário do Cavaleiro, ela não está atacando de forma impetuosa; sua espada está posicionada como uma barreira protetora e uma ferramenta de discernimento preciso.",
        "A Mão Esquerda Estendida: Sua mão esquerda está erguida e aberta para a frente, com os dedos estendidos em um gesto de recepção, comunicação ou convite ao diálogo. Esse contraste de gestos é o coração da carta: enquanto a mão direita impõe limites firmes com a espada, a esquerda demonstra abertura para ouvir, negociar e acolher a verdade dos fatos.",
        "O Querubim: Na lateral do imponente trono de pedra cinzenta, há o entalhe da cabeça de um anjo de asas abertas (um querubim). Na iconografia do Tarot, os querubins estão ligados ao elemento Ar e à sabedoria divina, sugerindo que as decisões da Rainha são guiadas por um intelecto superior e idealista.",
        "As Borboletas: Abaixo do querubim, o trono exibe entalhes de borboletas. A borboleta é o símbolo máximo da metamorfose e da transformação da mente. Reflete que a Rainha alcançou aquele patamar de poder após passar por um profundo processo de isolamento e maturação (saindo do casulo da dor para a liberdade intelectual).",
        "A Túnica de Nuvens: A Rainha veste uma túnica branca estampada com nuvens azuis e brancas. Essa vestimenta reforça sua conexão íntima com o reino do Ar e dos pensamentos, indicando que ela está literalmente revestida de idealismo e racionalidade objetiva.",
        "O Manto Vermelho por Baixo: Sob a túnica e cobrindo parte da sua cabeça, há um tecido vermelho. O vermelho simboliza que, por trás de sua fachada fria, lógica e analítica, ainda existe paixão, calor humano e uma profunda energia vital que foi preservada.",
        "O Domínio sobre o Caos: O céu atrás da Rainha é de um azul claro e límpido na maior parte da tela. As nuvens densas e volumosas estão posicionadas abaixo da linha de sua visão e de seu trono. Isso entrega uma gramática visual fantástica: a Rainha conseguiu se elevar acima da confusão mental, da fofoca e do caos emocional que costumam nublar o julgamento das pessoas comuns. Ela enxerga tudo do alto, com total clareza.",
        "O Pássaro Solitário: Bem alto no céu, avista-se um único pássaro voando de forma independente. O pássaro simboliza a liberdade de pensamento, a solidão que muitas vezes acompanha a sabedoria e a capacidade de se distanciar de uma situação para analisá-la de forma panorâmica."
      ],
    },
    {
      title: "A Rainha de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza sucesso em carreiras que exigem pesquisa, foco e trabalho intelectual. Indica que o consulente atingiu um nível de maturidade onde pode ser seu próprio guia, agindo com retidão e franqueza.",
        "Negativo (Invertido/Desafiador): Alerta para uma pessoa cruel, manipuladora ou tóxica. Pode representar o fechamento total do coração, o uso da inteligência para ferir os outros, o racionalismo levado ao extremo (frigidez) ou a incapacidade de enxergar a verdade devido a preconceitos.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, as Rainhas situam-se entre o Grau 4 (estabilidade) e o Grau 5 (novo ideal). No centro Intelectual, a Rainha de Espadas marca a transição entre o racionalismo seguro e a abertura para um pensamento metafísico ou espiritual mais elevado.",
        "Ela representa o estágio de nutrir o intelecto antes que ele se torne uma potência de ação pública com o Rei.",
      ],
    },
  ],
  "dois-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Acumulação e Gestação: Representa o estado de energia sexual e criativa em formação, como um potencial que se acumula antes de se tornar ação manifesta.",
        "Puberdade e Latência: Simboliza as primícias de toda obra e a fase inicial dos desejos, onde a força instintiva ainda está contida ou reprimida.",
        "Palavras-chave: Puberdade, acumulação, desejo, preparação, virgindade criativa e latência.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Postura do Governante: No centro da carta, um homem em uma posição de destaque observa a paisagem do alto. Ele não está no meio da batalha, mas em um lugar de autoridade e segurança.",
        "A Túnica Vermelha e o Chapéu: Ele usa um chapéu e uma túnica vermelha vibrante. O vermelho remete diretamente ao elemento Fogo de Paus, denotando paixão, coragem, iniciativa e poder pessoal. Debandando sob a túnica, nota-se uma veste de tom ocre ou terroso, o que sugere que sua ambição ardente está contida por uma base prática e racional.",
        "O Globo Terrestre: Na mão direita, o homem segura um pequeno globo terrestre. Este é um dos símbolos mais poderosos da carta: representa que \"o mundo está em suas mãos\". Ele possui o controle de sua vida corrente e tem a capacidade de conceber grandes planos de expansão. No entanto, o tamanho reduzido do globo também aponta que o que ele detém agora é apenas um microcosmo, uma promessa do vasto mundo real que o espera lá fora.",
        "O Bastão Seguro (À Esquerda): O homem segura firmemente com a mão esquerda um dos bastões, que está fixado acima da amurada. Esse bastão representa as conquistas atuais, a estabilidade e o território seguro. É o porto seguro do qual ele não abriu mão ainda.",
        "O Bastão Livre (À Direita): O segundo bastão está preso por um suporte metálico na parede, posicionado logo atrás do homem. Ele representa o potencial futuro, as novas parcerias e os caminhos ainda não explorados. Ele está ali, pronto para ser empunhado assim que a decisão for tomada.",
        "O Olhar Direcionado ao Mar: O homem ignora a segurança da sua vila fortificada imediatamente abaixo e foca seu olhar no horizonte longínquo, onde um rio ou braço de mar encontra a terra. A água em movimento simboliza as infinitas possibilidades do inconsciente e das novas jornadas.",
        "As Montanhas Áridas: Ao fundo, erguem-se grandes montanhas rochosas de coloração avermelhada e roxa. Elas representam os desafios, as grandes metas e os obstáculos que ele sabe que terá de enfrentar se decidir sair de sua zona de conforto e cruzar o mar em busca de novos horizontes."
      ],
    },
    {
      title: "O Dois de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de preparação fértil, onde se acumula força para um projeto futuro. Sugere reserva, timidez saudável e o amadurecimento de ideias antes da primeira experiência real.",
        "Negativo (Invertido/Desafiador): Pode sinalizar bloqueios sexuais ou criativos, medo de agir ou uma situação em que o intelecto interfere e trava os impulsos naturais. Representa a energia que \"apodrece\" por não entrar em ação.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Dois representa o Grau 2 (acumulação passiva e receptiva) aplicado ao centro Sexual e Criativo.",
        "Ele corresponde simbolicamente ao estado de retiro e incubação encontrado n'A Sacerdotisa (II) e n'O Enforcado (XII) nos Arcanos Maiores.",
      ],
    },
  ],
  "tres-de-paus": [
    {
      title: "Visão Geral",
      content: [
        "O arcano \"Três de Paus\" representa a primeira explosão da energia vital, marcando um momento de entusiasmo, criatividade e o início de ações concretas após o período de acumulação do Dois de Paus.",
      ],
    },
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Ação e Explodir: Simboliza o impulso de partir e a vontade alegre de criar, frequentemente comparada à energia da puberdade.",
        "Primeiras Experiências: Representa o primeiro prazer, a primeira criação ou a primeira experiência sexual.",
        "Expansão: É o desejo de possuir e seduzir o mundo, agindo com vigor, mas ainda sem um objetivo final perfeitamente estabelecido.",
        "Palavras-chave: Explosão, entusiasmo, puberdade, criação, vigor, desejo e impulsividade.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Olhar para o Futuro: O homem agora está de costas para nós. Essa quebra de perspectiva visual é muito significativa: significa que ele virou as costas para o passado, para a segurança antiga e para as dúvidas. Todo o seu foco e energia estão concentrados inteiramente no que está por vir, no horizonte.",
        "As Vestes de Parceria e Equilíbrio: Ele usa um manto vermelho ornamentado com detalhes pretos e dourados, combinado com uma capa verde sobre o ombro esquerdo. O vermelho mantém a chama da paixão e da ambição do elemento Fogo ativa. O verde adiciona a energia do crescimento, da fertilidade e da esperança de que seus projetos deem frutos.",
        "A Fita na Cabeça: Ele usa uma faixa ou tiara ao redor da cabeça. Diferente do chapéu imponente de governante do Dois de Paus, a faixa sugere prontidão mental, foco inabalável e a mente direcionada a um único objetivo de longo prazo.",
        "Bastões Fixados na Terra: Dois bastões estão cravados firmemente no chão rochoso, posicionados atrás dele. O terceiro bastão está à sua direita, e ele apoia a mão suavemente nele para se estabilizar enquanto observa o horizonte.",
        "Abertura e Liberdade: O homem não está mais confinado por muros cinzentos de pedra. Ele está livre na encosta da montanha, e os três bastões formam uma espécie de portal aberto ou estrutura de suporte. Todos eles continuam a brotar folhas verdes, provando que a energia vital continua se multiplicando à medida que ele avança.",
        "O Mar de Fogo: O oceano abaixo não é azul, mas brilha em um tom amarelo-alaranjado sob a luz do sol. Esse mar dourado simboliza que o próprio elemento Água (as emoções e o inconsciente) foi infundido pelo Fogo de Paus. O caminho agora é luminoso, próspero e propício para grandes empreendimentos.",
        "Os Navios Flutuantes: Ao longe, pequenas silhuetas de embarcações navegam pelas águas douradas. Esses barcos representam os seus pensamentos, investimentos, projetos ou ideias que foram colocados em movimento no mundo exterior. Ele não está mais especulando; suas ações já estão navegando e ele aguarda o retorno comercial ou espiritual de seus esforços.",
        "O Terreno Elevado: O homem encontra-se em um penhasco ou terreno elevado que supervisiona o mar. Essa altitude reforça a ideia de visão estratégica e maturidade. Ele tem uma perspectiva privilegiada da vida e dos negócios, conseguindo enxergar as oportunidades e antecipar os problemas muito antes que eles cheguem à praia."
      ],
    },
    {
      title: "O Três de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de forte atividade criativa, sucesso em empreendimentos nascentes e uma disposição corajosa para enfrentar o desconhecido. Sugere que o consultente tem os meios para levar seus planos adiante com entusiasmo.",
        "Negativo (Invertido/Desafiador): Pode sinalizar dispersão, tendência a não terminar o que começou ou decepção por expectativas irreais. Pode indicar dificuldade em colocar planos em ação ou crenças autolimitantes.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Três representa o Grau 3 (explosão criativa sem experiência) no centro Sexual e Criativo.",
        "Ele corresponde simbolicamente à energia d'A Imperatriz (III) (fecundidade e natureza) e do Arcano sem Nome (XIII) (transformação radical) nos Arcanos Maiores, unindo a criação à necessidade de mudança.",
      ],
    },
  ],
  "quatro-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Estabilidade e Segurança: Representa o momento em que o desejo e a energia criativa se tornam realidade, estabelecendo-se com firmeza no mundo.",
        "Celebração e União: É uma carta de harmonia, felicidade e conexão com a comunidade ou família, frequentemente sinalizando eventos alegres ou o fortalecimento de compromissos amorosos.",
        "Palavras-chave: Estabilidade, celebração, harmonia, rotina, segurança criativa e prosperidade.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Estrutura de Proteção: Em primeiro plano, quatro grandes bastões de madeira estão cravados firmemente no chão. Na geometria sagrada e na numerologia, o número quatro (lembrando o Arcano IV, O Imperador) está associado à estrutura, fundação, ordem e solidez.",
        "O Portal Aberto: Ao contrário do Dois de Paus, onde os muros limitavam a visão, aqui os quatro bastões formam um portal aberto e receptivo. Não há portas fechadas; o ambiente é de celebração pública e inclusão. Os bastões continuam exibindo brotos verdes, mostrando que mesmo na estabilidade a energia criativa continua viva.",
        "A Guirlanda de Flores e Frutos: A guirlanda simboliza a fertilidade materializada, a beleza e a recompensa pelo esforço investido. Ela serve como uma cobertura sagrada sob a qual a comunidade se reúne, consagrando o espaço como um solo de paz e alegria.",
        "Os Dançarinos com Buquês: Ao fundo, logo após o portal, vemos duas figuras humanas vestindo túnicas em tons de branco, azul e purpúra. Elas estão com os braços erguidos, agitando buquês de flores em sinal de triunfo e celebração. Mais à esquerda, perto da muralha, nota-se um pequeno grupo de pessoas reunidas. A presença desse coletivo reforça que a alegria do Quatro de Paus não é um sucesso solitário (como o do Três), mas uma felicidade que se expande e é compartilhada com o clã, com a família ou com os parceiros de jornada",
        "O Lar/Refúgio Seguro: Mais ao fundo, destaca-se a silhueta de um grande castelo com torres pontiagudas e telhados vermelhos. Esse castelo representa o lar estabelecido, a comunidade protetora e a segurança de longo prazo que foi construída. O portal de bastões está posicionado fora das muralhas, sugerindo que as pessoas se sentem tão seguras e em paz que podem festejar a céu aberto, sem medo de ameaças externas.",
        "O Céu Dourado: O fundo da carta é inteiramente amarelo brilhante. Esse tom solar e luminoso banha toda a cena com vitalidade, otimismo, clareza mental e a bênção da luz divina (ecoando o calor do Arcano XIX, O Sol)."

      ],
    },
    {
      title: "O Quatro de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica sucesso em empreendimentos criativos e estabilidade nos relacionamentos. Pode representar uma fase em que o consultente vive de sua arte ou alcançou um patamar de paz e felicidade.",
        "Negativo (Invertido/Desafiador): O maior perigo é a estagnação e a rotina. Pode sinalizar tédio, falta de apoio em relacionamentos ou uma criatividade que se repete sem novidade.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Quatro representa o Grau 4 (estabilização e potência) no centro Sexual e Criativo.",
        "Ele corresponde simbolicamente à segurança terrestre do Imperador (IIII) e à circulação harmoniosa da Temperança (XIIII) nos Arcanos Maiores.",
      ],
    },
  ],
  "cinco-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Aparição do Desejo: Representa a emergência de um novo desejo ou aspiração que desestabiliza a segurança anterior (do grau 4) para buscar algo mais elevado.",
        "Competição e Conflito: No cotidiano, sinaliza um ambiente de trabalho altamente competitivo, disputas por interesses românticos ou a necessidade de lutar com disciplina e foco para alcançar o sucesso.",
        "Palavras-chave: Desejo, competição, tensão, ideal, iniciação, luta e transição.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Batalha de Bastões: A carta mostra cinco figuras humanas em uma espécie de luta ou competição, cada uma segurando um bastão. Eles parecem estar em um confronto caótico, simbolizando a tensão e o desafio que surgem quando um novo desejo ou ideal começa a se manifestar.",
        "O Desalinhamento dos Bastões: Ao contrário das cartas anteriores onde os bastões eram simétricos e organizados, aqui eles formam uma malha caótica no céu. Cada jovem puxa ou empurra em uma direção diferente, mostrando uma total falta de cooperação ou de um objetivo comum. Cada um está focado exclusivamente em defender seu próprio ponto de vista ou testar sua própria força.",
        "A Variedade das Vestimentas: O fato de não haver uniformes reforça que não existem lados definidos nessa disputa. Não é o exército A contra o exército B. É cada um por si. Essa mistura cromática representa a diversidade de opiniões, origens e motivações que geram o ruído na comunicação.",
        "O Terreno Irregular: O combate acontece sobre um solo verdejante, porém visivelmente irregular, acidentado e ondulado. Esse relevo instável reflete a falta de base firme para se chegar a um acordo no momento.",
        "O Céu Claro e Limpo: Ao fundo, o céu está completamente limpo e azul claro. Não há nuvens de tempestade, fumaça ou indícios de destruição (como vemos na carta da Torre, por exemplo). Esse céu pacífico traz uma mensagem oculta reconfortante: o conflito do Cinco de Paus é superficial e passageiro. É uma fricção necessária para o amadurecimento. O Fogo precisa de atrito para continuar aceso e se espalhar, e esse caos serve justamente para filtrar quem tem os melhores argumentos ou a maior resiliência antes do próximo passo da jornada."
      ],
    },
    {
      title: "O Cinco de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica uma evolução criativa, o início de uma nova paixão ou uma iniciação em dimensões sexuais e energéticas até então desconhecidas. Sugere que o consulente tem a força necessária para enfrentar desafios e vencer através da persistência.",
        "Negativo (Invertido/Desafiador): Alerta para o perigo de mentiras, traições, comportamentos aditivos ou um conflito paralisante entre a sexualidade e a espiritualidade. Pode também sinalizar a evasão de conflitos necessários, o que pode ser prejudicial dependendo do contexto.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Cinco representa o Grau 5 (ponte e passagem) aplicado ao centro Sexual e Criativo.",
        "Ele estabelece uma transição entre o mundo material estável e as aspirações espirituais, correspondendo simbolicamente ao papel mediador do Hierofante (V) e à descida às profundezas do Diabo (XV) nos Arcanos Maiores.",
      ],
    },
  ],
  "seis-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Prazer e Beleza: Representa o ápice do prazer criativo e sexual, onde a energia é vivida com alegria e exultação.",
        "Vitória e Reconhecimento: Simboliza o sucesso alcançado após superar lutas, trazendo respeito, aclamação pública e o sentimento de ser \"visto\" e valorizado pelos outros.",
        "Palavras-chave: Vitória, prazer, sucesso, reconhecimento, celebração, encontro sexual e criatividade plena.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
         "A Postura Elevada do Cavaleiro: No centro da cena, um homem monta um cavalo branco. O fato de estar montado o coloca em uma posição fisicamente mais alta que as demais pessoas, simbolizando status, liderança, sucesso e o fato de ter superado os obstáculos recentes. Ele atrai todos os olhares.",
         "A Coroa de Louros na Cabeça: O cavaleiro usa uma coroa feita de folhas de louro na cabeça, o símbolo máximo de vitória, glória e conquista desde a antiguidade clássica (ecoando também o topo da guirlanda da carta do Mundo).",
         "A Capa Púrpura: O cavaleiro veste um manto em tons de roxo ou púrpura. Historicamente, a púrpura é a cor da realeza, do poder supremo, da dignidade e da espiritualidade elevada, reforçando que o seu triunfo é legítimo e reconhecido por todos.",
         "O Bastão com Folhagem: O cavaleiro segura um bastão que está decorado com folhas verdes, simbolizando que sua vitória é fruto de um esforço criativo e vital, e que essa energia continua a crescer mesmo após o sucesso.",
         "O Cavalo Branco: O cavalo puramente branco simboliza a força física direcionada, os instintos purificados e a energia vital que foi domada com sucesso para servir a um propósito nobre (ecoando a pureza do cavalo no Arcano XIX, O Sol).",
         "A Manta Verde Inteira: O animal está quase que completamente coberto por uma manta verde longa que toca o chão. O verde representa a cura, o crescimento e a certeza de que a vitória trará prosperidade material e renovação. Mostra também que a força bruta (o cavalo) está elegantemente vestida e integrada às leis da civilidade.",
          "A Multidão Aclamando: Ao fundo, uma multidão de pessoas acena e aplaude o cavaleiro, reforçando a ideia de reconhecimento público e aclamação social. Ele não é apenas um vencedor solitário, mas alguém que é celebrado por sua comunidade ou sociedade.",
      ],
    },
    {
      title: "O Seis de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de grande sucesso profissional (como uma promoção), reconhecimento de talentos artísticos ou uma relação amorosa onde ambos se sentem orgulhosos e realizados. Pode sinalizar também viagens bem-sucedidas ou notícias de visitantes.",
        "Negativo (Invertido/Desafiador): Alerta para o narcisismo e o egocentrismo. Pode representar uma falta de reconhecimento pelo trabalho árduo, sentimentos de invisibilidade ou um orgulho excessivo que gera inveja nos outros.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Seis representa o Grau 6 (prazer, beleza e a descoberta do outro) aplicado ao centro Sexual e Criativo.",
        "Ele corresponde simbolicamente à alegria de viver d'O Namorado (VI) e à libertação explosiva d'A Torre (XVI) nos Arcanos Maiores, marcando o momento em que a energia deixa de ser apenas uma busca para se tornar uma celebração.",
      ],
    },
  ],
  "sete-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Ação e Conquista: Simboliza o sucesso, o triunfo e a criatividade realizada que se distribui ao mundo inteiro.",
        "Defesa e Competição: Representa a necessidade de \"defender o seu título\" ou território após o sucesso inicial, sugerindo que o consulente está sob pressão ou sendo desafiado por outros.",
        "Coragem e Determinação: Indica a força para lutar pelo que se acredita, seja no campo profissional ou em relacionamentos amorosos.",
        "Palavras-chave: Ação total, triunfo, defesa, competição, desafio, proteção de território e sucesso criativo.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Vantagem do Terreno Elevado: No centro da carta, um homem está posicionado no topo de uma colina ou penhasco. Ele empunha um bastão de madeira com as duas mãos, usando-o como barreira e ferramenta de defesa. Embora ele esteja sob ataque, o fato de estar em um terreno elevado lhe dá uma imensa vantagem tática. Ele detém a autoridade, a clareza e a gravidade a seu favor. Quem ataca de baixo para cima gasta muito mais energia.",
        "Inimigos Invisíveis: Emergindo da parte inferior da carta, vemos as pontas de outros seis bastões apontados diretamente para o homem. É fascinante notar que os donos desses bastões não aparecem na imagem. Isso simboliza que as ameaças podem ser pressões externas abstratas (críticas, concorrência, excesso de demandas) ou até mesmo batalhas internas (dúvidas, medos e cobranças do próprio ego). Eles criam uma parede de oposição, mas o homem permanece firme, bloqueando o avanço deles.",
        "Os Sapatos Descombinados: O homem está usando dois sapatos diferentes (um sapato/bota escura no pé esquerdo e um calçado mais claro e folgado no pé direito). Esse detalhe mostra que ele está operando em bases diferentes ou lidando com uma situação onde seu posicionamento ainda está dividido (um pé na razão, outro na emoção, ou um pé no velho padrão e outro no novo). Apesar da óbvia falta de prontidão ou do terreno instável, ele não recua.",
        "A Expressão de Foco: Sua expressão facial é de intenso esforço, raiva e determinação feroz. Não há medo em seu rosto, mas sim a garra de um guerreiro que decidiu que não vai ceder um centímetro do seu espaço."    ],
    },
    {
      title: "O Sete de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de grande abertura e sucesso mundial de um projeto artístico ou pessoal. No amor, pode representar uma luta saudável para manter e fortalecer a relação.",
        "Negativo (Invertido/Desafiador): Alerta para o uso mal-empregado da energia, que pode se tornar destrutiva ou autoritária. Pode sinalizar também sentimentos de sobrecarga ou incapacidade de lidar com a competição feroz.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Sete representa o Grau 7 (ação no mundo), o número ímpar mais ativo da série decimal.",
        "No centro Sexual e Criativo, ele marca a transição da beleza do Seis para a conquista total, correspondendo simbolicamente ao O Carro (VII) e à A Estrela (XVII) nos Arcanos Maiores.",
        "Astrologicamente, é frequentemente associado a Marte em Leão.",
      ],
    },
  ],
  "oito-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Concentração e Energia: Representa uma concentração extrema de energia vital e criativa que permite a emergência da magia e do desejo puro.",
        "Velocidade e Movimento: É a carta da rapidez, indicando que algo vai acontecer muito depressa, seja entrando ou saindo da vida do consulente.",
        "Comunicação e Viagens: Frequentemente associada a notícias repentinas, telefonemas, mensagens em redes sociais ou planos de viagens e férias iminentes.",
        "Palavras-chave: Concentração, rapidez, comunicação, viagem, desejo, perfeição energética e prontidão.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Trajetória Descendente dos Bastões: O fato de estarem voando em direção à terra sugere que ideias abstratas, projetos ou mensagens que estavam pairando no ar estão prestes a aterrissar e se manifestar na realidade prática. Os brotos verdes continuam nascendo na madeira, indicando que o movimento carrega vida e potencial criativo.",
        "O Céu Limpo: O fundo da carta é um céu azul claro, sem nuvens ou obstáculos. Isso sugere que o caminho está livre e que não há impedimentos para a manifestação rápida do que se deseja.",
        "A Ausência de Personagens: Diferente das cartas anteriores, o Oito de Paus não apresenta figuras humanas. Isso reforça a ideia de que a energia está tão concentrada e fluida que não há espaço para distrações ou interferências externas. A ação é pura e direta, sem a necessidade de mediação humana.",
         "A Simetria dos Bastões: Os bastões estão organizados de maneira simétrica, o que simboliza a perfeição energética e a harmonia necessária para que a magia aconteça. Eles formam um padrão ordenado, indicando que a energia está sob controle e direcionada para um propósito específico.",
      ],
    },
    {
      title: "O Oito de Paus em Leituras",
      content: [
        "Positivo (Em pé): É um sinal de \"siga em frente\". Indica que o consulente deve agir sem hesitar, pois o momento é de grande impulso e sucesso rápido. Pode representar também a plenitude da força criativa posta a serviço de uma obra espiritual.",
        "Negativo (Desafiador): O excesso de perfeição pode levar à rigidez ou à paralisia. Pode sinalizar que não há mais nada a ser mudado na situação, o que gera o risco de estagnação ou de uma \"loucura\" decorrente do perfeccionismo asfixiante.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Oito representa o Grau 8 (perfeição receptiva e equilíbrio total) aplicado ao centro Sexual e Criativo.",
        "Ele corresponde simbolicamente à retidão d'A Justiça (VIII) e à receptividade profunda d'A Lua (XVIII) nos Arcanos Maiores, marcando o estágio final de formação antes do nascimento ou mutação que ocorrerá nos graus seguintes (9 e 10).",
      ],
    },
  ],
  "nove-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Escolha Criativa Fundamental: Representa um momento de decisão crucial, no qual é necessário abandonar uma estrutura ou projeto para dar início a outro.",
        "Integridade e Determinação: Simboliza a atitude de um guerreiro que realiza ações impecáveis, sem concessões, focado em ser fiel a si mesmo e à sua obra.",
        "Crise e Transição: Indica um estado \"entre a vida e a morte\", uma crise que exige responsabilidade total para que o antigo seja deixado para trás e a nova construção comece.",
        "Palavras-chave: Escolha, despojamento, responsabilidade, determinação, \"vencer ou morrer\" e transição criativa.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Faixa na Cabeça: O homem no centro da imagem usa uma faixa branca amarrada na cabeça. Ela cobre uma ferida real obtida nas batalhas anteriores (como as do Cinco e do Sete). Esse detalhe visual deixa claro que ele passou por testes severos; ele carrega cicatrizes, mas continua de pé.",
        "A Postura Defensiva: Ele segura um bastão com as duas mãos, apoiando-o firmemente no chão à sua frente. Seu corpo está ligeiramente inclinado para trás e seu olhar é desconfiado, voltado para o lado esquerdo. Ele não está atacando, mas está em total estado de alerta, esperando o próximo movimento do ambiente.",
        "A Barreira de Bastões: Atrás dele, oito bastões estão cravados no chão, formando uma barreira que o protege. Eles simbolizam a experiência adquirida e a força acumulada ao longo das batalhas anteriores. Ele está cercado por desafios, mas mantém sua posição firme.",
        "A Linha Divisória no Chão: O homem pisa em um solo cinza e plano, mas logo atrás dele há uma linha horizontal bem demarcada que o separa da área gramada onde os oito bastões estão fincados. Essa divisão visual reforça a ideia de limites geográficos e territoriais. Ele estabeleceu uma linha na areia: dali ninguém passa. É a preservação da própria integridade e individualidade a qualquer custo.",
        "A Colinas Verdes e o Céu Azul: Ao fundo, por trás da paliçada, avistamos colinas verdes onduladas sob um céu azul claro e sem nuvens. O clima no horizonte está limpo e pacífico. Isso traz um contraste psicológico profundo com a expressão tensa e desconfiada do personagem. O perigo real pode já ter passado, mas a mente do herói ainda está presa no modo de sobrevivência. Ele vigia um horizonte que, visualmente, está em paz."
      ],
    },
    {
      title: "O Nove de Paus em Leituras",
      content: [
        "Positivo (Em pé): É um chamado para agir como se deve, com retidão e coragem. Indica que o consulente se libertou de desejos mundanos e está acumulando força para construir uma nova realidade ou obra. Sugere uma fase de sabedoria em que se aceita o fim de um ciclo.",
        "Negativo (Desafiador): O maior perigo é afundar em uma crise perpétua, marcada pela solidão, tristeza ou medo de envelhecer e morrer. Pode sinalizar impotência, esterilidade criativa ou a recusa em passar para a próxima etapa da vida.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Nove representa o Grau 9 (crise benéfica e desprendimento), sendo um número andrógino que prepara a passagem para o final do ciclo.",
        "No centro Sexual e Criativo, ele corresponde simbolicamente à sabedoria solitária d'O Eremita (VIIII) e à renovação vibrante d'O Sol (XVIIII) nos Arcanos Maiores.",
      ],
    },
  ],
  "dez-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Sublimação e Mutação: Indica que a energia sexual e criativa atingiu seu ápice e agora se desdobra para descobrir a essência do pensamento.",
        "A Criatividade no Espírito: Representa o momento em que o ímpeto criativo deixa de ser apenas uma ação instintiva e se torna uma força espiritualizada.",
        "Palavras-chave: Sublimação, conclusão de ciclo, criatividade espiritual, androginia mental e transição.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Postura de Esmagamento: O centro da carta é dominado por um homem que caminha curvado, quase dobrado ao meio pelo peso que carrega. Ele tenta segurar e abraçar todos os dez bastões de madeira de uma única vez. Sua postura corporal exala cansaço extremo e opressão física.",
        "Abraçando Além da Conta: O fato de ele carregar os bastões à frente do corpo, tentando cercá-los com os braços, mostra que esse fardo não foi imposto externamente por correntes — ele próprio escolheu pegar, carregar e manter cada uma dessas responsabilidades. É a representação visual do \"centralizador\" que não sabe delegar.",
        "A Visão Obstruída Pelos Bastões: Uma das sacadas visuais mais profundas desta ilustração é que a disposição dos dez bastões esconde completamente o rosto e bloqueia a visão do homem. Ele não consegue olhar para frente, para os lados ou para o céu. Ele só consegue ver o chão imediatamente sob seus pés e a própria madeira que o esmaga. Isso simboliza a perda de perspectiva e de propósito. Quando estamos sobrecarregados, esquecemos o porquê começamos a caminhar; a rotina e o peso nos impedem de ver o panorama geral.",
        "A Proximidade do Destino (O Castelo ao Fundo): No canto inferior direito da imagem, vemos uma cidade fortificada ou um castelo aconchegante, cercado por árvores verdes. É o mesmo lar seguro ou comunidade que foi vislumbrado no Quatro de Paus. Este detalhe traz um duplo significado crucial. Por um lado, mostra que o homem está muito perto de chegar ao seu destino e concluir sua tarefa. Falta pouco para descarregar o fardo. Por outro lado, mostra o isolamento psicológico: a segurança e o conforto do lar estão logo ali, mas ele está tão focado no peso que não consegue sequer erguer a cabeça para perceber que a jornada está terminando.",
        "O Solo Amarelo e Plano: O homem caminha sobre um solo plano e de um amarelo intenso. Ao contrário das cartas de conflito ou defesa (como o Cinco e o Sete), não há relevos acidentados, pedras ou inimigos no caminho. A estrada em si é fácil e o céu acima dele está limpo. Isso reforça que o único obstáculo real na cena é o próprio peso que ele escolheu carregar. A resistência não vem do mundo exterior, vem da sua incapacidade de soltar alguns bastões ao longo do caminho."
      ],
    },
    {
      title: "O Dez de Paus em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza que a realização criativa foi alcançada e que o consultente está pronto para novos interesses, como a vocação para o ensino ou para a cura. Indica que a \"criança espiritual\" emergiu da experiência instintiva.",
        "Negativo (Desafiador): Pode representar bloqueio e recusa em passar para um novo ciclo onde se voltará a ser principiante. Sinaliza amargura, perda de energia, fracasso ou uma renúncia dolorosa ao poder.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Dez representa o Grau 10 (fim de ciclo e mutação).",
        "No centro Sexual e Criativo, o Dez de Paus engendra o ciclo seguinte: o Ás de Espadas. Isso indica que, ao se sublimar, a energia da libido e da criação se transforma na força do intelecto e do Verbo.",
      ],
    },
  ],
  "pajem-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Desejo e Hesitação: Representa a dúvida fundamental: \"Fazer ou não fazer?\". É o desejo de criar que ainda não se transformou em uma iniciativa totalmente independente.",
        "Nova Energia e Oportunidade: Sinaliza uma situação nova, fresca, ou a chegada de uma mensagem, oferta ou oportunidade empolgante.",
        "Potencial Explosivo: É frequentemente descrito como uma \"bomba prestes a explodir\", carregada de uma força vital que busca uma direção.",
        "Palavras-chave: Desejo de criar, inexperiência, hesitação, ímpeto, novidade e vigor instintivo.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Olhar Direcionado ao Topo: Ao contrário do Dois ou Três de Paus, que olhavam para o horizonte distante, o Pajem inclina a cabeça ligeiramente para trás e fixa os olhos diretamente no topo de seu próprio bastão. Ele observa com admiração e curiosidade os pequenos brotos verdes que nascem dali. Essa imagem reforça que ele está fascinado pelo potencial de sua nova ideia ou projeto; ele está na fase de descobrir suas próprias capacidades e talentos.",
        "O Padrão das Salamandras: Estampadas por toda a sua túnica, encontramos pequenas figuras pretas de lagartos. Na tradição esotérica e alquímica, as salamandras são os elementais do Fogo — criaturas mitológicas que conseguem viver dentro das chamas sem serem consumidas.",
        "O Chapéu com Pena Vermelha: Na cabeça, ele usa um chapéu verde macio, encimado por uma vibrante pena vermelha erguida. A pena vermelha é um link simbólico direto com o Louco (Arcano 0) e com a criança do Sol (Arcano XIX). Ela representa a força vital, a paixão indomável, o espírito de aventura e o otimismo cego que o impulsiona a explorar o desconhecido sem medo do fracasso.",
        "O Deserto Fértil de Ideias: O deserto e as pirâmides remetem a uma terra antiga e mística (frequentemente associada ao Egito hermético). O solo árido mostra que, para o Fogo do Pajem se manifestar, ele precisa trabalhar a terra de forma prática (o aspecto Terra de Paus). As pirâmides ao fundo simbolizam grandes realizações, mistérios a serem desvendados e ambições de longo prazo que o esperam no futuro, servindo de testemunhas silenciosas ao seu potencial latente."
      ],
    },
    {
      title: "O Pajem de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica uma fase de aprendizado prático, entusiasmo e a descoberta de uma nova vocação ou paixão. Sugere que o consulente tem os meios para criar, mas deve agir com prudência e perseverança para afinar seu talento.",
        "Negativo (Invertido/Desafiador): Pode sinalizar brutalidade, inabilidade, bloqueio da energia sexual ou criativa e falta de vitalidade. Também pode representar alguém que é apenas um \"eterno principiante\", que se dispersa antes de concluir o que começou.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Pajens situam-se entre o Grau 2 (acumulação) e o Grau 3 (explosão), agindo como executantes que ainda não possuem o pleno desprendimento dos Reis.",
        "No centro Sexual e Criativo, o Pajem de Paus simboliza a semente que contém o germe da futura árvore, aguardando o momento certo para ser plantada.",
      ],
    },
  ],
  "cavaleiro-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Sublimação e Vontade: Representa o momento em que as paixões são dominadas e canalizadas para o caminho do espírito.",
        "Ação e Entusiasmo: É o mensageiro que traz excitação, paixão e notícias que estimulam a alma.",
        "Confiança e Charme: Reflete uma personalidade confiante, charmosa e geralmente extrovertida, sendo mais maduro e confiável que o Pajem.",
        "Palavras-chave: Sublimação, ação, confiança, coragem suprema, instinto canalizado e paixão.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Postura de Arranque: O cavalo cor de canela ou alaranjado está empinado, capturado no meio de um movimento explosivo de avanço. Suas patas dianteiras estão erguidas no ar, mostrando que ele está pronto para romper qualquer barreira.",
        "A Força dos Instintos: A cor quente do animal (ecoando os tons de fogo) reforça que as paixões, impulsos e a energia vital estão completamente despertos e direcionando a ação. Ao contrário do cavalo pacífico do Seis de Paus, este animal exige controle e exala pressa.",
        "O Plumeiro de Chamas: No topo do elmo do Cavaleiro e saindo de sua armadura, vemos grandes adereços vermelhos e alaranjados que emulam perfeitamente o formato de labaredas de fogo. Ele não apenas domina o elemento, ele se veste dele.",
        "As Salamandras Concluídas: O Cavaleiro usa uma túnica amarela sobre a armadura. Assim como no Pajem, ela é estampada com salamandras. No entanto, há uma diferença sutil e crucial: aqui, as salamandras estão desenhadas de forma completa, morde-se a própria cauda formando um círculo perfeito (o Ouroboros). Isso simboliza que o fogo aqui já encontrou sua maturidade e o seu ciclo de poder está completo; ele sabe exatamente o tamanho da sua força.",
        "A Empunhadura Firme do Bastão: Na mão direita, o guerreiro segura o grande bastão de madeira de forma firme e vertical, erguido ao lado de seu corpo. Os brotos verdes continuam presentes, indicando que a sua missão ainda está ligada ao crescimento, à criatividade e à conquista de novos projetos. Ele carrega sua ferramenta de poder como uma bandeira e uma arma de vanguarda.",
        "A Conquista do Território: A presença de um cenário árido reitera que o Fogo precisa de espaço aberto para queimar livremente. As pirâmides representam os grandes monumentos e metas que o Cavaleiro pretende alcançar ou deixar para trás com sua velocidade. Ele está cruzando o terreno da matéria de forma rápida e incisiva."
      ],
    },
    {
      title: "O Cavaleiro de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de grande vigor, criatividade em pleno domínio e a coragem necessária para enfrentar qualquer desafio. Sugere um progresso rápido ou alguém que entra na vida do consultente trazendo entusiasmo.",
        "Negativo (Desafiador): Pode representar um estado de bloqueio, onde o indivíduo permanece preso em uma crise e não consegue se deixar levar pela mudança. Pode sinalizar também impulsividade excessiva ou falta de direção.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Cavaleiros situam-se entre o Grau 8 (perfeição) e o Grau 9 (crise de transição), funcionando como profetas de seus próprios naipes.",
        "O Cavaleiro de Paus marca o fim do ciclo criativo, onde a energia se desdobra para engendrar o próximo naipe: o Ás de Espadas (o intelecto e o espírito).",
      ],
    },
  ],
  "rainha-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Maturidade Criativa e Sensual: Representa uma pessoa em plena posse de sua criatividade e sexualidade, muitas vezes descrita como uma \"giganta\" devido à sua força de sedução.",
        "Independência: Simboliza a satisfação de quem vive de sua própria arte ou talento, agindo de forma instintiva e muitas vezes caprichosa.",
        "Fase de Nutrição: Como todas as Rainhas, ela representa a etapa de \"nutrir\" o que foi iniciado, associando-se a qualidades como flexibilidade e paciência.",
        "Palavras-chave: Sensualidade, sedução, independência, instinto, criatividade plena, paixão e exuberância.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Pernas Afastadas: A Rainha senta-se no trono com os braços abertos e as pernas visivelmente afastadas sob a túnica amarela. Essa postura, incomum para as figuras femininas da época da ilustração, denota extrema autoconfiança, franqueza, falta de inibição e uma energia acolhedora, porém firmemente estabelecida.",
        "O Girassol na Mão Esquerda: Na mão esquerda, ela segura um grande girassol. Essa flor é o símbolo máximo da energia solar, da alegria de viver, da fertilidade, da vitalidade e da capacidade de sempre buscar a luz (ecoando a atmosfera vibrante do Arcano XIX, O Sol).",
        "Os Leões Entalhados no Trono: O trono de pedra traz cabeças de leões entalhadas nos braços. O leão é o rei da selva, associado astrologicamente ao signo de Leão (elemento Fogo), representando a coragem, a nobreza, o orgulho saudável e a autoridade natural.",
        "A Tapeçaria de Leões e Girassóis: Atrás dela, o estofo ou tapeçaria do trono exibe leões vermelhos rampantes alternados com girassóis. O fundo vermelho da tapeçaria denota a intensidade de sua paixão e força criativa, que servem de apoio para o seu reinado.",
        "O Gato Preto: O gato preto adiciona uma camada profunda de mistério e intuição à carta. Enquanto o Fogo pode ser puramente extrovertido, o felino conecta a Rainha ao mundo do ocultismo, da magia, dos instintos aguçados e da independência espiritual. Ele simboliza que ela possui um lado invisível, intuitivo e independente que não pode ser facilmente domesticado.",
        "O Bastão Vivo: Na mão direita, ela segura firmemente o seu longo bastão de madeira, que está apoiado diretamente no solo. Dele brotam folhas verdes, reafirmando que o seu governo gera vida, crescimento e inspiração prática para a comunidade.",

      ],
    },
    {
      title: "A Rainha de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica uma mulher calorosa, carismática e cheia de energia, com pontos em comum com o arcano A Imperatriz (III). Sugere sucesso em empreendimentos artísticos, uma sexualidade bem vivida e uma personalidade que não teme ser o centro das atenções.",
        "Negativo (Desafiador): Alerta para o perigo de se tornar castradora ou possessiva se não reconhecer suas próprias carências. Pode sinalizar obsessão sexual, venalidade, infidelidade ou um uso egoísta da força de sedução.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, as Rainhas situam-se no Grau 4 (estabilidade) tendendo ao Grau 5 (novo ideal) dentro do quadrado da Terra.",
        "Elas habitam o interior do \"palácio\" de seu naipe, o que significa que estão totalmente identificadas com sua energia e a gerenciam com segurança.",
        "Ela é a companheira que corresponde ao Rei de Paus, formando um casal de grande potência instintiva.",
      ],
    },
  ],
  "rei-de-paus": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Poder de Realização: Simboliza um criador poderoso que não apenas domina seu elemento, mas estende sua obra e influência por todo o mundo.",
        "Autoridade Direta: Representa uma personalidade que comanda de forma simples e direta, agindo com a força de um guerreiro ou de um soberano.",
        "Maturidade Instintiva: É o estágio em que os instintos e desejos foram domados e colocados a serviço de uma vontade soberana.",
        "Palavras-chave: Criador poderoso, autoridade, domínio instintivo, ação direta, mestre, guerreiro e realização.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [ 
        "Inclinado para a Ação: Ao contrário de outros reis do Tarot que sentam-se de forma estática e frontal, o Rei de Paus está posicionado de perfil/diagonal, com o corpo visivelmente inclinado para a frente.",
        "O Manto e o Estofo Amarelo: O trono é revestido por uma tapeçaria amarela vibrante, decorada com leões pretos e salamandras. O leão, símbolo astrológico de Fogo, reforça sua coragem indomável e sua realeza natural.",
        "A Conclusão do Ciclo: Assim como vimos no Cavaleiro, as salamandras na tapeçaria do Rei estão desenhadas de forma circular, mordendo a própria cauda (Ouroboros). Isso demonstra o controle absoluto e maduro que ele possui sobre seus impulsos e sobre o elemento Fogo. Suas paixões não o queimam; elas trabalham para ele.",
        "A Salamandra no Chão: No canto inferior direito, bem ao lado da base do trono, vemos uma pequena salamandra preta viva caminhando no chão. Esse detalhe conecta o Rei diretamente à natureza essencial e pura do seu elemento. Ele mantém seus pés (sua fundação) próximos à realidade prática e aos elementais que dão vida à sua força criativa. É um lembrete visual de que sua autoridade deriva de uma conexão genuína com sua própria essência instintiva e vital.",
        "O Manto de Fogo: O Rei veste uma túnica vermelha intensa sob um manto verde e amarelo que cai sobre seus ombros. O vermelho vivo evoca a paixão e o sangue do guerreiro, enquanto o amarelo destaca sua inteligência estratégica e clareza de propósito.",
        "A Coroa Dourada: Na cabeça, ele ostenta uma coroa dourada com pontas que emulam línguas de fogo estilizadas. Sob ela, uma proteção vermelha cobre sua nuca. Essa coroa simboliza uma mente que é constantemente coroada por ideias brilhantes, ousadas e inspiradoras.",
        
      ],
    },
    {
      title: "O Rei de Paus em Leituras",
      content: [
        "Positivo (Em pé): Indica um artista reconhecido, um homem de grande poder ou um amante sincero e vigoroso. Sugere alguém em quem se pode confiar para liderar ou realizar projetos complexos com segurança.",
        "Negativo (Desafiador): Alerta para o perigo do despotismo, da arrogância e da tirania. Pode representar um sedutor que usa sua potência sem amor, ou um líder que se torna um \"ditador\" ou \"terrorista\" em seus métodos.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Reis situam-se entre o Grau 6 (prazer e beleza) e o Grau 7 (ação irresistível no mundo).",
        "Enquanto os outros três Reis costumam ser representados no interior de palácios, o Rei de Paus mantém uma conexão mais bruta e direta com a natureza e com o elemento fogo.",
        "Ele forma com a Rainha de Paus um par de extrema potência instintiva.",
      ],
    },
  ],
  "as-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Totalidade Emocional: Contém todas as possibilidades de amar, odiar e sentir, funcionando como a \"matriz\" de onde nascerão todos os afetos.",
        "Oferta e Oportunidade: Sinaliza a chegada de uma nova relação, um convite amoroso ou uma oportunidade que trará grande preenchimento emocional.",
        "Espiritualidade e Paz: É visto como um cálice de bênçãos, frequentemente associado ao Graal ou a um templo espiritual.",
        "Palavras-chave: Amor, sentimentos, receptividade, intuição, fertilidade, abundância e renovação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Mão que Surge da Nuvem: Assim como no Ás de Paus, uma grande mão direita e luminosa emerge de uma nuvem angelical no lado direito da imagem. Ela flutua no ar e sustenta a taça, indicando que este novo começo emocional ou espiritual é um presente do invisível, uma dádiva do inconsciente ou do divino.",
        "O Cálice de Ouro: A taça é imensa, dourada e ornamentada. Na sua parte frontal, há uma gravação que se assemelha a uma letra \"W\" invertida ou a uma representação de três arcos/portais estilizados, frequentemente associada à receptividade pura e ao útero cósmico.",
        "As Cinco Correntes de Água: Do topo da taça, jorram cinco correntes contínuas de água que caem em direção ao oceano abaixo. Essas cinco correntes simbolizam os cinco sentidos humanos totalmente purificados e preenchidos pela alma. Elas também representam a abundância dos canais emocionais: o sentimento aqui não é contido, regulado ou econômico; ele transborda ativamente para preencher a realidade.",
        "A Pomba da Paz e a Hóstia: Descendo diretamente do topo da carta, vemos uma pomba branca de asas abertas mergulhando de cabeça em direção ao cálice. Na tradição ocidental, a pomba é o símbolo universal do Espírito Santo, da paz e da pureza divina. Em seu bico, ela carrega uma pequena hóstia ou medalhão marcado com uma cruz, que ela deposita dentro da taça. Esse elemento visual transforma o cálice em uma metáfora do Santo Graal, mostrando que o verdadeiro amor e a empatia genuína descritos nesta carta são vias de iluminação espiritual e transcendência.",
        "As Gotas de Água Flutuantes: Ao redor da taça e da mão divina, flutuam cerca de 26 gotas de água em formato de faíscas ou da letra hebraica Yod. Essas gotas não estão caindo; elas parecem flutuar no espaço como partículas de pura energia vital e espiritual. Elas representam a fertilidade de ideias, sentimentos e conexões que se espalham pelo ambiente quando nos permitimos abrir o coração.",
        "O Mar de Lírios d'Água: A base da imagem é dominada por um mar azul e calmo, cuja superfície está repleta de lírios d'água verdes e flores de lótus desabrochando. O lótus e o lírio d'água são plantas que mantêm suas raízes no fundo lamacento, mas crescem através da água para desabrochar de forma imaculada sob a luz do sol. Visualmente, isso simboliza a evolução e o despertar da consciência através dos sentimentos, mostrando que até as emoções mais profundas e ocultas podem florescer em algo belo e sagrado."
      ],
    },
    {
      title: "O Ás de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de plenitude, sucesso em assuntos do coração e o início de um projeto que traz alegria. Pode ser um presságio de nascimento de filhos ou de um profundo amor-próprio.",
        "Negativo (Invertido/Desafiador): Sinaliza esgotamento emocional (\"copa vazia\"), sentimentos reprimidos ou uma pessoa que evita encarar o que realmente sente. Pode indicar também ciúme, instabilidade ou uma exigência afetiva sufocante.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Ás representa o Grau 1 (totalidade em potência) no centro Emocional.",
        "Ele é engendrado pelo Dez de Espadas, o que indica que quando o intelecto atinge seu limite máximo de solidão e reflexão, ele descobre o \"Outro\" e transmuta-se na energia do coração.",
        "Simbolicamente, corresponde ao anjo presente no Arcano O Mundo (XXI).",
      ],
    },
  ],
  "dois-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Preparação e Harmonia: Simboliza a alma se preparando para amar e a busca pelo equilíbrio e união.",
        "Parcerias e Conexões: Frequentemente associado a almas gêmeas, amizades fortes ou parcerias de negócios bem-sucedidas.",
        "Desejo de União: Representa o \"devaneio amoroso\" e a sede de amar que nasce após longos períodos de solidão.",
        "Palavras-chave: Acumulação, harmonia, alma gêmea, parceria, equilíbrio emocional e receptividade.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Conexão Olho no Olho: Um homem e uma mulher estão posicionados frente a frente. Eles se olham diretamente nos olhos, denotando total presença, sintonia e entrega mútua.",
        "O Brinde / A Partilha: Cada um segura uma taça de ouro à mesma altura. O homem estende a mão esquerda e a mulher a mão direita em direção ao outro, indicando uma troca equilibrada de afeto. Não há desigualdade ou submissão; as duas taças operam na mesma frequência de recepção e doação.",
        "As Vestes Complementares: O homem veste uma túnica com detalhes amarelos e pretos, com uma capa em tons de marrom e vermelho. A mulher veste um manto azul claro e branco (cores tradicionalmente ligadas à intuição, à pureza emocional e à Sacerdotisa). Juntos, eles representam o casamento místico do masculino e do feminino (Animus e Anima) dentro e fora do ser.",
        "O Caduceu de Mercúrio: Entre eles, paira um caduceu dourado, com duas serpentes entrelaçadas e uma esfera alada no topo. O caduceu é um símbolo clássico da comunicação, do comércio e da troca de energia. Ele reforça a ideia de que a relação representada por esta carta é uma via de mão dupla, onde o fluxo de sentimentos, ideias e energia é equilibrado e harmonioso.",
        "A Cabeça de Leão Alada: No topo do Caduceu, coroando a união, ergue-se uma imensa cabeça de leão vermelha com asas abertas. O leão vermelho representa a paixão primordial, o desejo, o fogo do instinto sexual e a energia vital. No entanto, por possuir asas e estar posicionado acima do Caduceu, esse instinto animal não é bruto ou destrutivo; ele foi espiritualizado e elevado pela pureza dos sentimentos das duas pessoas. É a união perfeita entre o amor romântico e a atração física.",
        "A Casa de Campo e o Cenário Verdejante: Ao fundo, vemos uma casa de campo aconchegante, cercada por árvores verdes e um céu azul claro. Esse cenário idílico reforça a ideia de que o relacionamento simbolizado por esta carta é um refúgio seguro, um lar emocional onde ambos os parceiros podem crescer e florescer juntos.",
      ],
    },
    {
      title: "O Dois de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de amor incondicional, colaboração e sintonia de valores com outra pessoa. Pode sinalizar o início de um compromisso ou o fortalecimento de um vínculo existente.",
        "Negativo (Invertido/Desafiador): Alerta para desequilíbrio em parcerias, lutas de poder, falta de respeito ou rompimentos. Pode indicar também imaturidade emocional ou um \"amor incestuoso\" (fixação em fantasias infantis) que impede relações reais. Na saúde, pode estar associado a questões de fertilidade ou infecções.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Dois representa o Grau 2 (acumulação passiva e gestação) aplicado ao centro Emocional.",
        "Ele corresponde simbolicamente à introspecção d'A Papisa (II) e d'O Enforcado (XII), sugerindo que o amor verdadeiro exige primeiro um recolhimento e um amadurecimento interior antes de se manifestar no mundo.",
        "Astrologicamente, é associado ao signo de Câncer.",
      ],
    },
  ],
  "tres-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Primeiro Amor e Idealismo: Simboliza a eclosão do primeiro amor idealizado, antes das complicações da vida cotidiana.",
        "Celebração e Amizade: É a carta da celebração em comunidade, representando festas, eventos sociais, amizades fortes e o prazer de compartilhar momentos com os outros.",
        "Harmonia e Atração: Reflete química, admiração, afeto e uma união fervente, muitas vezes associada à alegria de viver.",
        "Palavras-chave: Celebração, amizade, idealismo romântico, entusiasmo, alegria social e eclosão emocional.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Círculo de Confiança: Três mulheres estão posicionadas muito próximas, formando um círculo com seus corpos. Elas estão dançando, o que denota fluidez, movimento harmônico e a celebração espontânea do momento presente.",
        "O Brinde Elevado: Cada uma delas ergue uma taça dourada bem acima de suas cabeças, cruzando os braços no centro. Esse gesto visual mostra que elas estão compartilhando e brindando às mesmas vitórias ou sentimentos. Não há segredos ou isolamento; a emoção é colocada no alto para que todas celebrem juntas.",
        "Rostos Voltados umas para as Outras: Seus olhares se cruzam no centro do círculo, reforçando os laços de afeto, sororidade e reconhecimento mútuo.",
        "A túnica branca e o manto vermelho: A mulher de costas para o espectador combina o branco (pureza de intenção, inocência e espiritualidade) com um manto vermelho-escuro (paixão, vitalidade e força de ação).",
        "O vestido dourado/marrom: À direita, a túnica em tons de terra e dourado evoca a colheita, a fertilidade prática, a estabilidade e os frutos reais obtidos no plano material.",
        "O vestido branco: À esquerda, o traje predominantemente claro acentua a dimensão da paz, da cura emocional e da leveza.",
        "A Grinalda e os Cabelos Adornados: Duas das mulheres usam grinaldas de folhas e flores entrelaçadas em suas cabeças, e ramos vegetais parecem adornar seus penteados. Coroar a cabeça com elementos da natureza é um costume antigo de festivais de primavera e rituais de colheita (como o Beltane ou festas dionisíacas). Simboliza que suas mentes estão alinhadas com os ciclos naturais da vida, celebrando o florescimento após períodos de esforço ou inverno interno.",
        "A Abundância da Terra: Aos pés das mulheres, o solo está repleto de uma vegetação rasteira rica, onde se destacam grandes abóboras, cachos de uvas roxas e uma profusão de frutas e folhas acumuladas. Esse detalhe transforma a carta em um símbolo claro de colheita bem-sucedida. O elemento Água (emoções) nutriu a terra de tal forma que ela transbordou em sustento e beleza física. Mostra que a alegria do grupo tem um fundamento real: há motivos concretos para festejar.",

      ],
    },
    {
      title: "O Três de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de plenitude emocional, sucesso em encontros sociais e reconciliação. Para solteiros, pode sinalizar o encontro de um parceiro romântico em um evento social.",
        "Negativo (Invertido/Desafiador): Alerta para a idealização excessiva que pode levar à decepção ou a um \"delírio erotomaníaco\". Pode indicar também fofocas (colegas ou amigos falando pelas costas), falta de equilíbrio devido ao excesso de festas ou a necessidade de tempo sozinho após muita socialização.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Três representa o Grau 3 (explosão criativa sem objetivo definido) aplicado ao centro Emocional.",
        "Ele corresponde simbolicamente à energia de A Imperatriz (III), no sentido de eclosão e fertilidade, e ao Arcano sem Nome (XIII), por representar a transformação necessária para que o novo sentimento nasça.",
        "É uma energia de \"adolescência\" do coração, que descobre o prazer de amar sem ainda conhecer os limites da realidade.",
      ],
    },
  ],
  "quatro-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Estabilidade Emocional: Simboliza a consolidação dos sentimentos, representando a família, a fidelidade e amizades sólidas.",
        "Amor Real: Marca a passagem do amor idealizado (do Três de Copas) para um amor fundamentado na realidade e na confiança mútua.",
        "Insatisfação e Tédio: Frequentemente indica um sentimento de vazio ou desinteresse, onde a pessoa foca tanto no que falta que ignora as oportunidades presentes (\"a grama do vizinho é sempre mais verde\").",
        "Palavras-chave: Estabilidade, segurança afetiva, tédio, introspecção, oportunidades perdidas e solidez.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Braços Cruzados: Um jovem está sentado na grama, com as costas apoiadas no tronco de uma árvore. Ele mantém os braços firmemente cruzados sobre o peito e as pernas também cruzadas. Essa linguagem corporal é universal para fechamento, isolamento defensivo e indisponibilidade para o que está ao seu redor.",
        "O Olhar Direcionado para Baixo: Sua cabeça está ligeiramente inclinada e seus olhos estão fixos no chão, focados exclusivamente nas três taças à sua frente. Ele ignora completamente o resto do cenário, simbolizando alguém preso no próprio monólogo mental ou em desilusões passadas.",
        "As Roupas: Ele veste uma túnica amarela (cor ligada ao intelecto e aos pensamentos, mostrando que ele está racionalizando demais suas emoções) com mangas e gola em vermelho vivo (a paixão ou energia vital que está contida e guardada no momento).",
        "As Taças Estáveis, mas Ignoradas: À sua frente, três taças douradas estão perfeitamente alinhadas na grama. Elas representam suas conquistas e experiências emocionais anteriores (uma clara referência à estrutura do Três de Copas). No entanto, ele parece entediado com elas; a estabilidade virou rotina.",
        "A Dádiva da Nuvem: Vinda do lado esquerdo da carta, uma nuvem cinzenta e branca paira no ar. Dela, estende-se uma mão direita (assim como nos Ases) oferecendo uma quarta taça dourada. Esta taça representa uma nova proposta, um insight espiritual ou uma nova oportunidade afetiva que surge do inconsciente ou do destino.",
        "A Recusa Cega: Como o jovem está de olhos fixos no chão e imerso em sua apatia, ele sequer nota a presença da mão ou da taça flutuante. Ele está cego para as novas possibilidades porque está excessivamente focado no que já tem ou no que perdeu.",
        "A Árvore e o Terreno Verdejante: O rapaz está abrigado sob a sombra de uma grande árvore frondosa. A árvore oferece proteção e uma base sólida (a Terra sustentando a Água), mostrando que o período de isolamento ocorre em um ambiente seguro e fértil. A grama é verde e as colinas ao fundo sugerem estabilidade e paz material. O problema retratado na carta não é uma crise externa ou escassez física (como veremos no Cinco de Ouros), mas sim um vazio estritamente interno e motivacional.",
        "O Céu Cinza Claro/Esverdeado: O fundo da imagem apresenta um céu de coloração pálida, quase neutra. Diferente do azul brilhante do Três de Copas ou do amarelo solar das cartas de Paus, este céu limpo, mas sem cor vibrante, acentua a sensação de neutralidade emocional, monotonia e falta de entusiasmo que define a experiência do Quatro de Copas."
      ],
    },
    {
      title: "O Quatro de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de paz e equilíbrio nos relacionamentos. É a plataforma necessária para novos projetos afetivos.",
        "Negativo (Invertido/Desafiador): Sinaliza que o consulente está começando a sair de um \"atoleiro\" emocional, buscando mudanças e recuperando a paixão pela vida. No aspecto físico, pode alertar para questões de circulação ou negação de cuidados com a saúde.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Quatro representa o Grau 4 (estabilização e potência) aplicado ao centro Emocional.",
        "Ele corresponde simbolicamente à segurança do Imperador (IIII) e à harmonia da Temperança (XIIII), ensinando que, embora o amor real precise de bases sólidas, ele não deve se tornar uma rotina sem vida.",
      ],
    },
  ],
  "cinco-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Emergência de um Ideal: Representa a descoberta de um novo ideal, a primeira abertura do coração para algo que supera a si mesmo, como a fé ou o amor fanático.",
        "Desilusão e Arrependimento: No cotidiano, sinaliza que algo não saiu como planejado, gerando sentimentos de falha, tristeza e foco excessivo em perdas passadas.",
        "Palavras-chave: Amor ideal, fanatismo afetivo, arrependimento, desilusão, fé, transição e novos começos.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Capa Escura: No centro da imagem, uma figura humana está de pé, totalmente envolta em uma longa capa preta que cobre todo o seu corpo. O preto é a cor universal do luto, do recolhimento, do mistério e da depressão. A capa funciona como uma barreira visual entre a pessoa e o mundo, mostrando que ela está completamente isolada em sua própria dor.",
        "A Postura de Desalento: A cabeça da figura está visivelmente caída e inclinada para a frente, com o olhar fixado diretamente no chão. Essa linguagem corporal transmite derrota, desespero e a incapacidade temporária de erguer a cabeça para olhar o horizonte.",
        "O Foco na Perda: Diretamente diante da figura, três taças douradas estão caídas e viradas no chão. Delas, derrama-se um líquido vermelho (vinho ou sangue) e um líquido verde/azul. Essas três taças representam os projetos que falharam, os relacionamentos que terminaram ou as expectativas que foram quebradas. O líquido derramado simboliza o desperdício de energia vital, as lágrimas choradas e a sensação de que algo precioso se perdeu de forma irreversível.",
        "A Esperança Ignorada: Atrás da figura, permanecem duas taças douradas perfeitamente erguidas e intactas. Elas contêm o potencial emocional que sobreviveu à crise. O grande drama visual do Cinco de Copas está na perspectiva: como a figura está de costas e com os olhos fixos no chão, ela sequer sabe que essas duas taças ainda estão lá. Ela está cega para o que restou porque escolheu focar exclusivamente no que foi perdido.",
        "A Água em Movimento: Ao lado da figura, corre um rio azul que separa o terreno atual da paisagem ao fundo. O rio representa o fluxo contínuo do tempo e das emoções, lembrando que a dor atual também passará.",
        "A Ponte de Pedra: Mais ao fundo, vemos uma sólida ponte de pedra arqueada que cruza o rio, levando a um castelo ou fortaleza segura na outra margem. A ponte é o símbolo visual do caminho de saída. Ela mostra que há uma estrutura racional e segura para atravessar o período de luto e alcançar a estabilidade novamente, contanto que a pessoa decida se mover.",
        "O Céu Cinzento e Desolado: O fundo da carta é dominado por um céu inteiramente cinza, nublado e sem cor. Diferente do azul brilhante das celebrações passadas, este céu reflete o inverno da alma, uma atmosfera opaca onde a alegria parece ter sido completamente drenada do ambiente."
      ],
    },
    {
      title: "O Cinco de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de fervor espiritual ou o início de uma cura emocional onde se deve aprender a perdoar a si mesmo e focar no que restou de positivo.",
        "Negativo (Invertido/Desafiador): Sinaliza a superação de uma situação dolorosa, a aceitação de lições cármicas e a prontidão para deixar o passado para trás e ver novas oportunidades. Na saúde, pode estar associado a quadros de anemia, depressão, má circulação e baixa pressão arterial.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Cinco representa o Grau 5 (ponte e passagem), situado no centro da série decimal.",
        "No centro Emocional, ele rompe a estabilidade do Quatro de Copas para buscar uma dimensão amorosa ou mística superior, correspondendo simbolicamente à mediação do Hierofante (V) e à profundidade do Diabo (XV) nos Arcanos Maiores.",
      ],
    },
  ],
  "seis-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Nostalgia e Infância: Representa memórias felizes do passado, sentimentos de liberdade, alegria e otimismo típicos da infância.",
        "Encontro com a Alma Gêmea: Simboliza o encontro com o outro no sentido de \"espelho\", onde se descobre sentimentos de estima, fidelidade, prazer e sensualidade.",
        "Amor por Si Mesmo: Em um nível elevado, indica a aceitação e o contato interior com o amor divino e a realização da plenitude afetiva.",
        "Palavras-chave: Nostalgia, infância, inocência, alma gêmea, alegria, memórias felizes e amor-próprio.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Gesto de Generosidade: No centro da imagem, um menino (ou um jovem vestido com roupas antigas) inclina-se suavemente para entregar uma taça dourada cheia de flores brancas a uma menina menor. Esse ato visual representa a partilha espontânea, o carinho sem segundas intenções e a pureza nas relações humanas.",
        "As Roupas e o Capuz Vermelho: O jovem usa um capuz e meias vermelhas (símbolo de energia vital, paixão inocente e calor emocional), combinados com uma túnica azul (intuição e paz de espírito). A menina usa um vestido amarelo e azul com um manto vermelho, espelhando as cores do rapaz e indicando uma perfeita harmonia e reciprocidade infantil entre eles.",
        "Os Lírios Brancos dentro das Taças: Das seis taças douradas presentes na cena, todas estão preenchidas com flores brancas de cinco pétalas (lírios ou flores de lótus estilizadas). O branco na iconografia do Tarot sempre remete à pureza, à inocência, à verdade e à intenção limpa. O fato de as taças conterem flores — e não água ou vinho — mostra que as emoções aqui amadureceram, transformando-se em algo belo, estático e imaculado, como as boas lembranças que guardamos na memória.",
        "Quatro Taças no Primeiro Plano: Na parte inferior da imagem, quatro taças com flores estão alinhadas lado a lado, funcionando quase como uma barreira protetora entre o observador e a cena.",
        "Uma na Mão e Uma no Pedestal: A quinta taça está sendo passada entre as crianças, e a sexta está posicionada atrás do jovem, em cima de um pedestal ou pedestal de pedra marcado com um padrão em \"X\". Essa organização espacial evoca a sensação de uma coleção preciosa ou de um altar dedicado ao que é sagrado e nostálgico.",
        "A Segurança do Lar: Ao fundo, erguem-se casas de tijolos com telhados rústicos e uma grande torre de castelo ou fortaleza de pedra. As construções são sólidas e cercam o pátio onde as crianças estão. Esse ambiente visual fechado simboliza proteção contra as tempestades e perigos do mundo exterior. É o espaço seguro da infância ou do lar, onde a maldade não entra. Mostra que, psicologicamente, a mente se refugiou em um lugar onde se sente completamente segura e acolhida.",
        "O Guarda ou Figura ao Fundo: Se olharmos atentamente para o lado esquerdo, ao fundo, há uma figura adulta caminhando com um bastão ou lança, afastando-se da cena. Essa figura costuma ser interpretada visualmente como um guarda ou sentinela que patrulha os limites do castelo. Sua presença reforça que o pátio está protegido; os adultos e as preocupações do mundo maduro estão do lado de fora, permitindo que a inocência das crianças floresça sem ameaças."
      ],
    },
    {
      title: "O Seis de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de paz emocional, reconciliação ou o retorno de alguém do passado (um amor ou amigo de infância). Sugere que o consultante deve se conectar com sua criança interior para encontrar alegria.",
        "Negativo (Invertido/Desafiador): Alerta para o perigo de viver no passado, recusando-se a aceitar novas oportunidades ou amadurecer. Pode sinalizar também um amor excessivamente narcísico, onde o casal se isola do mundo em sua própria complacência.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Seis representa o Grau 6 (prazer, beleza e a descoberta do outro).",
        "É o primeiro passo no quadrado Céu, marcando o momento em que se deixa de apenas imaginar o amor (Grau 2) para começar a viver aquilo que se ama verdadeiramente.",
        "Corresponde simbolicamente às energias d'O Namorado (VI) e d'A Torre (XVI) nos Arcanos Maiores.",
      ],
    },
  ],
  "sete-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Amor em Ação: Representa o momento em que o amor deixa de ser apenas um sentimento interno para agir concretamente no mundo, como em obras humanitárias.",
        "Escolhas e Ilusões: No cotidiano, pode sinalizar que o consulente está diante de múltiplas opções ou oportunidades, mas corre o risco de estar preso em ilusões ou sonhos irrealistas.",
        "Indecisão: Frequentemente indica uma dificuldade de focar em um único objetivo devido ao excesso de pensamentos e desejos simultâneos.",
        "Palavras-chave: Amor ativo, humanismo, doação, ilusão, múltiplas escolhas, indecisão e imaginação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Sombra do Pensador: No canto inferior esquerdo, vemos a silhueta escura de um homem de costas. Ele está obscurecido, indicando que sua consciência e racionalidade estão em segundo plano; ele está hipnotizado pela visão à sua frente.",
        "As Sete Taças Flutuantes: Sete taças douradas flutuam sobre uma densa nuvem cinzenta e azulada que domina a cena. O fato de estarem em nuvens deixa claro que nenhuma dessas opções é sólida, real ou está fincada na terra ainda — são projeções mentais, castelos de areia e desejos abstratos.",
        "A Cabeça Humana: Representa o desejo de status, inteligência, reconhecimento social ou o surgimento de uma nova parceria/relacionamento que mexe com a identidade.",
        "A Figura Coberta/Luminosa: Uma silhueta envolta em um manto brilha como um anjo ou fantasma. Simboliza a busca pelo misticismo, a necessidade de iluminação espiritual ou, pelo lado negativo, os segredos ocultos e o medo do desconhecido.",
        "A Serpente: O símbolo clássico da tentação, do desejo sexual, da traição ou da sabedoria oculta que exige cautela para não ser picado.",
        "O Castelo: Representa o desejo de segurança, estabilidade, poder ou um sonho de vida idealizada que pode não ser realista.",
        "A Joia: Simboliza a busca por riqueza, luxo, status ou um amor materialista que pode ser superficial.",
        "A Coroa de Louros: Representa o desejo de poder, liderança, reconhecimento ou um relacionamento onde se é tratado como realeza, mas que pode ser ilusório.",
        "O Dragão Vermelho: Uma criatura mitológica que cospe fogo. Representa os medos profundos, a agressividade contida, os vícios ou os perigos reais que se disfarçam de oportunidade apetitosa."
      ],
    },
    {
      title: "O Sete de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de grande generosidade, altruísmo e o desejo de ajudar os outros sem esperar nada em troca. É a descoberta da força do amor consciente.",
        "Negativo (Desafiador): Alerta para o perigo de se perder em fantasias impraticáveis ou de ser incapaz de tomar uma decisão real. Em um nível energético, se a imensa força do número 7 for mal empregada, ela pode se tornar destrutiva.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Sete representa o Grau 7 (ação no mundo), o número mais ativo da série decimal.",
        "No centro Emocional, ele marca a transição para uma espiritualidade prática, correspondendo simbolicamente ao O Carro (VII) e à A Estrela (XVII) nos Arcanos Maiores.",
        "Enquanto O Carro conquista, o Sete de Copas irriga o mundo com afeto.",
      ],
    },
  ],
  "oito-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Plenitude e Harmonia: Simboliza um coração inteiramente pleno, capaz de amar o presente, o passado e o futuro sem exigências.",
        "Abandono e Partida: Em leituras modernas (estilo Waite), indica o momento de deixar para trás uma situação (relacionamento ou carreira) que não traz mais preenchimento, apesar dos esforços feitos para que funcionasse.",
        "Paz e Graça: Representa a paz do coração e a união profunda com o amor divino.",
        "Palavras-chave: Plenitude, harmonia, amor universal, despedida, introspecção e sacrifício do ego.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Pilha Organizada: No primeiro plano, vemos oito taças douradas cuidadosamente empilhadas. A base possui cinco taças e o topo possui três.",
        "O Espaço Vazio: Diferente do Cinco de Copas, onde as taças estavam caídas e quebradas, aqui as taças estão intactas, de pé e organizadas. O homem construiu algo sólido e investiu muito sentimento nelas.",
        "De Costas para o Passado: Uma figura masculina, apoiada em um cajado, está de costas para o espectador e para as suas próprias taças. Ela está caminhando em direção às montanhas, abandonando o que construiu. É uma partida que nasce da sua própria vontade, e não por força de uma tragédia externa.",
        "O Manto e as Botas Vermelhas: O homem veste uma capa e botas de um vermelho vibrante. O vermelho representa a paixão, a coragem e a força vital (o Fogo) que ele está usando para se mover. Ele não está partindo por depressão ou fraqueza; ele está usando sua energia vital para buscar algo mais autêntico em outro lugar.",
        "As Montanhas Altas e o Terreno Íngreme: O caminho do homem o leva por um terreno rochoso, árduo e em direção a grandes montanhas escuras ao fundo. Na iconografia do Tarot, as montanhas representam os altos desafios, as grandes jornadas espirituais e a busca pela sabedoria superior (como o topo da montanha do Ermitão). Mostra que a jornada que ele escolheu não será fácil nem confortável, mas é necessária para a evolução da sua consciência.",
        "A Lua Crescente e Minguante: No céu noturno azul-escuro, brilha uma grande lua dourada com um rosto expressivo, que parece olhar para baixo com um semblante sério ou melancólico. O desenho une uma Lua Crescente e uma Lua Minguante (ou um eclipse parcial), simbolizando fases de transição profunda, mistério e a influência do inconsciente. A noite e a lua reforçam que esta é uma busca interna, guiada pela intuição e pela necessidade de encerrar um ciclo emocional que já não nutre mais a alma.",
        "A Água entre as Margens: O homem caminha contornando um corpo de água escura ou um rio que corta a paisagem. A água representa o reino das emoções que ele está aprendendo a dominar e a atravessar. Ele está deixando as águas paradas e conhecidas do pátio para se aventurar nas correntes desconhecidas da sua própria psique."
      ],
    },
    {
      title: "O Oito de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica um período de paz emocional total e equilíbrio, onde a pessoa se torna apenas amor e doação. É o sinal de que se está pronto para abandonar o que não serve mais e buscar algo mais profundo.",
        "Negativo (Desafiador/Invertido): Alerta para a insatisfação perpétua e a carência (\"sentir falta\"), mesmo quando tudo parece estar bem. Pode indicar a incapacidade de caminhar para frente ou a resistência em abandonar uma situação tóxica. Na saúde, pode estar associado a quadros de fadiga, insônia, inchaço, sonambulismo e até tendências de isolamento ou autismo.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Oito representa o Grau 8 (perfeição receptiva e equilíbrio total).",
        "No centro Emocional, ele corresponde simbolicamente à retidão d'A Justiça (VIII) e à receptividade d'A Lua (XVIII) nos Arcanos Maiores.",
        "Ele personifica o ideal crístico do coração em chamas, agindo com caridade pura: \"nada para mim que não seja para os outros\".",
      ],
    },
  ],
  "nove-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Satisfação e Orgulho: Indica um momento em que o consultente se sente feliz, pleno e orgulhoso de suas conquistas e do trabalho árduo realizado até então.",
        "Transição Afetiva: Simboliza o desprendimento de um mundo afetivo antigo para fundar um novo, exigindo sabedoria e abnegação.",
        "Palavras-chave: Realização, contentamento, desapego emocional, \"vontade atendida\", sabedoria e transição.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Semblante de Satisfação: No centro da cena, um homem de meia-idade está sentado em um banco rústico de madeira. Ele exibe um sorriso sereno e plenamente satisfeito no rosto, transmitindo a sensação de quem alcançou exatamente o que desejava e agora desfruta do momento.",
        "Braços Cruzados (O Sentido de Posse): Ele mantém os braços firmemente cruzados sobre o peito. Diferente do Quatro de Copas, onde os braços cruzados indicavam apatia e fechamento defensivo para o mundo, aqui o gesto simboliza auto-suficiência, contentamento e orgulho. Ele está guardando e protegendo suas próprias conquistas.",
        "As Vestes Suntuosas: O homem usa uma túnica longa, branca com listras escuras, e um chapéu/turbante alaranjado com uma pena. Suas roupas sugerem uma posição de conforto material, riqueza e bem-estar físico.",
        "A Disposição em Arco das Nove Taças: Atrás do homem, elevando-se acima de sua cabeça, nove taças douradas estão perfeitamente alinhadas sobre uma estrutura ou mesa semicircular coberta por um tecido azul claro. O arranjo em forma de arco ou coroa funciona visualmente como uma vitrine de troféus. As taças estão de pé, intactas e organizadas, mostrando que suas emoções, relacionamentos e desejos estão em perfeita ordem e segurança. Elas emolduram o homem, indicando que ele é o centro e o arquiteto daquela abundância.",
        "A Cortina de Intimidade: O tecido azul que cobre a mesa e cai como uma cortina ao fundo delimita um espaço privado. O azul reforça a ligação com o elemento Água (emoções, paz de espírito e intuição), sugerindo que essa satisfação também traz calmaria interna.",
        "O Céu/Fundo Amarelo: O plano de fundo da carta é preenchido por um amarelo vivo e sólido. Na gramática visual do Tarot, o amarelo representa a energia solar, a vitalidade, a clareza mental, a alegria e a manifestação do sucesso na realidade tangível. Ele ilumina toda a cena, eliminando qualquer sombra de dúvida ou melancolia das cartas anteriores (como o Cinco ou o Sete de Copas)."
      ],
    },
    {
      title: "O Nove de Copas em Leituras",
      content: [
        "Positivo (Em pé): É um excelente sinal para qualquer pergunta sobre amor, carreira ou finanças. Indica que seus sonhos e manifestações estão sendo concedidos, trazendo paz interior e harmonia. Representa o amor consciente e a capacidade de amar a humanidade além do benefício pessoal.",
        "Negativo (Invertido/Desafiador): Alerta para uma crise emocional, nostalgia ou medo da perda. Pode sinalizar que, embora o desejo tenha sido realizado, o consultente ainda sente que \"algo está faltando\" ou que seus sonhos ainda estão demorando a se concretizar, gerando frustração.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Nove representa o Grau 9 (crise benéfica e desprendimento).",
        "No centro Emocional, ele marca o estágio de sabedoria onde se aceita o fim de um ciclo afetivo para permitir a evolução.",
        "Corresponde simbolicamente à sabedoria solitária d'O Eremita (VIIII) e à renovação de O Sol (XVIIII) nos Arcanos Maiores.",
      ],
    },
  ],
  "dez-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Amor Realizado: Indica uma vida amorosa plena e a chegada ao limite máximo do desenvolvimento emocional.",
        "Sublimação e Santidade: Representa o ideal de que o coração, estando transbordante, torna-se uma potência de ação altruísta, seguindo o lema: \"Nada para mim que não seja para os outros\".",
        "Palavras-chave: Conclusão de ciclo, vida amorosa realizada, mutação, plenitude, altruísmo e transição material.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Braços Erguidos: No canto esquerdo inferior, vemos um homem e uma mulher de costas para o observador. Ambos estão com um dos braços carinhosamente entrelaçados na cintura do parceiro e o outro braço estendido e erguido em direção ao céu. Esse gesto corporal aberto e direcionado para o alto é um símbolo universal de louvor, gratidão e reverência pelas bênçãos recebidas da vida. Eles não estão apenas testemunhando a beleza do momento, mas celebrando-a ativamente juntos.",
        "Inocência e Continuidade: À direita do casal, duas crianças (um menino e uma menina) dão-se as mãos e dançam alegremente em círculos. A presença dos filhos na cena traz a ideia de posteridade, herança emocional e estabilidade familiar. A dança infantil evoca o retorno daquela pureza espontânea que vimos lá no Seis de Copas, mostrando que a alegria nessa casa é genuína, livre de tensões e renovável.",
        "A Aliança Cósmica: Dominando a metade superior da carta, um arco-íris brilhante corta o céu azul. Na tradição esotérica e mitológica, o arco-íris é o símbolo supremo da promessa cumprida, da paz após a tempestade e da união entre o divino e o terreno.",
        "As Dez Taças Alinhadas: Incrustadas e flutuando perfeitamente dentro do arco-íris, dez taças douradas formam um arco invertido que espelha a curvatura celeste. Elas estão de pé e preenchidas, simbolizando que a jornada emocional atingiu sua plenitude transbordante. Não há lacunas na estrutura (ao contrário do espaço vazio do Oito de Copas); o ciclo está perfeitamente fechado e completo.",
        "A Casa no Horizonte: Ao fundo da cena, aninhada entre árvores verdes e colinas suaves, vemos uma pequena e aconchegante casa de campo com telhado vermelho. Essa casa representa o conceito material e espiritual de \"lar\". Mostra que aquela felicidade não é abstrata ou passageira (como no Sete de Copas), mas possui raízes, estabilidade e um porto seguro e físico onde se manifestar.",
        "O Rio que Corre: Próximo à casa, há um rio azul que corta o terreno fértil. O rio, que em cartas anteriores simbolizava transição ou o fluxo do luto (como no Cinco de Copas), aqui representa a fluidez natural e pacífica da vida, irrigando a terra e garantindo que os sentimentos continuem se renovando de forma saudável."

      ],
    },
    {
      title: "O Dez de Copas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza que a realização emocional foi atingida e que é chegado o momento de passar à ação no mundo. Indica um coração preenchido, pronto para servir e para comunhão.",
        "Negativo (Desafiador): Alerta para o bloqueio e a recusa em evoluir. Pode representar uma pessoa que se nega a passar para um novo estágio onde voltará a ser principiante, ou sinais de venalidade e não aceitação de si mesmo.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na estrutura do Tarot, o Dez de Copas marca o ponto em que as emoções atingem tal maturidade que precisam se manifestar na matéria viva.",
        "Este processo de engendramento cíclico mostra que o intelecto (Espadas) leva ao amor (Copas), o amor leva à matéria (Ouros) e a matéria leva à criatividade (Paus).",
        "Assim, o Dez de Copas é a \"ponte\" necessária para que o amor deixe de ser apenas um sentimento e passe a produzir vida nova ou ações concretas no mundo.",
      ],
    },
  ],
  "pajem-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Desejo de Amar e Hesitação: Simboliza a dúvida fundamental do coração: \"Amar ou não amar?\". Representa alguém que se prepara para o amor, mas que ainda hesita entre a doação total e o isolamento defensivo.",
        "Nova Oportunidade Emocional: Sinaliza a chegada de uma mensagem, uma oferta amorosa, um convite para um encontro ou uma nova ideia criativa que traz bem-estar.",
        "Intuição e Sensibilidade: É um dos maiores indicadores de dons intuitivos, empatia e mediunidade no Tarot.",
        "Palavras-chave: Desejo de amar, timidez, idealismo romântico, intuição, mensagem amorosa, sensibilidade e imaturidade emocional.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Inconsciente Comunicativo: O elemento visual mais marcante e famoso desta carta é um peixe real que coloca a cabeça para fora da taça dourada que o Pajem segura. O Pajem não parece assustado; pelo contrário, ele olha para o peixe com curiosidade e atenção, estabelecendo uma conexão direta. Em termos arquetípicos, a taça representa a mente consciente e o peixe simboliza um insight, um sonho, uma inspiração criativa ou uma mensagem direta do fundo do inconsciente que emerge para a superfície. Mostra que ele está perfeitamente sintonizado com sua intuição, por mais bizarra ou inesperada que a mensagem pareça.",
        "A Mente Sonhadora: O Pajem usa um adereço de cabeça muito característico: um chapéu ou boina azul com um longo lenço azul-esverdeado que flui suavemente ao redor do seu pescoço.",
        "A Estampa de Flores: Sua túnica é ricamente decorada com uma estampa de flores rosadas (lírios d'água ou lótus estilizadas) sobre um fundo claro. Esse visual florido e suave reforça sua natureza sensível, artística, romântica e pacífica. Ele não veste armaduras pesadas; sua pele está coberta de arte e natureza.",
        "As Meias e Mangas Vermelhas: Enquanto o azul e as estampas florais ligam o Pajem à água e à tranquilidade, ele veste meias calças e mangas compridas em um tom de vermelho vivo. O vermelho injeta uma dose necessária de paixão, entusiasmo juvenil e ação à carta. Indica que, apesar de ser um sonhador e viver no mundo da imaginação, ele possui o fogo e o vigor necessários para expressar esses sentimentos e levar suas mensagens adiante no mundo real.",
        "O Mar Agitado ao Fundo: O Pajem está de pé sobre uma faixa de areia dourada, mas logo atrás dele vemos o mar com ondas sinuosas e bem marcadas. Ao contrário das águas calmas e controladas de outras cartas, esse mar em movimento representa as emoções humanas profundas, mutáveis e às vezes turbulentas. O fato de ele estar de costas para o mar, mas perfeitamente equilibrado e tranquilo, mostra que ele não tem medo das profundezas emocionais; ele extrai delas a sua magia (o peixe) sem se afogar na instabilidade."
      ],
    },
    {
      title: "O Pajem de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica o início de um romance, um flerte ou uma reconciliação. Pode representar uma criança, um jovem romântico ou uma pessoa de qualquer idade que está redescobrindo sua capacidade de se encantar. Sugere que se deve confiar na intuição e estar aberto a novas experiências emocionais.",
        "Negativo (Invertido/Desafiador): Alerta para o bloqueio emocional fundamentado em medos infantis ou feridas do passado. Pode sinalizar imaturidade, um \"eterno principiante\" no amor, sofrimento amoroso devido à timidez ou uma pessoa que se perde em devaneios sem concretizar nada.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Pajens situam-se entre o Grau 2 (acumulação/gestação) e o Grau 3 (primeira ação/explosão).",
        "No centro Emocional, o Pajem de Copas simboliza o desejo de ser, amar e sentir, funcionando como um aprendiz que ainda não possui o pleno domínio de suas águas internas.",
        "Simbolicamente, ele compartilha a energia de juventude e potencialidade presente no arcano O Namorado (VI).",
      ],
    },
  ],
  "cavaleiro-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Mestre do Coração: Simboliza alguém que segue os próprios sonhos e o coração com vigor e força, não deixando que nada o detenha.",
        "Ação e Missão: Representa o amor que se torna uma força concreta, manifestando-se em ações missionárias, atos humanitários ou na reparação de erros passados.",
        "Proposta Emocional: Indica a chegada de uma oferta amorosa, uma nova experiência emocionante ou alguém que entra na vida do consulente trazendo notícias que tocam a alma.",
        "Palavras-chave: Amor sincero, seguidor do coração, sonhador ativo, cura, diplomacia, proposta romântica e abnegação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Ritmo da Calmaria: Ao contrário dos cavalos empinados ou em disparada dos outros naipes (como Paus e Espadas), o cavalo cinza ou branco do Cavaleiro de Copas caminha em um passo lento, cadenciado e sereno. Isso indica que o Cavaleiro não tem pressa. Ele desfruta da jornada emocional, agindo com diplomacia, gentileza e suavidade. A cor clara do cavalo simboliza a pureza de intenções, a paz e a espiritualidade que guiam suas ações.",
        "A Túnica com Estampa de Peixes: Sobre a armadura, ele veste uma túnica decorada com peixes vermelhos nadando. O peixe é o símbolo máximo do elemento Água e do inconsciente (como vimos espiando na taça do Pajem). O fato de os peixes serem vermelhos indica que suas emoções profundas e sua intuição estão carregadas de paixão, desejo e vitalidade. Ele é motivado pelo amor e pela expressão artística do que sente.",
        "As Asas no Elmo e nos Pés: Tanto no elmo quanto em suas botas de armadura, encontramos pequenas asas estilizadas. Esse detalhe visual remete diretamente a Hermes/Mercúrio, o mensageiro dos deuses, sugerindo que este cavaleiro traz consigo mensagens afetivas, propostas de amor ou convites poéticos. As asas também simbolizam uma imaginação fértil, pensamentos elevados e a capacidade de se elevar acima da crueza do mundo material através da arte e do sentimento.",
        "O Oferecimento Solene da Taça: O Cavaleiro segura uma única taça dourada com a mão direita, estendendo-a para a frente de forma solene, quase como se estivesse oferecendo um brinde ou um presente precioso. Ao contrário do Pajem, ele não está olhando para dentro da taça com surpresa; ele foca no horizonte, sabendo exatamente o valor do afeto ou da proposta que carrega. Ele é o portador do Graal, o mensageiro que convida o outro a partilhar de seus sentimentos.",
        "A Paisagem Árida e o Rio ao Fundo: Curiosamente, o Cavaleiro cavalga por um terreno que parece plano e árido ao fundo, sob um céu amarelo. No entanto, um rio azul corta a paisagem de forma mansa próximo a ele. Esse contraste reforça que a missão do Cavaleiro de Copas é trazer sensibilidade e frescor emocional para onde há secura. Seu rio de sentimentos irriga o deserto da rotina, transformando o ambiente através do afeto, do romance e da inspiração criativa."
      ],
    },
    {
      title: "O Cavaleiro de Copas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza um período de paz e harmonia, o encontro de um amor sincero ou a disposição de se sacrificar por uma causa espiritual. Pode representar um terapeuta, um santo ou alguém que serve ao mundo com caridade.",
        "Negativo (Invertido/Desafiador): Alerta para alguém que passa tempo demais sonhando e pouco agindo, ou que se sente com o coração partido. Pode indicar também uma pessoa excessivamente sensível, instável ou que usa a sedução de forma manipuladora.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Cavaleiros situam-se entre o Grau 8 (perfeição) e o Grau 9 (crise de transição), atuando como mensageiros que levam a energia de seu naipe para fora do \"palácio\".",
        "O Cavaleiro de Copas marca o final do ciclo emocional e, em sua jornada, ele se dirige ao próximo elemento: o Ás de Ouros, transformando o amor espiritualizado em matéria e vida concreta.",
      ],
    },
  ],
  "rainha-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Maturidade Afetiva: Representa uma pessoa (frequentemente uma figura materna ou amiga próxima) que é amorosa, compassiva e que tem os melhores interesses do consulente em mente.",
        "Intuição e Sensibilidade: É considerada a mais psíquica de todas as rainhas, agindo como um espelho que reflete as emoções ao seu redor, mas permanecendo incrivelmente centrada.",
        "Nurturação: Como todas as Rainhas, ela simboliza o estágio de nutrir um projeto ou sentimento que foi iniciado.",
        "Palavras-chave: Amor incondicional, intuição, dedicação, acolhimento, autocontrole emocional e sabedoria do coração.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Mistério Oculto: O elemento visual mais crucial é a taça que ela segura com ambas as mãos. Ao contrário de todas as outras taças do naipe (que são abertas), a taça da Rainha é fechada com uma tampa em forma de cúpula ou igreja e ricamente adornada com querubins ou figuras aladas. Isso simboliza que os pensamentos e sentimentos da Rainha vêm de um lugar sagrado, profundo e inacessível para o observador comum. Ela guarda os mistérios do inconsciente; seus sentimentos não estão expostos de forma leviana, mas são guardados como um tesouro espiritual.",
        "A Conexão com a Origem: A Rainha está sentada em um trono de pedra localizado exatamente na orla, onde a terra firme encontra a água. Seus pés descansam sobre seixos e conchas coloridas na areia, e a água do mar chega a tocar a base do seu manto. Essa proximidade mostra que ela está em perfeita comunhão com o mar das emoções humanas, agindo como uma ponte entre o consciente (terra) e o inconsciente (mar).",
        "A Iconografia do Trono: O trono de pedra é esculpido com figuras de pequenos querubins (bebês alados) e conchas marinhas. Um dos querubins é visível na lateral da base do trono, segurando uma concha. Esses adornos reforçam sua ligação com o nascimento, a fertilidade emocional, a doçura e a proteção divina sobre o reino dos sentimentos.",
        "O Manto Fluido e Texturizado: A Rainha veste uma túnica branca e um manto longo que flui de seus ombros, misturando tonalidades de azul e branco. O padrão visual do tecido possui ondulações que mimetizam perfeitamente as ondas e os reflexos da água. Visualmente, parece que ela está envolta no próprio oceano, mostrando que sua identidade está completamente integrada ao elemento Água.",
        "O Olhar Fixo e Contemplativo: A Rainha está representada de perfil, com a cabeça levemente inclinada em direção à taça. Seu olhar está inteiramente fixado no objeto sagrado que segura. Esse posicionamento visual indica introspecção profunda. Ela não está prestando atenção no mundo exterior, nos castelos ou nas ações práticas; ela está lendo os sinais internos da alma, decifrando sonhos, premonições e sentimentos ocultos."
      ],
    },
    {
      title: "A Rainha de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica uma mulher carinhosa, uma \"boa mãe\" ou uma conselheira paciente no trabalho. Sugere que o consulente deve seguir sua intuição e agir com bondade.",
        "Negativo (Invertido/Desafiador): Alerta para o perigo do ciúme, da possessividade e de uma afetividade sufocante. Pode representar alguém emocionalmente instável, manipulador ou uma pessoa que se sente drenada por cuidar demais dos outros e negligenciar a si mesma.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, as Rainhas ocupam o Grau 4 (estabilidade), mas com uma tendência ao Grau 5 (novo ideal), situando-se entre uma afeição estável e a aspiração por um amor mais elevado ou espiritual.",
        "Elementamente, ela é descrita como \"Água de Água\" (o posto de Rainha é água e o naipe de Copas também), o que a torna a personificação máxima da fluidez emocional.",
        "Ela forma o par ideal com o Rei de Copas, representando a união da receptividade com a autoridade benevolente.",
      ],
    },
  ],
  "rei-de-copas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Mestre da Estabilidade Emocional: Simboliza uma pessoa incrivelmente calma, equilibrada e em pleno controle de suas emoções, mesmo quando as situações ao redor são difíceis ou \"águas agitadas\".",
        "Autoridade Benevolente: Diferente de outros reis mais rígidos, ele governa através do amor, da compaixão e da diplomacia, colocando-se muitas vezes a serviço dos outros.",
        "Sabedoria e Cura: Representa o \"mestre do coração\" ou um terapeuta nato, alguém que cura através da escuta e da aceitação profunda.",
        "Palavras-chave: Bondade, calma, proteção, maturidade emocional, diplomacia, cura, altruísmo e santidade.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Trono Flutuante sobre o Mar Agitado: O Rei está sentado em um trono de pedra cinza que parece flutuar ou estar fixado em um bloco de concreto diretamente sobre as ondas do mar aberto. Ao seu redor, as águas estão visivelmente revoltas e em movimento. Esse contraste visual é a essência da carta: o mundo ao redor ou as emoções internas podem estar em total turbulência, mas o Rei permanece imperturbável, estável e centrado. Ele derrama calma sobre o caos.",
        "A Emoção Controlada: Na mão direita, ele segura uma grande taça dourada aberta. Ao contrário da Rainha, seus sentimentos estão disponíveis e prontos para serem usados em prol do reino de forma consciente e ponderada. Ele não foca o olhar na taça, mostrando que não é refém do que sente.",
        "O Cetro do Domínio Sutil: Na mão esquerda, ele segura um cetro dourado cuja ponta imita a forma de uma flor de lótus ou lírio d'água. O cetro reafirma seu poder político e espiritual, mostrando que sua autoridade é exercida através da diplomacia, da compaixão e da sensibilidade, e não pela força bruta.",
        "O Peixe Saltando: À esquerda, um peixe salta das águas agitadas. O peixe (como vimos no Pajem) representa o inconsciente, os insights e o instinto primitivo. O fato de ele apenas saltar sem desestabilizar a cena mostra que o Rei reconhece e dá liberdade às suas intuições, mantendo-as em harmonia com a razão.",
        "O Navio Navegando: À direita, um navio de velas vermelhas navega firmemente pelas ondas. O navio simboliza o comércio, a civilização e as jornadas no mundo material. Ele indica que, sob o governo calmo deste Rei, a vida prática e os empreendimentos humanos conseguem seguir seu curso em segurança, atravessando as tormentas emocionais.",
        "O Colar com o Pingente de Peixe: O Rei usa uma túnica azul-esverdeada (a cor do mar) sob um manto amarelo vivo revestido com uma gola vermelha. Sobre o peito, destaca-se um colar pesado com um pingente em formato de peixe estilizado. Esse adorno funciona como um selo ou brasão real: ele carrega o símbolo das profundezas colado ao coração, mostrando que sua verdadeira força e sabedoria nascem da sua imensa inteligência emocional."
      ]
    },
    {
      title: "O Rei de Copas em Leituras",
      content: [
        "Positivo (Em pé): Indica uma pessoa de confiança, um conselheiro sábio, um pai amoroso ou um mestre espiritual. Sugere que o consulente deve agir com compaixão e manter a calma para resolver conflitos. Pode representar também um sucesso fundado em relações humanas calorosas.",
        "Negativo (Desafiador): Alerta para a manipulação emocional e a instabilidade. Pode representar um perverso narcisista, um hipócrita ou alguém que, por estar amargurado, verte ódio sobre sua família e sobre o mundo. Em casos extremos, sinaliza vícios como o alcoolismo usado para anestesiar a dor.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Reis situam-se entre o Grau 6 (prazer e beleza) e o Grau 7 (ação irresistível no mundo).",
        "O Rei de Copas representa o estágio em que o amor deixa de ser apenas uma emoção privada e se torna uma potência de ação altruísta.",
        "Ele forma o par ideal com a Rainha de Copas, simbolizando o equilíbrio perfeito entre a recepção dos mistérios do coração e a autoridade benevolente para aplicá-los na realidade.",
      ],
    },
  ],
  "as-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Clareza e Avanço: Indica um momento de \"estalo\", uma nova ideia ou uma descoberta que traz clareza a uma situação confusa.",
        "Vitória e Determinação: Simboliza a vitória alcançada através da inteligência, da astúcia e do discernimento. Representa a capacidade de tomar decisões firmes.",
        "O Verbo e a Lógica: Como símbolo do Verbo, a espada deve ser forjada e afiada como a inteligência. Ela representa a lógica, o pensamento racional e a autoridade intelectual.",
        "Palavras-chave: Nova ideia, clareza, verdade, vitória, intelecto, decisão e comunicação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Mão Divina que Emerge da Nuvem: Assim como nos outros ases, uma mão branca e luminosa emerge de uma nuvem cinzenta e densa no lado esquerdo da carta. Essa mão representa uma dádiva ou intervenção divina, mas aqui focada na mente. É o lampejo de lucidez, a verdade que é oferecida ao consultante, ou uma súbita clareza mental que surge em meio à confusão (as nuvens).",
        "A Firmeza do Punho: A mão segura a espada pela empunhadura com enorme firmeza. Não há hesitação; o gesto transmite controle absoluto, retidão e autoridade.",
        "A Lâmina de Dois Gumes: Uma grande espada de aço ergue-se perfeitamente vertical no centro da cena. A espada aponta para o alto, simbolizando que o intelecto deve ser direcionado para a verdade maior e para a justiça. Sendo uma arma de dois gumes, ela corta para os dois lados, servindo tanto para defender e libertar quanto para destruir e ferir.",
        "A Coroa de Ouro: A ponta da espada transpassa uma coroa dourada. A coroa simboliza o triunfo, o sucesso e a soberania da mente sobre a matéria. Mostra que o pensamento claro e a verdade são os verdadeiros vencedores.",
        "O Ramo de Oliveira (Esquerda): Tradicionalmente decorado com pequenas folhas e frutos, simboliza a paz, a reconciliação e a harmonia. Mostra que a justiça e a verdade buscam, em última análise, a pacificação.",
        "A Folha de Palmeira (Direita): Simboliza a vitória, a resiliência e o triunfo espiritual diante do sofrimento.",
        "As Seis Centelhas Yods: Flutuando ao redor da lâmina, vemos seis pequenas faíscas amarelas que se assemelham à letra hebraica Yod. Essas centelhas representam a presença da centelha divina, da inteligência cósmica e da luz espiritual que emana daquela espada. Elas indicam que as decisões tomadas sob a influência desta carta estão alinhadas com uma verdade maior.",
        "A Paisagem Montanhosa e Árida ao Fundo: Na base da carta, abaixo da mão, avistamos uma fileira de montanhas escarpadas e pontiagudas, pintadas em tons frios de cinza e azul, sob um céu claro. Ao contrário das paisagens férteis e floridas do naipe de Copas, este cenário é árido, alto e desprovido de vegetação. Ele reflete o reino do intelecto puro: um lugar de distanciamento emocional, objetividade, lógica e racionalidade fria. Para ver as coisas como elas realmente são, é preciso elevar-se acima do calor das emoções."
      ],
    },
    {
      title: "O Ás de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Confirma que a intuição do consulente sobre outra carta está correta e que o sucesso virá se houver ação. No amor, pode sinalizar o início de uma relação com excelente comunicação e conversas estimulantes. Na carreira, indica uma nova oferta de emprego ou um papel que desafiará o cérebro, algo que exige foco e racionalidade.",
        "Negativo (Invertido/Desafiador): Sinaliza confusão mental, falta de clareza ou comunicação ríspida e maldosa. Pode indicar agressão verbal, palavras que ferem e uma superestimação perigosa do intelecto em detrimento da matéria.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Ás representa o Grau 1 (totalidade em potência) aplicado ao elemento Ar. Ele é o \"germe\" do intelecto que busca a origem e a unidade na consciência.",
        "Jodorowsky observa que, enquanto o Ás de Paus (fogo) é um chamado do futuro, o Ás de Espadas parte do passado (o punho) para atravessar o presente (a coroa) e retornar à fonte espiritual.",
      ],
    },
  ],
  "dois-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Impasse e Indecisão: Reflete uma situação de confusão, onde o indivíduo se sente dividido entre duas opções e não sabe qual caminho seguir.",
        "Bloqueio Mental: Pode indicar que a pessoa está evitando tomar uma decisão deliberadamente (\"colocando a venda em si mesma\") ou que não consegue enxergar a verdade de uma situação.",
        "Devaneio: Representa uma acumulação de projetos, informações e teorias que ainda não possuem uma estrutura prática ou aplicação real.",
        "Palavras-chave: Acumulação de pensamentos, impasse, hesitação, preparação, equilíbrio precário e dúvida intelectual.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Venda nos Olhos: A figura feminina central está com os olhos cobertos por uma venda branca. Isso simboliza que ela está recusando-se a enxergar a realidade dos fatos ou que há um dilema tão grande que ela preferiu \"fechar os olhos\" para o mundo externo. Por outro lado, a venda também aponta para a busca por uma justiça cega e imparcial: ela tenta ignorar as distrações visuais e as aparências externas para tentar tomar uma decisão baseada puramente na lógica interna (ou na negação).",
        "A Defesa do Coração: Ela segura duas pesadas espadas de aço, uma em cada mão, cruzando-as bem em frente ao peito. Esse gesto em \"X\" forma uma barreira física que protege o seu coração (suas emoções), sugerindo que ela trancou seus sentimentos para não ser vulnerável.",
        "O Equilíbrio das Forças (Impasse): As espadas apontam para direções opostas, perfeitamente simétricas. Isso mostra que existem dois pensamentos, caminhos ou argumentos de igual peso colidindo. Não há movimento; a postura exige tanto esforço para ser mantida que gera uma estagnação rígida.",
        "Emoções Reprimidas: Atrás da mulher, estende-se um mar azul com pequenas ondas. Como a água rege o mundo emocional, o fato de o mar estar atrás dela — e de ela estar de costas e vendada — reforça que ela está ignorando completamente a sua intuição e os seus sentimentos para tentar resolver tudo friamente com a mente.",
        "Obstáculos Ocultos: Pequenas ilhas rochosas e pontiagudas surgem da água. Essas rochas representam perigos, fatos espinhosos ou dificuldades reais que ela precisará enfrentar assim que decidir tirar a venda e navegar por essas águas.",
        "A Lua Crescente no Céu: No canto superior direito, brilha uma fina lua crescente amarela. A presença da lua reforça a energia da intuição, do feminino e do subconsciente que está rondando a situação. No entanto, por ser apenas um filete de lua, essa luz intuitiva é fraca no momento, indicando que a mente lógica (Espadas) está obscurecendo a sabedoria interna, ou que a resposta definitiva ainda vai demorar um pouco para amadurecer.",
        "A Túnica Branca: A mulher veste uma túnica branca e longa, uma cor associada à neutralidade, pureza e paz. Ela não quer tomar partido de nenhum dos lados do dilema ainda.",
        "O Banco de Pedra: Ela está sentada em um bloco ou banco de pedra cinza e maciço, colocado sobre um piso plano e firme. A pedra reforça que a situação está \"petrificada\". Não há ação, não há passos em falso; ela escolheu sentar-se e esperar que o impasse se resolva por si só ou adiar a escolha o máximo possível."
      ],
    },
    {
      title: "O Dois de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Funciona como um conselho para aquietar a mente, focar e manter a calma para que a decisão correta se revele naturalmente. Indica que se está em uma fase de preparação e estudo.",
        "Negativo (Invertido/Desafiador): Sinaliza uma confusão extrema onde todas as opções parecem ruins, ou um estado de pessimismo e preguiça intelectual. Pode representar também desonestidade consigo mesmo ou falta de concentração.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Dois representa o Grau 2 (acumulação passiva e gestação) aplicado ao centro Intelectual.",
        "Ele corresponde simbolicamente à passividade d'A Papisa (II) e d'O Enforcado (XII), indicando um momento em que as ideias estão sendo preparadas, mas ainda não foram postas em prática.",
        "Este Arcano marca o ponto em que o intelecto é como uma semente que acumula força: se a pessoa permanecer demais neste estado, corre o risco de estagnar e \"apodrecer\" mentalmente. O desafio é lidar com a dualidade dos conceitos sem se deixar paralisar por eles, preparando o terreno para a explosão criativa do próximo grau.",
      ],
    },
  ],
  "tres-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Dor e Desgosto: É frequentemente descrita como uma das cartas mais tristes do Tarot de Rider-Waite, representando sofrimento, mágoa, traição e rejeição.",
        "Conflito Verbal: Como o naipe de Espadas rege a mente e as palavras, a dor aqui costuma ser atribuída a alguém que fere o consulente com palavras ou jogos mentais.",
        "Entusiasmo Intelectual: Em um sentido mais voltado para o pensamento (Marselha), indica uma eclosão fanática de opiniões, paixão pelos estudos e uma atividade mental intensa.",
        "Palavras-chave: Heartache, traição, sofrimento, luto, entusiasmo intelectual, fanatismo e transformação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Alvo da Dor: Um grande coração vermelho e perfeitamente simétrico flutua no centro da imagem. No Tarot, o coração é o símbolo universal do amor, do afeto, das emoções mais profundas e da vulnerabilidade humana. Ao contrário das cartas de Copas, onde o sentimento é contido ou celebrado em taças, aqui o âmago emocional está totalmente exposto e serve de alvo para o elemento Ar (os pensamentos e as palavras).",
        "O Ataque da Realidade: Três espadas de aço cruzam-se em uma geometria precisa, perfurando o coração de cima para baixo. Duas espadas entram pelas diagonais e uma desce verticalmente pelo centro. As espadas representam o intelecto, a verdade nua e crua, as notícias difíceis, as palavras cortantes ou uma decisão racional que estraçalha uma fantasia afetiva. Elas mostram que a dor aqui não é um acidente físico; é o resultado de um choque de realidade, de uma verdade que machuca, mas que precisa ser assimilada pela mente.",
        "O Clima Psicológico: O fundo da carta é dominado por nuvens escuras, densas e cinzentas que cobrem todo o céu. Não há vestígio do amarelo solar ou do azul pacífico de outras cartas. As nuvens representam a confusão mental, a névoa do choro e o peso da tristeza que se abate sobre a psique. O cenário evoca um estado de espírito onde tudo parece cinzento e opaco.",
        "As Linhas de Chuva: Caindo das nuvens pesadas, linhas verticais e finas de chuva cobrem o plano de fundo. A chuva funciona como uma metáfora visual perfeita para o choro e a purificação através das lágrimas. O céu chora junto com o coração partido, mostrando que o ambiente está imerso em um processo necessário de escoamento da dor. A água (emoção) cai livremente, rompendo a repressão que vimos no Dois de Espadas."
      ],
    },
    {
      title: "O Três de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza a eclosão das primeiras ideias de um projeto, sucesso em exames ou um forte desejo de evolução intelectual. Pode sugerir também a resolução de conflitos através do amor quando a mente se ancora no coração (\"um por todos e todos por um\").",
        "Negativo (Invertido/Desafiador): Indica o início de uma cura emocional e a liberação da dor. As espadas são simbolicamente retiradas, permitindo a recuperação do sofrimento profundo. Pode também representar dispersão, falta de continuidade nos planos ou teimosia intelectual.",
        "Uso Prático: No processo criativo, esta carta ajuda a delinear os passos necessários para executar um projeto, oferecendo o discernimento para fazer escolhas críticas.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Três é o número da explosão ativa e da adolescência.",
        "No centro Intelectual, isso se traduz em um intelecto que ainda não diferencia bem entre \"crer\" e \"saber\", agindo com pura espontaneidade e vigor.",
        "Corresponde simbolicamente à fertilidade de A Imperatriz (III) e à necessidade de limpeza radical do Arcano sem Nome (XIII).",
        "Astrologicamente, é associado a Saturno em Libra.",
      ],
    },
  ],
  "quatro-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Repouso e Recuperação: É essencialmente uma carta de descanso, recuperação e tempo de inatividade para restaurar as energias.",
        "Estabilidade Mental: Indica ideias racionais bem assentadas e uma mente organizada, correspondendo à segurança do Imperador (IIII) e da Temperança (XIIII).",
        "Introspecção Necessária: Sugere um estágio significativo onde é preciso preservar a energia e se preparar sozinho para o que virá a seguir.",
        "Palavras-chave: Estabilização, repouso, meditação, ideias racionais, recuperação e isolamento temporário.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Descanso do Guerreiro: O elemento central da carta é a figura de um cavaleiro deitado de costas sobre um túmulo ou altar de pedra dentro de uma igreja ou cripta. Suas mãos estão unidas em posição de prece ou meditação sobre o peito. O cavaleiro está totalmente paramentado com sua armadura, o que indica que a guerra lá fora não necessariamente acabou, mas ele escolheu tirar um momento de imobilidade absoluta para recarregar suas energias. A mente (Espadas) precisa silenciar para que o corpo e a alma sobrevivam.",
        "As Três Espadas na Parede: Penduradas verticalmente na parede, apontando para baixo em direção à cabeça e ao peito do cavaleiro, vemos três espadas alinhadas. Elas representam as dores, os traumas e os pensamentos difíceis do Três de Espadas que foram, temporariamente, externalizados. O cavaleiro as tirou de seu coração e as colocou na parede; elas ainda existem, mas não o estão ferindo no momento.",
        "A Quarta Espada no Altar: Uma única espada está esculpida ou deitada horizontalmente logo abaixo do corpo do cavaleiro, na base do altar. Essa espada representa a sua própria mente em repouso. Ela está guardada e deitada, pronta para ser empunhada novamente quando a trégua terminar.",
        "Conexão Espiritual e Esperança: No canto superior esquerdo, rompe-se a monotonia cinzenta da pedra com um belo vitral colorido de uma janela eclesiástica. O vitral retrata uma figura humana ajoelhada diante de outra, sugerindo cura, santuário e auxílio espiritual. Visualmente, a luz que atravessa o vitral traz calor e cor para o ambiente frio da tumba. Mostra que, enquanto o guerreiro descansa no plano físico e mental, há um processo de restauração espiritual e proteção invisível acontecendo ao seu redor.",
        "Arquitetura de Pedra Cinzenta: O predomínio de linhas retas e tons de cinza e ocre reforça a energia de estabilidade, silêncio e confinamento saudável. A pedra isola o cavaleiro do barulho do mundo exterior, garantindo que ninguém perturbe o seu recolhimento."
      ],
    },
    {
      title: "O Quatro de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Funciona como um conselho para desacelerar, meditar e reabastecer as próprias forças. Pode indicar que o consulente atingiu um nível de maturidade intelectual onde suas crenças lhe dão base sólida para viver.",
        "Negativo (Invertido/Desafiador): Sinaliza a falta de tempo para si mesmo ou o ato de evitar momentos de silêncio por medo de encarar os próprios pensamentos. Alerta para o perigo de estagnação intelectual (ficar preso na mesma estrutura sem evoluir) ou um esgotamento iminente (burnout) por não saber descansar.",
        "Combinações Específicas: Quando combinado com o arcano A Força (XI), pode indicar a doença ou a recuperação de um animal de estimação.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o nível 4 representa a perfeição do quadrado, ou seja, a estabilidade na matéria e nas ideias.",
        "No centro intelectual, isso se traduz em um momento de \"não ação\" consciente, onde o indivíduo se retira do caos externo para encontrar clareza interna antes de dar o próximo passo rumo ao ideal do Cinco.",
      ],
    },
  ],
  "cinco-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Novo Conhecimento e Ideal: Representa a aparição de um novo estudo, uma nova maneira de ver o mundo ou a abertura para um pensamento metafísico que supera o racionalismo do Quatro de Espadas.",
        "Conflito e Ego: No cotidiano, sinaliza desacordos onde o ego fala mais alto. Alguém deseja vencer a qualquer custo, mesmo que isso envolva táticas cruéis ou vingança.",
        "Decepção: Pode indicar um comportamento \"obscuro\" (shady), trapaça ou a sensação de que uma vitória não foi conquistada de forma honrosa.",
        "Palavras-chave: Novo ideal, descoberta intelectual, conflito de ego, decepção, traição e transição.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Orgulho e Desdém: A figura central em primeiro plano domina a cena. Ele olha para trás, em direção aos homens derrotados, com um sorriso de satisfação presunçosa e superioridade. Suas roupas em verde (crescimento/autoafirmação egoica) e vermelho (ação/agressividade) destacam sua energia dominante e combativa. Ele venceu o embate mental ou a disputa, mas sua postura visual carece totalmente de empatia ou fair play.",
        "As Duas Espadas no Ombro: O homem segura duas espadas apoiadas firmemente no ombro esquerdo, com as pontas viradas para cima. Elas representam as armas que ele confiscou de seus oponentes.",
        "A Terceira Espada no Chão: Ele apoia a ponta de uma terceira espada no chão com a mão direita, mantendo-a sob seu controle absoluto.",
        "As Duas Espadas Abandonadas: No chão, caídas de forma desordenada e cruzada à sua frente, estão as outras duas espadas. Elas foram desarmadas ou largadas pelos que perderam a batalha, simbolizando a perda de poder de defesa e a rendição forçada.",
        "Vergonha e Isolamento: Ao fundo, vemos dois homens se afastando em direção à água. A figura mais distante está com a cabeça baixa, enquanto a figura intermediária esconde o rosto com as mãos, em um gesto clássico de choro, humilhação e derrota. Eles foram desarmados não apenas de suas espadas, mas de sua dignidade. O distanciamento físico entre os três personagens acentua a quebra total de comunicação e de laços sociais.",
        "Instabilidade Mental: Ao contrário do céu limpo ou plano de outras cartas, o fundo apresenta nuvens cinzentas cortadas em linhas diagonais e angulares agressivas (nuvens em forma de \"estilhaços\"). Esse padrão visual evoca um ambiente de tensão residual, atmosfera pesada e caos mental. O conflito físico pode ter acabado, mas o clima psicológico continua extremamente hostil e fragmentado.",
        "Emoções Distantes: Ao fundo da planície, avista-se uma faixa de mar azul. A presença do elemento Água aqui indica que as emoções e os sentimentos foram empurrados para a margem da situação. No calor do debate lógico ou da disputa de poder (Espadas), a sensibilidade foi deixada de lado, restando apenas o terreno plano e frio da vitória racional."
      ],
    },
    {
      title: "O Cinco de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Pode indicar o início de um aperfeiçoamento intelectual, como retomar estudos ou se especializar em algo. Como conselho, sugere cautela contra a arrogância e a necessidade de alinhar o pensamento com a espiritualidade.",
        "Carreira e Amor: No trabalho, alerta para fofocas, sabotagem por parte de colegas ou um ambiente altamente competitivo. No amor, indica que o ego está bloqueando o progresso da relação ou que um dos parceiros é excessivamente autocentrado.",
        "Negativo (Invertido/Desafiador): Pode significar que o conflito ou a traição é pior do que se imaginava. Alternativamente, indica um período de cura e perdão, onde se decide abandonar o rancor e buscar a reconciliação. No plano intelectual, pode representar dogmatismo e opiniões hipócritas.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Cinco representa o Grau 5 (ponte e passagem), o ponto médio da série decimal.",
        "No centro intelectual, ele rompe a estabilidade do Quatro para buscar uma dimensão superior, correspondendo simbolicamente à mediação d'O Papa (V) e à descida às profundezas d'O Diabo (XV) nos Arcanos Maiores.",
        "Enquanto O Papa indica o ideal espiritual, o Cinco de Espadas tenta aplicar essa nova consciência no plano das ideias e da sociedade.",
      ],
    },
  ],
  "seis-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Movimento e Mudança: Representa o ato de deixar para trás uma situação que não serve mais (como o drama do Cinco de Espadas) em direção a um futuro mais positivo e tranquilo.",
        "Refinamento Intelectual: Indica um estado de espírito lúdico, pensamentos originais e a descoberta da beleza através da mente e da poesia.",
        "Transição Necessária: Embora possa haver uma tristeza residual ao abandonar o passado, a alma compreende que essa mudança é fundamental para o seu bem maior.",
        "Palavras-chave: Alegria de pensar, transição, viagem por água, mudança de circunstâncias para melhor, refinamento e superação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Jornada Guiada: Um homem, funcionando como um barqueiro, está em pé na popa de uma longa embarcação de madeira, empurrando-a com uma grande vara. Ele representa a força de vontade, a racionalidade prática ou um auxílio externo que conduz a mente no momento da crise.",
        "O Peso da Tristeza: Sentados na parte dianteira do barco estão uma mulher e uma criança pequena. A mulher está totalmente envolta em um manto ou cobertor ocre/amarelo, com a cabeça baixa. Sua postura corporal projeta luto, cansaço emocional e vulnerabilidade. Ela não olha para a frente nem para trás; ela apenas se permite ser carregada, indicando que, embora a transição seja necessária, a dor do que foi deixado para trás ainda está sendo processada.",
        "O Lado Direito do Mar (Turbulência): À direita da embarcação, a água apresenta ondulações nítidas e cristas agitadas em tons de azul e branco. Esse lado representa o passado recente, os problemas, as discussões e o caos emocional que motivaram a fuga.",
        "O Lado Esquerdo e à Frente do Mar (Calmaria): À esquerda e logo à frente da proa do barco, a água é perfeitamente lisa, plana e pacífica. A gramática visual mostra que o barco está se movendo exatamente na fronteira entre a turbulência e a paz, navegando em direção à tranquilidade.",
        "Carregando as Próprias Cicatrizes: Seis espadas de aço estão fincadas verticalmente e alinhadas na proa da embarcação, logo à frente dos passageiros. Elas formam uma espécie de barreira ou grade visual. Isso traz um simbolismo esotérico profundo: as espadas representam os pensamentos, as memórias e as dores acumuladas ao longo da jornada. O fato de estarem cravadas no barco mostra que você não esqueceu o passado, mas aprendeu a carregá-lo sem que ele afunde a sua estrutura. O conhecimento adquirido com a dor agora serve de proteção e bagagem para o futuro. Além disso, elas não estão ferindo ninguém; estão apenas guardadas.",
        "A Terra Distante ao Fundo: No horizonte, avista-se uma margem de terra firme adornada com árvores estilizadas em tons de azul e verde. Essa terra representa o destino final, a nova fase da vida ou um refúgio seguro onde os passageiros poderão desembarcar e reconstruir suas rotinas com os pés no chão. O porto seguro está à vista, reforçando que a situação atual de transição é temporária e o futuro é promissor."
      ],
    },
    {
      title: "O Seis de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza uma mudança benéfica de ambiente ou de estado mental. Pode indicar viagens (especialmente perto ou sobre a água) ou a resolução de problemas através de uma visão objetiva.",
        "Negativo (Invertido/Desafiador): Alerta para a dificuldade de \"deixar ir\" ou um sentimento de estar preso no passado. Pode indicar que o consulente está tentando fugir de um problema, mas acaba encontrando outro, ou que há falta de confiança em suas próprias ideias.",
        "Combinações: Quando acompanhado d'O Sol, pode indicar uma mudança para um clima mais quente; com O Eremita, sugere uma viagem solitária para as montanhas.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Seis representa o Grau 6 (beleza, prazer e descoberta do outro).",
        "No centro intelectual, isso se traduz no abandono do racionalismo estrito para abraçar a intuição e o prazer poético.",
        "Simbolicamente, corresponde às energias d'O Namorado (VI) e d'A Torre (XVI), representando o momento em que a consciência emerge da confusão e se abre para a harmonia.",
      ],
    },
  ],
  "sete-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Pensamento Receptivo: Representa o intelecto que atinge seu ápice ao deixar de impor suas crenças e passar a observar a realidade de forma objetiva.",
        "Estratégia e Astúcia: Frequentemente associado a agir de forma furtiva, estratégica ou \"fora da caixa\" para evitar conflitos diretos ou perdas maiores.",
        "Engano e Traição: Em leituras modernas (estilo Waite), é a carta clássica de trapaça, roubo ou comportamento dissimulado (\"alguém agindo pelas suas costas\").",
        "Palavras-chave: Pensamento elevado, visão objetiva, estratégia, dissimulação, independência mental e diplomacia.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
       "Ação Clandestina: A figura central é um homem que caminha na ponta dos pés, olhando de soslaio para trás. Sua expressão mistura satisfação e desconfiança, típica de quem está realizando algo escondido e teme ser descoberto.",
       "O Gorro e as Botas Vermelhas: O uso do vermelho em seu gorro e em suas botas simboliza ação rápida, paixão e impulsividade. Ele está agindo movido pelo desejo imediato de autofertilização ou sobrevivência, usando a agilidade física e mental para escapar de uma situação.",
       "As Cinco Espadas nos Braços: O homem carrega cinco espadas de aço de uma vez só, segurando-as de maneira desajeitada pelos próprios gumes. Carregar espadas pelas lâminas é perigoso e pode cortar as próprias mãos, o que simboliza que o plano ou o segredo que ele carrega é arriscado e pode feri-lo a qualquer momento.",
       "As Duas Espadas Deixadas para Trás: Fincardas firmemente no solo, atrás dele, restaram duas espadas. Isso mostra uma escolha deliberada: ele não conseguiu (ou não quis) levar tudo. Representa o que ele optou por abandonar, ou indica que o seu plano não é 100% infalível, deixando pistas ou recursos para trás.",
       "O Alvo do Ardil: À direita, no plano de fundo, avistam-se tendas de um acampamento militar e uma pequena bandeira hasteada. O homem está roubando as armas do próprio acampamento enquanto os soldados, presumivelmente, estão distraídos ou dormindo. Isso reforça o simbolismo de evitar o confronto direto. Em vez de lutar abertamente contra o exército (um problema de grandes proporções), ele decide desarmar o inimigo na calada da noite.",
       "O Céu Amarelo e Brilhante: Ao contrário do céu tempestuoso do Cinco de Espadas, o fundo aqui é de um amarelo puro e sólido. O amarelo rege o intelecto, a mente alerta e a agudeza mental. Esse fundo luminoso indica que a ação, embora moralmente questionável, é fruto de uma mente extremamente perspicaz, lógica e estrategista. Não há impulsividade cega; há cálculo."
      ],
    },
    {
      title: "O Sete de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Indica o uso da inteligência para resolver problemas complexos sem violência, ou a capacidade de se afastar de opiniões subjetivas para ver a verdade. Pode sinalizar alguém que não segue a \"manada\" e encontra caminhos mais inteligentes para o sucesso.",
        "Negativo (Invertido/Desafiador): Alerta para calúnia, fofocas e teorias tóxicas que destroem reputações. Pode representar o \"complexo de impostor\" (sentir-se uma fraude), segredos sendo revelados ou o consultante enganando a si mesmo sobre uma situação.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Sete representa o Grau 7 (ação máxima), o número mais ativo da série decimal.",
        "No centro intelectual, ele marca a transição da beleza do pensamento (Seis) para uma espiritualidade prática, correspondendo simbolicamente ao O Carro (VII) e à A Estrela (XVII).",
        "Enquanto o Sete de Paus busca a conquista criativa, o Sete de Espadas busca a vitória através do discernimento silencioso.",
      ],
    },
  ],
  "oito-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Vazio Mental e Meditação: Representa o ideal búdico da vacuidade, onde a mente se torna um receptáculo puro, livre de conceitos parasitas.",
        "Concentração Extrema: Indica um estado de transe ou foco absoluto em que a dualidade dos contrários desaparece, permitindo revelações que estão além da razão.",
        "Restrição Autoimposta (Estilo Waite): Em baralhos modernos, simboliza sentimentos de isolamento, medo ou a sensação de estar em uma \"prisão\" mental, muitas vezes baseada em padrões de pensamentos negativos e não na realidade.",
        "Palavras-chave: Vacuidade, meditação, silêncio interno, concentração, restrição, impasse e testemunho impessoal.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Cegueira Psicológica: Uma figura feminina está no centro da cena, vestindo uma túnica vermelha longa. Seus olhos estão firmemente cobertos por uma venda branca. Assim como no Dois de Espadas, a venda simboliza a recusa ou a incapacidade de enxergar a situação com clareza. Ela acredita que está completamente sem saídas apenas porque não consegue ver o que está ao seu redor.",
        "As Amarras Frouxas: Cordas envolvem seus braços e o seu tronco. Contudo, se olharmos atentamente, as amarras são visivelmente frouxas e não há ninguém a vigiando. Isso significa que, com um pouco de esforço e flexibilidade mental, ela mesma poderia se livrar das cordas. O aprisionamento é mantido pela sua própria postura de submissão e medo.",
        "Cercada por Pensamentos Negativos: Oito espadas de aço estão fincadas verticalmente no chão ao redor da mulher. Elas formam uma espécie de cerca ou jaula que parece bloqueá-la.",
        "A Rota de Fuga Aberta: O detalhe crucial da gramática visual é que as espadas estão posicionadas atrás e nas laterais da mulher. A parte da frente está completamente livre. Como ela está vendada, ela assume que está cercada por todos os lados, mas basta dar um passo à frente para caminhar em direção à liberdade. As espadas representam crenças limitantes que só nos barram se decidirmos não nos mover.",
        "O Chão de Lama e Água: A mulher pisa descalça (ou com calçados simples amarelos) sobre um terreno lamacento, repleto de poças d'água azuladas. A água parada e a lama simbolizam que ela está atolada em suas próprias emoções reprimidas, sentimentos de desamparo e mágoas do passado. O solo instável reflete a falta de segurança interna para agir.",
        "O Castelo Distante na Montanha: No plano de fundo, bem ao longe sobre uma colina escarpada, avista-se um castelo ou fortaleza. O castelo representa o lugar de onde ela veio, a estrutura, a segurança ou uma situação antiga de poder que agora ficou distante. Também simboliza que a solução ou o porto seguro exige uma longa caminhada que ela, no momento, se recusa a iniciar por se sentir impotente.",
        "O Céu Azul e Claro: O céu acima da cena é de um azul pálido, limpo e sem nuvens. Não há tempestades como no Três ou Cinco de Espadas. Este fundo pacífico é um lembrete visual de que o ambiente externo não está hostil. O perigo real não existe fora; a tempestade e o caos estão acontecendo estritamente dentro da mente da personagem."
      ],
    },
    {
      title: "O Oito de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza uma mente pacificada e a capacidade de encontrar soluções evidentes através do silêncio interior. No sistema de Waite, serve como um alerta de que os medos do consulente são piores que a realidade e que ele possui a força interna para se libertar.",
        "Negativo (Invertido/Desafiador): Alerta para bloqueios intelectuais graves, confusão ou medo do vazio. Pode indicar o início da consciência sobre pensamentos autodestrutivos ou o esforço para sair de um estado de isolamento e ansiedade. Na saúde, pode estar associado a quadros de amnésia, estupor, afasia ou lesões cerebrais.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Oito representa o Grau 8 (perfeição receptiva e equilíbrio total), situando-se no \"quadrado Céu\".",
        "No centro intelectual, ele ensina que a maior potência do pensamento não é acumular mais ideias, mas atingir o vazio meditativo.",
        "Simbolicamente, corresponde à retidão d'A Justiça (VIII) e à profundidade intuitiva d'A Lua (XVIII).",
      ],
    },
  ],
  "nove-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Iluminação e Nova Luz: Simboliza um momento em que a mente brilha com uma nova compreensão, saindo do isolamento subjetivo para se unir ao mundo e ao 'Outro'.",
        "Crise e Ansiedade: Em leituras práticas (estilo Waite), é frequentemente associada a estresse intenso, insônia, pesadelos e sofrimento interno; é a carta da 'guerra interna', onde os pensamentos acelerados criam um estado de agonia [2: 1126].",
        "Sabedoria e Escuta: Marca a descoberta de que o intelecto não é apenas um 'eu', mas um 'eu e você', exigindo a sabedoria de saber escutar os outros .",
        "Palavras-chave: Iluminação, crise positiva, ansiedade, pensamentos recorrentes, sabedoria, desprendimento e 'noite escura da alma'.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Dor Íntima: Uma pessoa (frequentemente associada a uma mulher ou a um jovem) está sentada na cama, com o corpo inclinado para a frente e o rosto completamente escondido pelas mãos. O gesto de cobrir o rosto reflete vergonha, vulnerabilidade extrema ou a incapacidade de encarar os próprios pensamentos.",
        "A Túnica Branca: Ela veste uma camisola ou túnica branca simples, simbolizando a sua pureza ou vulnerabilidade despida diante da escuridão. Na calada da noite, não há armaduras (como no Quatro ou Cinco de Espadas) para protegê-la.",
        "O Reino da Noite e do Subconsciente: O fundo da carta é inteiramente preto. A ausência de paisagens, céu azul ou elementos externos reforça o sentimento de isolamento total e solidão. O preto representa a noite física (a hora em que as defesas mentais baixam), mas principalmente a escuridão psicológica: quando a ansiedade ataca, o mundo exterior desaparece e a pessoa sente que está imersa em um vazio sem fim.",
        "O Peso dos Pensamentos: Acima da pessoa, dispostas de forma horizontal e perfeitamente paralelas, flutuam nove pesadas espadas de aço, apontando para a esquerda. Elas não tocam a figura humana, o que traz um simbolismo sutil e crucial: a dor é puramente mental. As espadas formam uma espécie de escada ou grade pesada que parece esmagar o espaço aéreo do quarto, representando as preocupações acumuladas, os \"e se...\" e os pensamentos obsessivos que impedem o descanso.",
        "O Contraste do Calor Humano: Em contrapartida ao ambiente escuro, a pessoa está coberta por uma manta amarela, vibrante e ricamente decorada com um padrão quadriculado cheio de rosas vermelhas e símbolos do zodíaco. As rosas vermelhas representam a paixão, a vida, o amor e o desejo, sugerindo que há beleza, vitalidade e calor disponíveis na vida dessa pessoa. No entanto, ela está de costas e alheia a isso no momento do desespero. Os símbolos astrológicos apontam para as forças invisíveis e o destino que operam sob a psique humana.",
        "O Conflito Arquetípico: Na lateral de madeira da cama, há um entalhe esculpido que mostra uma figura humana sendo derrotada ou atacada por outra em combate aberto. Esse pequeno detalhe iconográfico simboliza que a mente da pessoa está revivendo traumas do passado, disputas antigas ou o medo intrínseco de ser ferida. A própria fundação de seu descanso (a cama) está marcada por imagens de conflito."
      ],
    },
    {
      title: "O Nove de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Pode indicar o fim de uma confusão mental e a chegada de uma verdade libertadora. Serve como um conselho para aprender a escutar: 'Suas ideias são uma parte do mundo, mas não a totalidade'.",
        "Negativo (Invertido/Desafiador): Alerta para uma crise emocional ou depressão profunda. Pode indicar que o consulente está começando a buscar ajuda profissional ou de entes queridos para lidar com sua ansiedade. Em termos de saúde, pode sinalizar senilidade ou lesões cerebrais devido à falha na lâmina.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Nove representa o Grau 9 (crise benéfica e desprendimento), situando-se no final da série decimal e representando um movimento de superação do perfeito para a construção de um mundo novo.",
        "No centro intelectual, corresponde simbolicamente à sabedoria solitária d'O Eremita (VIIII) e à clareza regeneradora d'O Sol (XVIIII). Enquanto o Oito de Espadas buscava o vazio meditativo, o Nove expande esse vazio em direção à luz consciente.",
      ],
    },
  ],
  "dez-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "Fim de um Ciclo e 'Fundo do Poço': Representa um término definitivo, muitas vezes doloroso, de uma situação. É o momento em que se atinge o limite do sofrimento, onde não é possível cair mais, restando apenas a opção de se levantar e recomeçar.",
        "A Descoberta do Outro: O intelecto atinge tal maturidade que deixa de ser um 'eu' isolado; aparece a recepção de uma voz externa e o início da relação emocional.",
        "Palavras-chave: Conclusão, ponto crítico, traição, escuta, bênção disfarçada, nova era e mutação.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Fim Definitivo: Um homem está deitado de bruços no chão, completamente derrotado. Suas costas estão cravadas por dez pesadas espadas que cobrem toda a extensão do seu corpo, da cabeça até a base da coluna. O exagero visual de dez espadas para derrubar um único homem simboliza uma reação exagerada, um drama absoluto ou uma situação que foi levada ao limite do insustentável. Não há como ser mais ferido do que isso; o ciclo de dor atingiu seu teto.",
        "O Manto Vermelho: Um grande manto vermelho envolve o corpo e derrama-se pelo chão, confundindo-se visualmente com o sangue da ferida. O vermelho representa o sacrifício da vitalidade e da paixão, a perda violenta de energia que vinha alimentando esse ciclo desgastante.",
        "O Sinal de Conexão Espiritual na Mão: Se você olhar bem de perto para a mão visível do homem no chão, seus dedos estão posicionados fazendo um gesto sutil que lembra uma bênção ou sinal sagrado (semelhante ao sinal do Hierofante ou do Papa). Esse detalhe minúsculo indica que, mesmo na ruína mais profunda, há um propósito espiritual ou uma libertação cármica acontecendo. A queda aceita com resignação é, na verdade, uma bênção disfarçada de tragédia.",
        "A Metade Superior do Céu (A Noite Escura): O topo do céu é completamente preto e sombrio, representando a dor, o luto e a noite escura da alma pela qual o consultante passou.",
        "A Metade Inferior do Céu (O Sol Nascente): Logo acima da linha do horizonte e do mar calmo, o céu se ilumina em um tom amarelo-ouro brilhante. O sol está começando a nascer. A gramática visual aqui é absoluta: a escuridão está se retirando. O pior já aconteceu e, por consequência, a partir deste momento, as coisas só podem melhorar. O amanhecer promete um recomeço limpo, livre do peso das espadas.",
        "O Mar Calmo e Imóvel: Logo atrás do corpo, estende-se um mar azul perfeitamente plano e espelhado. Não há as ondas do Cinco ou do Seis de Espadas. Essa calmaria estática simboliza que a grande tempestade mental finalmente cessou. O conflito acabou porque não sobrou mais nada para ser destruído. A paz retorna, ainda que sob a forma de um silêncio pós-batalha."
      ],
    },
    {
      title: "O Dez de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza o fim de um problema de longo prazo ou de um sofrimento prolongado. Indica que o consultante adquiriu uma visão total da realidade e uma mente 'amante', pronta para passar à ação emocional.",
        "Negativo (Invertido/Desafiador): Representa a cura após um fim doloroso, com as espadas simbolicamente caindo das costas do personagem. Pode também indicar resistência a um encerramento inevitável, medo de ser ferido ou bloqueios intelectuais que geram conflito e ingratidão.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, o Dez representa a totalidade completa e a interrupção da atividade para que algo novo surja. No plano intelectual, corresponde ao nascimento de uma nova consciência e ao despertar de um desejo irresistível de evolução.",
        "Enquanto as outras espadas estavam presas em seus conceitos, o Dez de Espadas é o milagre da mente que se abre para o mundo, preparando a transição rumo ao centro emocional.",
      ],
    },
  ],
  "pajem-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Espião ou Investigador: É frequentemente visto como o 'espião' do Tarot, alguém dotado de grande inteligência, habilidade para pesquisa e um foco obstinado em descobrir a verdade.",
        "Dualidade e Hesitação: Simboliza a dúvida intelectual fundamental: 'Ser ou não ser?'. Possui muitos conhecimentos e teorias, mas ainda hesita sobre como usá-los na prática.",
        "Novas Ideias e Mensagens: Representa o surgimento de um novo projeto intelectual ou a chegada de notícias e informações que podem ser diretas e 'frias'.",
        "Palavras-chave: Desejo de ser, vigilância, curiosidade, intelecto aguçado, espionagem, diplomacia e imaturidade mental.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Prontidão e Vigilância: O jovem pajem está em pé no topo de uma colina elevada, segurando uma grande espada com as duas mãos. Sua postura corporal é ativa e instável: suas pernas parecem prontas para o movimento e seu tronco está ligeiramente inclinado.",
        "O Olhar de Soslaio: Enquanto ele aponta a espada para o alto e para a direita, sua cabeça está virada para o lado oposto, olhando fixamente sobre o ombro esquerdo. Essa desconexão direcional indica que ele está atento a todas as direções, agindo como um sentinela ou espião que observa o ambiente para antecipar qualquer ameaça ou novidade.",
        "A Forma de Segurar a Espada: A espada está erguida e nua, pronta para o combate, mas a maneira como o pajem a empunha sugere uma certa falta de destreza ou maturidade. Ele segura a arma pesada com ambas as mãos bem próximas à guarda, mostrando que, embora tenha a intenção e a agudeza mental para usá-la, ele ainda está aprendendo a dominar o próprio intelecto e o poder das suas palavras.",
        "As Roupas em Vermelho e Amarelo: Suas vestes combinam uma túnica vermelha vibrante com calças (justilho) amarelas e botas vermelhas. O amarelo reforça o reino da mente, da lógica, da clareza e do intelecto estimulado. Já o vermelho traz a paixão, a energia juvenil, a impulsividade e a coragem. Juntas, essas cores simbolizam uma mente cheia de ideias novas, entusiasmada para investigar, debater e descobrir a verdade.",
        "O Céu Movimentado e as Nuvens Cumulus: Ao fundo, o céu azul claro está repleto de nuvens brancas densas e volumosas que parecem se mover rapidamente. No topo superior esquerdo, um pequeno bando de pássaros voa alto. Como o naipe de Espadas é regido pelo elemento Ar, a forte presença do vento (evidenciada pelos cabelos do pajem que voam para trás e pela inclinação das árvores distantes à esquerda) simboliza a agitação mental, o fluxo rápido de pensamentos e a circulação de novas informações ou notícias.",
        "O Terreno Elevado e Irregular: O pajem está posicionado sobre uma colina verdejante e de linhas sinuosas, destacando-se acima do nível do horizonte. Esse posicionamento elevado simboliza o desejo de obter uma visão panorâmica e racional sobre as situações, elevando-se acima das emoções para analisar os fatos com objetividade. No entanto, o solo ondulado e os montes distantes ao fundo sugerem que o caminho da verdade e do aprendizado intelectual exige passar por terrenos desafiadores e instáveis."
      ],
    },
    {
      title: "O Pajem de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Indica uma mente ágil, um estudante talentoso ou alguém capaz de usar a diplomacia e a estratégia para lidar com situações complexas. Sugere que o consulente está animado com uma nova empreitada ou recebendo comunicações importantes.",
        "Negativo (Invertido/Desafiador): Alerta para a mentira, a agressão verbal e a confusão intelectual. Pode indicar uma pessoa manipuladora, sem empatia, ou alguém que 'fala muito mas não age'. Também sinaliza falhas na comunicação e falta de clareza sobre a verdade dos fatos.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Pajens situam-se no Grau 2/3, marcando a transição entre a acumulação de conhecimento (gestação) e a primeira ação intelectual explosiva [1: 171-172].",
        "No centro Intelectual, o Pajem de Espadas representa o aprendizado da linguagem e a forja da inteligência: possui o potencial infinito do Ás de Espadas, mas ainda precisa aprender a 'cortar' e a discernir o que é útil.",
      ],
    },
  ],
  "cavaleiro-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Cavaleiro de Espadas representa a maturidade do intelecto e a prontidão para agir com base na lógica e na coragem, funcionando como um mensageiro ou profeta que leva a energia do pensamento para além de seus próprios limites [1: 170, 799-800]. No Tarot, ele é frequentemente considerado o mais rápido de todos os Cavaleiros, simbolizando um ímpeto que nada pode deter [2: 1290-1291].",
        "Missão e Determinação: Simboliza alguém que está em uma missão de nível elevado, utilizando a inteligência e a lógica para alcançar objetivos com vigor inabalável.",
        "O Verbo se torna Amor: Na visão de Jodorowsky, este cavaleiro sacrificou seu 'desejo de ser' para entrar em um estado de abnegação sagrada, onde o pensamento se torna amor e serviço ao outro.",
        "Mensagens Inesperadas: Pode indicar a chegada súbita de notícias ou informações que, embora chocantes ou diretas, trazem clareza a uma situação.",
        "Palavras-chave: Inteligência ativa, coragem, lógica, rapidez, profecia, determinação e mensagens inesperadas.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Direção do Ataque: Ao contrário da maioria dos cavaleiros do Tarot, que avançam em passos lentos ou meditativos, o Cavaleiro de Espadas e seu cavalo estão em pleno galope, projetando-se diagonalmente em direção à esquerda. Essa inclinação agressiva para a frente indica urgência máxima, ímpeto e o desejo de atropelar qualquer obstáculo.",
        "O Cavalo Branco: O cavalo puramente branco simboliza a pureza da intenção, mas principalmente a força motriz do intelecto desimpedida. O branco reflete a luz da verdade racional que guia a investida, agindo com frieza e sem hesitações emocionais.",
        "O Arnês com Pássaros e Borboletas: As rédeas e os ornamentos do cavalo exibem detalhes em azul e amarelo com desenhos estilizados de pássaros ou borboletas. Esses animais são símbolos clássicos do elemento Ar e do reino dos pensamentos, reforçando que este ataque não é físico por pura brutalidade, mas sim uma cruzada ideológica, intelectual ou de comunicação.",
        "A Espada Erguida: O guerreiro veste uma armadura de aço completa e ergue uma longa espada com o braço totalmente estendido para o alto. A lâmina aponta diretamente para o céu, simbolizando que sua mente está agindo como um para-raios de ideias nítidas e resolutas. Ele não está se defendendo; ele está atacando com o poder da verdade.",
        "O Manto Vermelho e a Pluma: Um manto vermelho flamejante e uma pluma da mesma cor em seu elmo voam violentamente para trás devido à velocidade do avanço. O vermelho injeta a energia do elemento Fogo (ação, coragem, agressividade e paixão) na estrutura mental do Ar, criando um guerreiro intelectual focado em vencer o debate ou a batalha a qualquer custo.",
        "Caos e Turbulência: O céu ao fundo apresenta nuvens cinzentas e brancas cortadas em linhas angulares, afiadas e fragmentadas. O desenho evoca um cenário de ventania severa e tempestade iminente. Essa atmosfera elétrica e caótica reafirma que o Cavaleiro prospera no meio do conflito de ideias. Ele não espera a poeira baixar para agir; ele avança diretamente no olho do furacão, impulsionado pela própria tempestade mental.",
        "As Árvores Vergadas pelo Vento: No canto inferior esquerdo, árvores distantes estão visivelmente inclinadas e vergadas pela força do vento. Este detalhe gráfico serve para ilustrar o impacto que a passagem deste Cavaleiro causa no ambiente: suas palavras, verdades ou decisões são tão avassaladoras que mudam a paisagem ao redor, forçando as estruturas antigas a se curvarem diante da sua lógica."
      ],
    },
    {
      title: "O Cavaleiro de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Indica um sucesso alcançado através da ambição e da mente afiada. Em questões de carreira, sugere que o consulente tem determinação para superar qualquer desafio. No amor, representa alguém intelectualmente maduro que diz a verdade, embora possa ter dificuldade em seguir apenas o coração.",
        "Negativo (Invertido/Desafiador): Alerta para a impaciência, a pressa excessiva e a impulsividade. Pode sinalizar pensamentos dispersos, decisões precipitadas ou uma pessoa que 'fala muito mas não pensa', gerando conflitos desnecessários.",
        "Conselho: O Arcano sugere eliminar o medo e a esperança (conceitos parasitas) para agir com foco total no presente .",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, os Cavaleiros situam-se entre o Grau 8 (perfeição) e o Grau 9 (crise de transição). O Cavaleiro de Espadas marca o fim do ciclo puramente mental e, em sua jornada, ele se dirige ao elemento seguinte: o Ás de Copas, transformando o intelecto em energia emocional e amorosa.",
        "Ele é o mensageiro que anuncia que o pensamento, ao atingir sua plenitude, deve agora abrir caminho para o coração",
      ],
    },
  ],
  "rei-de-espadas": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Rei de Espadas representa o ápice do domínio intelectual, simbolizando a inteligência, a lógica, o discernimento e a autoridade baseada na verdade e na lei. Ele é o 'Rei da Lei e da Ordem', agindo com uma mente afiada e estratégica para organizar a realidade.",
        "Mestre do Intelecto: Representa alguém que controla o conhecimento e a sabedoria com facilidade, sendo capaz de tomar decisões difíceis de forma imparcial e justa.",
        "Autoridade e Estratégia: Diferente de outros reis que usam a força bruta, ele reina através das leis, das reformas e do verbo; seus trunfos são as artimanhas da estratégia e a ironia.",
        "Conselheiro e Especialista: Frequentemente simboliza profissionais qualificados, como advogados, juízes, consultores ou médicos — pessoas que oferecem conselhos baseados em fatos e lógica.",
        "Palavras-chave: Lógica, inteligência ativa, justiça, estratégia, clareza, retidão e poder intelectual.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "Imparcialidade e Presença: Ao contrário da Rainha (que se posiciona de perfil), o Rei está sentado de frente, encarando diretamente quem o observa. Essa simetria frontal simboliza que ele está pronto para julgar uma situação sem favoritismos, ouvindo os dois lados com total neutralidade.",
        "O Olhar Firme: Sua expressão é de extrema seriedade, autocontrole e frieza. Ele não é movido por impulsos passionais; ele é a própria personificação da lei e da autoridade intelectual.",
        "A Espada do Julgamento: Em sua mão direita, ele empunha uma longa espada desembainhada, mantendo-a erguida verticalmente e ligeiramente inclinada para a direita. Diferente do Cavaleiro (que usa a espada para o ataque impetuoso) ou do Pajem (que a segura com hesitação), o Rei domina a arma com calma e firmeza absoluta. Ela representa a determinação em aplicar a justiça e cortar qualquer tipo de ilusão, mentira ou confusão. A mão esquerda repousa sobre o colo, indicando que o poder está sob perfeito controle.",
        "As Borboletas do Intelecto: O alto encosto de pedra do trono exibe entalhes de borboletas. Assim como na carta da Rainha, a borboleta — animal que passa pela metamorfose — é o símbolo do elemento Ar e da evolução mental, mostrando que sua sabedoria foi lapidada pelo tempo.",
        "A Dualidade Controlada: Próximo às borboletas, o topo do trono apresenta desenhos que remetem a crescentes lunares ou figuras estilizadas de anjos/querubins, indicando que ele compreende os ciclos e as fraquezas humanas, mas opta por governar através da estabilidade da pedra (a razão rígida).",
        "A Mente Clara (Túnica Azul): Ele veste uma longa túnica de cor azul pálido, a cor do céu e da mente subjacente, simbolizando a pureza de seus pensamentos e o desapego das paixões terrenas.",
        "A Espiritualidade e o Poder (Manto Roxo/Capa): Sobre os ombros, ele carrega um manto roxo ou avermelhado, uma cor associada à realeza, à alta liderança e à percepção sutil. O capuz ou gola vermelha rente ao pescoço denota que há coragem e força vital sustentando suas decisões racionais.",
        "Visão Panorâmica Clara: Ao fundo, o céu é azul e as poucas nuvens brancas estão assentadas ao longe e em níveis mais baixos que o topo do seu trono. A atmosfera é muito menos turbulenta que a do Cavaleiro ou do Pajem. Isso mostra que ele atingiu um estado de clareza onde o vento dos pensamentos já não gera caos, mas sim estabilidade.",
        "Os Pássaros no Horizonte: Dois pássaros voam alto no céu à direita do trono. Símbolos do Ar, eles reforçam a liberdade de pensamento, a agilidade mental e a capacidade de observar as situações a partir de uma perspectiva macro e aérea.",
        "As Árvores Estáticas: As poucas árvores visíveis nos cantos inferiores aparecem firmes e eretas, contrastando com as árvores vergadas do Cavaleiro. Sob o comando do Rei, o vento se acalma e a ordem é restabelecida."
      ],
    },
    {
      title: "O Rei de Espadas em Leituras",
      content: [
        "Positivo (Em pé): Indica um sucesso alcançado pelo uso da razão e da determinação. Sugere que o consulente deve falar sua verdade com firmeza e buscar clareza absoluta antes de agir. No campo profissional, aponta para alguém ambicioso e focado que atinge seus objetivos.",
        "Negativo (Invertido/Desafiador): Alerta para o uso egoísta e abusivo da inteligência. Pode representar uma pessoa cruel, manipuladora, hipócrita ou um 'tirano intelectual' que impõe sua visão sem piedade. Também pode sinalizar indecisão ou incapacidade de pensar racionalmente devido à incerteza.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Reis situam-se entre o Grau 6 (prazer e beleza) e o Grau 7 (ação irresistível). O Rei de Espadas marca o estágio em que o pensamento atinge tal maturidade que se torna capaz de promulgar decretos que mudam o mundo.",
        "Forma par ideal com a Rainha de Espadas, embora ambos possam manter certa distância emocional mútua, focando-se no domínio do espírito e da inteligência. Astrologicamente, é frequentemente associado ao signo de Aquário.",
      ],
    },
  ],
  "pajem-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Pajem de Ouros (ou Valete de Ouros) representa o estado inicial da energia no centro material, caracterizando-se por um desejo de viver, pelo aprendizado prático e por uma dualidade entre a poupança e o investimento. Na estrutura do Tarot, ele personifica o estudante dedicado ou o jovem profissional que começa a lidar com as realidades concretas do mundo.",
        "Gestação e Início: Indica o início de um projeto concreto, uma nova carreira ou a retomada de estudos técnicos.",
        "Hesitação Material: Representa a dúvida fundamental sobre como gerir recursos: 'Guardar ou gastar? Economizar ou investir?'.",
        "O Estudante: Simboliza alguém que está em fase de treinamento, demonstrando diligência, ambição e foco em aprender novas habilidades.",
        "Palavras-chave: Desejo de viver, diligência, potencial material, estudo, vigilância, praticidade e novas oportunidades financeiras.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Foco Absoluto: O jovem está de pé, segurando uma única e grande moeda de ouro (pentáculo) no ar com as duas mãos. Ele não a segura com pressa ou possessividade, mas sim erguendo-a com cuidado e reverência, como se estivesse estudando sua composição ou admirando seu valor. Seu olhar está completamente fixo no pentáculo. Esse detalhe visual simboliza concentração, curiosidade intelectual e o desejo de decifrar as regras do mundo material. Ele representa a mente focada em aprender uma nova habilidade ou em entender como transformar uma teoria em um resultado tangível e real.",
        "A Túnica Verde: O Pajem veste uma túnica inteiramente verde, a cor do elemento Terra, do crescimento orgânico, da fertilidade e do potencial de desenvolvimento. O verde reforça que, embora ele ainda seja um iniciante (uma semente), há uma imensa vitalidade em seu projeto.",
        "O Adereço Vermelho na Cabeça: Ele usa um chapéu ou turbante vermelho com uma longa cauda que cai sobre seus ombros. O vermelho traz o elemento Fogo para a equação: simboliza a paixão, o entusiasmo interno e a energia física necessária para iniciar os estudos e manter a disciplina diária.",
        "A Postura Corporal e o Solo Fértil: Ao contrário de outros Pajens do Tarot (como o de Espadas, que parece alerta e defensivo), o Pajem de Ouros caminha a passos lentos e deliberados por um campo plano, verdejante e repleto de pequenas flores vermelhas e amarelas. Ele está em contato direto com a terra fértil, o que demonstra que ele tem os pés no chão. Suas botas marrons de cano curto reforçam essa conexão prática e realista. O campo florido indica que o ambiente ao redor dele é propício para que seus estudos e planos deem bons frutos.",
        "O Sulco de Terra Arada: À direita do Pajem, há uma pequena seção de terra marrom escura que já foi arada e preparada para o plantio. Isso simboliza que o trabalho de base já começou; a fundação está sendo preparada com método e ordem.",
        "As Montanhas Distantes: No horizonte, erguem-se montanhas azuis e roxas. No simbolismo do Tarot, as montanhas representam os grandes desafios, as metas de longo prazo e a maestria que exigem esforço para serem alcançadas. O fato de elas estarem distantes mostra que o Pajem está ciente da jornada técnica e de longo prazo que tem pela frente, mas ele não se intimida; seu foco permanece no aprendizado do presente (o pentáculo em suas mãos)."
      ],
    },
    {
      title: "O Pajem de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza uma mente prática, um estagiário talentoso ou alguém capaz de usar a estratégia para prosperar. Indica que o consulente tem os meios para começar uma nova empreitada ou que receberá notícias positivas sobre dinheiro e trabalho.",
        "Negativo (Invertido/Desafiador): Alerta para a preguiça, falta de foco e desorganização. Pode indicar alguém que 'sonha alto' mas não coloca os pés no chão, ou que está desperdiçando recursos por falta de experiência.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, os Pajens situam-se no Grau 2/3, marcando a transição entre a acumulação passiva de recursos (gestação) e a primeira ação material explosiva. O Pajem de Ouros representa a forja da inteligência aplicada à matéria: possui o potencial do Ás de Ouros, mas ainda precisa decidir como transformar esse potencial em uma realidade estável.",
        "Na jornada evolutiva, ele é aquele que entra no 'palácio' material para eventualmente se tornar a Rainha e o Rei.",
      ],
    },
  ],
  "cavaleiro-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Cavaleiro de Ouros representa a maturidade do centro material e a superação da perfeição física para atingir uma nova dimensão espiritual e criativa. Na jornada do Tarot, ele atua como um mensageiro que leva a energia da matéria (Ouros) em direção ao elemento seguinte, a energia sexual e criativa (Paus).",
        "Espiritualização da Matéria: Simboliza o estágio em que a matéria atinge tal pureza que se torna imortal e se eleva ao centro do Universo.",
        "Transição de Naipes: Ele marca o fim do ciclo de Ouros, carregando consigo um 'pau' ou bastão que se tornará o Ás de Paus, indicando que a prosperidade material agora deve gerar vida nova e criatividade.",
        "Androginia e Unidade: Jodorowsky o descreve como um 'hermafrodita' que unifica as polaridades masculina e feminina, vivendo em paz profunda após vencer a ideia da morte.",
        "Palavras-chave: Saúde, paz infinita, materialização do espírito, transição, maturidade material e progresso seguro.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Cavalo Estacionado: Este é o único cavaleiro de todo o Tarot cujo cavalo está completamente parado, com as quatro patas firmemente apoiadas no solo. O cavalo é de cor preta, simbolizando força bruta, resistência física e conexão com as profundezas da terra. O fato de ele não estar galopando indica que este cavaleiro não se move por impulsos imediatistas. Ele avança de forma planejada; ele não tem pressa porque sabe exatamente para onde está indo e que a consistência vence a velocidade.",
        "Prontidão e Proteção: O cavaleiro veste uma pesada armadura de metal, indicando que ele está totalmente preparado para enfrentar longas jornadas, intempéries e resistir ao desgaste do tempo. Ele é o arquétipo do executor resiliente.",
        "O Olhar Direcionado ao Horizonte: Em sua mão direita, ele segura uma grande moeda de ouro (pentáculo), avaliando-a com atenção. Seu olhar está direcionado para a frente, fixo no horizonte acima da moeda. Isso simboliza clareza de metas, visão de longo prazo e compromisso com o resultado real.",
        "O Ramo Verde no Elmo: No topo de seu capacete (elmo) e na rédea do cavalo, há ramos de folhagens verdes. Isso traz o elemento da vida orgânica e do crescimento para a armadura rígida de metal, simbolizando que sua disciplina serve para gerar frutos reais e prosperidade.",
        "O Campo Arado em Linhas Perfeitas: O plano de fundo abaixo do cavalo exibe um vasto campo arado com sulcos marrons desenhados em linhas paralelas impecáveis e simétricas. Visualmente, isso é uma representação explícita de método, rotina, ordem e preparação. O solo foi exaustivamente trabalhado e organizado para o plantio de longo prazo. Não há improviso aqui; há um sistema operando de forma limpa, estruturada e persistente.",
        "O Céu Amarelo Sólido: Assim como vimos no Nove de Ouros, o fundo da imagem é preenchido por um amarelo brilhante, plano e sem nuvens. Este céu elimina qualquer sinal de volatilidade, ruído ou tempestade iminente. Ele sela a atmosfera com as qualidades da consciência desperta, energia sustentada, foco intelectual prático e a certeza matemática de que o esforço aplicado trará o retorno esperado."
      ],
    },
    {
      title: "O Cavaleiro de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Indica uma pessoa financeiramente estável ou rica o suficiente para se dedicar a novos objetivos espirituais ou artísticos. Sinaliza um deslocamento benéfico, uma recuperação de saúde ou um sucesso que abre novos horizontes.",
        "Negativo (Desafiador): O maior perigo é a estagnação na crise ou a incapacidade de se deixar levar pela mudança universal, o que pode gerar bloqueios na realização de novos projetos.",
        "Tempo: No sistema de leitura de Jodorowsky, o dinamismo do Cavaleiro costuma representar uma mutação rápida na vida do consulente.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, os Cavaleiros situam-se entre o Grau 8 (perfeição) e o Grau 9 (crise de transição). Simbolicamente, o Cavaleiro de Ouros corresponde ao animal cor de carne (boi ou cavalo) presente no arcano O Mundo.",
        "Ele representa a energia corporal purificada que, ao chegar ao seu limite de recepção, se prepara para se tornar ação pura.",
      ],
    },
  ],
  "rainha-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "A Rainha de Ouros (ou Rainha de Denários) representa a maturidade e a plena posse do centro material, simbolizando uma figura pragmática, ativa e profundamente conectada com a realidade física, a economia e a saúde. Ela é a 'Dona da Casa' no plano material, vivendo como uma proprietária que gerencia com segurança o que conquistou.",
        "Abundância e Prosperidade: É considerada a 'Rainha do Dinheiro', sinalizando sucesso financeiro, riqueza duradoura e a capacidade de prover para os outros.",
        "Inteligência Prática: Representa alguém que faz planos realistas e investe sua energia para concretizar sonhos através de métodos concretos.",
        "Imanência: Diferente de outras figuras que buscam o divino no 'além', a Rainha de Ouros encontra a superação e o sagrado no centro da matéria e do cotidiano.",
        "Palavras-chave: Economia, investimento, segurança material, saúde, pragmatismo, fertilidade, estabilidade e nutrição.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Olhar de Cuidado: A Rainha está sentada em seu trono, segurando uma grande moeda de ouro (pentáculo) de maneira terna e protetora sobre o colo. Ela inclina levemente a cabeça para baixo, olhando para a moeda com uma expressão de profundo carinho, serenidade e contemplação. Diferente do Nove de Ouros, que ostenta sua independência, a Rainha olha para o pentáculo como uma mãe olha para um filho ou como um ecologista olha para uma semente preciosa. Isso simboliza que ela não valoriza o dinheiro pelo poder ou pelo status, mas sim pelo que ele pode proporcionar: nutrição, proteção, crescimento e bem-estar para os que estão sob seus cuidados.",
        "O Trono de Pedra Entalhado: O trono da Rainha é feito de pedra cinzenta e escura, fundindo-se de maneira orgânica com a paisagem ao redor. O encosto e as laterais do trono exibem entalhes detalhados: há cabeças de bodes ou carneiros esculpidas, além de frutas e figuras humanas infantis (querubins). O bode é um símbolo tradicional do signo de Capricórnio (elemento Terra), representando determinação prática, ambição realista e a capacidade de escalar terrenos áridos. As frutas entalhadas reforçam que suas leis e decisões geram abundância palpável.",
        "As Vestes Cromaticamente Equilibradas: Ela veste uma longa túnica vermelha por baixo de um manto verde com detalhes amarelos, além de um véu branco que desce por sua cabeça. O vermelho simboliza sua paixão, vitalidade, força física e conexão com o sangue da terra. O verde e o amarelo representam a fertilidade da vegetação e a clareza mental ou riqueza espiritual que guiam suas ações diárias. O branco do véu indica a pureza de suas intenções e a sabedoria intuitiva integrada ao plano material.",
        "A Moldura de Rosas e a Natureza Exuberante: Acima do trono, uma densa trepadeira carregada de rosas vermelhas e folhas verdes forma um arco de proteção natural. As rosas simbolizam o amor, o desejo e a beleza que florescem quando há estabilidade material. O solo abaixo de seus pés é vibrante, amarelo e verdejante, repleto de pequenas flores. Ao fundo, vemos montanhas azuis e um rio ou riacho sinuoso que corre suavemente. A presença da água (elemento emocional/intuição) correndo livremente por um cenário de Terra mostra que a Rainha consegue equilibrar a lógica de mercado com a empatia e a sensibilidade humana.",
        "A Lebre no Canto Inferior Direito: No canto inferior direito da imagem, uma pequena lebre ou coelho salta rapidamente pela grama. O coelho é um dos símbolos mais antigos e universais para fertilidade, multiplicação rápida, agilidade e abundância. A presença desse animal em movimento dinâmico quebra o aspecto estático da Rainha sentada, lembrando que a prosperidade sob o comando dela está em constante processo de reprodução e renovação biológica. Os recursos não estão estagnados; eles estão gerando novos frutos."
      ],
    },
    {
      title: "A Rainha de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza que o consulente tem os meios para garantir sua segurança e saúde. Indica uma fase de equilíbrio, onde se cuida bem do corpo, da alimentação e do ambiente doméstico.",
        "Negativo (Desafiador): Alerta para a avareza, a teimosia e o egoísmo; pode representar alguém que não consegue enxergar além das necessidades materiais.",
        "Conselho: Use a estabilidade material para nutrir e proteger, sem permitir que o apego impeça o crescimento espiritual.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, a Rainha de Ouros situa-se entre o Grau 4 (estabilidade) e o Grau 5 (novo ideal). Ela domina a técnica do investimento e da economia, mas já sente o chamado para usar essa base material em prol de algo maior.",
        "Na jornada das figuras, ela transforma a hesitação do Valete em uma posse ativa e pragmática, preparando o terreno para que o Rei de Ouros possa, eventualmente, desapegar-se dessa riqueza em direção ao mundo.",
      ],
    },
  ],
  
  "rei-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Rei de Ouros (ou Rei de Denários) representa o ápice do domínio sobre o mundo material, simbolizando a prosperidade, a segurança financeira, a sabedoria prática e a capacidade de ser um provedor e protetor. Enquanto a Rainha foca na nutrição do lar, o Rei expande essa energia para o mundo, agindo como um mestre da abundância.",
        "Mestre da Realidade: Representa alguém que atingiu sucesso duradouro através do trabalho árduo, sendo estável, confiável e generoso.",
        "Sabedoria e Não Agir: Este rei atinge tal maturidade que reina através do 'não agir', aceitando as mudanças do universo com a paz de quem já conquistou tudo no plano físico.",
        "O Provedor: Frequentemente associado a mentores, empresários de sucesso ou figuras paternas que oferecem segurança e suporte prático.",
        "Palavras-chave: Prosperidade, estabilidade, pragmatismo, segurança, liderança, riqueza espiritualizada e sucesso material.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Manto de Videiras: O Rei veste um manto longo e pesado inteiramente estampado com ramos de videira e uvas escuras. Esse detalhe visual mostra que a sua autoridade está diretamente ligada à fertilidade e à capacidade de fazer os projetos gerarem frutos consistentes. Ele não apenas acumulou riqueza, ele se tornou parte do próprio ecossistema de prosperidade.",
        "O Cetro e o Pentáculo: Em sua mão direita, ele segura um cetro dourado com uma esfera no topo, simbolizando seu poder de comando no mundo físico. Com a mão esquerda, ele apoia firmemente uma grande moeda de ouro (pentáculo) sobre a coxa. Sua postura com a moeda é de total segurança, estabilidade e posse legítima; ele não precisa estudá-la ou protegê-la com ansiedade, pois seu domínio sobre as finanças e os recursos já está consolidado.",
        "O Trono Adornado com Touros: O trono de pedra escura do Rei é decorado com imponentes cabeças de touros entalhadas nos braços e no encosto. O touro é o símbolo astrológico do signo de Touro (elemento Terra), representando estabilidade inabalável, persistência, sensualidade material, determinação teimosa e o poder de construir bases que resistem a qualquer crise. O trono sólido indica que sua posição e seu império são permanentes.",
        "A Bota de Armadura: Um detalhe visual sutil e de extrema importância está na parte inferior de suas vestes: projetando-se por baixo do manto de videiras, vemos o pé esquerdo do Rei totalmente revestido por uma bota de armadura de metal, firmemente apoiada sobre o solo ou sobre uma estrutura de pedra. Essa armadura oculta sob o manto de luxo envia uma mensagem clara: embora ele viva em um estado de conforto, paz e abundância, ele não é complacente ou fraco. Ele continua sendo um guerreiro pragmático, pronto para defender seu reino, tomar decisões difíceis de mercado ou agir com firmeza estratégica sempre que necessário.",
        "O Castelo ao Fundo e o Muro de Proteção: Atrás do trono, ergue-se um muro de pedra baixo que separa o jardim do Rei de sua grande propriedade fortificada (o castelo com torres visível à direita). O castelo simboliza a estabilidade institucional, o patrimônio imobiliário consolidado e a solidez de suas conquistas de longo prazo. O muro reforça o conceito de limites claros, segurança física e governança eficiente. Tudo sob os domínios deste Rei é meticulosamente planejado e protegido.",
        "O Céu Amarelo e a Vegetação Baixa: O cenário ao redor do trono é preenchido por flores vermelhas no canto inferior esquerdo e folhas densas. O fundo é selado por um céu amarelo sólido e brilhante, eliminando qualquer incerteza climática ou volatilidade. O céu dourado confirma que o ambiente atingiu o ápice da clareza, do sucesso e da realização tangível."
      ],
    },
    {
      title: "O Rei de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza sucesso nos negócios, estabilidade financeira e a realização de objetivos práticos. Indica que o consulente tem os meios para ser generoso e pode agir como um apoio sólido para os outros.",
        "Negativo (Invertido/Desafiador): Alerta para a instabilidade, a ganância e a corrupção. Pode representar um trapaceiro ou alguém excessivamente materialista.",
      ],
    },
    {
      title: "Contexto Numerológico e Astrológico",
      content: [
        "Na numerologia do Tarot, os Reis situam-se entre o Grau 6 (prazer e beleza) e o Grau 7 (ação irresistível). O Rei de Ouros marca o estágio em que o prazer da prosperidade se torna uma potência capaz de fundar impérios.",
        "No sistema astrológico, ele é associado ao signo de Touro e ao elemento Terra.",
      ],
    },
  ],
  "as-de-ouros": [
      {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Ás de Ouros representa o potencial infinito do centro material e corporal, simbolizando o germe de onde brotam a saúde, o dinheiro, o trabalho e a nossa relação com o território e a abundância. Na estrutura do Tarot, ele é a \"semente\" da vida física e da prosperidade, sendo considerado por Jodorowsky como o \"verdadeiro mestre\" oculto na humildade da matéria.",
        "Potencialidade Material: Indica o início de um projeto concreto, uma nova oportunidade financeira, um novo emprego ou uma fase de recuperação da saúde.",
        "A \"Semente\" da Realidade: Representa a matéria viva que contém em seu centro a energia espiritual; é o \"tesouro\" encontrado nas profundezas da terra que se tornará a auréola dos santos.",
        "Palavras-chave: Prosperidade, saúde, corpo, dinheiro, território, potencial material, novos começos concretos e poder condutor dos elementos.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Presente do Universo: Uma mão branca e reluzente emerge de uma nuvem densa no lado esquerdo da carta. Como nos outros Ases, a nuvem simboliza o mistério da criação e o plano espiritual. A oportunidade que o Ás traz é um vislumbre de sorte ou uma dádiva que se apresenta na vida do consultante.",
        "A Palma Aberta: A mão sustenta o grande ouro com a palma aberta voltada para cima, oferecendo a moeda sem retê-la. Isso significa que a oportunidade está disponível e pronta para ser agarrada, mas exige que a pessoa estenda a própria mão para recebê-la e assuma a responsabilidade de cultivá-la.",
        "A Moeda de Ouro: A moeda é dourada, brilhante e traz uma estrela de cinco pontas (um pentagrama) gravada em seu centro. O ouro representa a riqueza material, a segurança, o corpo físico e os recursos tangíveis.",
        "O Pentagrama: A estrela de cinco pontas simboliza o equilíbrio entre o espírito e os quatro elementos da matéria (Fogo, Terra, Ar e Água), além de representar o corpo humano completo (braços, pernas e cabeça). Visualmente, ela reforça que a verdadeira riqueza do naipe de Ouros envolve harmonizar o ganho material com o bem-estar físico e espiritual.",
        "O Jardim Exuberante e Florido: Na metade inferior da carta, abaixo da mão divina, estende-se um jardim verdejante, vibrante e repleto de flores e vegetação baixa. Este cenário contrasta fortemente com os fundos cinzentos, pretos ou desérticos que vimos em várias cartas de Espadas. O solo é extremamente fértil, simbolizando que o ambiente atual do consultante é propício para o crescimento, o plantio de novos projetos e a colheita de lucros a longo prazo.",
        "O Arco de Passagem: No meio da vegetação, há uma densa cerca viva que se abre em um arco natural perfeito, decorado com flores vermelhas. Esse arco funciona como um portal visual, separando o jardim imediato do horizonte distante.",
        "O Caminho Amarelo: Um pequeno caminho amarelo começa no jardim e passa por baixo desse arco. O amarelo do caminho conecta a mente e a consciência ao processo de manifestação, indicando que há uma trilha clara a ser seguida se você decidir cruzar o portal.",
        "As Montanhas Azuis ao Fundo: Através da abertura do arco, avistam-se montanhas azuis e picos elevados ao longe. Enquanto o jardim representa o conforto inicial, a segurança e a semente presente, as montanhas ao fundo simbolizam os grandes objetivos de longo prazo, as ambições e os desafios que ainda precisarão ser escalados. Elas servem para lembrar que o Ás de Ouros é apenas o primeiro passo de uma longa jornada de construção material."
      ],
    },
    {
      title: "O Ás de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza sucesso em questões materiais, boa saúde e a satisfação de necessidades de forma harmoniosa. Confirma que o consulente tem os meios para concretizar seus sonhos.",
        "Negativo (Invertido/Desafiador): Alerta para o perigo de permanecer apenas no plano virtual ou potencial, sem dar o primeiro passo na realidade. Pode indicar também problemas financeiros, avareza, preocupação excessiva com posses ou negligência com o corpo.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, o Ás é o Grau 1 (totalidade em potência) aplicado ao elemento Terra. Existe um processo cíclico de engendramento: o Dez de Copas (amor realizado) traz em seu topo o disco florida que se torna o Ás de Ouros, significando que o amor pleno deve agora produzir vida nova ou ação concreta.",
        "Por sua vez, o desenvolvimento do Ás de Ouros acabará por gerar a energia sexual e criativa do Ás de Paus.",
      ],
    },
  ],
    "seis-de-ouros": [
      {
        title: "Significados Gerais e Palavras-Chave",
        content: [
          "O Seis de Ouros representa o Grau 6 do centro material, simbolizando um estágio de prosperidade plena, generosidade e a descoberta da beleza no mundo físico. Na numerologia do Tarot, o número seis marca o primeiro passo no 'quadrado Céu', onde o indivíduo deixa de focar apenas em necessidades básicas para buscar o prazer e a harmonia naquilo que faz.",
          "Generosidade e Assistência: Em leituras práticas, é a carta da caridade e do auxílio mútuo. Indica tanto o ato de dar ajuda financeira ou suporte quanto o de recebê-los quando mais se necessita.",
          "Equilíbrio e Harmonia: Simboliza uma situação em que os recursos são distribuídos de forma justa, refletindo paz e estabilidade nas relações materiais.",
          "O Prazer da Prosperidade: Representa a satisfação de desfrutar do que se conquistou, celebrando a abundância e o bem-estar corporal.",
          "Palavras-chave: Caridade, equilíbrio, prosperidade, apoio, ensino, generosidade e espiritualização da matéria.",
        ],
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Posição Central: No centro da carta, ergue-se um homem ricamente vestido com uma túnica vermelha e roxa, cores associadas ao status, nobreza e poder de realização. Ele é a figura central que detém os recursos e controla a cena.",
          "A Mão da Generosidade: Com sua mão direita, ele derrama moedas de ouro diretamente na mão aberta de um dos necessitados. Isso simboliza o ato da caridade, o compartilhamento da riqueza e o papel de provedor ou patrocinador.",
          "Justiça e Proporcionalidade: Em sua mão esquerda, o homem segura uma balança dourada em perfeito equilíbrio. Este é o detalhe visual mais crucial da carta. A balança indica que a generosidade exercida aqui não é cega ou impulsiva (como no elemento Água), mas sim calculada, justa e consciente. Ele distribui o que é necessário e justo, mantendo a proporção correta de seus próprios recursos. Representa também a avaliação de mérito, a aprovação de orçamentos e o equilíbrio entre despesas e receitas.",
          "Os Dois Pedintes: Aos pés do benfeitor, ajoelham-se duas figuras vestidas com mantos simples (um amarelo-mostarda e outro verde remendado). Eles estão em uma posição inferior, olhando para cima com gratidão e expectativa. Enquanto um recebe as moedas diretamente, o outro aguarda a sua vez com as mãos estendidas. Essa assimetria visual cria uma reflexão sobre a vulnerabilidade e a dependência: a caridade resolve o problema imediato da escassez, mas mantém a estrutura de desigualdade e poder intacta.",
          "Os Seis Pentáculos no Céu Azul: No topo da imagem, seis grandes moedas de ouro flutuam simetricamente sobre um céu azul claro e limpo. Três moedas estão dispostas à esquerda e três à direita, reforçando a mensagem de equilíbrio matemático e estabilidade macroeconômica. O céu limpo indica que a tempestade de neve do Cinco de Ouros passou; a estabilidade social foi restaurada através do fluxo de auxílio e da circulação do dinheiro."
        ],
      },
      {
        title: "O Seis de Ouros em Leituras",
        content: [
          "Positivo (Em pé): Sinaliza sucesso nos negócios que se ama, obtenção de financiamentos ou bolsas de estudo, e a capacidade de ser um mentor ou professor para outros. É uma carta de gratidão e troca justa.",
          "Negativo (Invertido/Desafiador): Alerta para o desequilíbrio nas relações, onde uma pessoa dá muito mais do que recebe. Pode indicar abuso de poder, manipulação financeira, ganância, ou dívidas mal geridas. No plano pessoal, pode refletir um excesso de preocupação com as aparências (narcisismo físico) em detrimento do ser interior.",
        ],
      },
      {
        title: "Contexto Numerológico e Evolutivo",
        content: [
          "O Seis de Ouros corresponde simbolicamente às energias d'O Namorado (VI) e d'A Torre (XVI), Arcanos que lidam com a alegria, a união e a liberação de energias presas.",
          "Este grau ensina que o dinheiro e a saúde não devem ser fins em si mesmos, mas meios para expressar amor e generosidade no mundo. Sua evolução natural conduz ao Sete de Ouros, onde o espírito entra plenamente em ação na matéria para transformá-la.",
        ],
      },
    ],

    "sete-de-ouros": [
      {
        title: "Significados Gerais e Palavras-Chave",
        content: [
          "O Sete de Ouros representa o Grau 7 do centro material, simbolizando a ação máxima do espírito na matéria e a necessidade de paciência e perseverança para colher os frutos do trabalho. Na numerologia do Tarot, o sete é o número mais ativo da série decimal, representando a transição do prazer (Seis) para uma espiritualidade prática e transformadora.",
          "Paciência e Colheita: Indica que as \"sementes\" foram plantadas e as raízes estão crescendo; é um lembrete de que coisas boas levam tempo e que a abundância está quase madura para ser colhida.",
          "Obra Alquímica: Representa a materialização do espírito e a espiritualização da matéria, onde a consciência penetra no centro da vida física e celular.",
          "Sucesso Financeiro e Saúde: Sinaliza o sucesso nos negócios através de ideias que produzem dinheiro, generosidade, e uma recuperação triunfante da saúde.",
          "Palavras-chave: Paciência, perseverança, ação consciente na matéria, investimento a longo prazo, espírito em gestação e sucesso material fundado na consciência.",
        ],
      },
      {
        title: "Simbolismo Visual (Rider-Waite)",
        content: [
          "A Pausa no Trabalho: Um homem apoia as duas mãos e o queixo sobre o cabo de sua enxada (ou ferramenta de cultivo), interrompendo temporariamente o seu labor. Ele trabalhou duro para arar a terra, plantar as sementes e cuidar do cultivo; agora, entrou na fase onde o trabalho braçal não pode mais acelerar o processo. Ele precisa esperar.",
          "O Olhar de Avaliação: Sua expressão facial é pensativa e reflexiva, beirando o cansaço legítimo. Ele olha para a videira não com desespero, mas fazendo um balanço estatístico e existencial: \"O retorno está sendo proporcional à energia que investi? Vale a pena continuar cultivando esta mesma terra?\"",
          "Seis Ouros na Videira: Seis grandes moedas de ouro estão presas à folhagem verdejante e robusta. Elas simbolizam o patrimônio que está amadurecendo, os investimentos de longo prazo e os projetos que estão se desenvolvendo bem, mas que ainda não estão prontos para serem totalmente resgatados.",
          "Um Ouro no Chão: Uma única moeda está caída aos pés do agricultor, próxima à sua bota. Isso representa o ganho imediato, a garantia de subsistência que ele já conseguiu retirar, ou a \"semente inicial\" que deu origem a tudo. Mostra que o trabalho já gerou algum resultado tangível, garantindo que o esforço não foi em vão.",
          "A Vegetação Exuberante e o Solo: A videira onde os pentáculos estão inseridos é densa, verde e saudável. O solo aos pés do trabalhador é escuro e fértil. Visualmente, isso garante ao consultante que o projeto tem substância e vitalidade. Não há sinais de praga, seca ou escassez (como vimos no Cinco de Ouros). O sucesso está garantido, desde que o tempo de maturação da natureza seja respeitado.",
          "As Montanhas e o Céu Claro: Ao fundo, o céu é azul-claro e limpo, trazendo clareza mental para tomar decisões futuras. As pequenas montanhas no horizonte reforçam a distância que já foi percorrida desde o início do naipe e lembram que a construção de uma estrutura sólida e duradoura na vida exige uma perspectiva macro, sem pressa ou ansiedade imediatista."
        ],
      },
      {
        title: "O Sete de Ouros em Leituras",
        content: [
          "Positivo (Em pé): Confirma que o consultante possui os meios e a inteligência para fazer sua realidade prosperar [1: 745]. Sugere que o trabalho duro logo será visível e que é preciso confiar no processo natural do tempo.",
          "Negativo (Invertido/Desafiador): Alerta para a fratura entre corpo e espírito, onde o materialismo cego despreza a vida interior [1: 746]. Pode indicar impaciência, má gestão de recursos, ganância ou a sensação de que o esforço não está sendo recompensado conforme o esperado.",
          "Carreira e Negócios: Pode representar um empresário humanista, um gênio dos negócios ou o sucesso mundial de uma empresa que coloca sua potência a serviço da evolução humana.",
        ],
      },
      {
        title: "Contexto Numerológico e Evolutivo",
        content: [
          "Na numerologia do Tarot, o Grau 7 marca o ponto de ação irresistível, correspondendo simbolicamente ao O Carro (VII) e à A Estrela (XVII). Enquanto O Carro conquista territórios e A Estrela purifica o ambiente, o Sete de Ouros transforma a própria matéria a partir de dentro.",
          "Sua evolução natural conduz ao Oito de Ouros, onde se atinge a perfeição da saúde e a abundância equilibrada.",
        ],
      },
    ],

      "oito-de-ouros": [
        {
          title: "Significados Gerais e Palavras-Chave",
          content: [
            "O Oito de Ouros representa o estado de perfeição do centro material, simbolizando a abundância equilibrada, a saúde plena e a harmonia em todas as necessidades físicas e financeiras. Na numerologia do Tarot, o nível 8 é o ápice da recepção e do equilíbrio, funcionando como um 'duplo quadrado' que une a estabilidade terrestre à perfeição espiritual.",
            "Prosperidade e Saúde: Indica uma fase de prosperidade sã, em que o corpo está em pleno equilíbrio e todas as necessidades materiais são satisfeitas de forma harmoniosa.",
            "Paraíso Terrestre: Evoca a imagem do planeta visto como um jardim florido, onde existe entendimento familiar e cada um possui seu espaço.",
            "Fluxo de Energia: Representa o fluxo constante e equilibrado das energias vitais.",
            "Palavras-chave: Perfeição material, abundância, saúde, harmonia familiar, plenitude próspera e estabilidade espiritual na matéria.",
          ],
        },
        {
          title: "Simbolismo Visual (Rider-Waite)",
          content: [
            "A Concentração Absoluta: Um jovem está sentado em seu banco de trabalho de madeira, totalmente absorvido pela tarefa que tem em mãos. Ele segura um martelo e um cinzel, esculpindo com precisão uma estrela de cinco pontas em uma moeda de ouro. Sua postura inclinada para a frente e seu olhar atento revelam que não há espaço para distrações no ambiente. Ele está em estado de fluxo (flow).",
            "A Evolução da Maestria: Diferente do operário do Três de Ouros, que trabalhava sob comando e supervisão de terceiros, o artesão do Oito de Ouros trabalha de forma autônoma. Ele se tornou o mestre de sua própria técnica, focado na consistência da entrega.",
            "As Moedas Concluídas na Pilha Vertical: Fixadas verticalmente em um poste de madeira à direita, estão seis moedas de ouro perfeitamente idênticas e finalizadas. Essa disposição linear e vertical demonstra regularidade, disciplina e o acúmulo de conquistas passadas. Cada moeda no poste representa horas de prática e esforço dedicado.",
            "A Moeda em Execução: O artesão trabalha na sétima moeda, simbolizando o esforço presente e a dedicação ao \"aqui e agora\".",
            "A Moeda no Chão: Há uma oitava moeda inacabada ou aguardando no chão, aos pés do banco. Isso indica que o trabalho ainda não terminou; há sempre espaço para continuar produzindo, aprimorando a técnica e dando o próximo passo prático.",
            "As Roupas e o Avental de Proteção: O jovem veste uma túnica azul-turquesa por baixo de um avental escuro de trabalho, calça vermelha e sapatos roxos. O avental escuro simboliza que ele está disposto a \"sujar as mãos\" e a proteger sua energia vital (representada pelo vermelho de sua calça) do desgaste externo. O azul traz a calma intelectual e a clareza necessárias para executar tarefas que exigem alta precisão técnica e atenção aos mínimos detalhes.",
            "A Cidade Isolada ao Fundo: Bem distante, no canto esquerdo inferior do horizonte, desenha-se o contorno de uma cidade com suas torres e edifícios brancos. O fato de a cidade estar tão afastada e o jovem estar de costas para ela reforça o isolamento voluntário para o aprendizado. Ele se retirou do barulho social, das fofocas, do comércio e das interações cotidianas para conseguir o nível de isolamento necessário para focar no desenvolvimento de seu projeto ou habilidade. O foco dele está inteiramente na bancada."
          ],
        },
        {
          title: "O Oito de Ouros em Leituras",
          content: [
            "Positivo (Em pé): Confirma o sucesso material fundamentado na sabedoria. Sinaliza um lar onde reina a paz e uma situação financeira em que não falta nada. Indica que o consulente atingiu um nível de maestria ou qualidade em sua vida física.",
            "Negativo (Invertido/Desafiador): Alerta para o desequilíbrio corporal, a avareza ou uma visão paralisante do dinheiro. Pode indicar que a pessoa vê a pobreza como uma fatalidade ou que caiu no perfeccionismo extremo, que impede a fluidez da vida e gera rigidez.",
            "Perigo da Perfeição: O Tarot adverte que o estado de perfeição do 8 pode levar à imobilidade; se nada mais pode ser mudado, corre-se o risco de cair na estagnação ou na loucura.",
          ],
        },
        {
          title: "Contexto Numerológico e Evolutivo",
          content: [
            "O Oito de Ouros situa-se no 'quadrado Céu' da numerologia, correspondendo simbolicamente à retidão d'A Justiça e ao mistério intuitivo d'A Lua. Enquanto a Justiça pesa o necessário e a Lua reflete a luz cósmica, o Oito de Ouros manifesta essa perfeição na carne e no território.",
            "Sua evolução natural conduz ao Nove de Ouros, onde ocorre o desprendimento ou o nascimento de uma nova dimensão material.",
          ],
        },
      ],

        "nove-de-ouros": [
          {
            title: "Significados Gerais e Palavras-Chave",
            content: [
              "O Nove de Ouros representa o Grau 9 do centro material, simbolizando um estágio de nascimento, crise benéfica e desprendimento necessário para o fim de um ciclo. Na numerologia do Tarot, o nove é um número andrógino — ativo em relação ao oito e receptivo em relação ao dez —, marcando a transição para uma nova dimensão da realidade física e econômica.",
              "Nascimento e Renovação: Representa o surgimento de novas condições materiais, como um novo trabalho, uma herança, um golpe de sorte ou a recuperação da saúde.",
              "Fim de um Mundo: Simboliza o desprendimento material, o momento em que se abandona o que já foi vivido para fundar algo novo.",
              "Sabedoria na Matéria: Indica uma etapa de sabedoria em que se aceita o fim de um ciclo material com desapego e abnegação.",
              "Palavras-chave: Nascimento, mutação financeira, desprendimento, crise positiva, nova construção e precaução.",
            ],
          },
          {
            title: "Simbolismo Visual (Rider-Waite)",
            content: [
              "A Postura de Serenidade: Uma mulher bem-vestida está de pé no centro de um jardim exuberante. Sua expressão é calma e segura, refletindo paz de espírito e dignidade. Ela não está trabalhando; ela está passeando pelos seus próprios domínios.",
              "O Manto Amarelo com Padrões: Ela veste um manto longo e luxuoso de cor amarela, simbolizando inteligência, vitalidade, riqueza e felicidade. O tecido é decorado com pequenas flores vermelhas (ou símbolos que remetem a sementes/frutos), o que reforça visualmente que suas vestes e seu sustento são feitos do próprio crescimento material que ela cultivou.",
              "O Falcão Encapuzado: Em sua mão esquerda, protegida por uma luva grossa de couro, repousa um falcão domesticado com um capuz na cabeça. O falcão é uma ave de rapina imponente, associada historicamente à nobreza e à caça. No simbolismo esotérico, o falcão representa os instintos selvagens, os desejos e a força de vontade. O fato de ele estar empoleirado e encapuzado indica autodomínio, disciplina mental e controle sobre as próprias paixões. Ela alcançou o sucesso material porque soube domar seus impulsos e focar estrategicamente em seus objetivos de longo prazo.",
              "As Videiras Carregadas e os Nove Pentáculos: A personagem está cercada por videiras altas, densas e repletas de uvas maduras, que simbolizam fertilidade, abundância profunda e doçura na vida. Os nove pentáculos estão distribuídos de maneira muito específica ao redor dela: uma pilha de seis moedas está firmemente apoiada à sua direita (representando sua base sólida e consolidada) e um grupo de três moedas está posicionado à sua esquerda, próximo ao manto. Essa disposição mostra que a riqueza está integrada de forma orgânica e harmoniosa ao seu ambiente.",
              "O Caracol Meticuloso: No canto inferior esquerdo, bem próximo ao chão, há um pequeno caracol rastejando lentamente. Este detalhe visual sutil é uma alusão deliberada ao tempo: a independência e a estabilidade retratadas nesta carta não aconteceram do dia para a noite. Foram construídas de forma lenta, constante, paciente e deliberada (passo a passo, como a jornada do caracol).",
              "O Céu Dourado: O fundo da carta é inteiramente preenchido por um amarelo brilhante e sólido. Isso elimina qualquer sinal de tempestade, escuridão ou dúvida, selando a atmosfera de realização plena, clareza mental e satisfação com o momento presente.",
              "A Propriedade ao Fundo: No horizonte, à direita, é possível ver parte de uma grande propriedade ou castelo entre as árvores. Isso reforça que o jardim onde ela se encontra faz parte de suas terras, simbolizando propriedade privada, solidez patrimonial e a segurança de ter um refúgio seguro e confortável no mundo."
            ],
          },
          {
            title: "O Nove de Ouros em Leituras",
            content: [
              "Positivo (Em pé): Sinaliza a chegada iminente de mudanças benéficas. É um aviso para não se distrair: como em um parto real, o menor erro ou falta de foco pode comprometer o resultado final do novo projeto. Representa o sucesso que leva a uma nova construção.",
              "Negativo (Invertido/Desafiador): Alerta para uma crise econômica sofrida, roubos, demissões ou mudanças forçadas. Pode indicar uma 'velhice sofrida', problemas de herança, exílio ou a sensação de fracasso diante de uma perda inevitável.",
            ],
          },
          {
            title: "Contexto Numerológico e Evolutivo",
            content: [
              "O Nove situa-se no final da série material, correspondendo simbolicamente à sabedoria d'O Eremita e à clareza d'O Sol. Enquanto O Eremita retira-se do mundo e O Sol inicia uma nova construção, o Nove de Ouros realiza essa mutação na carne e nas posses.",
              "Sua evolução natural conduz ao Dez de Ouros, onde o ciclo material se completa e a energia prepara-se para se tornar criatividade pura (Ás de Paus).",
            ],
          },
        ],

        "dez-de-ouros": [
          {
            title: "Significados Gerais e Palavras-Chave",
            content: [
              "O Dez de Ouros representa o ápice da prosperidade e o encerramento do ciclo material, simbolizando a segurança total, a herança e a fundação de um legado que transcende o indivíduo. Na numerologia do Tarot, o dez marca a totalidade completa e a mutação para um novo ciclo, onde a abundância física se prepara para se transformar em energia criativa.",
              "Prosperidade e Império: É considerada a carta da 'Prosperidade Suprema', indicando a construção de um 'império', riqueza duradoura e sucesso a longo prazo.",
              "Legado e Tradição: Reflete não apenas a riqueza financeira, mas a transmissão de tradições, valores, crenças e bens através das gerações.",
              "Estabilidade Total: Indica uma situação de estabilidade emocional, física e financeira, onde os recursos foram usados sabiamente no passado para criar conforto duradouro.",
              "Palavras-chave: Prosperidade plena, legado familiar, riqueza geracional, completude material, tradição e transição para a criatividade.",
            ],
          },
          {
            title: "Simbolismo Visual (Rider-Waite)",
            content: [
              "O Ancião Patriarca: Sentado em primeiro plano à esquerda, vemos um homem idoso de cabelos brancos. Ele está envolto em um manto extremamente luxuoso, ricamente decorado com videiras, uvas e símbolos heráldicos. Ele representa a origem da fundação, o acumulador do patrimônio e da sabedoria que agora observa, em paz, o fruto de uma vida inteira de trabalho.",
              "O Casal: No centro, um homem de costas e uma mulher de frente conversam sob um grande arco de pedra. Eles representam a geração madura e ativa, encarregada de gerenciar a estrutura atual, manter os negócios e preservar a estabilidade da família.",
              "A Criança e os Cães: No canto inferior direito, uma criança pequena brinca e acaricia dois cachorros brancos (galgos, historicamente associados à nobreza e à fidelidade doméstica). A criança simboliza o futuro, a garantia de que o patrimônio e os valores familiares continuarão vivos nas próximas eras. Os cães reforçam a atmosfera de lealdade, conforto e segurança do lar.",
              "A Árvore da Vida Formada pelos Dez Pentáculos: O detalhe esotérico mais impressionante desta carta é a distribuição geométrica das dez moedas de ouro: elas estão sobrepostas à cena inteira, mas se você conectá-las visualmente, notará que os dez pentáculos estão dispostos exatamente no formato da Árvore da Vida (Etz Chaim) da Cabala. Essa escolha de design de Pamela Colman Smith e Arthur Edward Waite eleva o significado da carta: mostra que a verdadeira riqueza material, quando bem estruturada, é o reflexo terreno de uma ordem divina e cósmica de manifestação. A fundação material sólida serve como um templo seguro para a experiência espiritual e humana.",
              "A Arquitetura Sólida e o Arco de Pedra: Os personagens estão protegidos por uma sólida construção de pedra, com uma torre alta visível ao fundo e um brasão ou emblema esculpido acima do arco. O arco de pedra atua como um portal e simboliza proteção contra o caos do mundo exterior. A arquitetura medieval rígida enfatiza as ideias de durabilidade, instituições consolidadas (como empresas familiares, fundos imobiliários ou dinastias) e leis que resistem à passagem do tempo."
            ],
          },
          {
            title: "O Dez de Ouros em Leituras",
            content: [
              "Positivo (Em pé): Sinaliza que o consulente está no caminho certo para criar algo permanente. Indica que a realização material foi atingida e que é hora de usar essa base para projetos maiores ou espirituais.",
              "Negativo (Invertido/Desafiador): Pode indicar alguém que possui sucesso na carreira, mas ainda sente um vazio ou falta de propósito na vida. Também alerta para o desejo de posses materiais que não se pode custear ou uma resistência em encerrar um ciclo material para evoluir.",
              "Transição: No sistema evolutivo, o Dez de Ouros 'anuncia' o Ás de Paus, significando que a matéria, ao chegar ao limite de sua recepção, deve agora se tornar criatividade e ação.",
            ],
          },
          {
            title: "Contexto Numerológico e Espiritual",
            content: [
              "Na numerologia do Tarot, o Dez representa o Grau 10, o fim do percurso que retornará à unidade em um plano superior. O Dez de Ouros ensina que a verdadeira riqueza deve ser empregada para exaltar a vida, caso contrário, pode levar à estagnação ou destruição.",
            ],
          },
        ],

        "quatro-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Quatro de Ouros representa a estabilidade, a segurança e o domínio total sobre o mundo material, sendo o ápice da perfeição terrestre dentro da numerologia do Tarot. Enquanto o Arcano anterior (Três de Ouros) trazia a explosão vital e o investimento inicial, o Quatro simboliza o momento em que os projetos se consolidam em uma base sólida e inabalável.",
        "Segurança Material: Indica uma situação financeira estável, um emprego seguro, um salário suficiente ou uma empresa bem administrada.",
        "Saúde e Equilíbrio: No plano físico, representa um corpo bem cuidado e em boa saúde, funcionando como o pilar da realidade do indivíduo.",
        "Domínio do Território: Simboliza o senhor (ou senhora) da vida material que tomou nas mãos os meios para garantir sua própria segurança e a de sua família.",
        "Palavras-chave: Estabilidade, segurança, prosperidade, saúde sólida, base firme, construção duradoura e posse.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "O Abraço de Proteção: Um homem está sentado em uma estrutura de pedra, segurando uma grande moeda de ouro firmemente contra o próprio peito com ambos os braços cruzados ao redor dela. Esse gesto corporal é puramente defensivo e indica o medo subjacente de perder o que conquistou. Ele protege seu patrimônio trancando o coração para o mundo exterior.",
        "O Olhar Desconfiado: Sua expressão facial não denota a paz de quem é próspero e livre, mas sim a tensão e a desconfiança de quem se sente constantemente ameaçado. Ele vigia seus pertences com rigidez.",
        "Um Ouro na Cabeça: Uma moeda está equilibrada diretamente sobre a sua coroa. Isso simboliza que seus pensamentos estão completamente ocupados por preocupações financeiras e materiais. A mente está travada, impedindo a entrada de novas ideias ou inspirações espirituais.",
        "Um Ouro no Peito: Como mencionado, a moeda tranca a região do coração e das emoções, indicando que ele prioriza a segurança material acima das relações humanas ou da generosidade emocional.",
        "Dois Ouros sob os Pés: O homem pisa firmemente em duas moedas de ouro que estão no chão. Embora isso demonstre uma base financeira sólida e os pés bem fincados na realidade material, também traz um simbolismo imobilizador: ele não pode dar um único passo para a frente sem abrir mão da posição daquelas moedas. Ele está literal e figurativamente preso ao próprio dinheiro.",
        "As Roupas e os Símbolos de Status: O personagem usa uma coroa dourada, indicando que possui autoridade ou que atingiu um nível de realeza/liderança em seu próprio domínio material. Ele veste uma túnica vermelha por baixo de um manto escuro (preto ou marrom-escuro). O vermelho traz o desejo de sobrevivência e a preservação da força vital, enquanto o manto escuro atua como uma capa de isolamento, uma barreira que o afasta da troca social e econômica com o ambiente ao redor.",
        "A Cidade Isolada ao Fundo: Atrás do homem, desenha-se o panorama de uma cidade moderna e desenvolvida, com torres, edifícios e casas. No entanto, há uma distância clara entre o personagem e a comunidade. Ele escolheu se sentar em uma plataforma elevada, do lado de fora e de costas para a cidade. Essa gramática visual reforça o seu isolamento voluntário. Em vez de fazer seus recursos circularem dentro da sociedade para gerar valor e novos negócios, ele prefere se afastar com seu tesouro, preferindo a segurança da solidão ao dinamismo das trocas coletivas."
      ],
    },
    {
      title: "O Quatro de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza sucesso em empreendimentos, boa saúde e a fundação de um lar ou base estável. Representa a capacidade de gerir recursos com responsabilidade.",
        "Negativo (Invertido/Desafiador): O maior perigo é a estagnação e a avareza. Pode indicar uma pessoa excessivamente possessiva ou gananciosa, ou problemas de saúde relacionados ao excesso.",
        "Conselho: A estabilidade é necessária como base, mas não deve se tornar um fim em si mesma; o 'quadrado' deve eventualmente se abrir para a evolução do grau cinco.",
      ],
    },
    {
      title: "Contexto Numerológico e Evolutivo",
      content: [
        "Na numerologia do Tarot, o Grau 4 representa o 'quadrado Terra' — a perfeição na matéria. No nível do Quadrado Humano, simboliza o ser adulto e estável, capaz de suprir suas necessidades.",
        "Sua evolução natural levará ao Cinco de Ouros, onde uma nova consciência ou ideal espiritual penetra a rigidez material para expandir horizontes.",
      ],
    },
  ],
  "cinco-de-ouros": [
    {
      title: "Significados Gerais e Palavras-Chave",
      content: [
        "O Cinco de Ouros representa o Grau 5 do centro material, simbolizando a emergência de um novo ideal ou de uma nova consciência dentro da matéria. Enquanto o Quatro de Ouros trazia a segurança absoluta, o Cinco atua como uma ponte, introduzindo uma aspiração que supera o plano puramente físico ou econômico.",
        "Nova Consciência na Matéria: Indica a introdução de uma dimensão espiritual, planetária ou cósmica na vida material.",
        "Procura por Alternativas: Pode representar o interesse por métodos de cura além da medicina oficial ou uma mudança de regime alimentar.",
        "Inovação nos Negócios: Simboliza a criação de uma nova seção em uma empresa ou o investimento em energias 'limpas' e produtos orgânicos.",
        "Palavras-chave: Novo ideal material, consciência corporal, expansão de horizontes, transição e projeto inovador.",
      ],
    },
    {
      title: "Simbolismo Visual (Rider-Waite)",
      content: [
        "A Figura de Muletas: À esquerda, um homem com o pé enfaixado apoia-se em muletas de madeira. Ele veste uma túnica azulada e carrega um pequeno sino dourado pendurado ao pescoço. Historicamente, os sinos eram usados na Idade Média para identificar leprosos ou párias sociais, alertando os outros de sua aproximação. Ele representa a fragilidade física, a doença e o sentimento de ser rejeitado ou excluído pela sociedade.",
        "A Figura com a Manta Desgastada: À direita, outra pessoa caminha com a cabeça totalmente curvada, envolta em uma manta marrom esfarrapada e rasgada. Sua postura corporal é de pura derrota e exaustão, simbolizando o peso avassalador das preocupações e a perda da dignidade.",
        "O Vitral Iluminado da Igreja: Logo acima deles, ergue-se a parede escura de uma construção que claramente se trata de uma igreja ou santuário, identificada pelo magnífico vitral colorido. O vitral exibe cinco moedas de ouro (pentáculos) dispostas de forma organizada sobre um fundo amarelo vibrante. O amarelo e as cores do vitral representam a luz, o calor, a segurança, o alimento e a assistência espiritual. Do lado de dentro daquela janela, existe tudo o que os dois caminhantes precisam para sobreviver ao inverno.",
        "A Grande Ironia Visual: O ponto central de virada simbólica nesta carta é a direção para onde os personagens estão se movendo: eles estão passando direto pela igreja, de costas para a luz do vitral. O homem de muletas olha para cima, mas seu olhar está voltado para frente, absorto em sua própria dor, enquanto a outra figura olha fixamente para o chão coberto de neve. Nenhum dos dois percebe que a poucos passos dali existe uma porta aberta, um pedido de socorro aceito ou um teto protetor. Eles estão tão consumidos pela mentalidade de escassez e sofrimento que se tornaram incapazes de enxergar as oportunidades de ajuda ao redor.",
        "O Ambiente Hostil: O fundo é uma parede preta e texturizada que emoldura a tempestade. A neve acumulada no chão e caindo sobre eles reforça a frieza do momento e o sentimento de desolação. O inverno da alma e do bolso está em seu ápice."
      ],
    },
    {
      title: "O Cinco de Ouros em Leituras",
      content: [
        "Positivo (Em pé): Sinaliza que o consulente está pronto para ir além da simples segurança e buscar um propósito maior em seu trabalho ou saúde. Indica uma vontade de progredir e de não estagnar no 'adquirido'.",
        "Negativo (Invertido/Desafiador): O maior perigo é a mentira, a traição ou a promessa vazia. Pode indicar revés da sorte, falência, desemprego ou depressão ligada à instabilidade material.",
      ],
    },
    {
      title: "Contexto Numerológico e Energético",
      content: [
        "Na numerologia do Tarot, o Cinco rompe a estabilidade do Quatro para buscar uma dimensão superior, funcionando como um mediador.",
        "Corresponde simbolicamente ao Arcano O Papa (V) e ao Arcano O Diabo (XV), tentando aplicar esse ideal no plano prático e terreno.",
      ],
    },
  ],
}

// Adicione aqui o nome (sem extensão) de cada imagem disponível em /public/images/arcanos_menores/
const minorArcanaImages = new Set<string>([
  "asdepaus",
  "doisdepaus",
  "tresdepaus",
  "quatrodepaus",
  "cincodepaus",
  "seisdepaus",
  "setedepaus",
  "oitodepaus",
  "novedepaus",
  "dezdepaus",
  "pajemdepaus",
  "cavaleirodepaus",
  "rainhadepaus",
  "reidepaus",
  "asdecopas",
  "doisdecopas",
  "tresdecopas",
  "quatrodecopas",
  "cincodecopas",
  "seisdecopas",
  "setedecopas",
  "oitodecopas",
  "novedecopas",
  "dezdecopas",
  "pajemdecopas",
  "cavaleirodecopas",
  "rainhadecopas",
  "reidecopas",
  "asdeespadas",
  "doisdeespadas",
  "tresdeespadas",
  "quatrodeespadas",
  "cincodeespadas",
  "seisdeespadas",
  "setedeespadas",
  "oitodeespadas",
  "novedeespadas",
  "dezdeespadas",
  "pajemdeespadas",
  "cavaleirodeespadas",
  "rainhadeespadas",
  "reideespadas",
  "asdeouros",
  "doisdeouros",
  "tresdeouros",
  "quatrodeouros",
  "cincodeouros",
  "seisdeouros",
  "setedeouros",
  "oitodeouros",
  "novedeouros",
  "dezdeouros",
  "pajemdeouros",
  "cavaleirodeouros",
  "rainhadeouros",
  "reideouros",
])

function buildMinorArcana(): TarotCard[] {
  const cards: TarotCard[] = []
  ;(Object.keys(suitInfo) as MinorSuit[]).forEach((suit) => {
    const meanings = minorMeanings[suit]
    suitRanks.forEach((rank, i) => {
      const slug = `${rank.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()}-de-${suit}`
      const imageFilename = slug.replace(/-/g, "")
      cards.push({
        slug,
        number: rank.number,
        name: `${rank.name} de ${suitInfo[suit].name}`,
        type: "menor",
        suit,
        keywords: meanings.kw[i],
        upright: meanings.upright[i],
        reversed: meanings.reversed[i],
        description: meanings.desc[i],
        ...(minorArcanaImages.has(imageFilename)
          ? { image: `/images/arcanos_menores/${imageFilename}.jpeg` }
          : {}),
        ...(minorFullDescriptions[slug] ? { fullDescription: minorFullDescriptions[slug] } : {}),
      })
    })
  })
  return cards
}

export const minorArcana: TarotCard[] = buildMinorArcana()

export const allCards: TarotCard[] = [...majorArcana, ...minorArcana]

export function getCardBySlug(slug: string): TarotCard | undefined {
  return allCards.find((c) => c.slug === slug)
}
