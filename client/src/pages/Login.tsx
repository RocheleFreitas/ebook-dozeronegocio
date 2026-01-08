import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User, Mail, Key } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    if (login(password, name, email)) {
      toast.success(`Bem-vinda, ${name}! Acesso liberado.`);
    } else {
      toast.error('Senha de acesso incorreta.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Área do Aluno</CardTitle>
          <CardDescription className="text-base">
            Preencha seus dados para liberar seu acesso de 12 meses ao e-book.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4" /> Nome Completo
              </label>
              <Input
                type="text"
                placeholder="Como você gostaria de ser chamada?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Seu Melhor E-mail
              </label>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Key className="w-4 h-4" /> Senha de Acesso
              </label>
              <Input
                type="password"
                placeholder="Digite a senha do e-book"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 text-center text-lg tracking-widest font-mono"
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 mt-4">
              Liberar Acesso Agora
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Seu acesso será válido por 1 ano a partir de hoje.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
