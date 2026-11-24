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
- Logo real em `assets/logo/logo.png` (wordmark) e `assets/logo/icon.png` (favicon). O verde `--g` em `style.css` foi amostrado da logo (#306848).
- Hero e Sobre usam fotos do Instagram da clínica (`assets/images/hero.jpg`, `assets/images/clinica.jpg`). O comparador de antes/depois segue com placeholders até receber fotos com autorização de uso de imagem.

## Tema
Claro (branco) por padrão. O modo noturno só é aplicado quando o visitante ativa o botão de tema (escolha salva em localStorage); a preferência do sistema não é aplicada automaticamente.

## Acessibilidade e desempenho
Respeita `prefers-reduced-motion`.
