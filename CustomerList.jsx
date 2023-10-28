import React, { Component } from "react";
export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 81,
        name: "Raghu",
        phone: "91829191",
        address: { city: "delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 88,
        name: "Ajay",
        phone: "1239011",
        address: { city: "Karnal" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 90,
        name: "Arsh",
        phone: "99226711",
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1017/60",
      },
      {
        id: 91,
        name: "Harsh",
        phone: "88128112",
        address: { city: "Goa" },
        photo: "https://picsum.photos/id/1019/60",
      },
      {
        id: 99,
        name: "Milan",
        phone: "7778172",
        address: { city: "Kolhapur" },
        photo: "https://picsum.photos/id/1029/60",
      },
    ],
  };

 // customerNameStyle=(custName)=>{
   // if(custName.startsWith("A"))return "green-highlight border-left";
    //else if(custName.startsWith("M")) return "red-highlight border-right";
    //else return "";
  //};

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust,index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button 
              className="btn btn-sm btn-secondary" 
              onClick={()=>{
                this.onChangePictureClick(cust,index);}}>
                  Change photo</button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick=(cust,index)=>{
   // console.log(cust);
    //console.log(index);
    var custArr=this.state.customers;
    custArr[index].photo="https://picsum.photos/id/104/60";
    this.setState({customers:custArr});

  };
} 
