const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h6 className="text-lg font-bold mb-4">Sobre Nós</h6>
            <p className="text-gray-400">
              A Aspirvacum é líder em soluções de aspiração central, oferecendo produtos de alta qualidade e suporte técnico especializado.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h6 className="text-lg font-bold mb-4">Links Úteis</h6>
            <ul className="space-y-2">
              <li><a href="/aspirvacuum" className="text-gray-400 hover:text-white">Sobre a Empresa</a></li>
              <li><a href="/loja" className="text-gray-400 hover:text-white">Produtos</a></li>
              <li><a href="/contactos" className="text-gray-400 hover:text-white">Contactos</a></li>
              <li><a href="/assistencia-tecnica" className="text-gray-400 hover:text-white">Assistência Técnica</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="text-lg font-bold mb-4">Contacte-nos</h6>
            <p className="text-gray-400">Telefone: <a href="tel:+351917601184" className="hover:text-white">+351 917 601 184</a></p>
            <p className="text-gray-400">Email: <a href="mailto:geral@aspirvacum.pt" className="hover:text-white">geral@aspirvacum.pt</a></p>
            <p className="text-gray-400">Visite-nos: <a href="http://www.aspirvacuum.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white">aspirvacuum.pt</a></p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 border-t border-gray-700 pt-1 text-center">
          <p className="text-sm text-gray-500">©2025 Aspirvacum · Desenvolvido por GTIT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
