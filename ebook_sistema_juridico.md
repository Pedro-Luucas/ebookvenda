# Claude Code na Prática: Crie um Sistema Jurídico do Zero

---

## Introdução

Você vai construir, do zero, um sistema de gestão de processos jurídicos para escritórios de advocacia. Ao final deste tutorial, você terá uma aplicação web rodando no seu próprio computador, acessível pelo navegador, capaz de cadastrar processos, controlar prazos com alertas visuais, filtrar e buscar registros, e exibir um painel com a situação geral do escritório.

O sistema foi projetado para advogados, assistentes jurídicos e qualquer pessoa que precise organizar processos de forma prática, sem depender de softwares caros ou sistemas na nuvem. Tudo roda localmente: os dados ficam no seu computador, não em servidores de terceiros, e o sistema funciona mesmo sem conexão com a internet.

A ferramenta que vai construir tudo isso é o Claude Code. Você não precisa saber programar. O Claude Code vai escrever o código, configurar o banco de dados, criar a interface e conectar tudo. Sua função é descrever o que você quer, revisar o resultado e dar continuidade às instruções. Este tutorial mostra exatamente o que dizer em cada etapa.

### O que o sistema faz

Ao final do tutorial, o sistema vai permitir:

- Cadastrar processos com número, cliente, tipo de ação, tribunal, vara, status, última movimentação, próxima ação, data do prazo e advogado responsável.
- Visualizar um painel com o total de processos ativos, distribuição por status e lista de prazos ordenada por urgência.
- Receber alertas visuais automáticos quando um prazo estiver a 7 dias, 3 dias ou 1 dia de distância.
- Buscar processos por nome do cliente, filtrar por status e por responsável, e ordenar por prazo.
- Criar, editar, visualizar e excluir qualquer processo.

### O que está fora do escopo

Este tutorial não cobre autenticação com senha e controle de acesso por usuário, envio de notificações por e-mail ou SMS, publicação do sistema na internet, integração com sistemas de tribunais ou consulta de andamentos processuais automática, e evoluções futuras como relatórios em PDF ou histórico de movimentações.

Essas funcionalidades são possíveis, mas estão além do objetivo deste tutorial. O foco é construir um sistema funcional, estável e útil no menor tempo possível.

### Pré-requisito

Este tutorial assume que você já tem o Claude Code instalado no seu computador e sabe o básico de como usá-lo: abrir o terminal, navegar até uma pasta e dar instruções em linguagem natural. Se você ainda não instalou o Claude Code, consulte a documentação oficial antes de continuar.

---

## Capítulo 1: Preparando o Projeto

### Criando a pasta do projeto

O primeiro passo é criar uma pasta dedicada para o sistema. Essa pasta vai conter todos os arquivos do projeto: o código, o banco de dados, as configurações e tudo mais que o Claude Code vai gerar.

Abra o terminal do seu computador. No Windows, você pode usar o PowerShell ou o Prompt de Comando. No Mac, use o Terminal. Navegue até o local onde você quer criar o projeto, por exemplo, a pasta Documentos, e crie uma nova pasta com o nome que preferir. Um nome simples e sem espaços funciona melhor:

```
mkdir sistema-juridico
cd sistema-juridico
```

O primeiro comando cria a pasta. O segundo entra nela. A partir daqui, todos os comandos e instruções ao Claude Code serão executados dentro dessa pasta.

### Iniciando o Claude Code

Com o terminal aberto dentro da pasta `sistema-juridico`, inicie o Claude Code:

```
claude
```

O Claude Code vai iniciar e mostrar um prompt aguardando sua instrução. Antes de dar qualquer instrução de desenvolvimento, você vai criar o arquivo mais importante do projeto.

### O arquivo CLAUDE.md: por que ele é o passo mais importante

O CLAUDE.md é um arquivo de texto que fica na raiz do projeto e serve como memória permanente do Claude Code. Toda vez que você abre o Claude Code dentro de uma pasta que contém esse arquivo, ele lê o conteúdo automaticamente e usa as informações para entender o contexto do projeto.

