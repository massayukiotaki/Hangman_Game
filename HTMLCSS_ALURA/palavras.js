const palavras = [
    {palavra: "Inglaterra", dica: "País que tem a Libra como sua moeda"},
    {palavra: "Baleia", dica: "Mamífero aquático"},
    {palavra: "Interestelar", dica: "Filme de ficção científica, feito por Christopher Nolan"},
    {palavra: "Shrek", dica: "Melhor animação da Dreamworks"},
    {palavra: "Ornitorrinco", dica: "Um animal, que é um personagem da Disney"},
    {palavra: "Polvo", dica: "Animal que se camufla"},
    {palavra: "Vaticano", dica: "Menor país do mundo"},
    {palavra: "Itlab", dica: "Melhor empresa de consultoria e tecnologia do mundo ;)"},
    {palavra: "SteveJobs", dica: "Criador e idealizador do computador Macintosh"},
    {palavra: "BillGates", dica: "Já foi preso, era dono da maior empresa de tecnologia do mundo e multibilionário"},
    {palavra: "Maracujá", dica: "Fruta amarela"},
    {palavra: "Laranja", dica: "Tem um gosto ácido"},
    {palavra: "Cachorro", dica: "Animal doméstico"},
    {palavra: "Gato", dica: "Animal doméstico"},
    {palavra: "Bicicleta", dica: "Meio de locomoção sem motor"},
    {palavra: "Sorvete", dica: "Comida popularizada na Itália"},
    {palavra: "Chocolate", dica: "Doce derivado de uma fruta"},
    {palavra: "Sal", dica: "Tempero"},
    {palavra: "Pimenta", dica: "Tempero"},
    {palavra: "Árvore", dica: "Realiza a fotossíntese"},
    {palavra: "Celular", dica: "Aparelho tecnológico"},
    {palavra: "Java", dica: "Linguagem de programação do Satanás"},
    {palavra: "Futebol", dica: "Esporte inglês"},
    {palavra: "Minecraft", dica: "Jogo muito popular"},
    {palavra: "Sheldon", dica: "Personagem da serie The Big Bang Theory"},
    {palavra: "Tailândia", dica: "País oriental"},   
];

export default function getPalavra() {
    const index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}