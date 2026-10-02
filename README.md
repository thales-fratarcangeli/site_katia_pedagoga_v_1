# Katia Pedagógica — marketplace de materiais pedagógicos

![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Vitrine de um marketplace de **atividades e PDFs pedagógicos prontos para
imprimir**, alinhados à BNCC, para educação infantil e ensino fundamental.

**🔗 Demo:** https://thales-fratarcangeli.github.io/site_katia_pedagoga_v_1/

## Funcionalidades

- Hero com arte de capa, faixa de confiança e números da loja
- Categorias (alfabetização, matemática, coordenação motora, datas comemorativas...)
- Materiais em destaque com **carrinho** (Context API) e notificações (toast)
- Seções de benefícios, "como funciona", depoimentos e newsletter
- Animações com Framer Motion e temas de cor centralizados

## Stack

React 19 · Vite · Tailwind CSS 4 · Framer Motion · lucide-react · gh-pages

## Estrutura

```
src/
├── components/       Hero, Navbar, Categories, FeaturedMaterials, ProductCard, ...
├── context/          CartContext (estado do carrinho)
├── data/content.js   textos, categorias e produtos de exemplo
└── lib/              animações (motion.js) e temas (themes.js)
```

Todo o conteúdo exibido fica em `src/data/content.js`, separado dos componentes.

## Rodando localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção em dist/
npm run deploy     # build + publicação no GitHub Pages
```