Sem o CLAUDE.md, o Claude Code começa cada sessão sem saber nada sobre o que você está construindo. Com ele, o Claude Code sabe o objetivo do sistema, a stack técnica escolhida, as convenções que devem ser seguidas e as decisões já tomadas. Isso evita que ele tome decisões inconsistentes, use tecnologias erradas ou precise de explicações repetidas a cada sessão.

Pense no CLAUDE.md como um briefing que você daria a um desenvolvedor novo no primeiro dia de trabalho. Quanto mais claro e completo for esse briefing, melhor será o trabalho entregue.

### O que escrever no CLAUDE.md

Um bom CLAUDE.md para este projeto deve conter:

- Uma descrição clara do que o sistema faz e para quem serve.
- A stack técnica: quais tecnologias serão usadas e por quê.
- A estrutura de pastas esperada.
- As regras de interface: idioma, estilo visual, comportamentos esperados.
- As entidades principais do sistema e seus campos.
- Restrições importantes: o que o sistema não deve fazer.

Abaixo está o conteúdo exato que você deve usar para o CLAUDE.md deste projeto. Crie o arquivo manualmente com um editor de texto simples (como o Bloco de Notas no Windows ou o TextEdit no Mac) ou peça ao Claude Code para criá-lo com o conteúdo abaixo:

```
# Sistema de Gestão de Processos Jurídicos

## Descrição
Aplicação web local para gestão de processos jurídicos em escritórios de advocacia.
Roda no computador do usuário via localhost. Sem autenticação, sem deploy externo.
Toda a interface deve estar em português brasileiro.

## Stack
- Next.js com App Router e TypeScript
- Tailwind CSS para estilização
- Zustand para estado global
- SQLite como banco de dados local (arquivo .db na raiz do projeto)
- API routes do próprio Next.js para comunicação com o banco

## Estrutura de pastas
- /app: páginas e rotas da aplicação
- /app/api: rotas de API (backend)
- /app/components: componentes reutilizáveis
- /app/store: stores do Zustand
- /app/types: tipos TypeScript
- /app/lib: utilitários e conexão com o banco

## Entidade principal: Processo
Campos: id, numero_processo, nome_cliente, tipo_acao, tribunal, vara,
status (em_andamento | concluido | suspenso), ultima_movimentacao,
proxima_acao, data_prazo (ISO 8601), advogado_responsavel, criado_em, atualizado_em

## Regras de negócio
- Alertas de prazo: vermelho se prazo <= 1 dia, laranja se <= 3 dias, amarelo se <= 7 dias
- Dashboard mostra processos ordenados por data_prazo crescente
- Busca por nome_cliente é case-insensitive
- Preços e valores monetários não se aplicam a este sistema

## Convenções
- Componentes client-side usam "use client" no topo
- Server Components são o padrão
- Sem comentários desnecessários no código
- Sem autenticação nesta versão
```

### Dando a primeira instrução

Com o CLAUDE.md criado, você está pronto para iniciar o desenvolvimento. A primeira instrução ao Claude Code deve pedir a criação da estrutura base do projeto. Diga exatamente isto:

```
Leia o CLAUDE.md e crie a estrutura inicial do projeto Next.js com App Router,
TypeScript e Tailwind CSS. Configure o package.json com todas as dependências
necessárias: next, react, typescript, tailwindcss, zustand, better-sqlite3
e @types/better-sqlite3. Crie as pastas /app/api, /app/components, /app/store,
/app/types e /app/lib. Não crie nenhuma página ainda, apenas a estrutura base.
```

O Claude Code vai criar os arquivos de configuração, instalar as dependências e preparar o projeto. Esse processo pode levar alguns minutos. Aguarde até ele terminar antes de continuar.

---

## Capítulo 2: Skills que Você Vai Precisar

### O que são skills e por que elas importam

Skills são extensões do Claude Code que adicionam comportamentos especializados para tarefas específicas. Quando você aciona uma skill, o Claude Code passa a seguir um conjunto de instruções otimizadas para aquele tipo de trabalho, como criar interfaces visuais, estruturar projetos Next.js ou depurar erros.

Sem skills, o Claude Code funciona como um assistente generalista. Com as skills certas ativadas, ele age como um especialista na área. Para um projeto como este, que envolve interface visual, estrutura de projeto específica e depuração de erros, as skills fazem diferença real na qualidade do resultado.

