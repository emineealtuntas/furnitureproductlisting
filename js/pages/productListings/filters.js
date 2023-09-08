const filters = [
  {
    id: "productType",
    title: "Product Type",
    items: [
      {
        title: "Furniture",
        value: "furniture",
      },
      {
        title: "Homeware",
        value: "homeware",
      },
      {
        title: "Sofas",
        value: "sofas",
      },
      {
        title: "Tables",
        value: "tables",
      },
      {
        title: "Light fittings",
        value: "lightFittings",
      },
      {
        title: "Accessories",
        value: "accessories",
      },
    ],
  },
  {
    id: "productPrice",
    title: "Price",
    items: [
      {
        title: "0 - 100",
        value: "0-100",
      },
      {
        title: "101 - 250",
        value: "101-250",
      },
      {
        title: "250+",
        value: "250+",
      },
    ],
  },
  {
    id: "productDesigner",
    title: "Designer",
    items: [
      {
        title: "Robert Smith",
        value: "Robert Smith",
      },
      {
        title: "Liam Gallagher",
        value: "Liam Gallagher",
      },
      {
        title: "Biggie Smalls",
        value: "Biggie Smalls",
      },
      {
        title: "Thom Yorke",
        value: "Thom Yorke",
      },
    ],
  },
];

function renderFilterHeader(filter) {
  return `<h5 class="h5">${filter.title}</h5>`;
}

function renderFilterItems(filterId, items) {
  return items
    .map(
      (item) =>
        `<li> 
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="${item.title}"
                    name="${filterId}"
                    value="${item.value}"
                    onchange="handleChangeFilter('${filterId}')"
                />
                <label class="form-check-label" for="${item.title}">
                    ${item.title}
                </label>
            </div>
        </li>`
    )
    .join("");
}

function renderFilters() {
  const filtersDom = document.getElementById("filters");
  const html = filters.map((filter) => {
    const header = renderFilterHeader(filter);
    const ul = "<ul>" + renderFilterItems(filter.id, filter.items) + "</ul>";
    const div = `<form class="filter" id="${filter.id}">${header} ${ul}</form>`;
    return div;
  });
  filtersDom.innerHTML = html.join("");
}

renderFilters();

function handleChangeFilter() {
  var typesForm = new FormData(document.getElementById("productType"));
  var designersForm = new FormData(document.getElementById("productDesigner"));
  var pricesForm = new FormData(document.getElementById("productPrice"));
  const types = typesForm.getAll("productType");
  const designers = designersForm.getAll("productDesigner");
  const prices = pricesForm.getAll("productPrice");
  let result = products;
  if (types.length > 0) {
    result = result.filter((product) => types.includes(product.type));
  }
  if (designers.length > 0) {
    result = result.filter((product) => designers.includes(product.designer));
  }

  renderProducts(result);
}
