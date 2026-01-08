import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Downloads = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Downloads</h1>
        <p className="text-gray-600">
          Baixe o material completo para ler offline ou imprimir.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-12 w-12 text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            E-book Completo em PDF
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Versão diagramada com alta qualidade, ideal para leitura em tablets ou impressão. 
            Inclui todos os capítulos, exercícios e ferramentas.
          </p>

          <div className="space-y-4">
            <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
              <Download className="h-5 w-5 mr-2" />
              Baixar PDF (15MB)
            </Button>
            
            <p className="text-sm text-gray-500">
              Última atualização: Janeiro 2026
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">O que está incluído:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 max-w-md mx-auto">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              5 Capítulos Completos
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              23 Exercícios Práticos
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              14 Ferramentas de Gestão
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Checklists de Validação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
