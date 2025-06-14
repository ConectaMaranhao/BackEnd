# Conecta Maranhão

<h1 align="center">Como baixar e rodar um projeto Node.js do GitHub</h1>

---

<p align="center">Este guia rápido te ajudará a colocar um projeto Node.js para funcionar na sua máquina, desde a clonagem do repositório até a instalação das dependências.</p>

---

<h2>1. Pré-requisitos</h2>
<p>Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:</p>
<ul>
    <li>
        <strong>Git</strong>: Essencial para clonar o repositório do GitHub.
        Se ainda não tem, baixe em <a href="https://git-scm.com/downloads" target="_blank">git-scm.com</a>.
    </li>
    <li>
        <strong>Node.js e npm (ou Yarn)</strong>: O Node.js já vem com o npm (Node Package Manager).
        Caso prefira, você pode instalar o Yarn separadamente. Baixe o Node.js em <a href="https://nodejs.org/en/" target="_blank">nodejs.org</a>.
    </li>
</ul>

---

<h2>2. Clonar o Repositório do GitHub</h2>
<p>O primeiro passo é obter o código do projeto para a sua máquina.</p>
<ol>
    <li>
        <strong>Vá até a página do repositório no GitHub.</strong>
    </li>
    <li>
        Procure pelo botão <strong>"Code"</strong> (Código) e clique nele.
    </li>
    <li>
        Você verá algumas opções para clonar o repositório. A mais comum é usar HTTPS. Copie a URL (deve ser algo como <code>https://github.com/usuario/nome-do-projeto.git</code>).
        <br>
        <p align="center">Exemplo:</p>
        <p align="center"><img src="https://i.imgur.com/your-github-clone-button-screenshot.png" alt="Exemplo do botão Code no GitHub"></p>
        </li>
    <li>
        <strong>Abra seu terminal ou prompt de comando.</strong>
    </li>
    <li>
        Navegue até o diretório onde você quer salvar o projeto (ex: <code>cd C:\Users\SeuUsuario\Projetos</code>).
    </li>
    <li>
        Execute o comando <code>git clone</code> seguido da URL que você copiou:
        <pre><code>git clone https://github.com/usuario/nome-do-projeto.git</code></pre>
        <p>Isso vai criar uma nova pasta com o nome do projeto (ex: <code>nome-do-projeto</code>) e baixar todo o código para ela.</p>
    </li>
</ol>

---

<h2>3. Navegar até o Diretório do Projeto</h2>
<p>Depois de clonar, você precisa entrar na pasta do projeto no seu terminal:</p>
<pre><code>cd nome-do-projeto</code></pre>

---

<h2>4. Instalar as Dependências</h2>
<p>Agora que você está dentro da pasta do projeto, pode instalar todas as dependências listadas no arquivo <code>package.json</code>.</p>
<ul>
    <li>
        <strong>Usando npm (mais comum):</strong>
        <pre><code>npm install</code></pre>
        <p>Este comando vai ler o arquivo <code>package.json</code> e baixar todas as dependências listadas em <code>dependencies</code> e <code>devDependencies</code> para a pasta <code>node_modules</code> dentro do seu projeto.</p>
    </li>
    <li>
        <strong>Usando Yarn (se o projeto ou você preferir):</strong>
        <pre><code>yarn install</code></pre>
        <p>O Yarn funciona de forma similar ao npm para instalar dependências.</p>
    </li>
</ul>

---

<h2>5. Rodar o Projeto (Opcional, mas comum)</h2>
<p>Depois que todas as dependências estiverem instaladas, você pode querer rodar o projeto. A maioria dos projetos Node.js tem scripts definidos no <code>package.json</code> para iniciar o servidor, executar testes, etc.</p>
<ul>
    <li>
        Para ver os scripts disponíveis, você pode olhar o arquivo <code>package.json</code> ou simplesmente tentar:
        <pre><code>npm run dev</code></pre>
        <p>ou</p>
        <pre><code>npm start</code></pre>
        <p>O nome do script (<code>dev</code>, <code>start</code>, <code>build</code>, etc.) varia de projeto para projeto. Consulte a documentação específica do projeto, se houver, para saber como iniciá-lo.</p>
    </li>
</ul>
