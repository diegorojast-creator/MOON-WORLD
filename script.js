// Base de datos de productos de MOON WORLD 2025
const productos = [
  {
    id: 1,
    nombre: "Juego ¡BASTA!",
    categoria: "Juegos y Entretenimiento",
    descripcion: "Juego de mesa 'Piensa rápido y contesta' - Diversión para toda la familia",
    precioMayor: 32000,
    precioDetal: 42000,
    imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    nombre: "Esfera de Cristal 3D - FIJA",
    categoria: "Decoración y Regalos",
    descripcion: "Esferas de cristal 3D con diseños grabados láser en el interior",
    precioMayor: 20000,
    precioDetal: 30000,
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    nombre: "Esfera de Cristal 3D - GIRATORIA",
    categoria: "Decoración y Regalos",
    descripcion: "Esferas de cristal 3D giratorias con base rotatoria motorizada",
    precioMayor: 30000,
    precioDetal: 45000,
    imagen: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    nombre: "Comedero Automático para Mascotas",
    categoria: "Mascotas",
    descripcion: "Comedero inteligente con alimentación automática espacial",
    precioMayor: 55000,
    precioDetal: 65000,
    imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    nombre: "Silla Inflable con Puff",
    categoria: "Hogar y Confort",
    descripcion: "Silla lounge inflable ergonómica con puff incluido - Explora la Comodidad",
    precioMayor: 70000,
    precioDetal: 80000,
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    nombre: "Waflera Mini Mickey",
    categoria: "Electrodomésticos",
    descripcion: "Waflera eléctrica con forma de Mickey Mouse - Crea magia en cada desayuno",
    precioMayor: 30000,
    precioDetal: 35000,
    imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    nombre: "Afeitadora Multiuso Dorada",
    categoria: "Cuidado Personal",
    descripcion: "Set de afeitadora y recortadora profesional 2 en 1 - Acabado dorado premium",
    precioMayor: 40000,
    precioDetal: 45000,
    imagen: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    nombre: "Smartwatch G-SPORT",
    categoria: "Tecnología y Smartwatches",
    descripcion: "Reloj inteligente deportivo con múltiples funciones - Explora tu mundo",
    precioMayor: 52000,
    precioDetal: 80000,
    imagen: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    nombre: "Smartwatch ULTRA 2",
    categoria: "Tecnología y Smartwatches",
    descripcion: "Smartwatch premium con 7 manillas intercambiables - Infinite Possibilities",
    precioMayor: 65000,
    precioDetal: 75000,
    imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    nombre: "M16 Hidrogel",
    categoria: "Juguetes y Réplicas",
    descripcion: "Réplica realista de rifle M16 que dispara bolas de hidrogel",
    precioMayor: 75000,
    precioDetal: 85000,
    imagen: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    nombre: "Sérum Facial Hidratante Bio-Lumínico",
    categoria: "Belleza y Cosmética",
    descripcion: "Tratamiento facial rejuvenecedor con tecnología de hidratación profunda",
    precioMayor: 28000,
    precioDetal: 38000,
    imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60"
  }
];

const categoriasPills = [
  "Todas las categorías",
  "Juegos y Entretenimiento",
  "Decoración y Regalos",
  "Decoración y Iluminación",
  "Mascotas",
  "Hogar y Confort",
  "Hogar y Bebidas",
  "Electrodomésticos",
  "Cuidado Personal",
  "Salud y Bienestar",
  "Tecnología y Smartwatches",
  "Tecnología y Audio",
  "Accesorios y Seguridad",
  "Juguetes y Réplicas",
  "Belleza y Cosmética"
];

let categoriaSeleccionada = "Todas las categorías";
let carrito = [];

// Formateador COP
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

// Renderizar Pills de Filtro
function renderizarPills() {
  const container = document.getElementById('containerPills');
  container.innerHTML = '';

  categoriasPills.forEach(cat => {
    const btn = document.createElement('button');
    const activa = cat === categoriaSeleccionada;
    
    btn.className = `px-3 py-1 rounded text-[11px] font-sans transition ${
      activa 
        ? 'bg-space-accent text-space-dark font-bold' 
        : 'bg-space-dark text-slate-300 hover:text-white border border-space-border'
    }`;
    btn.innerText = cat;
    btn.onclick = () => {
      categoriaSeleccionada = cat;
      renderizarPills();
      aplicarFiltros();
    };
    container.appendChild(btn);
  });
}

