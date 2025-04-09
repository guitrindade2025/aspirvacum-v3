import { motion } from 'framer-motion';

const PoliticaCookies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">O que são cookies?</h2>
            <p className="mb-4">
              Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita nosso website. Eles permitem que o site lembre suas ações e preferências durante um determinado período.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Como utilizamos os cookies?</h2>
            <p className="mb-4">Utilizamos diferentes tipos de cookies para as seguintes finalidades:</p>
            
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Cookies Essenciais</h3>
                <p>Necessários para o funcionamento básico do site. O site não pode funcionar adequadamente sem estes cookies.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Cookies de Desempenho</h3>
                <p>Utilizados para analisar como os visitantes usam nosso site e monitorar o desempenho. Isso nos permite fornecer uma experiência de alta qualidade personalizando nossa oferta.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Cookies de Funcionalidade</h3>
                <p>Permitem que o site lembre escolhas que você faz (como seu nome de usuário, idioma ou região) e fornecem recursos aprimorados e mais pessoais.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Cookies de Marketing</h3>
                <p>Utilizados para rastrear visitantes em websites. A intenção é exibir anúncios relevantes e envolventes para o usuário individual.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies específicos que utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left">Cookie</th>
                    <th className="px-6 py-3 text-left">Tipo</th>
                    <th className="px-6 py-3 text-left">Duração</th>
                    <th className="px-6 py-3 text-left">Finalidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">_ga</td>
                    <td className="px-6 py-4">Análise</td>
                    <td className="px-6 py-4">2 anos</td>
                    <td className="px-6 py-4">Google Analytics - Distingue usuários</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">_gid</td>
                    <td className="px-6 py-4">Análise</td>
                    <td className="px-6 py-4">24 horas</td>
                    <td className="px-6 py-4">Google Analytics - Distingue usuários</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">cookieconsent</td>
                    <td className="px-6 py-4">Essencial</td>
                    <td className="px-6 py-4">1 ano</td>
                    <td className="px-6 py-4">Armazena preferências de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Como controlar os cookies</h2>
            <p className="mb-4">
              Você pode controlar e/ou excluir cookies conforme desejar. Pode apagar todos os cookies já existentes no seu computador e pode configurar a maioria dos navegadores para impedir que sejam adicionados. No entanto, se fizer isso, poderá ter de ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades poderão não funcionar.
            </p>
            <p className="mb-4">
              Para saber mais sobre como gerir cookies no seu navegador:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=pt" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/pt-PT/kb/ative-e-desative-cookies-que-os-websites-utilizam" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/pt-pt/windows/eliminar-e-gerir-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Atualizações à Política de Cookies</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente. Quando fizermos alterações, atualizaremos a data de "última atualização" no topo desta política e encorajamos você a rever esta política periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacte-nos</h2>
            <p>
              Se tiver alguma dúvida sobre nossa Política de Cookies, por favor contacte-nos através do email: 
              <a href="mailto:info@aspirvacum.pt" className="text-blue-600 hover:underline ml-1">
                info@aspirvacum.pt
              </a>
            </p>
          </section>

          <div className="text-sm text-gray-500 mt-8">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PoliticaCookies; 