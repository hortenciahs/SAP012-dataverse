// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = [
  {
    id: "hobby1",
    name: "Crochê",
    shortDescription: "Uma técnica de criar peças com fios e agulha.",
    description:
      "Crochê é uma forma de arte que consiste em criar peças com fios de lã, algodão ou outros materiais, usando uma agulha especial que tem um gancho na ponta. Com o crochê, pode-se fazer vários tipos de objetos, como roupas, acessórios, bikinis, bolsas, tapetes, mantas, bonecos, etc. Para fazer crochê, é necessário aprender a fazer pontos, carreiras, cores e padrões diferentes. Crochê é uma técnica que ajuda a desenvolver a criatividade, a coordenação motora, a paciência e o relaxamento mental.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/croche.jpeg?raw=true",
    facts: {
      custoParaIniciar: 50.00, // BRL
      nivelDeDificuldade: 2, // 1: fácil, 2: mediano, 3: difícil
      categoriaHobby: "beleza",
      materialNecessario: "Fios, agulha de crochê, tesoura, etc.",
    },
  },
  {
    id: "hobby2",
    name: "Scrapbooking",
    shortDescription: "Uma forma de preservar e decorar memórias.",
    description:
      "Scrapbooking é uma arte de guardar e enfeitar memórias, como fotografias, cartas, e outros itens que tenham valor sentimental, usando diversos materiais, como papéis coloridos, adesivos temáticos, fitas decorativas, botões, e outros enfeites. Scrapbooking pode ser feito em diferentes formatos, como álbuns, cadernos, quadros, e outros suportes, de acordo com o tema e o estilo escolhidos. Scrapbooking exige conhecimento de técnicas, como recortar, colar, dobrar, e outras, e de elementos, como cores, formas, texturas, e outros, que harmonizem com as memórias. Scrapbooking é uma maneira de guardar e enfeitar memórias, e também de expressar sentimentos e emoções através da arte.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/scrapbooking.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "mente",
      materialNecessario:
        "Papéis, adesivos, fitas, botões, tesoura, cola, etc.",
    },
  },
  {
    id: "hobby3",
    name: "Fazer sabonetes",
    shortDescription: "A arte de criar sabonetes com diferentes aromas.",
    description:
      "Fazer sabonetes é uma arte de produzir sabonetes artesanais com aromas, cores, formas e propriedades diversos, usando ingredientes variados, como glicerina, óleos essenciais, moldes, flores secas, corantes, extratos, etc. Fazer sabonetes pode ser para uso pessoal, por hobby, para dar de presente, para vender ou para enfeitar. Fazer sabonetes requer saber fazer receitas, medir ingredientes, usar utensílios, etc. Fazer sabonetes é uma arte de criar sabonetes personalizados e uma forma de cuidar da pele e do bem-estar com produtos naturais.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/sabonetes.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "movimentar o corpo",
      materialNecessario: "Glicerina, óleos essenciais, extratos, formas, etc.",
    },
  },
  {
    id: "hobby4",
    name: "Fazer velas",
    shortDescription: "Uma arte de criar velas com diferentes aromas e formas.",
    description:
      "Fazer velas é uma arte de produzir velas artesanais com diferentes aromas, cores, formas e propriedades, usando diversos ingredientes, como cera, pavio, óleos essenciais, corantes, extratos, etc. Fazer velas pode ser uma atividade para uso próprio, para dar de presente, para vender ou para decorar ambientes. Fazer velas requer conhecimento de receitas, medidas, ingredientes, utensílios, etc., que devem ser adequados ao tipo de vela desejado. Fazer velas é uma arte de criar velas personalizadas e uma forma de criar um clima aconchegante e relaxante com produtos naturais e aromáticos.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/cria%C3%A7%C3%A3oDeVelas.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "natureza",
      materialNecessario:
        "Cera, pavio, óleos essenciais, corantes, formas, panela, etc.",
    },
  },
  {
    id: "hobby5",
    name: "Cerâmica",
    shortDescription: "Uma arte de modelar objetos com argila ou barro.",
    description:
      "Cerâmica é uma arte de modelar objetos com argila ou barro, usando as mãos, ferramentas ou um torno. Cerâmica pode ser feita para fazer vasos, xícaras, bule, brincos, miçangas, anéis, objetos de decoração, corujas, tigelas, pratos, copos, esculturas, etc. Cerâmica requer conhecimento de técnicas, como modelagem, secagem, queima, esmaltação, etc., e de materiais, como argila, barro, esmaltes, forno, etc. Cerâmica é uma arte de modelar objetos com argila ou barro, além de ser uma forma de expressar a criatividade e a sensibilidade.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/cer%C3%A2mica.jpeg?raw=true",
    facts: {
      custoParaIniciar: 70.00, // BRL
      nivelDeDificuldade: 3,
      categoriaHobby: "artesanato",
      materialNecessario:
        "Argila, barro, ferramentas, torno, esmaltes, forno, etc.",
    },
  },
];