// Renderizar Tarjetas de Productos
function renderizarProductos(lista) {
  const container = document.getElementById('gridProductos');
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500 font-sans text-sm">
        No se encontraron productos en esta categoría.
      </div>
    `;
    return;
  }

  lista.forEach(prod => {
    const ahorro = prod.precioDetal - prod.precioMayor;

    const card = document.createElement('div');
    card.className = "bg-space-card/90 border border-space-border rounded-xl overflow-hidden flex flex-col justify-between hover:border-space-accent/50 transition duration-300";

    card.innerHTML = `
      <div>
        <div class="relative h-40 bg-space-dark overflow-hidden">
          <span class="absolute top-2 left-2 z-10 bg-space-accent/20 border border-space-accent/40 text-space-accent text-[9px] px-2 py-0.5 rounded font-sans">
            ${prod.categoria}
          </span>
          <img src="${prod.imagen}" alt="${prod.nombre}" class="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-500">
        </div>

        <div class="p-4 space-y-2">
          <h3 class="font-orbitron font-bold text-sm text-white">${prod.nombre}</h3>
          <p class="text-[11px] text-slate-400 line-clamp-2">${prod.descripcion}</p>

          <div class="pt-2 border-t border-slate-800/80 space-y-1">
            <div class="flex justify-between items-baseline">
              <span class="text-[10px] text-slate-500">Precio Por Mayor:</span>
              <span class="font-orbitron font-bold text-space-accent text-sm">${formatoCOP.format(prod.precioMayor)}</span>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="text-[10px] text-slate-500">Precio Detal:</span>
              <span class="font-sans text-xs text-slate-400 line-through">${formatoCOP.format(prod.precioDetal)}</span>
            </div>
            <p class="text-[9px] text-emerald-400 font-mono text-right">
              Ahorra ${formatoCOP.format(ahorro)} comprando al por mayor
            </p>
          </div>
        </div>
      </div>

      <div class="p-4 pt-0 grid grid-cols-2 gap-2">
        <button onclick="agregarAlCarrito(${prod.id})" class="py-1.5 neon-btn-cyan font-sans text-xs font-bold text-center rounded flex items-center justify-center gap-1 transition">
          <i class="fa-solid fa-cart-plus text-xs"></i> Agregar
        </button>
        <button onclick="comprarInmediato(${prod.id})" class="py-1.5 border border-space-accent/50 text-space-accent hover:bg-space-accent/10 font-sans text-xs text-center rounded transition">
          Comprar Ya
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Lógica del Carrito de Compras
function agregarAlCarrito(idProducto) {
  const prod = productos.find(p => p.id === idProducto);
  const existe = carrito.find(item => item.id === idProducto);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }

  actualizarCarritoUI();
  toggleCarrito(true);
}

function cambiarCantidad(idProducto, cambio) {
  const item = carrito.find(i => i.id === idProducto);
  if (!item) return;

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    eliminarDelCarrito(idProducto);
  } else {
    actualizarCarritoUI();
  }
}

