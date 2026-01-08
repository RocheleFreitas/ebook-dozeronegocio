import React from 'react';
import { CheckSquare, Edit3, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Exercises = () => {
  const exercises = [
    // Capítulo 1
    { id: 1, chapter: 1, title: "O 'Porquê' Inabalável", description: "Por que você quer empreender? O que faria se não precisasse de dinheiro? Como quer estar em 5 anos?", placeholder: "Meu porquê é..." },
    { id: 2, chapter: 1, title: "Inventário de Habilidades", description: "Liste 10 coisas que você sabe fazer bem e 2 qualidades citadas por amigos.", placeholder: "Minhas habilidades:\n1.\n2.\n..." },
    { id: 3, chapter: 1, title: "Identificando Crenças Limitantes", description: "3 frases que te impedem de avançar e novas verdades para substituí-las.", placeholder: "Crença: 'Não sei vender' -> Verdade: 'Posso aprender a vender'..." },
    { id: 4, chapter: 1, title: "O Desafio do 'Não'", description: "Relate sua experiência ao tentar negociar algo nesta semana.", placeholder: "Tentei negociar..." },

    // Capítulo 2
    { id: 5, chapter: 2, title: "O Diário de Problemas", description: "Anote tudo o que te irrita ou reclamações que ouviu nos últimos 3 dias.", placeholder: "Problemas observados:..." },
    { id: 6, chapter: 2, title: "A Técnica SCAMPER", description: "Aplique SCAMPER em um produto existente.", placeholder: "Produto escolhido:...\nSubstituir:...\nCombinar:..." },
    { id: 7, chapter: 2, title: "Análise de Tendências", description: "O que você descobriu no Google Trends sobre sua área?", placeholder: "Termos pesquisados:..." },
    { id: 8, chapter: 2, title: "Entrevista de Validação", description: "Resumo das conversas com 5 pessoas sobre o problema.", placeholder: "Entrevistado 1 disse que..." },
    { id: 9, chapter: 2, title: "Matriz de Decisão", description: "Notas (1-10) para suas 3 ideias: Paixão, Habilidade, Demanda.", placeholder: "Ideia 1: P=8, H=9, D=7 (Total 24)..." },

    // Capítulo 3
    { id: 10, chapter: 3, title: "Definindo a Persona", description: "Descreva seu cliente ideal (Idade, onde mora, medos, sonhos).", placeholder: "Nome: Maria, 35 anos..." },
    { id: 11, chapter: 3, title: "Proposta de Valor Única", description: "Eu ajudo [Persona] a resolver [Problema] através de [Solução]...", placeholder: "Eu ajudo..." },
    { id: 12, chapter: 3, title: "Esboço do Canvas", description: "Cole aqui o resultado do prompt 'Gerador de Business Canvas'.", placeholder: "Meu Canvas:..." },
    { id: 13, chapter: 3, title: "Análise SWOT Pessoal", description: "Forças, Fraquezas, Oportunidades e Ameaças.", placeholder: "Forças:...\nFraquezas:..." },
    { id: 14, chapter: 3, title: "O Teste da Fumaça", description: "Como você vai oferecer seu produto antes de tê-lo pronto?", placeholder: "Vou criar uma lista de espera..." },

    // Capítulo 4
    { id: 15, chapter: 4, title: "Custo de Vida Pessoal", description: "Qual seu custo de vida mensal atual?", placeholder: "Aluguel: R$...\nMercado: R$..." },
    { id: 16, chapter: 4, title: "Levantamento de Custos Iniciais", description: "O que precisa comprar para abrir o negócio?", placeholder: "Equipamentos: R$...\nSite: R$..." },
    { id: 17, chapter: 4, title: "Precificação Inteligente", description: "Cole aqui o cálculo de preço feito com o prompt 'CFO de Bolso'.", placeholder: "Preço sugerido: R$..." },
    { id: 18, chapter: 4, title: "Meta de Vendas", description: "Quantas unidades precisa vender para cobrir os custos?", placeholder: "Preciso vender X unidades..." },

    // Capítulo 5
    { id: 19, chapter: 5, title: "Pitch de Elevador", description: "Seu negócio explicado em 30 segundos.", placeholder: "Meu negócio é..." },
    { id: 20, chapter: 5, title: "Canais de Divulgação", description: "2 canais principais e uma ação para cada.", placeholder: "Canal 1: Instagram -> Ação:..." },
    { id: 21, chapter: 5, title: "Calendário Editorial", description: "Planejamento de posts para 7 dias.", placeholder: "Segunda:...\nTerça:..." },
    { id: 22, chapter: 5, title: "Script de Abordagem", description: "Mensagem padrão para WhatsApp focado em benefícios.", placeholder: "Olá [Nome], vi que você..." },
    { id: 23, chapter: 5, title: "A Primeira Venda", description: "Resultado do desafio de oferecer para 10 pessoas.", placeholder: "Falei com 10 pessoas. Resultado:..." }
  ];

  const handleSave = (id: number) => {
    toast.success("Resposta salva com sucesso!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Caderno de Exercícios</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aqui estão todos os 23 exercícios práticos do método. 
          Responda-os conforme avança na leitura para construir seu negócio passo a passo.
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
                  />
                  
                  <div className="flex justify-end">
                    <Button onClick={() => handleSave(exercise.id)} variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-700 hover:border-green-200">
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
    </div>
  );
};

export default Exercises;
