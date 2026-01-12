import React from 'react';
import { CheckSquare, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Exercises = () => {
  const exercises = [
    {
      id: 1,
      title: "Autoanálise Empreendedora",
      description: "Liste 3 habilidades que você já tem e 3 que precisa desenvolver.",
      placeholder: "Minhas habilidades atuais:\n1.\n2.\n3.\n\nPreciso desenvolver:\n1.\n2.\n3."
    },
    {
      id: 2,
      title: "Brainstorming de Ideias",
      description: "Escreva 5 problemas que você observa no seu dia a dia que poderiam virar um negócio.",
      placeholder: "Problema 1:\nProblema 2:\n..."
    },
    {
      id: 3,
      title: "Definição de Público-Alvo",
      description: "Quem é o cliente ideal para sua ideia principal? Descreva idade, interesses e dores.",
      placeholder: "Meu cliente ideal é..."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Exercícios Práticos</h1>
        <p className="text-gray-600">
          Coloque em prática o que você aprendeu. Suas respostas ficam salvas no seu dispositivo.
        </p>
      </div>

      <div className="space-y-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Edit3 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{exercise.title}</h3>
                <p className="text-gray-600">{exercise.description}</p>
              </div>
            </div>
            
            <Textarea 
              placeholder={exercise.placeholder}
              className="min-h-[150px] mb-4"
            />
            
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                <CheckSquare className="h-4 w-4 mr-2" />
                Salvar Resposta
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