### As skills recomendadas para este projeto

#### frontend-design

Esta skill instrui o Claude Code a criar interfaces visuais com qualidade profissional: layouts bem proporcionados, hierarquia visual clara, uso correto de cores e tipografia, e componentes que parecem ter sido feitos por um designer. Sem ela, o Claude Code tende a criar interfaces funcionais mas visualmente genéricas.

Para este projeto, a skill frontend-design é especialmente importante no capítulo 6, quando você vai criar o dashboard, a tabela de processos e os formulários.

Para instalar:

```
/install-skill frontend-design
```

#### react-nextjs-development

Esta skill especializa o Claude Code em projetos React e Next.js com App Router. Ela garante que o código gerado siga as convenções corretas do Next.js 14 e versões posteriores: uso adequado de Server Components e Client Components, estrutura correta de rotas, padrões de busca de dados e configuração de metadados.

Sem essa skill, o Claude Code pode gerar código Next.js que funciona mas usa padrões antigos ou mistura abordagens incompatíveis.

Para instalar:

```
/install-skill react-nextjs-development
```

#### testing-debugging

Esta skill transforma o Claude Code em um depurador sistemático. Quando algo não funciona, ela instrui o Claude Code a observar o erro com cuidado, formular hipóteses sobre a causa, testar cada hipótese de forma isolada e aplicar a correção apenas quando a causa for confirmada.

Você vai usar esta skill sempre que aparecer uma mensagem de erro no terminal ou no navegador. Ela é especialmente útil nos capítulos 5 e 9, quando as rotas de API e o sistema completo são testados pela primeira vez.

Para instalar:

```
/install-skill testing-debugging
```

#### simplify

Esta skill revisa o código gerado e remove complexidade desnecessária. Ela identifica duplicações, abstrações prematuras e código que poderia ser mais direto, e propõe versões mais simples. Para um projeto que será mantido por uma pessoa sem conhecimento de programação, código simples é código sustentável.

Use esta skill ao final de cada capítulo, depois que uma funcionalidade estiver funcionando, para garantir que o código não acumulou complexidade desnecessária.

Para instalar:

```
/install-skill simplify
```

#### typescript-expert

Esta skill garante que o TypeScript seja usado de forma correta e consistente. TypeScript é uma camada de verificação de tipos que ajuda a evitar erros antes mesmo de rodar o código. Sem essa skill, o Claude Code pode gerar código TypeScript que funciona mas ignora os benefícios da verificação de tipos.

Para instalar:

```
/install-skill typescript-expert
```

### Como instalar as skills

As skills são instaladas com o comando `/install-skill` seguido do nome da skill, diretamente no prompt do Claude Code. Você pode instalar todas de uma vez antes de começar o desenvolvimento:

```
/install-skill frontend-design
/install-skill react-nextjs-development
/install-skill testing-debugging
/install-skill simplify
/install-skill typescript-expert
```

Após a instalação, as skills ficam disponíveis para uso. Para acionar uma skill específica durante o desenvolvimento, use o comando `/` seguido do nome da skill antes de dar a instrução. Por exemplo:

```
/frontend-design Crie o componente de dashboard com cards de resumo e tabela de prazos.
```

### Quando acionar cada skill

Use `react-nextjs-development` ao criar páginas, rotas e componentes estruturais. Use `frontend-design` ao criar ou ajustar qualquer elemento visual. Use `testing-debugging` quando aparecer um erro que você não consegue descrever com clareza. Use `simplify` depois que uma funcionalidade estiver completa e funcionando. Use `typescript-expert` se o Claude Code reportar erros de tipo que ele mesmo não consegue resolver.

### Uma palavra sobre MCP

MCP é a sigla para Model Context Protocol, um sistema que permite ao Claude Code se conectar a ferramentas e serviços externos. Com o MCP, seria possível, por exemplo, integrar o sistema de prazos com o Google Calendar para que os prazos aparecessem automaticamente na agenda do advogado, ou conectar o sistema a uma API de consulta de andamentos processuais.

