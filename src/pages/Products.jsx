import React from "react";
import "./styles/Products.css";
import ProductCard from "../components/productcard/ProductCard";
function Products() {
  const arrOfProducts = [
    {
      name: "Pastry Cake",
      imgSrc:
        "https://thumbs.dreamstime.com/b/fresh-bread-shelves-bakery-90006158.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://i.insider.com/58ff9b89dd0895876d8b4638?width=1000&format=jpeg&auto=webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://media.licdn.com/dms/image/D4D12AQHmF4CGZwon2g/article-cover_image-shrink_720_1280/0/1676543971561?e=2147483647&v=beta&t=3lvpwmXu18_jHXbKgcsXtAxE_6OP8QYr5nYSw5NvN3Y",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://sallysbakingaddiction.com/wp-content/uploads/2015/11/homemade-honey-butter-rolls-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/004/418/358/large_2x/sweet-fresh-homemade-buns-on-white-background-free-photo.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
    {
      name: "Pastry Cake",
      imgSrc:
        "https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,possimus nostrum!",
    },
  ];

  function handleBtnClick(product) {
    const phoneNumber = "7798476427";
    const message = `Hi, I'm interested in the  *${product.name}*:\n${product.description}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div className="products-list">
      <h1 className="products-list-heading">
        <span>Products</span>
      </h1>
      <div className="products-list-para">
        <p>
          "Experience culinary bliss with our diverse menu, where each bite is a
          burst of exquisite flavors and satisfaction."
        </p>
      </div>
      <div className="products-list-container">
        {arrOfProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleBtnClick={handleBtnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
