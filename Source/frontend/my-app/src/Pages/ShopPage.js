
// // ShopPage.js
// import React, { useState } from 'react';
// import ProductCard from '../Components/ProductCard';
// import NavigationBar from '../Components/NavigationBar';
// import '../Styles/ShopPage.css';

// const ShopPage = () => {
//     // Dummy product data
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
//         { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//         // Add more products here
//     ]);

//     // Dummy cart data
//     const [cart, setCart] = useState([]);

//     // Function to add a product to the cart
//     const addToCart = (product) => {
//         const existingProduct = cart.find(item => item.id === product.id);
//         if (existingProduct) {
//             const updatedCart = cart.map(item => {
//                 if (item.id === product.id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 }
//                 return item;
//             });
//             setCart(updatedCart);
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//     };

//     return (
//         <div className="shop-page">
//             <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
//             <div className="shop-content">
//                 <div className="sidebar">
//                     <h3>Filters</h3>
//                     <div>
//                         <h4>Product type</h4>
//                         <div>
//                             <input type="checkbox" id="furniture" />
//                             <label htmlFor="furniture">Furniture</label>
//                         </div>
//                         {/* Add more checkboxes for other product types */}
//                     </div>
//                     {/* Add more filters here */}
//                 </div>
//                 <div className="product-list">
//                     <div className="product-list-header">
//                         <h2>Shop All</h2>
//                         <div>
//                             <span>Sort by:</span>
//                             <select>
//                                 <option value="price">Price</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="product-grid">
//                         {products.map(product => (
//                             <ProductCard key={product.id} product={product} addToCart={addToCart} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShopPage;


// ShopPage.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from '../Components/ProductCard';
// import NavigationBar from '../Components/NavigationBar';
// import { fetchProducts } from '../Components/api/productApi';
// import '../Styles/ShopPage.css';
// import CartPage from '../Pages/CartPage';
// import CheckoutForm from '../Components/CheckoutForm';

// const ShopPage = () => {
//     // Static product data
//     const staticProducts = [
//         { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
//         { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
//         { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//     ];

//     const [products, setProducts] = useState(staticProducts);
//     const [filteredProducts, setFilteredProducts] = useState(staticProducts);
//     const [isLoadingProducts, setIsLoadingProducts] = useState(false);
//     const [filterOptions, setFilterOptions] = useState({
//         furniture: false,
//         planters: false,
//         sortOrder: 'asc',
//     });

//     useEffect(() => {
//         const filterProducts = async () => {
//             let filtered = [...products];

//             if (filterOptions.furniture || filterOptions.planters) {
//                 setIsLoadingProducts(true);

//                 try {
//                     const fetchedProducts = await fetchProducts(filterOptions);
//                     filtered = fetchedProducts;
//                 } catch (error) {
//                     console.error('Error fetching products:', error);
//                 } finally {
//                     setIsLoadingProducts(false);
//                 }
//             }

//             filtered.sort((a, b) => {
//                 if (filterOptions.sortOrder === 'asc') {
//                     return a.price - b.price;
//                 } else {
//                     return b.price - a.price;
//                 }
//             });

//             setFilteredProducts(filtered);
//         };

//         filterProducts();
//     }, [filterOptions, products]);

//     const handleFilterChange = (e) => {
//         setFilterOptions({
//             ...filterOptions,
//             [e.target.name]: e.target.checked,
//         });
//     };

//     // Cart state and functions
//     const [cart, setCart] = useState([]);
//     const [isCheckingOut, setIsCheckingOut] = useState(false);

//     const addToCart = (product) => {
//         const existingProduct = cart.find(item => item.id === product.id);
//         if (existingProduct) {
//             const updatedCart = cart.map(item => {
//                 if (item.id === product.id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 }
//                 return item;
//             });
//             setCart(updatedCart);
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//     };

//     const handleCheckout = () => {
//         setIsCheckingOut(true);
//     };

