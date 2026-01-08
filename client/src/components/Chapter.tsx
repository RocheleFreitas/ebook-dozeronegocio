import React from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chapters } from '@/lib/chapters';

const Chapter = () => {
  const [match, params] = useRoute('/capitulo/:id');
  const chapterId = params ? parseInt(params.id) : 1;
  const chapter = chapters.find(c => c.id === chapterId);
  const nextChapter = chapters.find(c => c.id === chapterId + 1);
  const prevChapter = chapters.find(c => c.id === chapterId - 1);

  if (!chapter) return <div>Capítulo não encontrado</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar ao Dashboard
          </Link>
        </Button>
        <span className="text-sm text-gray-500">
          Capítulo {chapter.id} de {chapters.length}
        </span>
      </div>

      {/* Content */}
      <article className="prose prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{chapter.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{chapter.subtitle}</p>
        
        <div 
          className="space-y-6 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: chapter.content }} 
        />
      </article>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <div>
          {prevChapter && (
            <Button asChild variant="outline">
              <Link href={`/capitulo/${prevChapter.id}`}>
                <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
              </Link>
            </Button>
          )}
        </div>
        
        <div className="flex gap-4">
          <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
            <CheckCircle className="h-4 w-4 mr-2" /> Marcar como Lido
          </Button>
          
          {nextChapter ? (
            <Button asChild>
              <Link href={`/capitulo/${nextChapter.id}`}>
                Próximo <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/exercicios">
                Ir para Exercícios <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
