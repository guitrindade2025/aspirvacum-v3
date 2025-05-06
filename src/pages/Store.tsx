import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFilter, FaSearch, FaPlus, FaCheck, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Store = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categoria || 'todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const productsPerPage = 12; // Número de produtos por página

  useEffect(() => {
    if (categoria) {
      setActiveCategory(categoria);
    }
  }, [categoria]);

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'acessorios', name: 'Acessórios' },
    { id: 'escovas', name: 'Escovas' },
    { id: 'sacos', name: 'Sacos' },
    { id: 'kits', name: 'Kits' },
    { id: 'motor', name: 'Motor' },
    { id: 'tomadas', name: 'Tomadas' }
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'todos') {
      navigate('/loja');
    } else {
      navigate(`/loja/${category}`);
    }
  };

  const products = [
    { id: 12, name: "Mangueira Flexível", price: "€45,00", category: "acessorios", image: "/9.jpg", description: "Mangueira leve e resistente para aspiração central." },
    { id: 14, name: "Mangueira com Acessórios", price: "€80,00", category: "acessorios", image: "/p1.jpg", description: "Mangueira com punho ergonómico e adaptador incluído." },
    { id: 15, name: "Mangueira Anti-Choque", price: "€100,00", category: "acessorios", image: "/p2.jpg", description: "Mangueira com revestimento têxtil para proteger superfícies." },
    { id: 16, name: "Conectores PVC", price: "€15,00", category: "acessorios", image: "/p3.jpg", description: "Cotovelos e uniões para instalação de aspiração central." },
    { id: 17, name: "AT - 0,60€", price: "€0,60", category: "acessorios", image: "/Img AVAC/acessorios/AT-0,60€.png", description: "Produto da categoria acessórios." },
    { id: 18, name: "AV - 0,50€", price: "€0,50", category: "acessorios", image: "/Img AVAC/acessorios/AV-0,50€.png", description: "Produto da categoria acessórios." },
    { id: 19, name: "Escova para móveis", price: "€6,00", category: "escovas", image: "/Img AVAC/escovas/(AV2)escova_para_moveis-6,00€.png", description: "Escova ideal para móveis." },
    { id: 20, name: "Kit Acessórios Premium", price: "€140,00", category: "kits", image: "/Img AVAC/kit/kit_acessorios_premium-140,00€.jpg", description: "Kit completo de acessórios premium." },
    { id: 21, name: "Motor AV - 185,00€", price: "€185,00", category: "motor", image: "/Img AVAC/motor/AV-185,00€.png", description: "Motor de alta performance." },
    { id: 22, name: "Saco AV-MOD-3C", price: "€22,00", category: "sacos", image: "/Img AVAC/sacos/AV-MOD-3C,-22,00€.png", description: "Saco de substituição para aspiradores." },
    { id: 23, name: "Tomada Técnica", price: "€6,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Técnica-6,00€.png", description: "Tomada técnica para sistemas de aspiração." },
    { id: 24, name: "AV - 0,80€", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AV-+0,80€.png", description: "Produto adicional da categoria acessórios." },
    { id: 25, name: "Escova Turbo Média", price: "€22,00", category: "escovas", image: "/Img AVAC/escovas/(AV3)escova_turbo_media-22,0€.png", description: "Escova turbo para limpeza eficiente." },
    { id: 26, name: "Mangueiras Retrátil", price: "€50,00", category: "kits", image: "/Img AVAC/kit/Mangueiras Retráctil-50,00€.jpg", description: "Mangueira retrátil para maior praticidade." },
    { id: 27, name: "ESC.MOTOR GL", price: "€40,00", category: "motor", image: "/Img AVAC/motor/ESC.MOTOR GL-40,00€.png", description: "Escova de motor de alta qualidade." },
    { id: 28, name: "AV-MOD-4", price: "€9,00", category: "sacos", image: "/Img AVAC/sacos/AV-MOD-4,-9,00€.png", description: "Saco de substituição para aspiradores." },
    { id: 29, name: "Tomada Europa Metal", price: "€25,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Europa Metal-25,00€.png", description: "Tomada de alta durabilidade para sistemas de aspiração." },
    { id: 30, name: "AT - 0,80€", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AT-,0,80€.png", description: "Produto adicional da categoria acessórios." },
    { id: 31, name: "AV - 0,80€", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AV-,0,80€.png", description: "Produto adicional da categoria acessórios." },
    { id: 32, name: "AV - 1,10€", price: "€1,10", category: "acessorios", image: "/Img AVAC/acessorios/AV-,1,10€.png", description: "Produto adicional da categoria acessórios." },
    { id: 34, name: "Escova Sofá com Crina", price: "€6,00", category: "escovas", image: "/Img AVAC/escovas/(AV-1)escova_sofa_com_crina-6,00€.png", description: "Escova ideal para sofás com crina." },
    { id: 35, name: "Escova de Dupla Função", price: "€20,00", category: "escovas", image: "/Img AVAC/escovas/(AV4)escova_de_dupla_funcao_de_borracha_e_metal-20,0€.png", description: "Escova com borracha e metal para dupla função." },
    { id: 36, name: "Escova Crina Técnica", price: "€18,00", category: "escovas", image: "/Img AVAC/escovas/escova_crina_tecnica-18,00€.jpg", description: "Escova técnica com crina para superfícies delicadas." },
    { id: 37, name: "Silenciador", price: "€25,75", category: "escovas", image: "/Img AVAC/escovas/Silenciador-25,75€.jpg", description: "Silenciador para sistemas de aspiração." },
    { id: 38, name: "Ponteira Mangueira Universal", price: "€8,00", category: "escovas", image: "/Img AVAC/escovas/ponteira_mangueira_universal-8,00€.png", description: "Ponteira universal para mangueiras." },
    { id: 39, name: "AV - 0,40€", price: "€0,40", category: "acessorios", image: "/Img AVAC/acessorios/AV-+O,40€.png", description: "Produto adicional da categoria acessórios." },
    { id: 40, name: "AV - 2,40€", price: "€2,40", category: "acessorios", image: "/Img AVAC/acessorios/AV-, 2,40€.png", description: "Produto adicional da categoria acessórios." },
    { id: 41, name: "AV - 0,90€", price: "€0,90", category: "acessorios", image: "/Img AVAC/acessorios/AV-,0,90€.png", description: "Produto adicional da categoria acessórios." },
    { id: 42, name: "AV - 8,00€", price: "€8,00", category: "acessorios", image: "/Img AVAC/acessorios/AV-,8,00€.png", description: "Produto adicional da categoria acessórios." },
    { id: 43, name: "AV - 0,80€", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AV-0,80€.png", description: "Acessório para sistemas de aspiração central." },
    { id: 44, name: "av - 1,10€", price: "€1,10", category: "acessorios", image: "/Img AVAC/acessorios/av-1,10€.png", description: "Acessório para sistemas de aspiração central." },
    { id: 45, name: "VA - 1,10€", price: "€1,10", category: "acessorios", image: "/Img AVAC/acessorios/VA-1,10€.png", description: "Acessório para sistemas de aspiração central." },
    { id: 46, name: "AT - 0,80€ (2)", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AT-,0,80€ (2).png", description: "Acessório para sistemas de aspiração central." },
    { id: 47, name: "AV - 0,80€ (2)", price: "€0,80", category: "acessorios", image: "/Img AVAC/acessorios/AV-+0,80€ (2).png", description: "Acessório para sistemas de aspiração central." },
    { id: 48, name: "AV - 0,60€", price: "€0,60", category: "acessorios", image: "/Img AVAC/acessorios/AV-,0,60€.png", description: "Acessório para sistemas de aspiração central." },
    { id: 49, name: "AV - 0,50€", price: "€0,50", category: "acessorios", image: "/Img AVAC/acessorios/AV,-0,50€.png", description: "Acessório para sistemas de aspiração central." },
    { id: 50, name: "Bico de Cantos", price: "€6,00", category: "escovas", image: "/Img AVAC/escovas/Bico de Cantos-6,00€.png", description: "Bico especial para limpeza de cantos de difícil acesso." },
    { id: 51, name: "Escova crina com rodas grande", price: "€20,00", category: "escovas", image: "/Img AVAC/escovas/Escova crina com rodas grande-20,00€.png", description: "Escova de crina de grandes dimensões com rodas para facilitar o uso." },
    { id: 52, name: "Escova Dupla metal", price: "€20,00", category: "escovas", image: "/Img AVAC/escovas/Escova Dupla metal-20,00€.png", description: "Escova dupla com estrutura metálica para maior durabilidade." },
    { id: 54, name: "Escova Dupla", price: "€18,00", category: "escovas", 
      image: "/Img AVAC/escovas/Escova Dupla preto-18,00€.png",
      additionalImages: ["/Img AVAC/escovas/AV-DUPLA BRANCO-18,00€.png"],
      description: "Escova dupla com acabamento disponível em preto e branco, ideal para diferentes superfícies." },
    { id: 55, name: "Escova crina simples preto branco", price: "€18,00", category: "escovas", image: "/Img AVAC/escovas/escova_crina_simples_preto_branco-18,00€.png", description: "Escova de crina com design simples em preto e branco." },
    { id: 56, name: "Escova Turbo", price: "€27,00", category: "escovas", image: "/Img AVAC/escovas/escova_Turbo-27,00€.png", description: "Escova turbo de alta potência para limpeza profunda." },
    { id: 57, name: "Escova turbo media", price: "€25,00", category: "escovas", image: "/Img AVAC/escovas/escova_turbo_media-25,0€.png", description: "Escova turbo de tamanho médio com excelente desempenho." },
    { id: 58, name: "Ponteira mangueira com anel", price: "€6,00", category: "escovas", image: "/Img AVAC/escovas/ponteira_mangueira_com_anel-6,00€.png", description: "Ponteira com anel para conexão segura de mangueiras." },
    { id: 59, name: "Punho mangueira de plastico", price: "€12,00", category: "escovas", image: "/Img AVAC/escovas/punho_mangueira_de_plastico-12,00€.png", description: "Punho ergonômico de plástico para mangueiras." },
    { id: 60, name: "Punho mangueira metalico", price: "€15,00", category: "escovas", image: "/Img AVAC/escovas/punho_mangueira_metalico-15,00€.png", description: "Punho metálico resistente para mangueiras." },
    { id: 61, name: "União mangueira rosca rosca", price: "€8,00", category: "escovas", image: "/Img AVAC/escovas/uniao_mangueira_rosca_rosca-8,00€.jpg", description: "União com rosca dupla para conexão de mangueiras." },
    { id: 62, name: "Saco 12,00€", price: "€12,00", category: "sacos", image: "/Img AVAC/sacos/12,00€.png", description: "Saco de substituição para sistemas de aspiração." },
    { id: 63, name: "AV-MOD-4A", price: "€9,00", category: "sacos", image: "/Img AVAC/sacos/AV-MOD-4A,-9,00€.png", description: "Saco de substituição modelo 4A." },
    { id: 64, name: "AV-mod-5", price: "€15,00", category: "sacos", image: "/Img AVAC/sacos/AV-mod-5-15,00€.png", description: "Saco de substituição modelo 5." },
    { id: 65, name: "AV-mod-6", price: "€15,00", category: "sacos", image: "/Img AVAC/sacos/AV-mod-6-15,00€.png", description: "Saco de substituição modelo 6." },
    { id: 66, name: "AV-mod-6A", price: "€12,00", category: "sacos", image: "/Img AVAC/sacos/AV-mod-6A-12,00€.png", description: "Saco de substituição modelo 6A." },
    { id: 67, name: "AV-SACOS 3UN-MOD-3CP", price: "€22,00", category: "sacos", image: "/Img AVAC/sacos/AV-SACOS 3UN-MOD-3CP -22,00€.png", description: "Pack de 3 unidades de sacos modelo 3CP." },
    { id: 68, name: "AV-SACOS 3UN. MOD 1", price: "€20,00", category: "sacos", image: "/Img AVAC/sacos/AV-SACOS 3UN. MOD 1-20,00€.png", description: "Pack de 3 unidades de sacos modelo 1." },
    { id: 69, name: "AV-SACOS 3UN. MOD 10", price: "€24,00", category: "sacos", image: "/Img AVAC/sacos/AV-SACOS 3UN. MOD 10-24,00€.png", description: "Pack de 3 unidades de sacos modelo 10." },
    { id: 70, name: "Aro América", price: "€2,50", category: "tomadas", image: "/Img AVAC/tomatas/Aro América-2,50€.png", description: "Aro para tomada americana. Disponível em várias cores." },
    { id: 71, name: "Aro Europa PVC", price: "€2,50", category: "tomadas", image: "/Img AVAC/tomatas/Aro Europa PVC.-2,50€.png", description: "Aro em PVC para tomada Europa." },
    { id: 72, name: "Aro Tomada Especial", price: "€4,00", category: "tomadas", image: "/Img AVAC/tomatas/Aro Tomada Especial  VARIOS CORES- 4,00€.png", description: "Aro para tomada especial disponível em várias cores." },
    { id: 73, name: "Aros de Glutão", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Aros de Glutão-8.00€.png", description: "Aros de glutão para sistemas de aspiração. Disponível em várias cores." },
    { id: 74, name: "Glutao Inox", price: "€125,00", category: "tomadas", image: "/Img AVAC/tomatas/glutao_inox-125€.png", description: "Glutão em inox de alta durabilidade." },
    { id: 76, name: "Placas de Montagem", price: "€3,50", category: "tomadas", image: "/Img AVAC/tomatas/Placas de Montagem-3,50€.png", description: "Placas para montagem de tomadas." },
    { id: 77, name: "Tomada Americana", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Americana-8,00€.png", description: "Tomada no padrão americano para sistemas de aspiração. Disponível em várias cores." },
    { id: 78, name: "Tomada América", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada América.8.00€.png", description: "Tomada no padrão américa para sistemas de aspiração." },
    { id: 79, name: "Tomada Especial", price: "€5,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Especial.5,00€.png", description: "Tomada especial para aplicações específicas." },
    { id: 80, name: "Tomada Europa PVC", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Europa PVC8.00€.png", description: "Tomada Europa em PVC. Disponível em várias cores." },
    { id: 81, name: "Tomada Exaustão", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Exaustão-8,00€.png", description: "Tomada para sistemas de exaustão. Disponível em várias cores." },
    { id: 82, name: "Tomada Premier Evo", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Premier Evo-8.00€.png", description: "Tomada Premier Evo de alta qualidade. Disponível em várias cores." },
    { id: 83, name: "Tomada Premier", price: "€8,00", category: "tomadas", image: "/Img AVAC/tomatas/Tomada Premier.8,00€.png", description: "Tomada Premier para sistemas de aspiração. Disponível em várias cores." },
    { id: 84, name: "Extensão de Mangueira On-Off 3m", price: "€65,00", category: "kits", image: "/Img AVAC/kit/Extensão de Mangueira On-Off 3m -65,00€.jpg", description: "Extensão de mangueira com sistema On-Off de 3 metros." },
    { id: 85, name: "Extensão de Mangueira On-Off 5m", price: "€75,00", category: "kits", image: "/Img AVAC/kit/Extensão de Mangueira On-Off 5m-75,00€.jpg", description: "Extensão de mangueira com sistema On-Off de 5 metros." },
    { id: 86, name: "Kit Acessórios Standard", price: "€65,00", category: "kits", image: "/Img AVAC/kit/kit_acessorios_standard-65,00€ (2).jpg", description: "Kit completo de acessórios padrão para aspiração central." },
    { id: 87, name: "Mangueiras On-Off", price: "€98,00", category: "kits", image: "/Img AVAC/kit/Mangueiras On_Off-98,00€.jpg", description: "Mangueira com sistema de controle On-Off integrado." },
    { id: 88, name: "Mangueiras Standard", price: "€40,00", category: "kits", image: "/Img AVAC/kit/Mangueiras Standard-40,00€.jpg", description: "Mangueira standard para sistemas de aspiração central." },
    { id: 89, name: "Protetor de Mangueira 25,00€", price: "€25,00", category: "kits", image: "/Img AVAC/kit/Protector de Mangueira25,00€.png", description: "Proteção para mangueiras de aspiração central." },
    { id: 90, name: "Protetor de Mangueira 29,00€", price: "€29,00", category: "kits", image: "/Img AVAC/kit/Protector de Mangueira29,00€.png", description: "Proteção reforçada para mangueiras de aspiração central." },
    { id: 91, name: "Suporte de Mangueira", price: "€10,00", category: "kits", image: "/Img AVAC/kit/Suporte de Mangueira -10,00€.png", description: "Suporte para armazenamento de mangueira." },
    { id: 92, name: "Telescópico de Alumínio", price: "€20,00", category: "kits", image: "/Img AVAC/kit/Telescopico de Aluminio-20,00€.png", description: "Tubo telescópico em alumínio leve e durável." },
    { id: 93, name: "Telescópico Inox", price: "€20,00", category: "kits", image: "/Img AVAC/kit/Telescopico Inox-20,00€.png", description: "Tubo telescópico em aço inoxidável de alta resistência." },
    { id: 94, name: "Tubo Telescópico Cromado", price: "€15,00", category: "kits", image: "/Img AVAC/kit/tubo_telescopico_cromado-15,00€.png", description: "Tubo telescópico com acabamento cromado." },
    { id: 95, name: "Motor 185,00€ (2)", price: "€185,00", category: "motor", image: "/Img AVAC/motor/185,00€ (2).png", description: "Motor de alta performance para sistemas de aspiração." },
    { id: 96, name: "Motor 185,00€", price: "€185,00", category: "motor", image: "/Img AVAC/motor/185,00€.png", description: "Motor potente para sistemas de aspiração." },
    { id: 97, name: "Motor AV - 160€", price: "€160,00", category: "motor", image: "/Img AVAC/motor/AV-160€.png", description: "Motor AV de custo-benefício para sistemas de aspiração." },
    { id: 98, name: "Motor AV - 185,00€ (2)", price: "€185,00", category: "motor", image: "/Img AVAC/motor/AV-185,00€ (2).png", description: "Motor AV de alta potência para sistemas de aspiração." },
    { id: 99, name: "Motor AV - 249,00€", price: "€249,00", category: "motor", image: "/Img AVAC/motor/AV-249,00€.png", description: "Motor AV premium para sistemas de aspiração de grande porte." },
    { id: 100, name: "CH-2 STAG 1.5", price: "€220,00", category: "motor", image: "/Img AVAC/motor/CH-2 STAG 1.5.png", description: "Motor modelo CH-2 STAG 1.5 para sistemas de alta demanda." },
    { id: 101, name: "ESC.MOTOR BP", price: "€40,00", category: "motor", image: "/Img AVAC/motor/ESC.MOTOR BP-40,00£.png", description: "Escova para motor modelo BP." },
    { id: 102, name: "ESC.MOTOR TF", price: "€40,00", category: "motor", image: "/Img AVAC/motor/ESC.MOTOR TF-40,00€.png", description: "Escova para motor modelo TF." },
    { id: 103, name: "Máquina", price: "€299,00", category: "motor", image: "/Img AVAC/motor/maquina.PNG", description: "Sistema completo de aspiração central." },
    { id: 104, name: "MK-196954DOM", price: "€220,00", category: "motor", image: "/Img AVAC/motor/MK-196954DOM.png", description: "Motor modelo MK-196954DOM para uso doméstico." },
    { id: 105, name: "MK-294708DOM", price: "€250,00", category: "motor", image: "/Img AVAC/motor/MK-294708DOM.png", description: "Motor modelo MK-294708DOM para uso doméstico avançado." },
    { id: 106, name: "MK-301456DOM", price: "€270,00", category: "motor", image: "/Img AVAC/motor/MK-301456DOM.png", description: "Motor modelo MK-301456DOM para uso doméstico de alta performance." },
    { id: 107, name: "Vedante de motor", price: "€15,00", category: "motor", image: "/Img AVAC/motor/Vedante de motor-15,00€.png", description: "Vedante para manutenção e substituição em motores." },
  ];

  const handleProductSelect = (productId: number) => {
    setSelectedProducts(prev => {
      const isSelected = prev.includes(productId);
      if (isSelected) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };
  
  // Função para abrir o modal com detalhes do produto
  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  const handleSendInquiry = () => {
    const selectedItems = products.filter(product => selectedProducts.includes(product.id));
    const productsList = selectedItems.map(item => `${item.name} - €${item.price}`).join('\n');
    
    const mailtoLink = `mailto:info@aspirvacum.pt?subject=Pedido de Informações sobre Produtos&body=Olá, gostaria de receber mais informações sobre os seguintes produtos:%0D%0A%0D%0A${encodeURIComponent(productsList)}%0D%0A%0D%0APor favor, enviem-me informações sobre disponibilidade e prazo de entrega.`;
    
    window.location.href = mailtoLink;
  };

  const filteredProducts = products
    // Primeiro filtra por categoria
    .filter(product => activeCategory === 'todos' || product.category === activeCategory)
    // Depois filtra pela pesquisa
    .filter(product => {
      const search = searchTerm.toLowerCase().trim();
      if (!search) return true;
      
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-aspirvacum-teal text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">A Nossa Loja</h1>
            <p className="text-xl text-blue-100">
              Encontre os melhores produtos para o seu sistema de aspiração central
            </p>
          </div>
          
          {/* Barra de Pesquisa */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Encontrar produtos..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Resultados da Pesquisa */}
      {searchTerm && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <p className="text-gray-600">
            {filteredProducts.length === 0 
              ? 'Nenhum produto encontrado' 
              : `${filteredProducts.length} produto(s) encontrado(s)`
            }
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros e Categorias */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-aspirvacum-teal text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100">
            <FaFilter />
            Filtrar
          </button>
        </div>

        {selectedProducts.length > 0 && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {selectedProducts.length} produto(s) selecionado(s)
              </span>
              <button
                onClick={handleSendInquiry}
                className="bg-aspirvacum-teal text-white px-6 py-2 rounded-lg hover:bg-aspirvacum-blue transition-colors"
              >
                Solicitar Informações
              </button>
            </div>
          </div>
        )}

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 cursor-pointer ${
                selectedProducts.includes(product.id) ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="relative w-full pb-[100%]">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {product.id === 54 && (
                    <img
                      src={hoveredProduct === product.id && product.additionalImages ? product.additionalImages[0] : product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain transition-opacity duration-300"
                    />
                  )}
                  {product.id !== 54 && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
                {product.id === 54 && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredProduct(hoveredProduct === product.id ? null : product.id);
                      }}
                      className="bg-gray-200/80 p-2 rounded-full hover:bg-gray-300/80 transition-colors"
                    >
                      <FaArrowLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredProduct(hoveredProduct === product.id ? null : product.id);
                      }}
                      className="bg-gray-200/80 p-2 rounded-full hover:bg-gray-300/80 transition-colors"
                    >
                      <FaArrowRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 cursor-pointer" onClick={() => openProductModal(product)}>{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                  {product.id === 54 && (
                    <span className="block text-blue-600 font-medium mt-1">Disponível em Preto / Branco</span>
                  )}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-aspirvacum-teal">{product.price.replace('€', '')} €</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductSelect(product.id);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      selectedProducts.includes(product.id)
                        ? 'bg-aspirvacum-blue text-white'
                        : 'bg-aspirvacum-teal text-white hover:bg-aspirvacum-blue'
                    }`}
                  >
                    {selectedProducts.includes(product.id) ? (
                      <FaCheck className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                    {selectedProducts.includes(product.id) ? 'Selecionado' : 'Selecionar'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-aspirvacum-teal text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              Seguinte
            </button>
          </nav>
        </div>
      </div>

      {/* Modal de Detalhes do Produto */}
      <AnimatePresence>
        {showModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Imagem do Produto */}
                <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-50 relative">
                  {selectedProduct.id === 54 ? (
                    <>
                      <img
                        src={selectedImage || selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-w-full max-h-96 object-contain transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(selectedProduct.image);
                          }}
                          className="bg-gray-200/80 p-2 rounded-full hover:bg-gray-300/80 transition-colors"
                        >
                          <FaArrowLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(selectedProduct.additionalImages[0]);
                          }}
                          className="bg-gray-200/80 p-2 rounded-full hover:bg-gray-300/80 transition-colors"
                        >
                          <FaArrowRight className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-w-full max-h-96 object-contain"
                    />
                  )}
                </div>
                
                {/* Detalhes do Produto */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                      <p className="text-sm text-blue-600 uppercase font-medium">
                        {categories.find(cat => cat.id === selectedProduct.category)?.name || selectedProduct.category}
                      </p>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Fechar"
                    >
                      <FaTimes className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Descrição</h3>
                    <p className="text-gray-700">{selectedProduct.description}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Características Técnicas</h3>
                    <ul className="text-gray-700 space-y-2">
                      {selectedProduct.id === 15 ? ( // Mangueira Anti-Choque
                        <>
                          <li>• Materiais de alta qualidade</li>
                          <li>• Encaixe perfeito</li>
                          <li>• Fácil instalação</li>
                          <li>• Compatível com sistemas de aspiração central</li>
                        </>
                      ) : selectedProduct.category === 'tomadas' && (
                        <>
                          <li>• Formato compacto de 9 x 9 cm</li>
                          <li>• Ideal para instalações onde o espaço é limitado</li>
                          <li>• Compatível com sistemas de aspiração central</li>
                          <li>• Ligação segura e eficiente</li>
                        </>
                      )}
                      {selectedProduct.category === 'motor' && (
                        <>
                          <li>• Motor de alta performance</li>
                          <li>• Baixo consumo energético</li>
                          <li>• Funcionamento silencioso</li>
                          <li>• Sistema de auto-proteção térmica</li>
                        </>
                      )}
                      {selectedProduct.category === 'escovas' && (
                        <>
                          <li>• Design ergonómico</li>
                          <li>• Materiais duradouros</li>
                          <li>• Alta eficiência de limpeza</li>
                          <li>• Compatível com sistemas de aspiração central</li>
                        </>
                      )}
                      {selectedProduct.category === 'acessorios' && (
                        <>
                          <li>• Materiais de alta qualidade</li>
                          <li>• Encaixe perfeito</li>
                          <li>• Fácil instalação</li>
                          <li>• Compatível com sistemas de aspiração central</li>
                        </>
                      )}
                      {selectedProduct.category === 'sacos' && (
                        <>
                          <li>• Alta capacidade de filtragem</li>
                          <li>• Material resistente</li>
                          <li>• Fácil substituição</li>
                          <li>• Compatível com sistemas de aspiração central</li>
                        </>
                      )}
                      {selectedProduct.category === 'kits' && (
                        <>
                          <li>• Kit completo para aspiração central</li>
                          <li>• Componentes de alta qualidade</li>
                          <li>• Desempenho superior</li>
                          <li>• Fácil instalação e utilização</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <span className="text-3xl font-bold text-aspirvacum-teal">
                        {selectedProduct.price.replace('€', '')} €
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductSelect(selectedProduct.id);
                          closeModal();
                        }}
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors w-full sm:w-auto ${
                          selectedProducts.includes(selectedProduct.id)
                            ? 'bg-aspirvacum-blue text-white'
                            : 'bg-aspirvacum-teal text-white hover:bg-aspirvacum-blue'
                        }`}
                      >
                        {selectedProducts.includes(selectedProduct.id) ? (
                          <>
                            <FaCheck className="w-4 h-4" />
                            Selecionado
                          </>
                        ) : (
                          <>
                            <FaPlus className="w-4 h-4" />
                            Selecionar Produto
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Store;