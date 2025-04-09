import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFilter, FaSearch, FaPlus, FaCheck } from 'react-icons/fa';

const Store = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categoria || 'todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Número de produtos por página

  useEffect(() => {
    if (categoria) {
      setActiveCategory(categoria);
    }
  }, [categoria]);

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'acessorios', name: 'Acessórios' },
    { id: 'consumiveis', name: 'Consumíveis' },
    { id: 'kits', name: 'Kits' },
    { id: 'tomadas', name: 'Tomadas' },
    { id: 'tubagem', name: 'Tubagem' },
    { id: 'outros', name: 'Outros' } // Removed 'Centrais' category
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
    // Updated product list with proper categorization
    { id: 12, name: "Mangueira Flexível", price: "€45,00", category: "acessorios", image: "/9.jpg", description: "Mangueira leve e resistente para aspiração central." },
    { id: 13, name: "Kit de Motores", price: "€190,00", category: "kits", image: "/p0.jpg", description: "Motores de substituição para centrais de aspiração. Inclui escovas e vedantes." },
    { id: 14, name: "Mangueira com Acessórios", price: "€80,00", category: "acessorios", image: "/p1.jpg", description: "Mangueira com punho ergonómico e adaptador incluído." },
    { id: 15, name: "Mangueira Anti-Choque", price: "€100,00", category: "acessorios", image: "/p2.jpg", description: "Mangueira com revestimento têxtil para proteger superfícies." },
    { id: 16, name: "Conectores PVC", price: "€15,00", category: "acessorios", image: "/p3.jpg", description: "Cotovelos e uniões para instalação de aspiração central." },
    { id: 17, name: "Kit com Mangueira", price: "€100,00", category: "kits", image: "/p4.jpg", description: "Kit com mangueira, escova para chão e bocal de cantos." },
    { id: 18, name: "Kit Profissional", price: "€115,00", category: "kits", image: "/p5.jpg", description: "Conjunto completo com escovas para várias superfícies e tubo extensível." },
    { id: 19, name: "Tomada Retangular", price: "€15,00", category: "tomadas", image: "/p6.jpg", description: "Tomada de parede branca para aspiração central." },
    { id: 20, name: "Kit com Saco de Transporte", price: "€115,00", category: "kits", image: "/p7.png", description: "Inclui mangueira longa, bocais diversos e saco de arrumação." },
    { id: 21, name: "Kit Básico com Tubo Telescópico", price: "€85,00", category: "kits", image: "/p8.jpg", description: "Mangueira com tubo metálico ajustável e escovas essenciais." },
    { id: 22, name: "Kit com Mangueira Reforçada", price: "€100,00", category: "kits", image: "/p10.jpg", description: "Mangueira resistente com escovas e tubo ajustável." },
    { id: 23, name: "Mangueira com Controlo no Punho", price: "€125,00", category: "acessorios", image: "/p11.jpg", description: "Mangueira premium com regulação de sucção e rotação anti-torção." },
    { id: 24, name: "Tampa de Proteção Plastiflex", price: "€2,50", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Tampa de proteção branca para base de tomada." },
    { id: 25, name: "Deflector de Saída 90x115", price: "€3,00", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Deflector de ar branco para ventilação ou aspiração." },
    { id: 26, name: "Tampa de Acabamento 80x120", price: "€2,80", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Substituição de tomada retangular — branco." },
    { id: 27, name: "Tubo PVC 2\"", price: "€4,50", category: "tubagem", image: "https://placehold.co/400x400?text=Placeholder", description: "Tubos brancos com 2 metros para instalação." },
    { id: 28, name: "Tubo Anelado c/ Fio Branco", price: "€7,50", category: "tubagem", image: "https://placehold.co/400x400?text=Placeholder", description: "16mm com fio elétrico 2x0,50mm branco." },
    { id: 29, name: "Tubo Anelado c/ Fio Branco/Vermelho", price: "€8,00", category: "tubagem", image: "https://placehold.co/400x400?text=Placeholder", description: "2x0,50 branco e vermelho/preto." },
    { id: 30, name: "Tubo Anelado c/ Guia de Aço", price: "€6,90", category: "tubagem", image: "https://placehold.co/400x400?text=Placeholder", description: "Ideal para condução elétrica com guia interno." },
    { id: 31, name: "Fio Elétrico 2x0,50 Branco", price: "€2,00", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Fio elétrico em rolo — cor branca." },
    { id: 32, name: "Fio Elétrico Vermelho + Preto", price: "€2,20", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Rolo de fio 2x0,50mm." },
    { id: 33, name: "Curva Curta 90º", price: "€1,10", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Ligação em curva branca." },
    { id: 34, name: "Curva Longa 90º F/F", price: "€1,50", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Fêmea / fêmea — cor branca." },
    { id: 35, name: "Curva Longa 90º M/F", price: "€1,50", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Macho / fêmea — cor branca." },
    { id: 36, name: "Curva 45º F/F", price: "€1,40", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Curva branca com extremidade dupla fêmea." },
    { id: 37, name: "Curva 45º M/F", price: "€1,40", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Curva branca com ligação macho/fêmea." },
    { id: 38, name: "Curva 3 Direções Simples", price: "€2,00", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Acessório PVC branco com 3 entradas." },
    { id: 39, name: "Curva 3 Direções Completa", price: "€2,50", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Curva branca com três ligações laterais." },
    { id: 40, name: "Tê 90º", price: "€1,80", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Ligação em T para derivação de tubagem." },
    { id: 41, name: "Tê Curto 90º", price: "€1,60", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "T mais compacto para espaços reduzidos." },
    { id: 42, name: "Tê 45º", price: "€1,60", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "T para derivação em ângulo aberto." },
    { id: 43, name: "União com Batente", price: "€1,10", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "União de tubos com batente central." },
    { id: 44, name: "União sem Batente", price: "€1,10", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "União de tubos sem batente." },
    { id: 45, name: "Acrescento de Tomada", price: "€1,30", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Extensão branca para tomada de aspiração." },
    { id: 46, name: "Tampão para Tubo", price: "€1,20", category: "acessorios", image: "https://placehold.co/400x400?text=Placeholder", description: "Fecho branco para terminação de tubo." },
    { id: 47, name: "Aro de Remate p/ Tubo 2”", price: "€1,60", category: "outros", image: "https://placehold.co/400x400?text=Placeholder", description: "Aro circular branco para acabamento." }
    // Additional products can be added here
  ].filter(product => product.category !== 'centrais'); // Removed products in 'Centrais' category

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
      <div className="bg-blue-600 text-white">
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
                    ? 'bg-blue-600 text-white'
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
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 ${
                selectedProducts.includes(product.id) ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    €{product.price}
                  </span>
                  <button 
                    onClick={() => handleProductSelect(product.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      selectedProducts.includes(product.id)
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
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
                    ? 'bg-blue-600 text-white'
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
    </motion.div>
  );
};

export default Store;