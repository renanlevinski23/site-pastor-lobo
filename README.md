# pastorlobo.com — site estático

Site oficial do Pr. Oswaldo Lôbo. HTML + CSS + JS puros, sem WordPress e sem build: o que está aqui é exatamente o que vai ao ar. Publicado pelo **GitHub Pages** (branch `main`, pasta raiz). O domínio está no arquivo `CNAME`.

## Estrutura

```
index.html                         → página inicial
exodus-academy/                    → página de vendas da assinatura (Premium / Master)
libertacao-e-cura-da-alma/         → página de vendas do curso
libertacao-financeira/             → página de vendas do curso
curso-quebrando-pactos-de-alma/    → página de vendas do curso
o-que-deseja-fazer/                → escolha: comprar / plataforma nova / antiga / migrar
links/                             → "link na bio"
jornada-de-*/                      → páginas dos eventos ao vivo (grupo do WhatsApp)
404.html                           → página de erro
assets/css/site.css                → todo o visual (cores no topo, em :root)
assets/js/site.js                  → menu mobile, carrossel, vídeos, animações
assets/img/                        → imagens organizadas por pasta
```

As URLs são as mesmas do site antigo em WordPress, então links de anúncios, bio e e-mails continuam funcionando.

## Alterações comuns

| Quero… | Onde |
|---|---|
| Trocar/adicionar banner da home | `assets/img/banners/` (1920×700, .webp) + bloco `<section class="slider">` no `index.html` |
| Mudar preço ou link da Hotmart | bloco `id="compre"` (cursos) ou `id="planos"` (academy) da página |
| Adicionar livro | copiar um `<article class="book">` no `index.html` e a capa em `assets/img/livros/` |
| Adicionar curso na grade | copiar um `<a class="course-card">` e a capa (720×1040) em `assets/img/cursos/` |
| Mudar cores | variáveis no topo de `assets/css/site.css` |

## Rastreamento

Google Tag Manager `GTM-KTB6PNJ8` está em todas as páginas (o mesmo do site antigo).

---
Desenvolvido por [Agência OGS](https://agenciaogs.com.br/).
