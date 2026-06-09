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
        title: "Simbolismo Visual",
        content: [
          "A Caminhada: O Louco é o eterno viajante. Ele caminha decididamente com sapatos vermelhos (energia vital) e finca um bastão vermelho na terra para avançar.",
          "A Trouxa: Representa o substrato útil da experiência e a luz da consciência, carregando apenas o essencial.",
          "O Animal (Cão): Interpreta-se como o passado que empurra o indivíduo para frente ou como o instinto domado (o ego) que agora colabora com o ser essencial. Também é visto como um símbolo de proteção e fidelidade durante a jornada.",
          "A Rosa Branca: Presente em algumas versões (como o Tarot de Waite), simboliza a inocência, pureza e a inexperiência juvenil.",
          "O Precipício: Sugere que ele está prestes a entrar no desconhecido, muitas vezes sem consciência dos perigos ou obstáculos materiais, focado apenas no céu (espiritualidade)."
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
        content: [
          "O Cetro e a Folhinha Verde: Ela segura um cetro apoiado na região do sexo, indicando que seu poder criativo nasce de sua natureza instintiva; a folha verde que brota dele simboliza a primavera perpétua da vida.",
          "O Escudo com a Águia: Em algumas versões, ela segura um escudo com uma águia macho ainda em formação, sugerindo que, no coração da maior feminilidade, existe um núcleo masculino ativo (Yang dentro do Yin).",
          "A Coroa de Estrelas: Suas doze estrelas brancas representam os signos do zodíaco e a conexão da inteligência humana com o plano cósmico e a pureza espiritual.",
          "Trigo, Frutos e Rio: Cercada por trigo e vestida com estampas de romãs ou frutos, ela simboliza a colheita pronta e a riqueza material; o rio que flui ao fundo indica que sua energia está em constante movimento.",
          "Serpente Branca e Pomo de Adão: Jodorowsky destaca uma serpente aos seus pés (libido dominada) e um pomo de Adão em seu pescoço, reforçando seu papel como uma entidade andrógina criativa."
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
        title: "Simbolismo Visual",
        content: [
          "O Trono e as Cabeças de Carneiro: Sentado em um trono rígido e cinza (cor do concreto), ele demonstra solidez e frieza estratégica. As cabeças de carneiro (signo de Áries) simbolizam a força vital do grande iniciador e o poder soberano.",
          "O Cetro e o Globo: Ele segura um cetro (frequentemente a cruz Ankh) que representa o poder sobre a vida e as leis cósmicas, enquanto o globo em sua mão simboliza seu domínio total sobre o território manifestado.",
          "A Águia e o Ovo: Jodorowsky destaca um detalhe fundamental: a águia do seu escudo é fêmea e incuba um ovo, sugerindo que, no coração do poder material, existe um núcleo de sabedoria e gestação espiritual.",
          "Postura das Pernas: Suas pernas cruzadas desenham um quadrado, reforçando visualmente sua ancoragem na matéria e sua estabilidade terrestre.",
          "Cores Vermelho e Azul: Suas vestes vermelhas simbolizam vitalidade, fogo e ação vitoriosa. No entanto, sua armadura, barba e cabelos azul-celeste indicam que sua autoridade é equilibrada por uma profunda espiritualidade e receptividade emocional."
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
        title: "Simbolismo Visual",
        content: [
          "A Tiara e a Cruz Tripla: Sua coroa e seu cetro de três barras horizontais simbolizam o poder criador e a autoridade sobre os três mundos: divino, psíquico e físico.",
          "Duas Colunas: Sentado entre colunas que evocam a solidez do Templo de Salomão, simboliza a estabilidade e o equilíbrio da presença divina na Terra.",
          "As Duas Chaves: Situadas aos seus pés, representam o poder de \"ligar e desligar\" (abrir ou fechar) o acesso ao conhecimento e ao reino dos céus.",
          "Gesto de Bênção: Com a mão direita, ele abençoa e sinaliza que o conhecimento deve ser compartilhado com os discípulos.",
          "Os Dois Discípulos: Representam a via do estudo e do esforço (via seca) e a via da iluminação e revelação direta (via úmida).",
          "Luva Azul e Broche: Jodorowsky destaca uma luva azul (receptividade espiritual na ação) e um broche no pescoço que simboliza o ser essencial iluminado dentro do indivíduo."
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
        content: [
          "O Veículo (Quadrado): Um carro cor de carne fincado na terra, sugerindo que ele não desliza, mas segue o movimento de rotação do próprio planeta. Seu formato quadrado representa a estabilidade na matéria.",
          "O Príncipe e a Geometria: O condutor forma um triângulo (espírito) dentro do quadrado do veículo (matéria), simbolizando a materialização do espírito ou o espírito atuando sobre o mundo físico.",
          "Os Cavalos (ou Esfinges): Geralmente representados nas cores azul-celeste (animalidade espiritualizada). Um cavalo é feminino (olho fechado e cílios longos) e o outro masculino, simbolizando a união dos opostos que trabalham juntos para um objetivo comum. Eles trazem o símbolo do ouro alquímico no peito.",
          "O Dossel e as Estrelas: Coberto por um manto com doze estrelas, indicando que o condutor trabalha em harmonia com as forças cósmicas e o zodíaco.",
          "As Máscaras nos Ombros: Representam o passado e o futuro, ou as polaridades positiva e negativa, que o príncipe equilibra ao agir no presente.",
          "A Gota Verde: Um detalhe central que simboliza o germe da imortalidade e a consciência impessoal dentro da matéria perecível."
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
        content: [
          "A Lanterna: Simboliza a luz velada da sabedoria ou o \"Selo de Salomão\", representando um conhecimento que deve ser digerido internamente. Ela ilumina o passado para que se possa aprender com ele.",
          "O Bastão: Representa o apoio na caminhada, um \"eixo do mundo\" ou uma arma mágica contra a injustiça e o erro. Nas versões de Marseille, o bastão vermelho conduzido por uma mão azul sugere uma ação instintiva guiada por uma recepção espiritual.",
          "O Manto e as Camadas de Roupa: Sugerem o frio da solidão do iniciado, mas também as \"camadas\" da experiência vivida e a proteção da vida interior. A cor azul-escuro externa simboliza humildade, enquanto o interior cor de carne ou verde remete à experiência orgânica e eterna.",
          "Caminhada de Costas: O Eremita é frequentemente descrito como alguém que avança andando de costas, contemplando o caminho já percorrido para criar a realidade do presente passo a passo.",
          "As Rugas na Testa: Indicam atividade mental intensa e o peso da memória e do conhecimento acumulado."
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
          "Ele aparece após a perfeição da Justiça (VIII); ele ensina que a perfeição estática pode ser opressiva e que o ser deve entrar em crise para evoluir para um novo ciclo, representado pela Roda da Fortuna (X). Na \"Jornada do Herói\", ele representa o momento em que o buscador reconhece tanto sua luz quanto sua sombra, tornando-se um modelo e guia para os outros a partir de sua própria pureza e integridade. Astrologicamente, as fontes o associam frequentemente ao signo de Virgem."
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
        title: "Simbolismo Visual",
        content: [
          "A Roda: No Tarot de Marselha, a roda é dupla (círculos vermelho e amarelo), representando a dualidade entre a natureza animal e a espiritual do ser humano. No centro exato da carta está o eixo de rotação, símbolo do mistério divino e do ponto imutável no meio do caos.",
          "A Esfinge: Situada no topo da roda, segura uma espada e representa a sabedoria, a força e o equilíbrio em meio ao movimento. Ela é frequentemente vista como um enigma emocional que precisa ser resolvido para o ciclo avançar.",
          "Os Animais: Um animal sobe (intelecto/aspiração) e outro desce (matéria/encarnação), simbolizando a lei da alternância e do renascimento.",
          "A Manivela: Indica a necessidade de uma ajuda externa ou providência divina para fazer a roda girar; numerologicamente, é a energia d'A Força (XI) que aciona esse movimento.",
          "Os Quatro Seres: Em versões como a de Waite, os quatro seres nos cantos estão associados aos signos fixos do zodíaco: Aquário (Anjo), Escorpião (Águia), Touro (Touro) e Leão (Leão)."
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
        content: [
          "O Esqueleto Cor de Carne: Diferente de um esqueleto branco de ossos secos, ele é representado na cor da carne viva (em versões como Marselha), indicando que se trata de uma força viva e ativa de transformação em movimento.",
          "O Alfanje (Foice): Possui cabo amarelo (inteligência) e lâmina vermelha e azul-celeste, simbolizando uma semeadura espiritual e uma ação vital que corta o que é subjetivo ou inútil.",
          "O Solo Negro: Representa o nigredo da alquimia ou o inconsciente profundo; dele brotam cabeças (conceitos dos pais), pés e mãos, indicando que o novo ser já está aflorando à superfície.",
          "A Rosa Branca (em versões como Waite): Simboliza a imortalidade, pureza e purificação, reforçando que a morte é apenas o prelúdio de um novo nascimento.",
          "O Cavalo Branco (Waite): Filho da noite e do mistério, representa a passagem do espírito através da morte para a ressurreição."
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
        title: "Simbolismo Visual",
        content: [
          "O Anjo e as Asas: Representa um ser intermediário (frequentemente identificado como o Arcanjo Miguel) cujas asas azul-celeste indicam espiritualidade e capacidade de voar para regiões sutis, embora permaneça enraizado na terra.",
          "As Duas Urnas (Vasos): O anjo verte um líquido de um vaso para outro sem perder nenhuma gota, simbolizando a eterna circulação da vida, a comunicação interior e a união de elementos diferentes para criar algo novo.",
          "Os Pés e o Solo: Nas fontes, um pé pode estar sobre a rocha (estabilidade) e outro na água (fluxo). Jodorowsky destaca o sapato roxo, que simboliza a união mística entre a ação (vermelho) e a recepção (azul).",
          "As Serpentes aos Pés: Representam a libido e as energias telúricas que foram dominadas e sublimadas em direção às asas e ao espírito.",
          "O Símbolo no Peito: Quatro triângulos amarelos representam os centros intelectual, emocional, sexual e corporal, harmonizados por um círculo central que é a quintessência ou ser essencial."
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
        title: "Simbolismo Visual",
        content: [
          "A Figura Andrógina: O personagem principal mistura traços humanos e animais (como asas de morcego e chifres), representando as potências primitivas e a libido universal que reside no sistema nervoso humano.",
          "A Tocha: Segura na mão esquerda, indica o desejo de levar a luz da consciência para as trevas da matéria ou do inconsciente.",
          "Os Personagens Acorrentados: Um homem e uma mulher (ou dois diabretes) estão presos a um pedestal, o que simboliza a escravidão ao instinto ou uma co-dependência onde as mãos estão escondidas nas costas, indicando falta de ação livre.",
          "Rostos no Corpo: Olhos ou rostos situados nos joelhos e no ventre sugerem que o Diabo vê em todos os níveis e que seus desejos são manifestados sem hipocrisia.",
          "O Pedestal e o Solo Negro: O solo representa o nigredo da alquimia ou o magma criativo das profundezas onde toda a vida germina antes de emergir para a luz.",
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
        title: "Simbolismo Visual",
        content: [
          "A Torre (O Corpo): Os tijolos cor de carne indicam que a torre simboliza o corpo humano, que é a verdadeira \"Casa de Deus\", contendo a divindade em seu interior.",
          "A Coroa: Representa a vontade humana racional ou as ambições. O fato de ser atingida ou \"arrancada\" sugere que o poder material deve ser transformado em fulguração espiritual.",
          "O Raio (Energia Divina): Simboliza a intervenção direta do Divino (Fohat) que penetra na matéria para transformá-la. É uma força tanto criadora quanto destruidora que consagra o que atinge.",
          "Os Degraus Iniciáticos: A restauração do Tarot de Marselha revelou três degraus que conduzem à porta da torre, simbolizando as etapas de aceitar o conhecimento, conservá-lo e, finalmente, abrir mão dele.",
          "Os Personagens: Em vez de caírem em desgraça, os personagens são vistos como iniciados que saem alegremente para honrar a terra. Seus cabelos amarelos simbolizam iluminação e um deles parece caminhar com as mãos, vendo o mundo de forma nova.",
          "As Gotas Coloridas: Representam concentrações de energia e a dança da alegria cósmica, indicando que as estrelas e as forças universais são aliadas da consciência humana."
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
        title: "Simbolismo Visual",
        content: [
          "A Mulher Nua e Ajoelhada: Representa a alma em estado de receptividade total e humildade, honrando a terra onde se estabelece. Ela mantém um pé na água e outro na terra, sinalizando o equilíbrio entre a intuição e o lado prático/terreno.",
          "As Oito Estrelas: A estrela central maior representa a individualidade e o núcleo do ser, enquanto as sete estrelas menores ao redor podem simbolizar os sete chakras ou os centros de energia do corpo.",
          "Os Dois Vasos: A mulher derrama água de dois jarros; um vaso está ligado ao seu corpo (receptivo) e o outro derrama energia no rio e na terra, simbolizando a materialização do espírito e a circulação da vida.",
          "O Pássaro Negro: Pousado em uma árvore, representa a alma ou o ego humano que foi reduzido ao essencial e se prepara para voar em direção ao cosmos.",
          "O Rio Azul: Representa a corrente do passado sendo purificada pela ação da Estrela para nutrir o futuro."
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
        title: "Simbolismo Visual",
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
        title: "Simbolismo Visual",
        content: [
          "O Astro Radiante: O Sol olha diretamente para o observador (como a Justiça e o Julgamento), sinalizando que ele revela a verdade sem disfarces. Seus raios representam a irradiação da energia vital e da consciência espiritual.",
          "Os Gêmeos (ou a Criança): No Tarot de Marselha, dois personagens se ajudam a atravessar um rio, simbolizando a parte consciente do ser guiando a parte animal/primitiva em direção à alegria. Na versão de Waite, uma criança nua sobre um cavalo branco representa a inocência, a pureza e a força vitoriosa do espírito.",
          "O Muro de Tijolos: Marca o limite do domínio humano e funciona como uma proteção contra as amarras do passado, permitindo a construção de um \"mundo novo\".",
          "O Rio Azul-claro: Simboliza a vida eterna e a circulação harmoniosa das energias entre o plano celeste e o terrestre.",
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
        title: "Simbolismo Visual",
        content: [
          "O Anjo e a Trombeta: O Arcanjo (frequentemente identificado como Gabriel) sopra uma trombeta de ouro, simbolizando a voz divina e o anúncio de um despertar espiritual que ressoa em todo o ser.",
          "A Bandeira com a Cruz: A bandeira laranja com uma cruz cor de carne representa a união do humano com o divino, indicando a vocação de viver em harmonia tanto no plano material (horizontal) quanto no espiritual (vertical).",
          "As Figuras que Ressuscitam: Um homem, uma mulher e um menino (ou ser azul) surgem de suas tumbas, representando a integração do passado e a cura de feridas geracionais ou familiares para o nascimento de uma nova consciência.",
          "A Nuvem Azul-Celeste: Envolve o anjo e simboliza a abertura mental e a pureza de pensamento alcançada nesta etapa.",
          "O Túmulo: Funciona como uma câmara de reflexão e transmutação, afirmando que a vida persiste através das transformações e que a morte iniciática é necessária para a evolução."
        ]
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
        title: "Simbolismo Visual",
        content: [
          "A Mulher Dançante: No centro, uma figura feminina nua (ou andrógino realizado) dança, simbolizando a alma humana em estado de liberdade total e alegria cósmica.",
          "A Guirlanda ou Mandorla: O oval de folhas que a rodeia representa o ovo cósmico ou o sexo feminino universal, simbolizando a vida eterna e a conclusão da Grande Obra.",
          "As Quatro Figuras (Tetramorfo): Nos cantos da carta, aparecem o Anjo, a Águia, o Touro e o Leão, que representam os quatro Evangelistas, os quatro elementos (Água, Ar, Terra, Fogo) e as quatro energias humanas (emocional, intelectual, material e criativa) plenamente realizadas.",
          "As Duas Varinhas ou Objetos: A figura central segura um bastão (ativo) e um frasco (receptivo), demonstrando que ela domina e harmoniza as polaridades masculina e feminina.",
          "O Pé Apoiado: A personagem toca o chão levemente, indicando que ela está enraizada na realidade material, mas pronta para a transcendência espiritual."
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

function buildMinorArcana(): TarotCard[] {
  const cards: TarotCard[] = []
  ;(Object.keys(suitInfo) as MinorSuit[]).forEach((suit) => {
    const meanings = minorMeanings[suit]
    suitRanks.forEach((rank, i) => {
      cards.push({
        slug: `${rank.number.toLowerCase()}-de-${suit}`,
        number: rank.number,
        name: `${rank.name} de ${suitInfo[suit].name}`,
        type: "menor",
        suit,
        keywords: meanings.kw[i],
        upright: meanings.upright[i],
        reversed: meanings.reversed[i],
        description: meanings.desc[i],
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
