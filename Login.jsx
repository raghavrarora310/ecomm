import React,{Component}from "react";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={email:"",password:"",message:"Hi paybingo"};
    }
    render(){
        return (
          <div className="col-lg-9">
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            <div className="form-group form-row">
              <label className="col-lg-4">Email:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                  // console.log(this.state.email)
                }}
              />
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4">Password:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                  // console.log(this.state.email)
                }}
              />
            </div>
            <div class="text-right">
              <button className="btn btn-primary" onClick={this.onLoginClick}>
                Login
              </button>
            </div>
          </div>
        );
    }
    onLoginClick=()=>{
        console.log(this.state);
        if(this.state.email=="admin@test.com" && this.state.password=="admin123"){
            //success
            this.message = <span className="text-success">Successfully Loggedin</span>;
        }
        else
        {
            //error
        }
    };
}
