# Instalmec Construções e Instalações

Página institucional estática para apresentação dos serviços da Instalmec Construções e Instalações LTDA.

## Escopo

- Página única em HTML, CSS e JavaScript puro.
- Conteúdo institucional reorganizado para engenharia, obras e instalações.
- Formulário de contato via `mailto:` para `SAC@INSTALMEC.COM.BR`.
- Workflow de GitHub Pages em `.github/workflows/pages.yml`.

## Publicação

Após o push na branch `main`, o workflow `Deploy static site to GitHub Pages` publica o conteúdo estático.

URL esperada no GitHub Pages:

```text
https://ejepunk.github.io/instalmec/
```

## Validação local

Abra `index.html` no navegador ou rode um servidor estático:

```bash
python -m http.server 8000
```