Essas integrações são tecnicamente viáveis, mas estão fora do escopo deste tutorial. O objetivo aqui é construir um sistema funcional e estável sem dependências externas. Se você quiser explorar o MCP depois de concluir este tutorial, a documentação oficial do Claude Code tem um guia dedicado ao tema.

---

## Capítulo 3: Estrutura do Projeto e Banco de Dados

### Pedindo ao Claude Code para criar a estrutura de pastas

Com o projeto base criado no capítulo anterior, o próximo passo é organizar as pastas internas e configurar o banco de dados. A estrutura de pastas de um projeto Next.js segue uma lógica específica, e o Claude Code precisa criá-la de forma consistente para que tudo funcione junto.

Dê esta instrução ao Claude Code:

```
Crie a estrutura completa de pastas do projeto conforme o CLAUDE.md:
/app/api com subpastas para cada rota (processos),
/app/components para componentes reutilizáveis,
/app/store para as stores do Zustand,
/app/types para os tipos TypeScript,
/app/lib para utilitários e a conexão com o banco de dados.
Crie também um arquivo /app/types/processo.ts com a interface TypeScript
completa do tipo Processo, usando os campos definidos no CLAUDE.md.
```

O Claude Code vai criar as pastas e o arquivo de tipos. Você não precisa entender o conteúdo do arquivo de tipos agora. O importante é que ele exista e contenha a definição correta dos campos de um processo.

### A estrutura esperada

Após essa instrução, a estrutura do projeto deve se parecer com isto:

```
sistema-juridico/
  app/
    api/
      processos/
        route.ts
        [id]/
          route.ts
    components/
    store/
    types/
      processo.ts
    lib/
      db.ts
  public/
  package.json
  next.config.ts
  tailwind.config.ts
  CLAUDE.md
```

Se alguma pasta estiver faltando, peça ao Claude Code para criá-la explicitamente.

### O que é o SQLite, explicado de forma simples

SQLite é um banco de dados que funciona como um único arquivo no seu computador. Diferente de bancos de dados tradicionais, que precisam de um servidor rodando em segundo plano, o SQLite é apenas um arquivo com extensão `.db`. Quando o sistema precisa salvar ou buscar dados, ele abre esse arquivo, faz a operação e fecha. Simples assim.

Para este projeto, o arquivo do banco vai se chamar `juridico.db` e ficará na raiz do projeto. Você pode copiá-lo para um pendrive ou para o Google Drive como backup, exatamente como faria com qualquer outro arquivo.

A biblioteca que vai permitir ao Next.js ler e escrever nesse arquivo se chama `better-sqlite3`. Ela já foi incluída nas dependências no capítulo 1.

### Configurando o banco de dados

Peça ao Claude Code para criar a conexão com o banco e as tabelas necessárias:

```
Crie o arquivo /app/lib/db.ts com a conexão SQLite usando better-sqlite3.
O arquivo do banco deve ser juridico.db na raiz do projeto.
Crie a tabela processos com os seguintes campos:
id INTEGER PRIMARY KEY AUTOINCREMENT,
numero_processo TEXT NOT NULL,
nome_cliente TEXT NOT NULL,
tipo_acao TEXT NOT NULL,
tribunal TEXT,
vara TEXT,
status TEXT NOT NULL DEFAULT 'em_andamento',
ultima_movimentacao TEXT,
proxima_acao TEXT,
data_prazo TEXT,
advogado_responsavel TEXT,
criado_em TEXT NOT NULL DEFAULT (datetime('now')),
atualizado_em TEXT NOT NULL DEFAULT (datetime('now')).
Adicione também uma função initDb() que cria a tabela se ela não existir,
e exporte a instância do banco para uso nas rotas de API.
```

O Claude Code vai criar o arquivo `db.ts` com toda a lógica de conexão e criação da tabela. Ele também vai garantir que a tabela seja criada automaticamente na primeira vez que o sistema for iniciado.

### Como verificar se o banco foi criado corretamente

Você não precisa entender SQL para verificar se o banco está funcionando. Depois de rodar o sistema pela primeira vez (o que faremos no capítulo 9), o arquivo `juridico.db` vai aparecer na raiz do projeto. A presença desse arquivo já confirma que o banco foi criado.

