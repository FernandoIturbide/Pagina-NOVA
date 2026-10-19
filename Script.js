/* =========================================================
   NOVA | Soluciones Creativas — Lógica del sitio
   Todo lo editable está al inicio de este archivo.
   ========================================================= */

/* ---------- 1. CONFIGURACIÓN (EDITA AQUÍ) ---------- */

// Número de WhatsApp con código de país, SIN espacios ni signos.
// Ejemplo para México: "5215512345678". ¡SUSTITUYE ESTE PLACEHOLDER!
const WHATSAPP_NUMBER = "5215584709229";

// Redes sociales y correo (reemplaza por los reales).
const SOCIAL = {
  instagram: "https://www.instagram.com/novascmx/",
  facebook: "https://www.facebook.com/profile.php?id=61561154582775",
  email: "correo@ejemplo.com"
};

// Imágenes de muestra (picsum.photos). Reemplaza cada "img" por la ruta de tu foto real,
// por ejemplo "img/taza-xv.jpg". Mientras tanto se usan imágenes aleatorias de muestra.
const sample = (seed, w = 600, h = 450) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Categorías. "id" se usa para filtrar productos.
const CATEGORIES = [
  { id: "regalos",    name: "Regalos personalizados",            desc: "Detalles únicos para sorprender en cualquier ocasión.", img: "img/Regalos.jpeg" },
  { id: "bebidas",    name: "Termos, tarros, tazas y vasos",     desc: "Para el día a día, con tu nombre, diseño o frase.",     img: "img/Bebidas.jpeg" },
  { id: "papeleria",  name: "Papelería",                         desc: "Agendas, libretas y cuadernos a tu estilo.",            img: "img/Papeleria.jpeg" },
  { id: "textiles",   name: "Textiles",                          desc: "Playeras y sudaderas personalizadas.",                  img: "img/Textiles.jpeg" },
  { id: "eventos",    name: "Eventos",                           desc: "Vasos para XV años, bodas, cumpleaños y graduaciones.", img: "img/Eventos.jpeg" },
  { id: "publicidad", name: "Publicidad",                        desc: "Lonas, vinil y material promocional.",                  img: "img/Publicidad.jpeg" },
  { id: "promo",      name: "Artículos promocionales",           desc: "Plumas grabadas y otros regalos corporativos.",         img: "img/Promo.jpeg" },
  { id: "reconocimientos", name: "Reconocimientos y detalles especiales", desc: "Para celebrar logros y momentos importantes.", img: "img/Reconocimientos.jpeg" }
];

// Productos de DEMOSTRACIÓN. Para agregar uno, copia una línea y cambia sus datos.
// price: deja "Solicitar cotización" o escribe un precio de ejemplo (ej. "Desde $00 (ejemplo)").
// Para eliminar un producto, borra su línea. "category" debe coincidir con un "id" de CATEGORIES.
const PRODUCTS = [
  { id: 1,  name: "Taza personalizada (demo)",        category: "bebidas",    desc: "Taza de cerámica con tu diseño, nombre o frase.",       price: "Solicitar cotización", img: sample("nova-p1") },
  { id: 2,  name: "Termo con grabado (demo)",         category: "bebidas",    desc: "Termo para bebidas frías y calientes, personalizable.", price: "Solicitar cotización", img: sample("nova-p2") },
  { id: 3,  name: "Tarro mason personalizado (demo)", category: "bebidas",    desc: "Tarro con tapa y diseño a tu gusto.",                   price: "Solicitar cotización", img: sample("nova-p3") },
  { id: 4,  name: "Vasos para XV años (demo)",        category: "eventos",    desc: "Vasos con nombre y fecha para tu celebración.",         price: "Solicitar cotización", img: sample("nova-p4") },
  { id: 5,  name: "Vasos para boda (demo)",           category: "eventos",    desc: "Recuerdos con los nombres de los novios.",              price: "Solicitar cotización", img: sample("nova-p5") },
  { id: 6,  name: "Vasos de graduación (demo)",       category: "eventos",    desc: "Celebra el logro con un detalle personalizado.",        price: "Solicitar cotización", img: sample("nova-p6") },
  { id: 7,  name: "Agenda personalizada (demo)",      category: "papeleria",  desc: "Agenda con portada y detalles a tu medida.",            price: "Solicitar cotización", img: sample("nova-p7") },
  { id: 8,  name: "Libreta personalizada (demo)",     category: "papeleria",  desc: "Libreta con tu logo, nombre o ilustración.",            price: "Solicitar cotización", img: sample("nova-p8") },
  { id: 9,  name: "Playera personalizada (demo)",     category: "textiles",   desc: "Playera con tu diseño, para equipos, eventos o regalo.",price: "Solicitar cotización", img: sample("nova-p9") },
  { id: 10, name: "Sudadera personalizada (demo)",    category: "textiles",   desc: "Sudadera con estampado a tu elección.",                 price: "Solicitar cotización", img: sample("nova-p10") },
  { id: 11, name: "Lona publicitaria (demo)",         category: "publicidad", desc: "Lona en la medida que necesites para tu negocio.",      price: "Solicitar cotización", img: sample("nova-p11") },
  { id: 12, name: "Vinil decorativo (demo)",          category: "publicidad", desc: "Vinil para vitrinas, vehículos o paredes.",             price: "Solicitar cotización", img: sample("nova-p12") },
  { id: 13, name: "Pluma grabada (demo)",             category: "promo",      desc: "Plumas con tu logo o nombre, ideales para empresas.",   price: "Solicitar cotización", img: sample("nova-p13") },
  { id: 14, name: "Kit corporativo (demo)",           category: "promo",      desc: "Combina varios artículos con la imagen de tu marca.",   price: "Solicitar cotización", img: sample("nova-p14") },
  { id: 15, name: "Caja de regalo personalizada (demo)", category: "regalos", desc: "Un detalle armado a la medida de la ocasión.",          price: "Solicitar cotización", img: sample("nova-p15") },
  { id: 16, name: "Reconocimiento especial (demo)",   category: "reconocimientos", desc: "Detalle para reconocer un logro o agradecer.",     price: "Solicitar cotización", img: sample("nova-p16") }
];

