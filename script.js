const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["No início ficou com medo do que essa tecnologia pode fazer. ",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Quis saber como usar IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia."
                            }
                      }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: ["Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ]
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ["Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ]
            }
        ]
    },
    {
