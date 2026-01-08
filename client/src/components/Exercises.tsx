import React, { useState, useEffect } from 'react';
import { CheckSquare, Edit3, BookOpen, Sparkles, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Exercises = () => {
  // Estado para armazenar as respostas
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Carregar respostas salvas ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('ebook_answers');
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const exercises = [
    // Capítulo 1 - Linguagem Simplificada
    { id: 1, chapter: 1, title: "Por que você quer isso?", description: "Seja sincero: é pelo dinheiro, pela liberdade ou para provar algo? O que você faria se já fosse rico?", placeholder: "Eu quero empreender porque..." },
    { id: 2, chapter: 1, title: "O que você já sabe fazer?", description: "Liste 10 coisas que você faz bem (ex: cozinhar, organizar, ouvir, vender). Pergunte para 2 amigos o que eles acham que você faz bem.", placeholder: "Eu sou bom em:..." },
    { id: 3, chapter: 1, title: "O que te trava?", description: "Escreva 3 frases que você repete e que te atrapalham (ex: 'sou velho demais'). Depois, escreva uma frase positiva para cada uma.", placeholder: "O que me trava é..." },
    { id: 4, chapter: 1, title: "Treinando o 'Não'", description: "Essa semana, peça um desconto ou tente negociar algo só para perder o medo de ouvir 'não'. Conte como foi.", placeholder: "Eu tentei negociar..." },

    // Capítulo 2
    { id: 5, chapter: 2, title: "O Caderno de Reclamações", description: "Anote tudo o que você ouviu alguém reclamar nos últimos dias. Onde tem reclamação, tem oportunidade de negócio.", placeholder: "Ouvi reclamações sobre..." },
    { id: 6, chapter: 2, title: "Melhorando o que já existe", description: "Pegue um produto que você usa e pense: como ele poderia ser melhor, mais barato ou mais rápido?", placeholder: "O produto é... Eu mudaria..." },
    { id: 7, chapter: 2, title: "O que o povo pesquisa?", description: "Vá no Google e digite o nome da sua ideia. O que aparece nas sugestões? Isso mostra o que as pessoas querem.", placeholder: "Descobri que as pessoas buscam..." },
    { id: 8, chapter: 2, title: "Conversa de Elevador", description: "Fale da sua ideia para 5 pessoas diferentes. Não tente vender, só ouça o que elas acham. Anote aqui.", placeholder: "A pessoa 1 disse..." },
    { id: 9, chapter: 2, title: "Qual ideia ganha?", description: "Dê uma nota de 0 a 10 para suas ideias: Você gosta dela? Você sabe fazer? Tem gente querendo comprar?", placeholder: "Minha ideia vencedora é..." },

    // Capítulo 3
    { id: 10, chapter: 3, title: "Quem vai comprar?", description: "Imagine seu cliente ideal. Qual a idade? Onde mora? Do que ele tem medo? O que ele sonha?", placeholder: "Meu cliente é..." },
    { id: 11, chapter: 3, title: "Sua Promessa Única", description: "Complete: 'Eu ajudo [quem] a resolver [problema] através de [sua solução]'.", placeholder: "Eu ajudo..." },
    { id: 12, chapter: 3, title: "O Desenho do Negócio", description: "Use o 'Gerador de Canvas' na aba Ferramentas e cole o resultado aqui. É o mapa do seu negócio.", placeholder: "Meu mapa de negócio é..." },
    { id: 13, chapter: 3, title: "Seus Pontos Fortes e Fracos", description: "No que você é muito bom? E no que você precisa de ajuda? O que pode dar errado?", placeholder: "Sou forte em..." },
    { id: 14, chapter: 3, title: "Teste Antes de Gastar", description: "Como você pode vender isso antes de ter o produto pronto? (Ex: lista de espera, venda antecipada).", placeholder: "Vou testar fazendo..." },

    // Capítulo 4
    { id: 15, chapter: 4, title: "Quanto você custa?", description: "Some todas as suas contas pessoais do mês (aluguel, comida, luz). Você precisa saber quanto precisa para viver.", placeholder: "Minhas contas somam R$..." },
    { id: 16, chapter: 4, title: "Lista de Compras Inicial", description: "O que você PRECISA comprar para começar? Não coloque luxos, só o essencial.", placeholder: "Preciso comprar..." },
    { id: 17, chapter: 4, title: "Preço Certo", description: "Use o 'CFO de Bolso' na aba Ferramentas para calcular seu preço e cole aqui.", placeholder: "Vou cobrar R$..." },
    { id: 18, chapter: 4, title: "A Meta da Sobrevivência", description: "Quantos produtos você precisa vender só para pagar as contas? Esse é seu primeiro objetivo.", placeholder: "Preciso vender X unidades..." },

    // Capítulo 5
    { id: 19, chapter: 5, title: "Venda em 30 Segundos", description: "Escreva como você explicaria seu negócio para alguém no tempo de uma viagem de elevador.", placeholder: "Meu negócio é..." },
    { id: 20, chapter: 5, title: "Onde você vai aparecer?", description: "Escolha 2 lugares para divulgar (Instagram, WhatsApp, Panfleto) e o que vai fazer neles.", placeholder: "Vou usar..." },
    { id: 21, chapter: 5, title: "Agenda de Postagens", description: "Planeje o que vai postar ou falar nos próximos 7 dias para atrair clientes.", placeholder: "Segunda:...\nTerça:..." },
    { id: 22, chapter: 5, title: "Mensagem de 'Oi, sumido'", description: "Escreva uma mensagem para mandar no WhatsApp oferecendo seu produto sem ser chato.", placeholder: "Oi, tudo bem? Queria te contar..." },
    { id: 23, chapter: 5, title: "Desafio da Primeira Venda", description: "Ofereça seu produto para 10 pessoas hoje. Anote quantos 'sim' e quantos 'não' você recebeu.", placeholder: "Falei com 10 pessoas e..." }
  ];

  const handleInputChange = (id: number, value: string) => {
    const newAnswers = { ...answers, [id]: value };
    setAnswers(newAnswers);
    localStorage.setItem('ebook_answers', JSON.stringify(newAnswers));
  };

  const handleSave = () => {
    toast.success("Resposta salva com sucesso!");
  };

  const generateProfilePrompt = () => {
    const allText = Object.values(answers).join("\n\n");
    if (!allText) {
      toast.error("Responda alguns exercícios antes de gerar seu perfil!");
      return;
    }

    const prompt = `
Atue como um Especialista em Carreira e Negócios. Analise as respostas abaixo de um empreendedor iniciante e me forneça:
1. Um Perfil Comportamental resumido (pontos fortes e fracos).
2. Sugestão de 3 Segmentos de Negócio que combinam perfeitamente com esse perfil e habilidades.
3. Uma dica de ouro personalizada para ele começar.

RESPOSTAS DO EMPREENDEDOR:
${allText}
    `;

    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copiado! Cole no ChatGPT ou na aba Ferramentas.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Caderno de Exercícios</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aqui é o lugar de colocar a mão na massa. Não se preocupe em escrever bonito, se preocupe em ser sincero.
          Suas respostas ficam salvas aqui no seu navegador.
        </p>
      </div>

      {/* Bloco de Objetivo */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-blue-900 mb-2">🎯 Objetivo do Método</h3>
        <p className="text-blue-800">
          Tirar sua ideia da cabeça e validá-la no papel. Ao final, você terá clareza total sobre o que vai vender, 
          para quem vai vender e como vai lucrar, sem achismos.
        </p>
      </div>

      <div className="space-y-12">
        {[1, 2, 3, 4, 5].map((chapterNum) => (
          <div key={chapterNum} className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4 border-gray-200">
              <div className="bg-purple-100 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Capítulo {chapterNum}</h2>
            </div>

            <div className="grid gap-6">
              {exercises.filter(e => e.chapter === chapterNum).map((exercise) => (
                <div key={exercise.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                      <Edit3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        Exercício {exercise.id}: {exercise.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{exercise.description}</p>
                    </div>
                  </div>
                  
                  <Textarea 
                    placeholder={exercise.placeholder}
                    className="min-h-[120px] mb-4 bg-gray-50 focus:bg-white transition-colors"
                    value={answers[exercise.id] || ''}
                    onChange={(e) => handleInputChange(exercise.id, e.target.value)}
                  />
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSave} variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-700 hover:border-green-200">
                      <CheckSquare className="h-4 w-4 mr-2" />
                      Salvar Resposta
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botão Mágico de IA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={generateProfilePrompt}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-6 py-6 rounded-full flex items-center gap-3 animate-bounce"
        >
          <Sparkles className="h-6 w-6" />
          <span className="font-bold text-lg">Gerar Meu Perfil com IA</span>
        </Button>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-2xl mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">🎁 Bônus: Descubra seu Negócio Ideal</h3>
        <p className="text-gray-300 mb-6">
          Respondeu os exercícios? Clique no botão flutuante <strong>"Gerar Meu Perfil com IA"</strong>. 
          O sistema vai criar um comando automático baseado nas suas respostas. 
          Depois, é só colar na aba <strong>Ferramentas</strong> para descobrir qual negócio combina com você!
        </p>
      </div>
    </div>
  );
};

export default Exercises;