Se quiser inspecionar o conteúdo do banco visualmente, existe um programa gratuito chamado DB Browser for SQLite, disponível em sqlitebrowser.org. Ele permite abrir o arquivo `.db` e ver as tabelas e os dados como se fosse uma planilha. Não é obrigatório para este tutorial, mas pode ser útil para confirmar que os dados estão sendo salvos corretamente.

### Onde fica o arquivo e como fazer backup

O arquivo `juridico.db` fica em:

```
sistema-juridico/juridico.db
```

Para fazer backup, basta copiar esse arquivo para outro local. Você pode automatizar isso copiando o arquivo para uma pasta sincronizada com o Google Drive ou OneDrive. Enquanto o sistema não estiver rodando, o arquivo pode ser copiado sem risco de corrupção.

Nunca delete o arquivo `juridico.db` sem ter um backup. Todos os processos cadastrados estão nele.

---

## Capítulo 4: Configurando o Estado Global com Zustand

### O que é estado global, em linguagem simples

Imagine que você tem uma lista de processos exibida na tela principal. Quando você edita um processo, essa lista precisa ser atualizada automaticamente, sem precisar recarregar a página. Para isso funcionar, a lista de processos precisa estar em um lugar que todos os componentes da tela possam acessar e atualizar.

Esse lugar é chamado de estado global. É como uma memória compartilhada que qualquer parte da interface pode ler ou modificar. Sem estado global, cada componente teria sua própria cópia dos dados, e manter tudo sincronizado seria complicado e propenso a erros.

### O que é o Zustand

Zustand é uma biblioteca que cria e gerencia esse estado global de forma simples. O nome vem do alemão e significa "estado". Ela foi escolhida para este projeto porque é direta: você define o que quer guardar e as ações para modificar esses dados, e ela cuida do resto.

Comparado a alternativas mais complexas, o Zustand exige menos código e é mais fácil de entender, mesmo sem saber programar. O Claude Code vai escrever toda a configuração, mas é útil saber o que está sendo criado.

### Pedindo ao Claude Code para criar a store

A store é o arquivo onde o estado global é definido. Para este projeto, a store principal vai guardar a lista de processos e as funções para criar, editar e deletar processos.

Dê esta instrução ao Claude Code:

```
Crie o arquivo /app/store/processos.ts com uma store Zustand para gerenciar
os processos. A store deve conter:
- estado: lista de processos (array do tipo Processo), processo selecionado,
  estado de carregamento (loading) e mensagem de erro.
- acoes: fetchProcessos (busca todos do banco via API), createProcesso,
  updateProcesso, deleteProcesso, setProcessoSelecionado e clearError.
Todas as acoes que modificam dados devem chamar a API correspondente
e depois atualizar o estado local.
Use o tipo Processo definido em /app/types/processo.ts.
```

### O que a store deve conter

Após essa instrução, a store vai ter:

- Uma lista com todos os processos carregados do banco de dados.
- Um processo selecionado, usado quando o usuário clica em um processo para ver os detalhes ou editar.
- Um indicador de carregamento, para mostrar um spinner enquanto os dados são buscados.
- Uma mensagem de erro, para exibir quando algo der errado.
- Funções para cada operação: buscar todos, criar, editar e deletar.

### Como verificar se a store foi criada corretamente

Peça ao Claude Code para verificar:

```
Verifique se a store em /app/store/processos.ts esta correta:
os tipos batem com /app/types/processo.ts, as acoes chamam as rotas
de API corretas e o estado inicial esta definido.
```

Se houver inconsistências, o Claude Code vai identificá-las e corrigi-las. Você não precisa ler o código para fazer essa verificação: basta pedir ao Claude Code que faça isso por você.

---

## Capítulo 5: Criando as Rotas de API

### O que são rotas de API, em linguagem simples

Pense no sistema como tendo duas partes: a tela que você vê no navegador (chamada de frontend) e o lugar onde os dados são guardados e processados (chamado de backend). As rotas de API são a ponte entre essas duas partes.