// Galería de MUESTRA (no son trabajos reales de NOVA). Reemplaza por tus fotos.
const GALLERY = [
  { img: sample("nova-g1", 600, 800), alt: "Imagen de muestra 1" },
  { img: sample("nova-g2", 600, 450), alt: "Imagen de muestra 2" },
  { img: sample("nova-g3", 600, 600), alt: "Imagen de muestra 3" },
  { img: sample("nova-g4", 600, 750), alt: "Imagen de muestra 4" },
  { img: sample("nova-g5", 600, 450), alt: "Imagen de muestra 5" },
  { img: sample("nova-g6", 600, 700), alt: "Imagen de muestra 6" },
  { img: sample("nova-g7", 600, 600), alt: "Imagen de muestra 7" },
  { img: sample("nova-g8", 600, 480), alt: "Imagen de muestra 8" }
];

/* ---------- 2. WHATSAPP ---------- */

// Genera un enlace wa.me con el mensaje correctamente codificado.
function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const MESSAGES = {
  general: "Hola, me gustaría solicitar una cotización en NOVA | Soluciones Creativas.",
  custom: "Hola, tengo una idea en mente y me gustaría que me ayuden a encontrar la mejor opción. ¿Me pueden orientar?",
  product: (name) => `Hola, me interesa el producto "${name}". ¿Me pueden indicar el precio, las opciones de personalización y el tiempo de entrega?`,
  category: (name) => `Hola, me interesa la categoría "${name}". ¿Me pueden compartir opciones y una cotización?`
};

/* ---------- 3. UTILIDADES ---------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);

// Escapa texto para insertarlo de forma segura en HTML.
function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
// Normaliza texto para buscar sin importar acentos ni mayúsculas.
function norm(str) {
  return String(str).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const catName = (id) => (CATEGORIES.find(c => c.id === id) || {}).name || "";

/* ---------- 4. ENLACES DE WHATSAPP ESTÁTICOS ---------- */
// Cualquier elemento con data-wa="general" o "custom" recibe su enlace.
function initWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach(el => {
    const type = el.dataset.wa;
    el.href = buildWhatsAppLink(MESSAGES[type] || MESSAGES.general);
  });
}

/* ---------- 5. REDES Y CORREO ---------- */
function initContactLinks() {
  $("#linkInstagram").href = SOCIAL.instagram;
  $("#linkFacebook").href = SOCIAL.facebook;
  $("#linkEmail").href = `mailto:${SOCIAL.email}`;
  $("#emailText").textContent = SOCIAL.email;
}

/* ---------- 6. MENÚ MÓVIL ---------- */
function initMenu() {
  const toggle = $("#menuToggle");
  const menu = $("#menu");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  // Cierra al elegir una opción
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  // Cierra con Escape
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  // Cierra al pasar a escritorio
  window.matchMedia("(min-width: 900px)").addEventListener("change", e => { if (e.matches) setOpen(false); });
}

