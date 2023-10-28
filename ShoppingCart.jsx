import React,{Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
 constructor(props)
 {
  console.log("constructor-shopping cart");
 super(props);
 this.state = {
   products: [
     { id: 1, productName: "iphone", price: 8221, quantity: 0 },
//     { id: 4, productName: "Nokia", price: 9000, quantity: 0 },
  //   { id: 9, productName: "Sony", price: 7500, quantity: 0 },
    // { id: 10, productName: "HTC", price: 9900, quantity: 0 },
     //{ id: 21, productName: "iball", price: 7210, quantity: 0 },
     //{ id: 41, productName: "Samsung", price: 10900, quantity: 0 },
     //{ id: 111, productName: "Vivo", price: 6711, quantity: 0 },
   ],
 };
 }

  
  render() {
    console.log("render-shopping cart");
    return (
      <div className="container-fluid">
        <h4>Shopping cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn-btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount(){
    //fetch data from data source
    console.log("component did mount-shopping cart");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Component did update-shopping cart",prevProps,prevState,this.props,this.state);
  //  if (prevProps.x !=this.props.x){

    //}

  }
  componentWillUnmount(){
    console.log("ComponentWillUnmount - ShoppingCart");
  }
  componentDidCatch(error,info){
    console.log("componentWillUnmount-shopping cart");
    console.log(error,info);
  
  localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }
  handleIncrement = (product,maxValue) => {
    console.log("handleIncrement", product);
    // product.quantity =product.quantity + 1;
    //get details of
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);
    if(allProducts[index].quantity<maxValue){
    allProducts[index].quantity++;
    this.setState({ products: allProducts });
    }
    
  };
  handleDecrement = (product,minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity >minValue){
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
    
  };
  handleDelete = (product)=>{
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(window.confirm("are you sure to delete"))
    {
    allProducts.splice(index, 1);
    this.setState({ products: allProducts });
    }
    
  };
}

  //handleDecrement = (product) => {
   // console.log("handleDecrement", product);
  //};
