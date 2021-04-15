# Gridsome Tailwindcss Landing Page
A página foi feita utilizando principalmente [Gridsome](https://gridsome.org/docs/)(um framework VueJS que gera páginas estáticas) e [TailwindCSS](https://tailwindcss.com/docs)(um framework CSS utility-first). Além disso foi feita a configuração para a utilização do [ForestryCMS](https://forestry.io/).

Para completa compreensão do código recomenda-se a leitura da documentação de ambos, de toda forma os principais tópicos serão explicados neste arquivo.

## Imagens
Modo Normal             |  Modo Dark
:-------------------------:|:-------------------------:
![](./.README/white.png) |  ![](./.README/dark.png)

## Ambiente de Desenvolvimento
1. Instale o [NodeJS](https://nodejs.org/en/) e [Yarn](https://classic.yarnpkg.com/en/docs/install)
2. Na pasta do projeto execute `yarn install`
3. Finalizando o download dos pacotes execute `yarn run develop`
4. Acesse pelo navegador: http://localhost:8080

## Estrutura de Pastas e Arquivos Importantes
 - `/content` contém todo o conteúdo facilmente editável do blog, como arquivos markdown dos posts e perfis além do arquivo `external_links.json` com links externos de redes sociais, agendamento, etc.
 - `/src` onde fica o código em si, componentes, layouts, etc.
    - `/assets` localização das imagens das páginas, logos e de alguns estilos do TailwindCSS
    - `/components` localização dos componentes reutilizáveis das páginas. A pasta mais importante é a de `partials` na qual reside as seções da home do site.
    - `/layouts` estrutura layout principal da página como barra de navegação e rodapé.
    - `/pages` localização da página principal, blog e de erro 404.
    - `/templates` páginas que são geradas dinamicamente como a de posts, perfis e de tags
  - `/static` logo em png para favicon e metadata
  - `gridsome.config.js` arquivo de configuração principal do Gridsome, no qual todos os plugins são configurados, além de informações principais da página, como nome do site, descrição, etc.
  - `tailwind.conf.js` arquivo de configuração principal do TailwindCSS, no qual são determinadas cores e fontes.

## Adições possíveis

### Apoiadores
1. Adicione a logo do apoiador na pasta `/src/assets/images/home/`
2. A logo preferencialmente deve ter 350x144px no formato .webp
3. Abra o arquivo `/src/components/Partials/AppSupporters.vue`
4. Adicione no final o nome da empresa e da imagem
    ```javascript
      data() {
      return {
        supporters: [
          ...
          {
            name: 'Lorem',
            image: 'logo_lorem_ipsum.webp'
          },
          ...
        ]
      }
    }
    ```

### Serviços
1. Acesse a página a seguir para escolher um ícone: [link](https://vue-feather-icons.egoist.sh/)
2. Ao clicar no ícone desejado copie as instruções que aparecerem. Utilizarei para demonstração o GlobeIcon
3. Abra o `/src/components/Partials/AppServices.vue`
4. Adicione o serviço com o nome, texto e ícone desejados:
    ```html
    <ServiceItem
      title="Lorem Ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis quis augue felis"
    >
      <globe-icon size="1.5x" class="text-white"></globe-icon>
    </ServiceItem>
    ```

5. No final da página importe o ícone:
    ```javascript
    import { ... GlobeIcon, ... } from 'vue-feather-icons'
    ```
    
6. Adicione aos componentes:
    ```javascript
    components: {
      ...
      GlobeIcon,
      ...
    }
    ```

### Valores
1. Acesse a página a seguir para escolher um ícone: [link](https://vue-feather-icons.egoist.sh/)
2. Ao clicar no ícone desejado copie as instruções que aparecerem. Utilizarei para demonstração o UsersIcon
3. Abra o `/src/components/Partials/AppValues.vue`
4. Adicione o valor com o nome e ícone desejados:
    ```html
    <ValueCard
      title="Lorem Ipsum"
      :colors="['bg-white', 'dark:bg-gray-800']"
    >
      <users-icon size="2x" class="text-blue-500"></users-icon>
    </ValueCard>
    ```

5. No final da página importe o ícone:
    ```javascript
    import { ... UsersIcon, ... } from 'vue-feather-icons'
    ```
    
6. Adicione aos componentes:
    ```javascript
    components: {
      ...
      UsersIcon,
      ...
    }
    ```
  
### Links externos
1. Edite o arquivo `/content/external_links.json` fazendo as mudanças desejadas

### Perfil do Blog
1. Escolha uma imagem de perfil
2. Coloque a mesma na pasta `/content/uploads`
3. Crie um arquivo na pasta `/contents/profiles/` seguindo o título: id_do_autor.md
4. Edite o arquivo fazendo as alterações correspondentes:
    ```markdown
    ---
    id: "lorem"
    name: "Lorem Ipsum"
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    social: "https://www.linkedin.com/"
    image: "./../uploads/profile.jpeg"
    ---
    ```

### Post do Blog
1. Escolha uma imagem nem tão grande e nem tão pequena, o site [Unsplash](https://unsplash.com/) é recomendado e todas as imagens são gratuitas
2. Coloque a mesma na pasta `/content/uploads`
3. Crie um arquivo na pasta `/contents/posts/` seguindo o título: YYYY-MM-DD-title.md
4. Edite o arquivo fazendo as alterações correspondentes:
    ```markdown
    ---
    date: "2021-04-01"
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    image:
      path: "./../uploads/blue_flowers.jpg"
      alt: "flowers"
    author: "lorem"
    tags: ["tag1", "tag2", "tag3"]
    ---

    # Lorem Ipsum
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue felis. In in commodo est, ut aliquam est. Aenean iaculis tempus magna vitae convallis. Duis lacinia leo vitae egestas blandit. Mauris id dolor in erat imperdiet vestibulum ac vel arcu. Nullam dignissim, nisi in porttitor viverra, tortor magna accumsan ante, vitae placerat leo enim ut sapien...
    ```

5. Atente-se para o author, o id dele precisa existir antes de ser usado
6. Todo o conteúdo é escrito em Markdown, se voce nunca ouviu falar nesse formato, acesse o [link](https://www.markdownguide.org/cheat-sheet/) para instruções.
