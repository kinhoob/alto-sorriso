# Alto Sorriso — Site institucional

HTML, CSS e JavaScript puro, sem build.

## Executar
Abra `index.html` no navegador, ou rode `python3 -m http.server 8000` na pasta e acesse http://localhost:8000.

## Personalizar (tudo em `js/script.js`)
- `CONFIG`: WhatsApp (só dígitos com DDI+DDD), cidade/CEP, Instagram. Enquanto o WhatsApp estiver vazio, os botões avisam que falta configurar.
- `SERVICES`: adicione ou edite tratamentos (ícone, nome, descrição).
- `CASES`: caminhos das fotos reais de antes/depois. Use apenas com autorização de uso de imagem assinada.
- Cores e fontes: variáveis no topo de `css/style.css`.

## Imagens e logo
- Logo provisória em `assets/logo/logo.svg`. Substitua pela logo real e ajuste `--g` (verde) em `style.css` para combinar.
- Os blocos tracejados são placeholders. Troque por `<img>` (hero e sobre) usando fotos otimizadas (WebP, até ~200 KB).

## Acessibilidade e desempenho
Respeita `prefers-reduced-motion` e o tema do sistema na primeira visita (preferência salva em localStorage).
