/* ===== CONFIGURAÇÃO — edite aqui ===== */
const CONFIG = {
  whatsapp: "",            // só dígitos com DDI+DDD, ex.: "5581900000000"
  whatsappLink: "https://wa.me/message/HDJYDS4ILZQ4E1", // link direto da bio do Instagram (tem prioridade sobre o número)
  whatsappMsg: "Olá! Gostaria de agendar uma avaliação na Alto Sorriso.",
  address: "Alto do Deodato, 615",
  city: "",                // opcional (cidade/UF/CEP) — melhora a precisão do mapa
  instagram: "https://www.instagram.com/altosorriso/",
};
const ICON = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONS = {
  spark:'<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/>',
  tooth:'<path d="M7 4c-3 0-4 3-3 6s2 4 2.500 8c.3 2 1.500 3 2.500 1l1.200-4h1.600l1.200 4c1 2 2.200 1 2.500-1 .5-4 1.500-5 2.500-8s0-6-3-6c-2 0-2 1-4 1S9 4 7 4z"/>',
  heart:'<path d="M12 20s-8-5-8-11a4.500 4.500 0 0 1 8-2.700A4.500 4.500 0 0 1 20 9c0 6-8 11-8 11z"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.500 2.700-6 6-6s6 2.500 6 6M16 5a3 3 0 0 1 0 6M21 20c0-2.500-1.500-4.500-3.500-5.500"/>',
};
/* Para adicionar um tratamento, inclua uma linha aqui */
const SERVICES = [
  ["spark","Clareamento dental","Sorriso mais claro com técnicas seguras e acompanhamento profissional."],
  ["shield","Limpeza e prevenção","Cuidados regulares para manter a saúde da boca em dia."],
  ["tooth","Ortodontia","Alinhamento dos dentes com planejamento individual."],
  ["tooth","Implantes dentários","Reposição de dentes com foco em função e estética."],
  ["spark","Lentes e facetas","Harmonização do sorriso com acabamento natural."],
  ["tooth","Restaurações","Recuperação da forma e da função do dente."],
  ["shield","Tratamento de canal","Alívio da dor e preservação do dente natural."],
  ["tooth","Próteses dentárias","Soluções sob medida para recuperar o conforto ao mastigar."],
];
const DIFFS = [
  ["heart","Atendimento humanizado","Texto provisório."],["cpu","Estrutura moderna","Texto provisório."],
  ["spark","Tecnologia e precisão","Texto provisório."],["users","Compromisso com cada paciente","Texto provisório."],
];
/* Casos antes/depois: troque before/after por caminhos de imagem reais (com autorização do paciente) */
const CASES = [
  {title:"Caso demonstrativo 1",before:"",after:""},
  {title:"Caso demonstrativo 2",before:"",after:""},
  {title:"Caso demonstrativo 3",before:"",after:""},
];

const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

/* Tema */
$("#themeBtn").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (e) {}
};

/* Header e menu mobile */
const header = $("#header"), burger = $("#burger"), menu = $("#menu");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
burger.onclick = () => setMenu(!menu.classList.contains("open"));
$$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));

/* Conteúdo dinâmico */
$("#services").innerHTML = SERVICES.map(([i, t, d]) => `<article class="card">${ICON(ICONS[i])}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#diffs").innerHTML = DIFFS.map(([i, t, d]) => `<li>${ICON(ICONS[i]).replace("<svg","<svg width='28' height='28'")}<b>${t}</b><span>${d}</span></li>`).join("");

/* WhatsApp: a solicitação da mensagem pronta vale apenas para o botão da navbar */
const navSchedule = $("#menu a.btn");
if (navSchedule) {
  navSchedule.href = `https://wa.me/558194629646?text=${encodeURIComponent("Olá, gostaria de fazer uma avaliação")}`;
  navSchedule.target = "_blank";
  navSchedule.rel = "noopener";
}
/* Demais botões continuam usando o contato já configurado para a clínica */
$$("[data-wa]").forEach(a => {
  if (CONFIG.whatsappLink) { a.href = CONFIG.whatsappLink; a.target = "_blank"; a.rel = "noopener"; }
  else if (CONFIG.whatsapp) { a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`; a.target = "_blank"; a.rel = "noopener"; }
  else a.addEventListener("click", e => { e.preventDefault(); alert("Defina o número do WhatsApp em js/script.js (CONFIG.whatsapp)."); });
});
const q = encodeURIComponent([CONFIG.address, CONFIG.city].filter(Boolean).join(", "));
$("#mapFrame").src = `https://www.google.com/maps?q=${q}&output=embed`;
$("#mapBtn").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
$("#addrExtra").textContent = CONFIG.city;
const ig = $("#ig"); if (CONFIG.instagram) ig.href = CONFIG.instagram; else ig.addEventListener("click", e => e.preventDefault());
$("#yr").textContent = new Date().getFullYear();

/* Text reveal: divide títulos em palavras */
$$(".reveal-text").forEach(el => {
  el.setAttribute("aria-label", el.textContent);
  el.innerHTML = el.textContent.split(" ").map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(" ");
});

/* Scroll reveal com stagger (IntersectionObserver) */
$$(".card,.diffs li").forEach((el, i) => el.style.setProperty("--d", (i % 4) * 90 + "ms"));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
$$(".reveal-text,.rv,.card,.diffs li").forEach(el => io.observe(el));

/* Parallax sutil */
const px = $$("[data-parallax]");
if (!reduce) addEventListener("scroll", () => px.forEach(el => {
  const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
  el.style.transform = `translateY(${((r.top + r.height / 2 - innerHeight / 2) * -.05).toFixed(1)}px)`;
}), { passive: true });

/* Antes/depois */
let cur = 0; const cmp = $("#cmp"), range = $("#cmpRange");
range.oninput = () => cmp.style.setProperty("--p", range.value + "%");
function showCase(n) {
  cur = (n + CASES.length) % CASES.length; const c = CASES[cur];
  [["before", ".before"], ["after", ".after"]].forEach(([k, s]) => {
    const el = $(s, cmp), has = !!c[k];
    el.style.backgroundImage = has ? `url(${c[k]})` : ""; el.style.backgroundSize = "cover";
    if (has) el.innerHTML = "";
  });
  $("#caseInfo").textContent = `${c.title} (${cur + 1}/${CASES.length})`;
  range.value = 50; range.oninput();
}
$("#prev").onclick = () => showCase(cur - 1); $("#next").onclick = () => showCase(cur + 1);
showCase(0);
