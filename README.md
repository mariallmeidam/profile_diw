# Site Pessoal Responsivo - README

## Introdução

Neste trabalho, foi criado um site pessoal com duas telas distintas: a Tela Principal (`index.html`) e a Tela de Detalhes do Repositório (`repo.html`). Ambas as telas foram projetadas seguindo um layout predefinido, conforme especificações fornecidas.

## Detalhamento do Escopo

### Tela Principal (`index.html`)

-  **Cabeçalho:** Apresenta o nome do proprietário do site e um menu de seções do site.
-  **Seção 1 - Perfil do GitHub:** Apresenta informações sobre o perfil do aluno no GitHub, incluindo foto/avatar, nome, sobrenome, descrição e botões de contato.
-  **Seção 2 - Repositórios:** Exibe um grupo de cards com informações sobre os repositórios mantidos pelo aluno no GitHub.
-  **Seção 3 - Carrossel/Slider:** Mostra um carrossel/slider com conteúdos sugeridos pelo aluno, como artigos, vídeos, etc.
-  **Seção 4 - Colegas de Trabalho:** Apresenta uma grade com os principais colegas de trabalho no curso.
-  **Rodapé:** Contém informações sobre o responsável pelo site (aluno/aluna).

![image](https://github.com/marialmeida1/profile_diw/assets/97293831/994198ec-451b-4b4d-a397-f90c31c6135f)


### Tela de Detalhes do Repositório (`repo.html`)

-  **Cabeçalho:** Apresenta informações gerais sobre um repositório específico, incluindo descrição, data de criação, proprietário com imagem/avatar, URL de acesso, linguagem principal.

![image](https://github.com/marialmeida1/profile_diw/assets/97293831/f396f524-db30-4029-b5bf-43d26d128b32)

## Uso da API do GitHub

Utilizei a API do GitHub para integrar dados dinâmicos ao meu site. Através dela, obtive informações detalhadas do meu perfil, incluindo meu nome, descrição, e avatar. Além disso, utilizei a API para listar meus repositórios hospedados, exibindo detalhes como nome, descrição, linguagem principal e data de criação de cada um. Isso permite que o conteúdo do site esteja sempre atualizado com as informações mais recentes do meu GitHub.

## Uso do JSON-SERVER

Utilizei o JSON-SERVER para armazenar e servir dados dinâmicos para o meu site. Ele armazena as seguintes informações:

-  **`content`**: Dados dos slides apresentados no site, incluindo textos e descrições.
-  **`image_content`**: URLs e informações das imagens utilizadas nos slides do site.
-  **`coworkers`**: Detalhes sobre meus colegas de trabalho, como nome, cargo e fotos.

Essa configuração permite que o site acesse e exiba essas informações de maneira eficiente, garantindo que os conteúdos dos slides e os dados dos colegas de trabalho estejam sempre acessíveis e atualizados.

## Autor

Este projeto foi desenvolvido por Mariana Almeida.
