// Shared rendering for catalog-only site
function cardHTML(p){
  const media = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="swatch">${p.name}</div>`;
  return `<a class="card" href="product.html?id=${p.id}">
    <div class="card-media">${media}</div>
    <div class="card-body">
      <div class="card-cat">${p.category}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-meta"><span class="price">₹${p.price.toLocaleString('en-IN')}</span><span class="tag">${p.tag}</span></div>
    </div>
  </a>`;
}
function getParam(n){ return new URLSearchParams(location.search).get(n); }