function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter(i => i.id !== idProducto);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const container = document.getElementById('itemsCarrito');
  const contadorFloat = document.getElementById('contadorCarrito');
  const contadorHeader = document.getElementById('contadorCarritoHeader');
  const totalElem = document.getElementById('totalCarrito');

  const totalUnidades = carrito.reduce((sum, i) => sum + i.cantidad, 0);
  const totalPrecio = carrito.reduce((sum, i) => sum + (i.precioMayor * i.cantidad), 0);

  contadorFloat.innerText = totalUnidades;
  contadorHeader.innerText = totalUnidades;
  totalElem.innerText = formatoCOP.format(totalPrecio);

  if (carrito.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-500 font-sans text-xs">
        Tu carrito está vacío. <br>¡Agrega algunos productos del catálogo!
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  carrito.forEach(item => {
    const subtotal = item.precioMayor * item.cantidad;
    const div = document.createElement('div');
    div.className = "pt-4 space-y-2 font-sans";

    div.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <div>
          <h4 class="font-bold text-white text-xs leading-tight">${item.nombre}</h4>
          <span class="text-[10px] text-space-accent block mt-0.5">${formatoCOP.format(item.precioMayor)} c/u</span>
        </div>
        <div class="text-right">
          <span class="font-orbitron font-bold text-white text-sm block">${formatoCOP.format(subtotal)}</span>
        </div>
      </div>

      <div class="flex justify-between items-center pt-1">
        <div class="flex items-center gap-2">
          <button onclick="cambiarCantidad(${item.id}, -1)" class="w-6 h-6 border border-space-accent/60 text-space-accent hover:bg-space-accent hover:text-space-dark rounded flex items-center justify-center text-xs font-bold transition">-</button>
          <span class="text-xs font-bold text-white w-4 text-center">${item.cantidad}</span>
          <button onclick="cambiarCantidad(${item.id}, 1)" class="w-6 h-6 border border-space-accent/60 text-space-accent hover:bg-space-accent hover:text-space-dark rounded flex items-center justify-center text-xs font-bold transition">+</button>
        </div>
        <button onclick="eliminarDelCarrito(${item.id})" class="text-space-neonPink hover:text-pink-400 text-xs transition">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

function toggleCarrito(forzarAbrir = false) {
  const backdrop = document.getElementById('backdropCarrito');
  const drawer = document.getElementById('drawerCarrito');

  const estaCerrado = drawer.classList.contains('translate-x-full');

  if (estaCerrado || forzarAbrir) {
    backdrop.classList.remove('hidden');
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      drawer.classList.remove('translate-x-full');
    }, 10);
  } else {
    backdrop.classList.add('opacity-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  }
}

function comprarInmediato(idProducto) {
  const prod = productos.find(p => p.id === idProducto);
  const textoWA = `Hola, quiero comprar directamente:\n- *${prod.nombre}* (1 unidad) - ${formatoCOP.format(prod.precioMayor)}\n\n¿Tienen disponibilidad?`;
  window.open(`https://wa.me/573223569596?text=${encodeURIComponent(textoWA)}`, '_blank');
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let texto = "Hola MOON WORLD 2025, deseo realizar el siguiente pedido:\n\n";
  let total = 0;

  carrito.forEach(item => {
    const subtotal = item.precioMayor * item.cantidad;
    total += subtotal;
    texto += `• *${item.nombre}* x${item.cantidad} = ${formatoCOP.format(subtotal)}\n`;
  });

  texto += `\n*TOTAL:* ${formatoCOP.format(total)}\n\nQuedo atento para coordinar el pago y envío. ¡Gracias!`;

  window.open(`https://wa.me/573223569596?text=${encodeURIComponent(texto)}`, '_blank');
}

// Filtros y Buscador
function aplicarFiltros() {
  const busqueda = document.getElementById('inputBusqueda').value.toLowerCase();
  const orden = document.getElementById('selectOrden').value;

  let resultado = productos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda) || p.descripcion.toLowerCase().includes(busqueda);
    const coincideCat = categoriaSeleccionada === "Todas las categorías" || p.categoria === categoriaSeleccionada;
    return coincideNombre && coincideCat;
  });

  if (orden === 'precio-asc') {
    resultado.sort((a, b) => a.precioMayor - b.precioMayor);
  } else if (orden === 'precio-desc') {
    resultado.sort((a, b) => b.precioMayor - a.precioMayor);
  }

  renderizarProductos(resultado);
}

function filtrarCategoria(cat) {
  categoriaSeleccionada = cat;
  renderizarPills();
  aplicarFiltros();
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
document.getElementById('inputBusqueda').addEventListener('input', aplicarFiltros);
document.getElementById('selectOrden').addEventListener('change', aplicarFiltros);

// Inicialización
renderizarPills();
renderizarProductos(productos);
actualizarCarritoUI();