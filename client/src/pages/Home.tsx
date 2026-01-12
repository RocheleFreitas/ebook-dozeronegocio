import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Do Zero ao Primeiro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  Negócio
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Transforme sua ideia em um negócio real com nosso método interativo. 
                Planejamento, IA e prática em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Link href="/dashboard">
                    Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>+1000 Alunos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-orange-500" />
                  <span>Método Validado</span>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative transform transition-transform duration-500 hover:scale-105 hover:rotate-y-6">
                <img 
                  src="/images/cover-vertical-standard.jpg" 
                  alt="Capa do E-book Do Zero ao Primeiro Negócio" 
                  className="rounded-xl shadow-2xl w-full border border-white/20"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Atualizado</p>
                      <p className="text-sm font-bold text-gray-900">Versão 2026 com IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloco de Objetivo */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-blue-900 mb-2">🎯 Objetivo do Método</h3>
            <p className="text-blue-800">
              Tirar sua ideia da cabeça e validá-la no papel. Ao final, você terá clareza total sobre o que vai vender, 
              para quem vai vender e como vai lucrar, sem achismos.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que você vai encontrar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Capítulos Completos</h3>
              <p className="text-gray-600">Conteúdo estruturado do básico ao avançado</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">23 Exercícios Práticos</h3>
              <p className="text-gray-600">Atividades para aplicar o conhecimento</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assistente de IA</h3>
              <p className="text-gray-600">Consultoria personalizada para seu negócio</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Método Testado</h3>
              <p className="text-gray-600">Estratégias comprovadas na prática</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-16 bg-white rounded-2xl shadow-lg mx-4">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Autora</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              <strong>Rochele Freitas</strong> é Product Designer em produtos digitais e empreendedora na ARCA URBANA.
            </p>
            <p className="text-gray-600 mb-4">
              Tem formação em Marketing, MBA em Gestão Estratégica de Negócios, Especialização em UX e cursando MBA em Inteligência Artificial para Negócios.
            </p>
            <p className="text-gray-600 mb-4">
              Com 20 anos de experiência no mercado, transforma desafios em oportunidades com uma visão estratégica e foco em soluções centradas no usuário.
            </p>
            <p className="text-gray-600 mb-8">
              Sua trajetória é marcada por uma sólida experiência em relacionamento com clientes, passando por áreas como comercial, trade marketing e liderança de equipes próprias e terceirizadas. Tem amplo conhecimento em operações e processos, além de atuar no desenvolvimento e na implementação de projetos e produtos, sempre conectando estratégia e experiência.
            </p>
            <Button asChild variant="outline">
              <Link href="/contato">
                Conhecer Mais
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para Começar Sua Jornada Empreendedora?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Acesse agora o conteúdo completo e comece a construir seu primeiro negócio hoje mesmo.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link href="/dashboard">
              Acessar E-book Completo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
