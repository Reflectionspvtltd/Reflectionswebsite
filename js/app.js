/* =========================================================================
   REFLECTIONS — site behaviour.
   Reads window.CATEGORIES (catalogue-meta.js) and window.CATALOGUE
   (assets/js/data/*.js) and renders the home tiles and the catalogue browser.
   No framework, no build step — drop the folder on any static host.
   ========================================================================= */
(function () {
  'use strict';

  var CATS = window.CATEGORIES || [];
  var ITEMS = window.CATALOGUE || [];
  var IMG_BASE = 'assets/img/products/';
  var ROWS_COLLAPSED = 6;

  /* ----------------------------- helpers ----------------------------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function skuCount(item) {
    return item.rows ? item.rows.length : 0;
  }

  function itemsIn(catId) {
    return ITEMS.filter(function (i) { return i.cat === catId; });
  }

  function skusIn(catId) {
    return itemsIn(catId).reduce(function (n, i) { return n + skuCount(i); }, 0);
  }

  /* Build one lowercase haystack per item so search stays cheap. */
  ITEMS.forEach(function (item) {
    var parts = [item.name, item.range || ''];
    (item.features || []).forEach(function (f) { parts.push(f); });
    (item.rows || []).forEach(function (r) { parts.push(r.join(' ')); });
    item._hay = parts.join(' ').toLowerCase();
  });

  var ICONS = {
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/><path d="M1.5 9a15 15 0 0 1 21 0"/>',
    spot: '<path d="M12 3v3"/><path d="M5.6 5.6l2.1 2.1"/><path d="M18.4 5.6l-2.1 2.1"/><circle cx="12" cy="14" r="5"/><path d="M8 19h8"/>',
    downlight: '<circle cx="12" cy="9" r="5"/><path d="M4 9a8 8 0 0 1 16 0"/><path d="M7 16l-1.5 4"/><path d="M12 17v4"/><path d="M17 16l1.5 4"/>',
    panel: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M9 10v9"/>',
    track: '<path d="M3 5h18"/><path d="M7 5v5"/><path d="M12 5v8"/><path d="M17 5v5"/><circle cx="7" cy="12" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="12" cy="15" r="2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    sconce: '<path d="M5 3v18"/><path d="M5 9h6"/><path d="M11 6h7l2 6h-11z"/><path d="M13 12v4"/>',
    strip: '<rect x="2" y="9" width="20" height="6" rx="2"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/>',
    batten: '<rect x="2" y="10" width="20" height="4" rx="2"/><path d="M6 14v3M12 14v4M18 14v3"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 1 4 10.5V16H8v-2.5A6 6 0 0 1 12 3z"/>',
    lamp: '<path d="M8 3h8l3 7H5z"/><path d="M12 10v8"/><path d="M8 21h8"/>',
    driver: '<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7V5M17 7V5"/><path d="M8 12h8"/>',
    plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.bulb) + '</svg>';
  }

  /* ----------------------------- mobile nav ----------------------------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('is-open');
    });
  }

  /* ----------------------------- home tiles ----------------------------- */

  var tiles = document.getElementById('tiles');
  if (tiles) {
    CATS.forEach(function (c) {
      var a = el('a', 'tile');
      a.href = 'catalogue.html#' + c.id;

      var ic = el('div', 'tile__icon');
      ic.innerHTML = icon(c.icon);
      a.appendChild(ic);

      a.appendChild(el('h3', null, c.name));
      a.appendChild(el('p', null, c.blurb));

      var n = skusIn(c.id);
      a.appendChild(el('div', 'tile__count', itemsIn(c.id).length + ' ranges · ' + n + ' variants'));
      tiles.appendChild(a);
    });
  }

  /* Totals shown in the hero, derived rather than hard-coded. */
  var totalSkus = ITEMS.reduce(function (n, i) { return n + skuCount(i); }, 0);
  var elSkus = document.querySelector('[data-stat="skus"]');
  var elRanges = document.querySelector('[data-stat="ranges"]');
  var elCats = document.querySelector('[data-stat="cats"]');
  if (elSkus) elSkus.textContent = totalSkus.toLocaleString('en-IN') + '+';
  if (elRanges) elRanges.textContent = ITEMS.length;
  if (elCats) elCats.textContent = CATS.length;

  /* ----------------------------- catalogue ----------------------------- */

  var results = document.getElementById('results');
  if (!results) return;

  var sidebarList = document.getElementById('cat-nav');
  var searchInput = document.getElementById('q');
  var countLabel = document.getElementById('count');

  var state = { q: '', cat: 'all' };

  function buildTable(item) {
    var wrap = el('div', 'series__table');
    var table = el('table');

    var codeCol = item.cols.indexOf('Code');

    var thead = el('thead');
    var htr = el('tr');
    item.cols.forEach(function (c) { htr.appendChild(el('th', null, c)); });
    thead.appendChild(htr);
    table.appendChild(thead);

    var tbody = el('tbody');
    item.rows.forEach(function (row, idx) {
      var tr = el('tr');
      if (idx >= ROWS_COLLAPSED) tr.className = 'is-hidden';
      row.forEach(function (cell, ci) {
        var td = el('td');
        if (ci === codeCol) {
          var code = el('code', null, cell);
          td.appendChild(code);
        } else {
          td.textContent = cell;
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);

    var card = el('div');
    card.appendChild(wrap);

    if (item.rows.length > ROWS_COLLAPSED) {
      var btn = el('button', 'series__more');
      var expanded = false;
      var hiddenCount = item.rows.length - ROWS_COLLAPSED;
      btn.textContent = 'Show all ' + item.rows.length + ' variants  (+' + hiddenCount + ')';
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', function () {
        expanded = !expanded;
        Array.prototype.forEach.call(tbody.children, function (tr, idx) {
          if (idx >= ROWS_COLLAPSED) tr.classList.toggle('is-hidden', !expanded);
        });
        btn.textContent = expanded
          ? 'Show fewer variants'
          : 'Show all ' + item.rows.length + ' variants  (+' + hiddenCount + ')';
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      });
      card.appendChild(btn);
    }
    return card;
  }

  function buildSeries(item) {
    var art = el('article', 'series');

    var top = el('div', 'series__top');

    var badge = el('div', 'series__badge');
    if (item.img) {
      var img = el('img');
      img.src = IMG_BASE + item.img;
      img.alt = item.name;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', function () { badge.removeChild(img); });
      badge.appendChild(img);
    }
    top.appendChild(badge);

    var meta = el('div', 'series__meta');
    meta.appendChild(el('h3', 'series__name', item.name));

    var chips = el('div', 'chips');
    if (item.range) chips.appendChild(el('span', 'chip chip--range', item.range));
    chips.appendChild(el('span', 'chip chip--count', skuCount(item) + (skuCount(item) === 1 ? ' variant' : ' variants')));
    meta.appendChild(chips);

    if (item.features && item.features.length) {
      var ul = el('ul', 'series__features');
      item.features.forEach(function (f) { ul.appendChild(el('li', null, f)); });
      meta.appendChild(ul);
    }
    if (item.note) meta.appendChild(el('p', 'series__note', item.note));

    top.appendChild(meta);
    art.appendChild(top);
    art.appendChild(buildTable(item));
    return art;
  }

  function matches(item) {
    if (state.cat !== 'all' && item.cat !== state.cat) return false;
    if (!state.q) return true;
    return item._hay.indexOf(state.q) !== -1;
  }

  function render() {
    results.innerHTML = '';
    var shown = 0, shownSkus = 0;

    CATS.forEach(function (c) {
      var list = itemsIn(c.id).filter(matches);
      if (!list.length) return;

      var sec = el('section', 'cat-section');
      sec.id = c.id;

      var head = el('header');
      head.appendChild(el('h2', null, c.name));
      head.appendChild(el('p', null, c.blurb));
      sec.appendChild(head);

      list.forEach(function (item) {
        sec.appendChild(buildSeries(item));
        shown++;
        shownSkus += skuCount(item);
      });
      results.appendChild(sec);
    });

    if (!shown) {
      var empty = el('div', 'empty');
      empty.appendChild(el('b', null, 'No products matched that search'));
      empty.appendChild(el('p', null, 'Try a product code such as "DC10365", a family name such as "Wave", or a wattage such as "12W".'));
      results.appendChild(empty);
    }

    if (countLabel) {
      countLabel.textContent = shown + ' ranges · ' + shownSkus.toLocaleString('en-IN') + ' variants';
    }
  }

  /* Sidebar */
  if (sidebarList) {
    var entries = [{ id: 'all', name: 'All products' }].concat(CATS);
    entries.forEach(function (c) {
      var li = el('li');
      var b = el('button');
      b.type = 'button';
      b.dataset.cat = c.id;
      b.appendChild(el('span', null, c.name));
      b.appendChild(el('em', null, String(c.id === 'all' ? ITEMS.length : itemsIn(c.id).length)));
      if (c.id === 'all') b.classList.add('is-active');
      b.addEventListener('click', function () {
        state.cat = c.id;
        Array.prototype.forEach.call(sidebarList.querySelectorAll('button'), function (x) {
          x.classList.toggle('is-active', x.dataset.cat === c.id);
        });
        render();
        if (c.id !== 'all') {
          var target = document.getElementById(c.id);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      li.appendChild(b);
      sidebarList.appendChild(li);
    });
  }

  /* Search — debounced so typing stays smooth across ~1,000 rows. */
  if (searchInput) {
    var timer = null;
    searchInput.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.q = searchInput.value.trim().toLowerCase();
        render();
      }, 140);
    });
  }

  render();

  /* Deep link: catalogue.html#panels opens that category. */
  function applyHash() {
    var id = (location.hash || '').replace('#', '');
    if (!id) return;
    var btn = sidebarList && sidebarList.querySelector('button[data-cat="' + id + '"]');
    if (btn) btn.click();
  }
  applyHash();
  window.addEventListener('hashchange', applyHash);
})();
