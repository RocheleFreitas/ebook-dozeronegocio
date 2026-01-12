import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="space-y-8 py-8 px-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contato</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tem dúvidas sobre o e-book ou precisa de ajuda com seu projeto empreendedor? 
          Entre em contato comigo através dos canais abaixo.
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-2xl mx-auto">
        {/* Email */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">Para dúvidas e suporte</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Respondo todos os emails em até 24 horas. Ideal para dúvidas específicas 
            sobre o conteúdo ou consultoria personalizada.
          </p>
          <Button asChild size="lg" className="w-full">
            <a href="mailto:arca.urbana@outlook.com">
              Enviar Email
            </a>
          </Button>
        </div>
      </div>

      {/* Social Media */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Siga nas Redes Sociais
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Button asChild variant="outline" className="h-auto p-4">
            <a href="https://instagram.com/rochelefreitas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
              <Instagram className="h-6 w-6 text-pink-600" />
              <div className="text-left">
                <div className="font-semibold">Instagram</div>
                <div className="text-sm text-gray-600">@rochelefreitas</div>
              </div>
            </a>
          </Button>

          <Button asChild variant="outline" className="h-auto p-4">
            <a href="https://linkedin.com/in/rochelefreitas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
              <Linkedin className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-600">Rochele Freitas</div>
              </div>
            </a>
          </Button>
        </div>
      </div>

      {/* About Author */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Sobre Rochele Freitas
        </h3>
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">RF</span>
          </div>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Rochele Freitas</strong> é Product Designer em produtos digitais e empreendedora na ARCA URBANA.
          </p>
          <p>
            Tem formação em Marketing, MBA em Gestão Estratégica de Negócios, Especialização em UX e cursando MBA em Inteligência Artificial para Negócios.
          </p>
          <p>
            Com 20 anos de experiência no mercado, transforma desafios em oportunidades com uma visão estratégica e foco em soluções centradas no usuário.
          </p>
          <p>
            Sua trajetória é marcada por uma sólida experiência em relacionamento com clientes, passando por áreas como comercial, trade marketing e liderança de equipes próprias e terceirizadas. Tem amplo conhecimento em operações e processos, além de atuar no desenvolvimento e na implementação de projetos e produtos, sempre conectando estratégia e experiência.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Perguntas Frequentes
        </h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">O e-book é 100% online?</h4>
            <p className="text-gray-600">Sim! Você pode acessar de qualquer dispositivo com internet.</p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Posso baixar o conteúdo?</h4>
            <p className="text-gray-600">Sim, você pode baixar a versão em PDF na área de Downloads.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Por quanto tempo tenho acesso?</h4>
            <p className="text-gray-600">O acesso é vitalício! Você pode consultar sempre que precisar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
