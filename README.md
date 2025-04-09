# Deploy do Site AspirVacuum para Apache

Este documento contém as instruções necessárias para fazer o deploy do site AspirVacuum (React + Vite + TypeScript) em um servidor Apache.

## Stack Tecnológica

O site é construído usando as seguintes tecnologias:

1. **Frontend**:
   - **React**: Biblioteca JavaScript para interfaces de usuário
   - **TypeScript**: Superset do JavaScript com tipagem estática
   - **Vite**: Build tool e bundler moderno
   - **TailwindCSS**: Framework CSS para estilização

2. **Tecnologias Finais no Browser**:
   - **JavaScript**: Toda lógica do site (não confundir com Java!)
   - **HTML**: Estrutura das páginas
   - **CSS**: Estilos e layout
   - **Assets**: Imagens e outros recursos estáticos

Importante: Este não é um site Java. JavaScript e Java são linguagens completamente diferentes:
- **Java**: Linguagem compilada que roda na JVM (não usada neste projeto)
- **JavaScript**: Linguagem que roda no navegador (usada neste projeto)

## 1. Preparação do Ambiente de Desenvolvimento

Antes de fazer o deploy, certifique-se de que o projeto está pronto:

```bash
# Instalar dependências
npm install

# Verificar se não há erros
npm run lint

# Gerar build de produção
npm run build
```

## 1.1 Processo de Compilação

Durante o build, os arquivos do projeto são processados da seguinte forma:

1. **Arquivos TSX/TypeScript**:
   - O TypeScript é compilado para JavaScript
   - O JSX é convertido para `React.createElement()`
   - Exemplo:
     ```tsx
     // Arquivo original .tsx
     const MeuComponente: React.FC = () => {
       return (
         <div className="container">
           <h1>Olá Mundo</h1>
         </div>
       );
     }
     ```
     ```javascript
     // Resultado compilado .js
     const MeuComponente = () => {
       return React.createElement(
         "div",
         { className: "container" },
         React.createElement("h1", null, "Olá Mundo")
       );
     }
     ```

2. **Resultado da Build**:
   - Um arquivo `index.html` principal
   - Arquivos `.js` otimizados e minificados
   - Arquivos `.css` processados
   - Assets (imagens, fontes, etc.)

## 2. Arquivos Necessários

Após a build, você terá a seguinte estrutura de arquivos para upload:

```
📁 seu-site/
├── 📄 .htaccess
├── 📄 index.html
├── 📁 assets/
│   ├── 📄 [arquivos JS]
│   ├── 📄 [arquivos CSS]
│   └── 📄 [outros assets]
└── 📁 FOTOS/
    └── 📄 [suas imagens]
```

## 3. Configuração do Apache (.htaccess)

O arquivo `.htaccess` já está configurado com:
- Redirecionamento para SPA (Single Page Application)
- Compressão de arquivos
- Cache otimizado
- URLs amigáveis

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]

# Comprimir arquivos estáticos
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache de navegador
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>
```

## 4. Requisitos do Servidor Apache

O servidor precisa ter os seguintes módulos habilitados:
- `mod_rewrite` (para roteamento)
- `mod_deflate` (para compressão)
- `mod_expires` (para cache)

Para verificar se os módulos estão ativos:
```bash
apache2ctl -M
```

## 5. Processo de Upload

1. Acesse seu servidor via FTP/SFTP
2. Navegue até a pasta raiz do seu domínio
3. Faça upload de todos os arquivos da pasta `dist`
4. Certifique-se de incluir o arquivo `.htaccess`
5. Mantenha a estrutura de pastas original

## 6. Permissões de Arquivos

Configure as permissões corretas:
```bash
# Para arquivos
chmod 644 /caminho/para/seus/arquivos/*.*

# Para diretórios
chmod 755 /caminho/para/seus/diretorios
```

## 7. Checklist Pós-Deploy

- [ ] Verificar se a página inicial carrega corretamente
- [ ] Testar todas as rotas do site
- [ ] Confirmar se as imagens estão carregando
- [ ] Verificar se os links internos funcionam
- [ ] Testar o formulário de contato
- [ ] Verificar se a navegação móvel funciona
- [ ] Confirmar se o SSL está ativo (se aplicável)

## 8. Solução de Problemas

### Página em Branco
- Verificar se o arquivo `.htaccess` está presente
- Confirmar se mod_rewrite está ativo
- Verificar logs do Apache

### Imagens não Carregam
- Confirmar permissões das pastas
- Verificar caminhos relativos
- Confirmar upload da pasta FOTOS

### Erro 404 em Rotas
- Verificar configuração do `.htaccess`
- Confirmar se todas as rotas estão definidas
- Testar redirecionamento do servidor

## 9. Manutenção

Para atualizar o site:
1. Fazer alterações no código
2. Gerar nova build (`npm run build`)
3. Fazer upload apenas dos arquivos modificados
4. Limpar cache do navegador e do servidor

## 10. Observações Importantes

- O servidor Apache não precisa de configuração especial para React/TypeScript
- Todo processamento React/TypeScript acontece durante a build
- O servidor apenas serve arquivos estáticos
- Mantenha backups regulares dos arquivos
- Monitore os logs do servidor para erros

## Suporte

Em caso de problemas:
1. Verificar logs do Apache (`/var/log/apache2/error.log`)
2. Confirmar configurações do servidor
3. Verificar compatibilidade de módulos
4. Consultar documentação do Apache

## Compartilhando o site usando Ngrok (Temporário)

1. Primeiro, instale o Ngrok:
   - Visite https://ngrok.com/download
   - Crie uma conta gratuita
   - Faça o download e instale o Ngrok

2. Adicione o Ngrok ao PATH do Windows:
   - Abra o Menu Iniciar e pesquise por "Variáveis de Ambiente"
   - Clique em "Editar as variáveis de ambiente do sistema"
   - Clique no botão "Variáveis de Ambiente"
   - Na seção "Variáveis do sistema", encontre e selecione "Path"
   - Clique em "Editar"
   - Clique em "Novo"
   - Adicione o caminho onde o Ngrok está instalado (geralmente C:\Users\[SeuUsuário]\AppData\Local\ngrok)
   - Clique "OK" em todas as janelas

3. Após a instalação, autentique sua conta:
   ```bash
   ngrok config add-authtoken SEU_TOKEN_AQUI
   ```

4. Com seu servidor local rodando (por exemplo na porta 5173), execute:
   ```bash
   ngrok http 5173
   ```

4. O Ngrok irá gerar um URL público (algo como https://random-string.ngrok.io)
   que você pode compartilhar com qualquer pessoa.

Observações:
- O URL gerado pelo Ngrok muda cada vez que você reinicia o serviço
- A versão gratuita tem algumas limitações, mas é suficiente para testes
- Mantenha o terminal com o Ngrok rodando enquanto quiser compartilhar o site