/* ---------- 7. CATEGORÍAS ---------- */
let activeCategory = "todas";

function renderCategories() {
  $("#categoryGrid").innerHTML = CATEGORIES.map(c => `
    <article class="category-card reveal">
      <img src="${esc(c.img)}" alt="Imagen de muestra de ${esc(c.name)}" width="600" height="450" loading="lazy" />
      <div class="category-body">
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.desc)}</p>
        <div class="category-actions">
          <button type="button" class="btn btn-outline btn-sm" data-explore="${esc(c.id)}">Ver productos</button>
          <a class="btn btn-whatsapp btn-sm" href="${buildWhatsAppLink(MESSAGES.category(c.name))}" target="_blank" rel="noopener noreferrer">Cotizar</a>
        </div>
      </div>
    </article>`).join("");

  // "Ver productos": filtra el catálogo y se desplaza hasta él.
  $("#categoryGrid").addEventListener("click", e => {
    const btn = e.target.closest("[data-explore]");
    if (!btn) return;
    setCategory(btn.dataset.explore);
    $("#catalogo").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

/* ---------- 8. CATÁLOGO: filtros + buscador ---------- */
function renderFilters() {
  const items = [{ id: "todas", name: "Todas" }, ...CATEGORIES];
  $("#filters").innerHTML = items.map(c =>
    `<button type="button" class="filter-btn" data-cat="${esc(c.id)}" aria-pressed="${c.id === activeCategory}">${esc(c.name)}</button>`
  ).join("");
}

function setCategory(id) {
  activeCategory = id;
  document.querySelectorAll(".filter-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === id)));
  renderProducts();
}

function renderProducts() {
  const q = norm($("#searchInput").value.trim());
  const list = PRODUCTS.filter(p =>
    (activeCategory === "todas" || p.category === activeCategory) &&
    (!q || norm(p.name).includes(q) || norm(p.desc).includes(q))
  );

  $("#productGrid").innerHTML = list.map(p => `
    <article class="product-card">
      <span class="badge-demo">Producto de demostración</span>
      <img src="${esc(p.img)}" alt="Imagen de muestra: ${esc(p.name)}" width="600" height="450" loading="lazy" />
      <div class="product-body">
        <span class="product-cat">${esc(catName(p.category))}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <p class="product-price">${esc(p.price)}</p>
        <a class="btn btn-whatsapp btn-sm" href="${buildWhatsAppLink(MESSAGES.product(p.name))}" target="_blank" rel="noopener noreferrer" aria-label="Cotizar ${esc(p.name)} por WhatsApp">Cotizar</a>
      </div>
    </article>`).join("");

  $("#emptyState").hidden = list.length > 0;
  $("#resultsCount").textContent = list.length
    ? `${list.length} producto${list.length === 1 ? "" : "s"}`
    : "";
}

function initCatalog() {
  renderFilters();
  renderProducts();
  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (btn) setCategory(btn.dataset.cat);
  });
  $("#searchInput").addEventListener("input", renderProducts);
  $("#clearFilters").addEventListener("click", () => {
    $("#searchInput").value = "";
    setCategory("todas");
  });
}

/* ---------- 9. GALERÍA + MODAL ---------- */
function initGallery() {
  const gallery = $("#gallery");
  const modal = $("#modal");
  const modalImg = $("#modalImg");
  const caption = $("#modalCaption");
  const closeBtn = $("#modalClose");
  let lastFocus = null;

  gallery.innerHTML = GALLERY.map((g, i) => `
    <button type="button" class="gallery-item" data-i="${i}" aria-label="Ampliar: ${esc(g.alt)}">
      <img src="${esc(g.img)}" alt="${esc(g.alt)}" loading="lazy" />
    </button>`).join("");

  const open = (i) => {
    lastFocus = document.activeElement;
    modalImg.src = GALLERY[i].img;
    modalImg.alt = GALLERY[i].alt;
    caption.textContent = GALLERY[i].alt + " (imagen de muestra)";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    modal.hidden = true;
    modalImg.src = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  gallery.addEventListener("click", e => {
    const btn = e.target.closest(".gallery-item");
    if (btn) open(Number(btn.dataset.i));
  });
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });
}

/* ---------- 10. ANIMACIÓN DE APARICIÓN ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: .12 });
  els.forEach(el => io.observe(el));
}

/* ---------- 11. INICIO ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  initWhatsAppLinks();
  initContactLinks();
  initMenu();
  renderCategories();
  initCatalog();
  initGallery();
  initReveal();
});