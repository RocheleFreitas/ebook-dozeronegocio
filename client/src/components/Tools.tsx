import React from 'react';
import { Calculator, Calendar, FileText, PieChart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tools = () => {
  const tools = [
    {
      category: "Planejamento",
      items: [
        {
          name: "Business Model Canvas",
          description: "Modelo visual para estruturar seu negócio em uma página.",
          icon: <FileText className="h-6 w-6 text-blue-600" />,
          link: "#"
        },
        {
          name: "Planilha de Metas SMART",
          description: "Defina objetivos específicos, mensuráveis e alcançáveis.",
          icon: <Calendar className="h-6 w-6 text-green-600" />,
          link: "#"
        }
      ]
    },
    {
      category: "Finanças",
      items: [
        {
          name: "Calculadora de Precificação",
          description: "Descubra o preço ideal do seu produto ou serviço.",
          icon: <Calculator className="h-6 w-6 text-orange-600" />,
          link: "#"
        },
        {
          name: "Planilha de Fluxo de Caixa",
          description: "Controle todas as entradas e saídas do seu negócio.",
          icon: <PieChart className="h-6 w-6 text-purple-600" />,
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ferramentas Essenciais</h1>
        <p className="text-gray-600">
          Recursos práticos para ajudar na gestão do seu negócio.
        </p>
      </div>

      <div className="space-y-8">
        {tools.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 px-2 border-l-4 border-blue-500">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((tool, toolIdx) => (
                <div key={toolIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Acessar Ferramenta <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </div>
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

export default Tools;
