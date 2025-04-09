import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const predefinedResponses = {
  default: "Olá! Como posso ajudar?",
  greeting: "Olá! Sou o assistente virtual da Aspirvacuum. Como posso ajudar?",
  help: "Posso ajudar com:\n- Informações sobre produtos e sistemas\n- Marcação de serviços técnicos\n- Orçamentos personalizados\n- Manutenção e reparação\n- Instalação de sistemas\n- Esclarecimento de dúvidas",
  schedule: "Para marcar uma visita técnica, pode:\n1. Ligar para +351 934 094 801\n2. Preencher o formulário na nossa página de assistência técnica\n3. Indicar-me o seu nome e contacto que entraremos em contacto consigo",
  contact: "Pode contactar-nos através:\nTelemóvel: +351 934 094 801\nHorário: Segunda a Sábado, das 8h às 18h\n\nPrefere que entremos em contacto consigo? Basta deixar o seu número.",
  maintenance: "Disponibilizamos serviços de:\n- Manutenção preventiva\n- Reparação\n- Suporte técnico 24/7\n\nQual destes serviços pretende saber mais?",
  emergency: "Para emergências, ligue +351 934 094 801. Estamos disponíveis 24/7 para suporte técnico urgente.\n\nQuer que um técnico entre em contacto consigo imediatamente?",
  products: {
    general: "Os nossos produtos incluem:\n1. Sistemas Residenciais\n2. Sistemas Comerciais\n3. Sistemas Industriais\n4. Acessórios e Peças\n\nSobre qual gostaria de saber mais?",
    residential: "Os nossos sistemas residenciais são ideais para:\n- Moradias\n- Apartamentos\n- Condomínios\n\nCaracterísticas principais:\n- Instalação discreta\n- Baixo ruído\n- Manutenção simples\n\nGostaria de saber preços ou agendar uma demonstração?",
    commercial: "Sistemas comerciais adequados para:\n- Escritórios\n- Hotéis\n- Restaurantes\n- Lojas\n\nVantagens:\n- Alta potência\n- Uso intensivo\n- Manutenção programada\n\nPretende um orçamento personalizado?",
    industrial: "Sistemas industriais para:\n- Fábricas\n- Armazéns\n- Grandes superfícies\n\nBenefícios:\n- Máxima potência\n- Uso contínuo\n- Soluções à medida\n\nQuer falar com um especialista?",
  },
  price: "Para um orçamento personalizado, preciso de alguns detalhes:\n1. Tipo de espaço (residencial/comercial/industrial)\n2. Área aproximada\n3. Número de pisos/divisões\n4. Tipo de utilização prevista\n\nPode fornecer estas informações?",
  installation: "O nosso serviço de instalação inclui:\n- Avaliação técnica do espaço\n- Projeto personalizado\n- Instalação profissional\n- Testes e certificação\n- Formação de utilização\n\nGostaria de agendar uma avaliação gratuita?",
  followup: "Posso ajudar com mais alguma informação?",
  goodbye: "Obrigado por contactar a Aspirvacuum! Se precisar de mais ajuda, não hesite em voltar a contactar-nos.",
};