Quando você clica em "Salvar" ao criar um processo, a tela envia uma mensagem para uma rota de API dizendo "salve estes dados". A rota recebe a mensagem, verifica se está tudo certo, salva no banco de dados e responde "salvo com sucesso". A tela então atualiza o que está sendo exibido.

No Next.js com App Router, as rotas de API são arquivos dentro da pasta `/app/api`. Cada arquivo representa um endereço que a tela pode chamar. Esse endereço é chamado de endpoint.

### As rotas que o sistema precisa

O sistema precisa das seguintes rotas, explicadas em linguagem simples:

**Listar todos os processos**: quando a tela de lista ou o dashboard carrega, ela pede ao banco todos os processos. Essa rota aceita filtros opcionais: busca por nome do cliente, filtro por status, filtro por responsável e ordenação por prazo.

**Criar processo**: quando o usuário preenche o formulário e clica em "Salvar", essa rota recebe os dados e os insere no banco.

**Buscar um processo específico**: quando o usuário clica em um processo para ver os detalhes, essa rota retorna os dados daquele processo pelo seu ID.

**Editar processo**: quando o usuário edita um processo e salva, essa rota recebe os dados atualizados e os grava no banco.

**Deletar processo**: quando o usuário confirma a exclusão de um processo, essa rota remove o registro do banco.

### Criando as rotas

Dê esta instrução ao Claude Code:

```
Crie as rotas de API para o sistema de processos:

1. /app/api/processos/route.ts com:
   - GET: lista todos os processos, aceita query params:
     busca (filtra por nome_cliente, case-insensitive),
     status (filtra por status exato),
     responsavel (filtra por advogado_responsavel),
     ordenar=prazo (ordena por data_prazo crescente)
   - POST: cria um novo processo, valida campos obrigatorios:
     numero_processo, nome_cliente, tipo_acao, status

2. /app/api/processos/[id]/route.ts com:
   - GET: retorna um processo pelo id
   - PUT: atualiza um processo pelo id, atualiza atualizado_em automaticamente
   - DELETE: remove um processo pelo id

Todas as rotas devem usar a conexao do banco em /app/lib/db.ts.
Retorne JSON em todas as respostas.
Em caso de erro, retorne status HTTP adequado com mensagem descritiva.
Use a funcao initDb() antes de qualquer operacao com o banco.
```

### Como testar se as rotas estão funcionando

Antes de criar a interface, vale confirmar que as rotas estão respondendo corretamente. Você pode fazer isso de duas formas.

A primeira é usando o próprio navegador: com o sistema rodando (`npm run dev`), acesse `http://localhost:3000/api/processos` no navegador. Se a rota estiver funcionando, você vai ver uma resposta em formato JSON, provavelmente uma lista vazia `[]` se ainda não houver processos cadastrados.

A segunda forma é usando a skill testing-debugging para uma verificação mais completa:

```
/testing-debugging Verifique se as rotas de API em /app/api/processos estao
funcionando corretamente. Teste GET, POST, PUT e DELETE com dados de exemplo.
Identifique e corrija qualquer erro encontrado.
```

### Erros comuns nesta etapa

O erro mais comum é a rota não encontrar o arquivo do banco de dados. Isso acontece quando o caminho para o arquivo `juridico.db` está incorreto. Se isso ocorrer, peça ao Claude Code:

```
A rota de API esta retornando erro ao tentar acessar o banco de dados.
Verifique o caminho do arquivo juridico.db em /app/lib/db.ts e corrija
para usar o caminho absoluto baseado em process.cwd().
```

Outro erro comum é o TypeScript reclamar de tipos incompatíveis entre o que o banco retorna e o que a interface espera. Nesses casos, acione a skill typescript-expert:

```
/typescript-expert Corrija os erros de tipo nas rotas de API em /app/api/processos.
O banco retorna dados como Record<string, unknown> mas a interface espera o tipo Processo.
```

Um terceiro erro frequente é o Next.js não conseguir usar o `better-sqlite3` porque essa biblioteca usa código nativo do sistema operacional. Se isso acontecer:

```
O Next.js esta retornando erro ao importar better-sqlite3.
Configure o next.config.ts para tratar better-sqlite3 como modulo externo
usando serverExternalPackages.
```
