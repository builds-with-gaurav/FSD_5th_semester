let products=[]
const getProductData=async()=> {
    const res=await fetch("https://dummyjson.com/products");
    const data=await res.json();
    products=data.products;
    //products.map((product) => console.log(product));

    const pricegreaterthantwelve=products.filter((product) => product.price>12);
    console.log(pricegreaterthantwelve);
}
getProductData();






// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => console.log(data.products))
//     .catch((error) => console.error(error));