//     return (
//         <div className="shop-page">
//             <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
//             <div className="shop-content">
//                 {isCheckingOut ? (
//                     <CheckoutForm cart={cart} />
//                 ) : (
//                     <>
//                         <div className="sidebar">
//                             <h3>Filters</h3>
//                             <div>
//                                 <h4>Product type</h4>
//                                 <div className="filter-option">
//                                     <input
//                                         type="checkbox"
//                                         id="furniture"
//                                         name="furniture"
//                                         checked={filterOptions.furniture}
//                                         onChange={handleFilterChange}
//                                     />
//                                     <label htmlFor="furniture">Furniture</label>
//                                 </div>
//                                 <div className="filter-option">
//                                     <input
//                                         type="checkbox"
//                                         id="planters"
//                                         name="planters"
//                                         checked={filterOptions.planters}
//                                         onChange={handleFilterChange}
//                                     />
//                                     <label htmlFor="planters">Planters</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-list">
//                             <div className="product-list-header">
//                                 <h2>Shop All</h2>
//                                 <div>
//                                     <span>Sort by:</span>
//                                     <select name="sortOrder" value={filterOptions.sortOrder} onChange={handleFilterChange}>
//                                         <option value="asc">Price (Low to High)</option>
//                                         <option value="desc">Price (High to Low)</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             {isLoadingProducts ? (
//                                 <div>Loading products...</div>
//                             ) : (
//                                 <div className="product-grid">
//                                     {filteredProducts.map(product => (
//                                         <ProductCard key={product.id} product={product} addToCart={addToCart} />
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                         <CartPage cart={cart} handleCheckout={handleCheckout} />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ShopPage;


// import React, { useState, useEffect } from 'react';
// import ProductCard from '../Components/ProductCard';
// import NavigationBar from '../Components/NavigationBar';
// import { fetchProducts } from '../Components/api/productApi';
// import '../Styles/ShopPage.css';
// import CartPage from '../Pages/CartPage';
// import CheckoutForm from '../Components/CheckoutForm';

// const ShopPage = () => {
//   // Static product data
//   const staticProducts = [
//     { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
//     { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
//     { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
//   ];

//   const [products, setProducts] = useState(staticProducts);
//   const [filteredProducts, setFilteredProducts] = useState(staticProducts);
//   const [isLoadingProducts, setIsLoadingProducts] = useState(false);
//   const [filterOptions, setFilterOptions] = useState({
//     furniture: false,
//     planters: false,
//     sortOrder: 'asc',
//   });

//   useEffect(() => {
//     const filterProducts = async () => {
//       let filtered = [...products];

//       if (filterOptions.furniture || filterOptions.planters) {
//         setIsLoadingProducts(true);

//         try {
//           const fetchedProducts = await fetchProducts(filterOptions);
//           filtered = fetchedProducts;
//         } catch (error) {
//           console.error('Error fetching products:', error);
//         } finally {
//           setIsLoadingProducts(false);
//         }
//       }

//       filtered.sort((a, b) => {
//         if (filterOptions.sortOrder === 'asc') {
//           return a.price - b.price;
//         } else {
//           return b.price - a.price;
//         }
//       });

//       setFilteredProducts(filtered);
//     };

//     filterProducts();
//   }, [filterOptions, products]);

//   const handleFilterChange = (e) => {
//     setFilterOptions({
//       ...filterOptions,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   // Cart state and functions
//   const [cart, setCart] = useState([]);
//   const [isCheckingOut, setIsCheckingOut] = useState(false);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       const updatedCart = cart.map(item => {
//         if (item.id === product.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId);
//     setCart(updatedCart);
//   };

//   const decrementQuantity = (productId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId) {
//         return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

