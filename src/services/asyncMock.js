let productos = [
    {
      id: "1",
      nombre: "Tazas",
      categoria: "Tazas",
      descripcion: "Tazas 3D impresas en PLA",
      img: "/Images/Tazas.jpg",
      precio: "ARS 1500",
      stock: "10",
    },
    {
      id: "2",
      nombre: "Maceta Moderna",
      categoria: "Macetas",
      descripcion: "Macetas impresas en ABS resistentes al exterior e interior",
      img: "/Images/Maceta.jpg",
      precio: "ARS 800",
      stock: "20",
    },
    {
      id: "3",
      nombre: "Maceta Articulada",
      categoria: "Maceta",
      descripcion: "Maceta de PLA para uso interior y decorativo",
      img: "/Images/MacetaArticulada.jpg",
      precio: "ARS 1300",
      stock: "5",
    },
    {
      id: "4",
      nombre: "Pokemons",
      categoria: "Muñecos",
      descripcion: "Figura de coleccion de la serie Pokemon",
      img: "/Images/Pokemons.jpg",
      precio: "ARS 3500",
      stock: "10",
    },
    {
      id: "5",
      nombre: "Vengadores 3D",
      categoria: "Muñecos",
      descripcion: "Muñecos hechos en Pla/Abs para uso domestico, resistenctes al impacto y degaste",
      img: "/Images/Vengadores.jpg",
      precio: "ARS 3500",
      stock: "5",
    },
    {
      id: "6",
      nombre: "Iron Man 3D",
      categoria: "Muñecos",
      descripcion: "Figura de coleccion hecha en Pla y pintada a mano, esta lackeada y terminaciones hechas en acrilico",
      img: "/Images/IronMan.jpg",
      precio: "ARS 3500",
      stock: "5",
    },
  ];  
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });
  }
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(prod => prod.id === productId));
      }, 500);
    });
  }
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter(prod => prod.categoria === category));
      }, 500);
    });
  }