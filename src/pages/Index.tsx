
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Eye, Zap, Settings, TrendingUp, Clock, Camera, BarChart, Search, Building, ArrowRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    segment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Nosso time entrará em contato em breve para agendar sua avaliação.",
    });
    setFormData({ name: "", email: "", segment: "" });
  };

  const benefits = [
    {
      icon: Search,
      title: "Precisão em milissegundos",
      description: "Inspeções e contagens automatizadas com velocidade superior à análise humana."
    },
    {
      icon: Settings,
      title: "Integração com seu sistema atual",
      description: "Compatível com ERPs e sistemas industriais, sem ruptura de fluxo."
    },
    {
      icon: BarChart,
      title: "Redução de erros operacionais",
      description: "Detecta padrões, falhas e desvios com lógica de machine vision treinada."
    },
    {
      icon: Clock,
      title: "Mais eficiência, menos retrabalho",
      description: "Automatize tarefas visuais repetitivas e libere sua equipe para decisões estratégicas."
    }
  ];

  const useCases = [
    {
      title: "Segurança Industrial",
      description: "Reconhecimento automático de EPIs em canteiros de obras",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Controle de Qualidade",
      description: "Verificação automática de embalagens na indústria alimentícia",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      title: "Gestão de Estoque",
      description: "Contagem automática de volumes em centros logísticos",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "Agronegócio",
      description: "Análise de safra e monitoramento por visão aérea",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop"
    }
  ];

  const howItWorks = [
    {
      icon: Camera,
      title: "Câmeras captam o ambiente",
      description: "Sensores visuais coletam dados em tempo real"
    },
    {
      icon: Eye,
      title: "QuantAI analisa em tempo real",
      description: "Processamento inteligente dos dados visuais"
    },
    {
      icon: BarChart,
      title: "Informações são exibidas",
      description: "Dados organizados em dashboards intuitivos"
    },
    {
      icon: Zap,
      title: "Decisão automatizada",
      description: "Ações são sugeridas ou executadas automaticamente"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&opacity=0.15')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
              QuantAI
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Visão computacional aplicada à realidade
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-white mb-12 max-w-3xl mx-auto">
              Conte com a precisão das máquinas para enxergar o que seus olhos não veem.
            </p>
                      
          <Button 
            size="lg" 
            className="bg-cyan-500 hover:bg-white hover:text-gray-900 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Agende uma avaliação gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </section>

      {/* What is QuantAI Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">
                Tecnologia que enxerga o invisível
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                QuantAI é uma solução de visão computacional que transforma câmeras em sensores inteligentes. 
                Analise, conte, identifique e tome decisões com base em dados visuais em tempo real.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
                alt="Sistema QuantAI em operação"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-cyan-500/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Benefícios claros
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <benefit.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Casos de uso reais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Como funciona
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-cyan-500/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center border-2 border-cyan-500">
                  <step.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-3/4 w-1/2 h-px bg-cyan-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Agende sua avaliação
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Quer entender como a visão computacional pode funcionar na sua operação?<br />
            Agende uma avaliação técnica com nosso time.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
            <Select onValueChange={(value) => setFormData({...formData, segment: value})}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Segmento da empresa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="industria">Indústria</SelectItem>
                <SelectItem value="construcao">Construção Civil</SelectItem>
                <SelectItem value="agronegocio">Agronegócio</SelectItem>
                <SelectItem value="logistica">Logística</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              type="submit" 
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3"
            >
              Quero conversar com um especialista
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">QuantAI</h3>
              <p className="text-gray-400 text-sm">
                Visão computacional aplicada à realidade industrial
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Menu</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tecnologia</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Aplicações</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 QuantAI – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