//   const handleCheckout = () => {
//     setIsCheckingOut(true);
//   };

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div className="shop-page">
//       <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
//       <div className="shop-content">
//         {isCheckingOut ? (
//           <CheckoutForm cart={cart} />
//         ) : showCart ? (
//           <CartPage
//             cart={cart}
//             handleCheckout={handleCheckout}
//             removeFromCart={removeFromCart}
//             decrementQuantity={decrementQuantity}
//             addToCart={addToCart}
//           />
//         ) : (
//           <>
//             <div className="sidebar">
//               <h3>Filters</h3>
//               <div>
//                 <h4>Product type</h4>
//                 <div className="filter-option">
//                   <input
//                     type="checkbox"
//                     id="furniture"
//                     name="furniture"
//                     checked={filterOptions.furniture}
//                     onChange={handleFilterChange}
//                   />
//                   <label htmlFor="furniture">Furniture</label>
//                 </div>
//                 <div className="filter-option">
//                   <input
//                     type="checkbox"
//                     id="planters"
//                     name="planters"
//                     checked={filterOptions.planters}
//                     onChange={handleFilterChange}
//                   />
//                   <label htmlFor="planters">Planters</label>
//                 </div>
//               </div>
//             </div>
//             <div className="product-list">
//               <div className="product-list-header">
//                 <h2>Shop All</h2>
//                 <div>
//                   <span>Sort by:</span>
//                   <select name="sortOrder" value={filterOptions.sortOrder} onChange={handleFilterChange}>
//                     <option value="asc">Price (Low to High)</option>
//                     <option value="desc">Price (High to Low)</option>
//                   </select>
//                 </div>
//               </div>
//               {isLoadingProducts ? (
//                 <div>Loading products...</div>
//               ) : (
//                 <div className="product-grid">
//                   {filteredProducts.map(product => (
//                     <ProductCard key={product.id} product={product} addToCart={addToCart} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopPage;

// ShopPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import NavigationBar from '../Components/NavigationBar';
import { fetchProducts } from '../Components/api/productApi';
import '../Styles/ShopPage.css';
import CartPage from '../Pages/CartPage';
import CheckoutForm from '../Components/CheckoutForm';

const ShopPage = () => {
  const navigate = useNavigate();

  // Static product data
  const staticProducts = [
    { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
    { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
    { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
  ];

  const [products, setProducts] = useState(staticProducts);
  const [filteredProducts, setFilteredProducts] = useState(staticProducts);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    furniture: false,
    planters: false,
    sortOrder: 'asc',
  });

  useEffect(() => {
    const filterProducts = async () => {
      let filtered = [...products];

      if (filterOptions.furniture || filterOptions.planters) {
        setIsLoadingProducts(true);

        try {
          const fetchedProducts = await fetchProducts(filterOptions);
          filtered = fetchedProducts;
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setIsLoadingProducts(false);
        }
      }

      filtered.sort((a, b) => {
        if (filterOptions.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [filterOptions, products]);

  const handleFilterChange = (e) => {
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.checked,
    });
  };

  // Cart state and functions
  const [cart, setCart] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Function to handle back navigation
  const handleBackToShop = () => {
    navigate('/');
  };

  return (
    <div className="shop-page">
      <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
      <div className="shop-content">
        {isCheckingOut ? (
          <CheckoutForm cart={cart} />
        ) : showCart ? (
          <CartPage
            cart={cart}
            handleCheckout={handleCheckout}
            removeFromCart={removeFromCart}
            decrementQuantity={decrementQuantity}
            addToCart={addToCart}
            onBackToShop={handleBackToShop}
          />
        ) : (
          <>
            <div className="sidebar">
              <h3>Filters</h3>
              <div>
                <h4>Product type</h4>
                <div className="filter-option">
                  <input
                    type="checkbox"
                    id="furniture"
                    name="furniture"
                    checked={filterOptions.furniture}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor="furniture">Furniture</label>
                </div>
                <div className="filter-option">
                  <input
                    type="checkbox"
                    id="planters"
                    name="planters"
                    checked={filterOptions.planters}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor="planters">Planters</label>
                </div>
              </div>
            </div>
            <div className="product-list">
              <div className="product-list-header">
                <h2>Shop All</h2>
                <div>
                  <span>Sort by:</span>
                  <select name="sortOrder" value={filterOptions.sortOrder} onChange={handleFilterChange}>
                    <option value="asc">Price (Low to High)</option>
                    <option value="desc">Price (High to Low)</option>
                  </select>
                </div>
              </div>
              {isLoadingProducts ? (
                <div>Loading products...</div>
              ) : (
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