export const ascSortedData = [
  {
    id: "hobby1",
    name: "Crochê",
    shortDescription: "Uma técnica de criar peças com fios e agulha.",
    description:
      "Crochê é uma forma de arte que consiste em criar peças com fios de lã, algodão ou outros materiais, usando uma agulha especial que tem um gancho na ponta. Com o crochê, pode-se fazer vários tipos de objetos, como roupas, acessórios, bikinis, bolsas, tapetes, mantas, bonecos, etc. Para fazer crochê, é necessário aprender a fazer pontos, carreiras, cores e padrões diferentes. Crochê é uma técnica que ajuda a desenvolver a criatividade, a coordenação motora, a paciência e o relaxamento mental.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/croche.jpeg?raw=true",
    facts: {
      custoParaIniciar: 50.00, // BRL
      nivelDeDificuldade: 2, // 1: fácil, 2: mediano, 3: difícil
      categoriaHobby: "beleza",
      materialNecessario: "Fios, agulha de crochê, tesoura, etc.",
    },
  },
  {
    id: "hobby5",
    name: "Cerâmica",
    shortDescription: "Uma arte de modelar objetos com argila ou barro.",
    description:
      "Cerâmica é uma arte de modelar objetos com argila ou barro, usando as mãos, ferramentas ou um torno. Cerâmica pode ser feita para fazer vasos, xícaras, bule, brincos, miçangas, anéis, objetos de decoração, corujas, tigelas, pratos, copos, esculturas, etc. Cerâmica requer conhecimento de técnicas, como modelagem, secagem, queima, esmaltação, etc., e de materiais, como argila, barro, esmaltes, forno, etc. Cerâmica é uma arte de modelar objetos com argila ou barro, além de ser uma forma de expressar a criatividade e a sensibilidade.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/cer%C3%A2mica.jpeg?raw=true",
    facts: {
      custoParaIniciar: 70.00, // BRL
      nivelDeDificuldade: 3,
      categoriaHobby: "artesanato",
      materialNecessario:
        "Argila, barro, ferramentas, torno, esmaltes, forno, etc.",
    },
  },
  {
    id: "hobby2",
    name: "Scrapbooking",
    shortDescription: "Uma forma de preservar e decorar memórias.",
    description:
      "Scrapbooking é uma arte de guardar e enfeitar memórias, como fotografias, cartas, e outros itens que tenham valor sentimental, usando diversos materiais, como papéis coloridos, adesivos temáticos, fitas decorativas, botões, e outros enfeites. Scrapbooking pode ser feito em diferentes formatos, como álbuns, cadernos, quadros, e outros suportes, de acordo com o tema e o estilo escolhidos. Scrapbooking exige conhecimento de técnicas, como recortar, colar, dobrar, e outras, e de elementos, como cores, formas, texturas, e outros, que harmonizem com as memórias. Scrapbooking é uma maneira de guardar e enfeitar memórias, e também de expressar sentimentos e emoções através da arte.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/scrapbooking.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "mente",
      materialNecessario:
        "Papéis, adesivos, fitas, botões, tesoura, cola, etc.",
    },
  },
  {
    id: "hobby3",
    name: "Fazer sabonetes",
    shortDescription: "A arte de criar sabonetes com diferentes aromas.",
    description:
      "Fazer sabonetes é uma arte de produzir sabonetes artesanais com aromas, cores, formas e propriedades diversos, usando ingredientes variados, como glicerina, óleos essenciais, moldes, flores secas, corantes, extratos, etc. Fazer sabonetes pode ser para uso pessoal, por hobby, para dar de presente, para vender ou para enfeitar. Fazer sabonetes requer saber fazer receitas, medir ingredientes, usar utensílios, etc. Fazer sabonetes é uma arte de criar sabonetes personalizados e uma forma de cuidar da pele e do bem-estar com produtos naturais.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/sabonetes.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "movimentar o corpo",
      materialNecessario: "Glicerina, óleos essenciais, extratos, formas, etc.",
    },
  },
  {
    id: "hobby4",
    name: "Fazer velas",
    shortDescription: "Uma arte de criar velas com diferentes aromas e formas.",
    description:
      "Fazer velas é uma arte de produzir velas artesanais com diferentes aromas, cores, formas e propriedades, usando diversos ingredientes, como cera, pavio, óleos essenciais, corantes, extratos, etc. Fazer velas pode ser uma atividade para uso próprio, para dar de presente, para vender ou para decorar ambientes. Fazer velas requer conhecimento de receitas, medidas, ingredientes, utensílios, etc., que devem ser adequados ao tipo de vela desejado. Fazer velas é uma arte de criar velas personalizadas e uma forma de criar um clima aconchegante e relaxante com produtos naturais e aromáticos.",
    imageUrl:
      "https://github.com/hortenciahs/SAP012-dataverse/blob/T004/src/data/Imagens%20IA/cria%C3%A7%C3%A3oDeVelas.jpeg?raw=true",
    facts: {
      custoParaIniciar: 100.00, // BRL
      nivelDeDificuldade: 2,
      categoriaHobby: "natureza",
      materialNecessario:
        "Cera, pavio, óleos essenciais, corantes, formas, panela, etc.",
    },
  },
  
];