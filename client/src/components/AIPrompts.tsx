import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Sparkles, Brain, Target, MessageSquare, Rocket, Layers } from 'lucide-react';
import { toast } from 'sonner';

const AIPrompts = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Prompt copiado! Agora cole no ChatGPT ou Claude.');
  };

  const prompts = {
    estruturacao: [
      {
        title: "Gerador de Business Canvas",
        description: "Monte o modelo de negócios completo em segundos.",
        content: "Atue como um estrategista de negócios sênior. Crie um Business Model Canvas completo para o meu negócio de [SEU NEGÓCIO]. Preencha os 9 blocos: 1) Proposta de Valor; 2) Segmento de Clientes; 3) Canais; 4) Relacionamento; 5) Fontes de Receita; 6) Recursos Chave; 7) Atividades Chave; 8) Parcerias Chave; 9) Estrutura de Custos. Explique cada ponto de forma resumida e prática."
      },
      {
        title: "CFO de Bolso (Financeiro)",
        description: "Calcule preços, margens e ponto de equilíbrio.",
        content: "Atue como meu Diretor Financeiro (CFO). Vou vender [PRODUTO/SERVIÇO]. Meus custos fixos mensais estimados são [VALOR] e o custo variável por unidade é [VALOR]. 1) Sugira um preço de venda competitivo e lucrativo. 2) Calcule minha margem de lucro. 3) Calcule meu Ponto de Equilíbrio (quantos preciso vender para não ter prejuízo). Explique a lógica financeira de forma simples."
      },
      {
        title: "Arquiteto de Operação",
        description: "Desenhe o fluxo de funcionamento do seu negócio.",
        content: "Desenhe o fluxo operacional passo a passo para o meu negócio de [SEU NEGÓCIO], desde o momento que o cliente faz o pedido até a entrega final e pós-venda. Liste os processos, ferramentas necessárias em cada etapa e possíveis gargalos que devo evitar para garantir uma experiência perfeita ao cliente."
      },
      {
        title: "Checklist de Legalização",
        description: "Saiba exatamente o que precisa para formalizar.",
        content: "Quero formalizar meu negócio de [SEU NEGÓCIO] no Brasil. Crie um checklist prático com: 1) Qual o melhor enquadramento (MEI, ME, etc)? 2) Quais códigos CNAE (atividade) devo usar? 3) Preciso de registro de marca no INPI? 4) Quais licenças ou alvarás costumam ser necessários para esse nicho? Liste os passos em ordem cronológica."
      }
    ],
    ideacao: [
      {
        title: "Refinamento de Ideia de Negócio",
        description: "Use este prompt para transformar uma ideia vaga em um conceito de negócio estruturado.",
        content: "Atue como um consultor de negócios experiente. Tenho uma ideia de negócio que é: [DESCREVA SUA IDEIA AQUI]. Por favor, analise essa ideia considerando: 1) Qual problema real ela resolve? 2) Quem seria o público-alvo ideal? 3) Quais são os possíveis diferenciais competitivos? 4) Quais seriam os principais desafios iniciais? Me dê um feedback honesto e construtivo."
      },
      {
        title: "Brainstorming de Nomes",
        description: "Gere opções criativas e disponíveis para o nome do seu negócio.",
        content: "Preciso de sugestões de nomes para meu novo negócio. O negócio é sobre [DESCREVA O QUE FAZ] e o público-alvo é [DESCREVA O PÚBLICO]. Quero nomes que transmitam [SENSASÃO DESEJADA: ex: confiança, modernidade, rapidez]. Por favor, gere 10 opções de nomes, explique o porquê de cada um e verifique se são fáceis de pronunciar e memorizar."
      },
      {
        title: "O Alquimista de Negócios (Ideia Lucrativa)",
        description: "Descubra ideias de negócio baseadas nas suas habilidades e no mercado atual.",
        content: "Atue como um especialista em novos negócios. Minhas principais habilidades/qualidades são: [LISTE SUAS HABILIDADES DOS EXERCÍCIOS]. Meus interesses são: [LISTE SEUS INTERESSES]. Com base nisso, sugira 5 ideias de negócios que: 1) Tenham alta margem de lucro; 2) Possam começar com baixo investimento; 3) Estejam em alta no mercado atual. Para cada ideia, explique brevemente o modelo de receita."
      }
    ],
    persona: [
      {
        title: "Criação de Persona Detalhada",
        description: "Entenda profundamente quem é o seu cliente ideal.",
        content: "Crie uma persona detalhada para o meu negócio de [SEU TIPO DE NEGÓCIO]. O público-alvo geral são [HOMENS/MULHERES/EMPRESAS] de [IDADE/SETOR]. Inclua: Nome fictício, idade, profissão, dores e frustrações principais, desejos e sonhos, objeções de compra (por que não comprariam de mim?) e canais onde consomem informação (Instagram, LinkedIn, etc)."
      },
      {
        title: "Mapa de Empatia",
        description: "Descubra o que seu cliente pensa, sente e fala.",
        content: "Com base na persona do meu negócio de [SEU NEGÓCIO], crie um Mapa de Empatia respondendo: 1) O que ela vê no mercado? 2) O que ela ouve de amigos e influenciadores? 3) O que ela pensa e sente (medos e aspirações)? 4) O que ela fala e faz? 5) Quais são suas dores? 6) Quais são seus ganhos esperados?"
      },
      {
        title: "Caçador de Fornecedores",
        description: "Descubra como encontrar e negociar com fornecedores para o seu produto.",
        content: "Estou criando um negócio de [SEU PRODUTO/NICHO] e preciso encontrar fornecedores. 1) Liste 5 canais ou métodos eficientes para encontrar fornecedores confiáveis para esse nicho (ex: sites específicos, feiras, termos de busca no Google). 2) Crie um script de abordagem inicial para eu enviar por email ou WhatsApp perguntando sobre catálogo, pedido mínimo e prazos, demonstrando profissionalismo mesmo sendo iniciante."
      }
    ],
    marketing: [
      {
        title: "Calendário de Conteúdo (30 dias)",
        description: "Nunca mais fique sem ideias do que postar.",
        content: "Atue como um estrategista de mídia social. Crie um calendário de conteúdo de 30 dias para o Instagram do meu negócio de [SEU NEGÓCIO]. O objetivo é [VENDER/EDUCAR/ENGAJAR]. Intercale entre: Posts educativos (ensinando algo), Posts de conexão (bastidores/história), Prova social (depoimentos) e Oferta (venda direta). Para cada dia, sugira o tema e o formato (Reels, Carrossel ou Story)."
      },
      {
        title: "Legendas Irresistíveis",
        description: "Escreva legendas que engajam e vendem.",
        content: "Escreva uma legenda para um post de Instagram sobre [TEMA DO POST]. Use a estrutura AIDA (Atenção, Interesse, Desejo, Ação). O tom de voz deve ser [SEU TOM: ex: divertido, sério, inspirador]. Inclua 3 opções de gancho (primeira frase) para prender a atenção e uma chamada para ação (CTA) clara no final."
      }
    ],
    vendas: [
      {
        title: "Script de Vendas para WhatsApp",
        description: "Converta interessados em clientes pagantes.",
        content: "Crie um script de vendas para usar no WhatsApp. O cliente entrou em contato perguntando o preço do meu [PRODUTO/SERVIÇO]. Não quero passar o preço logo de cara. Crie um roteiro que: 1) Agradeça o contato; 2) Faça perguntas para entender a necessidade dele; 3) Apresente a solução valorizando os benefícios; 4) Revele o preço ancorando o valor; 5) Faça uma chamada para o fechamento."
      },
      {
        title: "Quebra de Objeções",
        description: "Saiba o que responder quando o cliente diz 'tá caro'.",
        content: "Meu cliente disse que [OBJEÇÃO: ex: 'está caro' ou 'vou pensar']. Liste 5 formas elegantes e persuasivas de contornar essa objeção sem ser chato ou agressivo. Foque em mostrar o valor e o retorno sobre o investimento do meu [PRODUTO/SERVIÇO]."
      },
      {
        title: "Consultor de Exercícios (Plano de Ação)",
        description: "Transforme suas respostas dos exercícios do e-book em um plano prático.",
        content: "Acabei de fazer os exercícios do meu e-book de empreendedorismo. Minha ideia definida foi [SUA IDEIA], meu público é [SEU PÚBLICO] e meu diferencial é [SEU DIFERENCIAL]. Com base nesses dados, crie um Plano de Ação de 4 semanas para eu tirar isso do papel, com 3 tarefas práticas e obrigatórias por semana. Foque em validação rápida e primeiras vendas."
      }
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Assistente de IA</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Use a Inteligência Artificial como sua consultora de negócios. 
          Copie os prompts abaixo e cole no ChatGPT, Claude ou Gemini para obter respostas personalizadas.
        </p>
      </div>

      {/* Bloco de Objetivo */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8 text-center max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-purple-900 mb-2">🎯 Objetivo desta Seção</h3>
        <p className="text-purple-800">
          Sair daqui com seu plano de negócios estruturado, dúvidas financeiras sanadas e estratégias prontas, 
          como se tivesse acabado de sair de uma consultoria especializada.
        </p>
      </div>

      <Tabs defaultValue="estruturacao" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
          <TabsTrigger value="estruturacao" className="flex items-center gap-2">
            <Layers className="w-4 h-4" /> Estrutura
          </TabsTrigger>
          <TabsTrigger value="ideacao" className="flex items-center gap-2">
            <Brain className="w-4 h-4" /> Ideação
          </TabsTrigger>
          <TabsTrigger value="persona" className="flex items-center gap-2">
            <Target className="w-4 h-4" /> Persona
          </TabsTrigger>
          <TabsTrigger value="marketing" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Marketing
          </TabsTrigger>
          <TabsTrigger value="vendas" className="flex items-center gap-2">
            <Rocket className="w-4 h-4" /> Vendas
          </TabsTrigger>
        </TabsList>

        {Object.entries(prompts).map(([key, categoryPrompts]) => (
          <TabsContent key={key} value={key} className="space-y-6">
            {categoryPrompts.map((prompt, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-900">{prompt.title}</CardTitle>
                  <CardDescription className="text-base">{prompt.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm text-gray-700 whitespace-pre-wrap">
                    {prompt.content}
                  </div>
                  <Button 
                    onClick={() => copyToClipboard(prompt.content)}
                    className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 gap-2"
                  >
                    <Copy className="w-4 h-4" /> Copiar Prompt
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-12">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Dica de Ouro</h3>
        <p className="text-blue-800">
          Quanto mais detalhes você der para a IA (onde está escrito [ENTRE COLCHETES]), melhor será a resposta. 
          Trate a IA como um estagiário muito inteligente: ela precisa de contexto para brilhar!
        </p>
      </div>
    </div>
  );
};

export default AIPrompts;
