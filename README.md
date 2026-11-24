# Vale Sereno Golf Club

Site institucional em português para um conceito de clube de golfe. Reúne a apresentação do clube, as experiências no campo e orientações para a primeira visita.

## Abrir o site

Extraia o pacote e abra `index.html` no navegador. O projeto usa HTML e CSS, com imagens WebP locais. Pode ser publicado diretamente em uma hospedagem estática. As fontes do Google Fonts carregam com conexão à internet e têm alternativas locais.

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Página inicial, experiências, primeira visita e contato |
| `campo.html`, `jogo.html`, `green.html` | Páginas das experiências |
| `style.css` | Estilos compartilhados e layout responsivo |
| `assets/` | Fotografias ilustrativas |
| `.nojekyll` | Configuração para servir os arquivos estáticos no GitHub Pages |

## Enviar o código ao GitHub

Extraia o ZIP. A pasta extraída deve conter `index.html`, as três páginas de experiências, `style.css`, `assets/`, `.nojekyll` e este README. Mantenha essa estrutura ao enviar os arquivos.

### Pelo navegador

1. Abra o repositório de destino no GitHub. Para um projeto novo, crie um repositório dedicado ao Vale Sereno.
2. Em **Add file → Upload files**, envie os arquivos extraídos e a pasta `assets/`. Em um repositório vazio, use **uploading an existing file**. Confira se `index.html` ficou na raiz.
3. Registre o commit com a mensagem `Adiciona o site Vale Sereno Golf Club`.

### Pelo terminal, para um repositório novo e vazio

Abra o terminal na pasta extraída e substitua `USUARIO/REPOSITORIO` pelo endereço do repositório que você criou no GitHub.

```bash
git init -b main
git add .
git commit -m "Adiciona o site Vale Sereno Golf Club"
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

## Colocar o site no ar com GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
3. Selecione a branch que recebeu os arquivos, normalmente **main**, e a pasta **/(root)**. Clique em **Save**.
4. Acompanhe a publicação em **Actions**. Quando terminar, abra o endereço exibido em **Settings → Pages**.
5. Confira a página inicial, os três cartões, as setas de retorno e o layout no celular.

Se o endereço mostrar uma página 404, confira se o `index.html` está na raiz da branch escolhida e se a execução de publicação em **Actions** terminou com sucesso. Para atualizar o site depois, envie um novo commit à branch configurada.

[Guia oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Ativar os canais de contato

A seção de contato já apresenta os três canais. Para ativá-los, substitua os nomes dentro dos itens da lista `contact-channels` em `index.html` por links para os dados oficiais.

| Canal | Formato |
| --- | --- |
| WhatsApp | `https://wa.me/NUMERO`, com código do país e DDD, usando apenas dígitos |
| Instagram | `https://www.instagram.com/USUARIO/`, sem o símbolo @ |
| Gmail | `mailto:ENDERECO`, com o endereço completo |

Depois de cadastrar os links, remova o parágrafo `contact-note` e teste cada canal.
