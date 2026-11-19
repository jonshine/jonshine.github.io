/*
 * Wishlist renderer for joncarrasco.com/wishlist/
 * Reads window.WISHLIST and window.WISHLIST_CONFIG from items.js.
 * You should not need to edit this file to add items.
 */
(function () {
  "use strict";

  var ITEMS = (window.WISHLIST || []).slice();
  var CONFIG = window.WISHLIST_CONFIG || {};
  var PRIORITY_RANK = { top: 0, high: 1, nice: 2 };
  var PRIORITY_BADGE = {
    top: { label: "Top pick", cls: "bg-danger" },
    high: { label: "Really want", cls: "bg-warning" },
    nice: { label: "Nice to have", cls: "bg-secondary" }
  };

  /* ---------- helpers ---------- */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeUrl(url) {
    var u = String(url || "").trim();
    if (/^https?:\/\//i.test(u) || /^(\.\.\/|\.\/|\/)/.test(u)) return u;
    return "#!";
  }

  function money(price) {
    if (price === undefined || price === null || price === "" || isNaN(Number(price))) return "";
    return "$" + Number(price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function itemLink(item) {
    return "item.html?id=" + encodeURIComponent(item.id);
  }

  function storeName(item) {
    if (item.store) return item.store;
    try {
      return new URL(item.url).hostname.replace(/^www\./, "");
    } catch (e) {
      return "the store";
    }
  }

  function placeholder(extraClass) {
    return (
      '<div class="wl-placeholder ' + (extraClass || "") + '">' +
      '<span class="fas fa-gift"></span></div>'
    );
  }

  // Image with a gift-icon fallback if the URL is empty or fails to load
  function img(src, alt, cls) {
    if (!src) return placeholder(cls);
    return (
      '<img class="' + (cls || "") + '" src="' + esc(safeUrl(src)) + '" alt="' + esc(alt) +
      '" loading="lazy" referrerpolicy="no-referrer" onerror="wlImgFail(this)" />'
    );
  }

  window.wlImgFail = function (el) {
    var holder = document.createElement("div");
    holder.className = "wl-placeholder " + (el.className || "");
    holder.innerHTML = '<span class="fas fa-gift"></span>';
    el.replaceWith(holder);
  };

  function sortItems(list, mode) {
    var copy = list.slice();
    copy.sort(function (a, b) {
      // by category: A to Z, uncategorized last; within each category,
      // gifted items sink and the rest go most wanted first
      if (mode === "category") {
        var ca = a.category || "";
        var cb = b.category || "";
        if (ca !== cb) return !ca ? 1 : !cb ? -1 : ca.localeCompare(cb);
      }
      // gifted items always sink to the bottom
      if (!!a.gifted !== !!b.gifted) return a.gifted ? 1 : -1;
      if (mode === "price-asc") return (Number(a.price) || Infinity) - (Number(b.price) || Infinity);
      if (mode === "price-desc") return (Number(b.price) || 0) - (Number(a.price) || 0);
      if (mode === "newest") return String(b.added || "").localeCompare(String(a.added || ""));
      var pa = PRIORITY_RANK[a.priority] != null ? PRIORITY_RANK[a.priority] : 3;
      var pb = PRIORITY_RANK[b.priority] != null ? PRIORITY_RANK[b.priority] : 3;
      return pa - pb || String(a.title).localeCompare(String(b.title));
    });
    return copy;
  }

  function buyButton(item, cls) {
    if (item.gifted) {
      return '<span class="btn btn-outline-secondary disabled ' + (cls || "") + '">already gifted</span>';
    }
    return (
      '<a class="btn btn-dark ' + (cls || "") + '" href="' + esc(safeUrl(item.url)) +
      '" target="_blank" rel="noopener noreferrer">buy at ' + esc(storeName(item)) +
      '<span class="fas fa-external-link-alt ms-2 fs-10"></span></a>'
    );
  }

  /* ---------- card (product-single "top products" style) ---------- */

  function card(item) {
    var badge = item.gifted
      ? { label: "Gifted", cls: "bg-success" }
      : PRIORITY_BADGE[item.priority];
    var hasHover = item.images && item.images.length;
    var media = hasHover
      ? '<div class="hoverbox"><div class="row"><div class="col">' + img(item.image, item.title, "wl-img") +
        '</div></div><div class="hoverbox-content hoverbox-background"><div class="hoverbox-bg d-flex flex-center h-100 w-100">' +
        img(item.images[0], item.title, "wl-img") + "</div></div></div>"
      : '<div class="row"><div class="col">' + img(item.image, item.title, "wl-img") + "</div></div>";

    return (
      '<div class="col-sm-6 col-md-4 col-lg-3 mt-6 wl-card' + (item.gifted ? " wl-gifted" : "") +
      '" data-category="' + esc(item.category || "") + '">' +
      '<a class="row g-0" href="' + itemLink(item) + '">' +
      '<div class="col-12 overflow-hidden rounded position-relative border">' +
      (item.priority === "top" || item.gifted
        ? '<div class="badge badge-rotate ' + badge.cls + '">' + badge.label + "</div>"
        : "") +
      media +
      "</div>" +
      '<div class="col-8 mt-2"><h5 class="fs-9 mb-0">' + esc(item.title) + "</h5>" +
      '<p class="fs-10 text-body-tertiary mb-0">' + esc(storeName(item)) + "</p></div>" +
      '<div class="col-4 mt-2 text-end"><h6 class="fw-normal mb-0 d-inline-block">' + money(item.price) + "</h6></div>" +
      "</a></div>"
    );
  }

  /* ---------- spotlight row (shop.html style) ---------- */

  function spotlight(item, index) {
    var details = (item.details || [])
      .map(function (d) {
        return (
          '<li><h6 class="fs-9 text-body-highlight mb-1"><span class="fw-bold">' + esc(d[0]) +
          ':</span><span class="fw-normal ps-1">' + esc(d[1]) + "</span></h6></li>"
        );
      })
      .join("");
    if (item.qty && item.qty > 1) {
      details += '<li><h6 class="fs-9 text-body-highlight mb-1"><span class="fw-bold">Quantity:</span><span class="fw-normal ps-1">' + esc(item.qty) + "</span></h6></li>";
    }
    return (
      '<div class="row' + (index ? " mt-8" : "") + '">' +
      '<div class="col-lg-6"><a href="' + itemLink(item) + '">' + img(item.image, item.title, "wl-spot-img rounded border") + "</a></div>" +
      '<div class="col-lg-6 ps-lg-4 ps-xl-6 mt-4 mt-lg-0 d-flex flex-column justify-content-center">' +
      '<div><div class="badge border border-danger text-danger mb-2 font-secondary"><span class="fas fa-star me-1"></span>Top pick</div></div>' +
      (item.price ? '<div class="font-secondary fs-8 mb-2"><span class="text-warning fw-black">US ' + money(item.price) + "</span></div>" : "") +
      '<a class="text-black" href="' + itemLink(item) + '"><h3 class="mb-0">' + esc(item.title) + "</h3></a>" +
      (item.summary ? '<p class="lead font-secondary">' + esc(item.summary) + "</p>" : "") +
      (item.notes ? '<p class="mb-0"><span class="fw-bold">Notes:</span> ' + esc(item.notes) + "</p>" : "") +
      (details ? '<ul class="list-unstyled mt-4">' + details + "</ul>" : "") +
      '<div class="mt-4">' + buyButton(item, "btn-sm px-5 me-2 mb-2") +
      '<a class="btn btn-outline-dark btn-sm px-5 mb-2" href="' + itemLink(item) + '">view details</a></div>' +
      "</div></div>"
    );
  }

  /* ---------- shop page ---------- */

  function renderShop() {
    var titleEl = document.getElementById("wl-title");
    var subEl = document.getElementById("wl-subtitle");
    var introEl = document.getElementById("wl-intro");
    if (titleEl && CONFIG.title) titleEl.textContent = CONFIG.title;
    if (subEl && CONFIG.subtitle) subEl.textContent = CONFIG.subtitle;
    if (introEl && CONFIG.intro) introEl.textContent = CONFIG.intro;

    // Spotlight
    var top = sortItems(ITEMS.filter(function (i) { return i.priority === "top" && !i.gifted; }));
    var spotWrap = document.getElementById("wl-spotlight");
    var spotSection = document.getElementById("wl-spotlight-section");
    if (top.length && spotWrap) {
      spotWrap.innerHTML = top.map(spotlight).join("");
    } else if (spotSection) {
      spotSection.classList.add("d-none");
    }

    // Filters
    var cats = [];
    ITEMS.forEach(function (i) {
      if (i.category && cats.indexOf(i.category) === -1) cats.push(i.category);
    });
    cats.sort();
    var nav = document.getElementById("wl-filters");
    if (nav) {
      nav.innerHTML =
        '<li class="nav-item"><a class="nav-link active" href="#!" data-filter="*">all</a></li>' +
        cats
          .map(function (c) {
            return '<li class="nav-item"><a class="nav-link" href="#!" data-filter="' + esc(c) + '">' + esc(c.toLowerCase()) + "</a></li>";
          })
          .join("");
    }

    var sortSel = document.getElementById("wl-sort");
    var state = { filter: "*", sort: sortSel ? sortSel.value : "category" };
    var grid = document.getElementById("wl-grid");
    var count = document.getElementById("wl-count");

    // Heading row above each category's items in the "category" sort
    function categoryHeading(name) {
      return (
        '<div class="col-12 wl-cat-head"><h3 class="fs-8 mb-0 font-secondary">' +
        esc((name || "other").toLowerCase()) + "</h3></div>"
      );
    }

    function draw() {
      var list = sortItems(ITEMS, state.sort).filter(function (i) {
        return state.filter === "*" || i.category === state.filter;
      });
      var grouped = state.sort === "category" && state.filter === "*";
      var html = "";
      var lastCat = null;
      list.forEach(function (item) {
        var cat = item.category || "";
        if (grouped && cat !== lastCat) html += categoryHeading(cat);
        lastCat = cat;
        html += card(item);
      });
      grid.innerHTML = list.length
        ? html
        : '<div class="col-12 mt-6 text-center text-body-tertiary">Nothing here yet.</div>';
      if (count) count.textContent = list.length + (list.length === 1 ? " item" : " items");
    }

    if (nav) {
      nav.addEventListener("click", function (e) {
        var link = e.target.closest("[data-filter]");
        if (!link) return;
        e.preventDefault();
        nav.querySelectorAll(".nav-link").forEach(function (n) { n.classList.remove("active"); });
        link.classList.add("active");
        state.filter = link.getAttribute("data-filter");
        draw();
      });
    }
    if (sortSel) {
      sortSel.addEventListener("change", function () {
        state.sort = sortSel.value;
        draw();
      });
    }
    draw();
  }

  /* ---------- single item page ---------- */

  function renderItem() {
    var id = new URLSearchParams(window.location.search).get("id");
    var item = ITEMS.filter(function (i) { return i.id === id; })[0];
    var main = document.getElementById("wl-item");
    if (!item) {
      main.innerHTML =
        '<div class="col-12 text-center py-8"><h1 class="fs-6">That item isn\'t on the list</h1>' +
        '<p class="text-body-secondary">It may have been removed or already gifted.</p>' +
        '<a class="btn btn-dark mt-3" href="./">back to the wishlist</a></div>';
      return;
    }

    document.title = item.title + " | Jon's Wishlist";
    var badge = item.gifted ? { label: "Gifted", cls: "success" } : null;
    if (!badge && item.priority === "top") badge = { label: "Top pick", cls: "danger" };
    if (!badge && item.priority === "high") badge = { label: "Really want", cls: "warning" };

    var extra = (item.images || [])
      .map(function (src) { return '<div class="col-6 mt-4">' + img(src, item.title, "wl-img rounded border") + "</div>"; })
      .join("");

    var details = (item.details || [])
      .map(function (d) { return "<li><span class=\"fw-bold\">" + esc(d[0]) + ":</span> " + esc(d[1]) + "</li>"; })
      .join("");

    main.innerHTML =
      '<div class="col-lg-8 pe-lg-6"><div class="row"><div class="col-12">' +
      '<nav aria-label="breadcrumb"><ol class="breadcrumb font-secondary py-2 my-1">' +
      '<li class="breadcrumb-item"><a href="../index.html">Home</a></li>' +
      '<li class="breadcrumb-item"><a href="./">Wishlist</a></li>' +
      (item.category ? '<li class="breadcrumb-item active" aria-current="page">' + esc(item.category) + "</li>" : "") +
      "</ol></nav>" +
      '<h1 class="fs-6 mb-2">' + esc(item.title) + "</h1>" +
      (item.summary ? '<p class="text-body-secondary font-secondary mb-0">' + esc(item.summary) + "</p>" : "") +
      "</div>" +
      '<div class="col-12 mt-4">' + img(item.image, item.title, "wl-hero-img rounded border") + "</div>" +
      extra +
      "</div></div>" +
      '<div class="col-lg-4"><div class="sticky-top py-6 py-lg-8">' +
      (badge ? '<div class="badge border text-' + badge.cls + " border-" + badge.cls + ' font-secondary"><span class="fas fa-star me-1"></span>' + badge.label + "</div>" : "") +
      (item.price ? '<h2 class="fw-normal">' + money(item.price) + "</h2>" : "") +
      '<p class="fs-10 text-body-tertiary">Price at ' + esc(storeName(item)) + " when added; it may have changed.</p>" +
      (item.notes ? '<h6 class="mt-4">Notes for the buyer</h6><p class="text-body-secondary">' + esc(item.notes) + "</p>" : "") +
      (details ? '<h6 class="mt-4">Details</h6><ul class="list-unstyled text-body-secondary">' + details + "</ul>" : "") +
      (item.qty && item.qty > 1 ? '<h6 class="mt-4">Quantity</h6><p class="text-body-secondary">' + esc(item.qty) + "</p>" : "") +
      '<div class="d-grid mt-4">' + buyButton(item) + "</div>" +
      '<a class="fs-10 text-body-highlight d-block mt-4" href="./"><span class="fas fa-arrow-left me-1"></span>back to the wishlist</a>' +
      "</div></div>";

    // More from the list
    var others = sortItems(ITEMS.filter(function (i) { return i.id !== item.id && !i.gifted; })).slice(0, 4);
    var more = document.getElementById("wl-more");
    if (others.length && more) {
      more.innerHTML = others.map(card).join("");
    } else {
      var moreSection = document.getElementById("wl-more-section");
      if (moreSection) moreSection.classList.add("d-none");
    }
  }

  /* ---------- boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-wishlist-page");
    if (page === "shop") renderShop();
    if (page === "item") renderItem();
    var yearEl = document.getElementById("wl-year");
    if (yearEl && CONFIG.year) yearEl.textContent = CONFIG.year;
  });
})();
