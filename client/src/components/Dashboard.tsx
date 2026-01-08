import React from 'react';
import { Link } from 'wouter';
import { BookOpen, CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { chapters } from '@/lib/chapters';

const Dashboard = () => {
  // Simulating progress - in a real app this would come from state/backend
  const progress = 20;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Bem-vinda de volta, Empreendedora!
        </h1>
        <p className="text-gray-600 mb-6">
          Continue sua jornada do zero ao primeiro negócio.
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progresso Geral</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid gap-6">
        <h2 className="text-xl font-bold text-gray-900">Capítulos</h2>
        {chapters.map((chapter, index) => (
          <div 
            key={chapter.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Capítulo {chapter.id}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <PlayCircle className="h-4 w-4 mr-1" />
                    {chapter.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {chapter.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {chapter.subtitle}
                </p>
                <Button asChild variant={index === 0 ? "default" : "outline"}>
                  <Link href={`/capitulo/${chapter.id}`}>
                    {index === 0 ? "Continuar Leitura" : "Acessar Capítulo"}
                  </Link>
                </Button>
              </div>
              <div className="ml-4">
                {index === 0 ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <BookOpen className="h-6 w-6 text-gray-300" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