const keywordMappings: { [key: string]: string[] } = {
  schedule: ['marcar', 'agendar', 'marcar', 'visita', 'marcação', 'agendar', 'quando', 'disponibilidade', 'hora', 'data', 'disponível'],
  contact: ['contacto', 'contactar', 'telefone', 'telemóvel', 'email', 'morada', 'onde', 'localização', 'endereço', 'número'],
  maintenance: ['manutenção', 'reparação', 'arranjar', 'concerto', 'avaria', 'problema', 'não funciona', 'avariado', 'partido', 'estragar', 'avariar'],
  emergency: ['urgente', 'emergência', 'socorro', 'grave', 'imediato', 'agora', 'rápido', 'urgência'],
  help: ['ajuda', 'dúvida', 'como', 'explicar', 'perceber', 'informação', 'saber', 'conhecer'],
  products: ['produto', 'equipamento', 'sistema', 'aspirador', 'central', 'material', 'comprar', 'vender', 'aspiração'],
  residential: ['casa', 'moradia', 'apartamento', 'residencial', 'doméstico', 'habitação'],
  commercial: ['comercial', 'empresa', 'loja', 'escritório', 'restaurante', 'hotel'],
  industrial: ['industrial', 'fábrica', 'indústria', 'armazém', 'galpão'],
  price: ['preço', 'custo', 'valor', 'orçamento', 'quanto', 'custa', 'investimento', 'euros', '€'],
  installation: ['instalar', 'instalação', 'montar', 'montagem', 'colocar'],
  support: ['suporte', 'técnico', 'assistência', 'apoio', 'ajuda técnica'],
  goodbye: ['adeus', 'tchau', 'até logo', 'obrigado', 'obrigada']
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [context, setContext] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      if (showInitialMessage) {
        handleBotResponse(predefinedResponses.greeting);
        setTimeout(() => {
          handleBotResponse(predefinedResponses.help);
        }, 500);
        setShowInitialMessage(false);
      }
      // Foca no input quando o chat é aberto
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleBotResponse = (response: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: response,
      isBot: true
    }]);
  };

  const findIntent = (input: string): string => {
    const normalizedInput = input.toLowerCase();
    
    // Verifica contexto atual
    if (context === 'products') {
      if (normalizedInput.match(/residencial|casa|moradia|apartamento/)) return 'residential';
      if (normalizedInput.match(/comercial|empresa|loja|escritório/)) return 'commercial';
      if (normalizedInput.match(/industrial|fábrica|indústria/)) return 'industrial';
    }

    // Verifica palavras-chave exatas
    for (const [intent, keywords] of Object.entries(keywordMappings)) {
      if (keywords.some(keyword => normalizedInput.includes(keyword))) {
        return intent;
      }
    }
    
    // Verifica correspondências parciais
    for (const [intent, keywords] of Object.entries(keywordMappings)) {
      if (keywords.some(keyword => 
        keyword.length > 4 && normalizedInput.includes(keyword.slice(0, 4))
      )) {
        return intent;
      }
    }

    return context || 'default';
  };

  const processUserInput = (input: string) => {
    const intent = findIntent(input);
    
    if (['residential', 'commercial', 'industrial'].includes(intent)) {
      setContext('products');
    } else if (intent === 'goodbye') {
      setContext('');
    } else {
      setContext(intent);
    }

    const response = (() => {
      switch (intent) {
        case 'schedule':
          return predefinedResponses.schedule;
        case 'contact':
          return predefinedResponses.contact;
        case 'maintenance':
          return predefinedResponses.maintenance;
        case 'emergency':
          return predefinedResponses.emergency;
        case 'help':
          return predefinedResponses.help;
        case 'products':
          return predefinedResponses.products.general;
        case 'residential':
          return predefinedResponses.products.residential;
        case 'commercial':
          return predefinedResponses.products.commercial;
        case 'industrial':
          return predefinedResponses.products.industrial;
        case 'price':
          return predefinedResponses.price;
        case 'installation':
          return predefinedResponses.installation;
        case 'support':
          return predefinedResponses.maintenance;
        case 'goodbye':
          return predefinedResponses.goodbye;
        default:
          if (context === 'products') {
            return predefinedResponses.products.general;
          }
          return "Peço desculpa, não percebi completamente. Posso ajudar com:\n- Sistemas de aspiração central\n- Marcação de visitas\n- Manutenção e reparação\n- Orçamentos personalizados";
      }
    })();

    return response;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, {
      id: Date.now(),
      text: inputValue,
      isBot: false
    }]);

    setTimeout(() => {
      const response = processUserInput(inputValue);
      handleBotResponse(response);
    }, 500);

    setInputValue('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Assistente Virtual Aspirvacuum</h3>
            <p className="text-sm text-blue-100">Assistência técnica online</p>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escreva a sua mensagem..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 