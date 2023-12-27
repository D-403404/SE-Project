import React from "react";
import ImgPlaceholder from "../assets/icon2.jpg";
import Navbar from "./Navbar";
// import PropTypes from "prop-types";

export default function Login() {
  return (
    <div className="">
      <Navbar />
      <div className="h-[60.09px]"></div>
      <div className="h-[540.89px] /mt-[60.09px] /border-4 flex flex-col flex-wrap content-center /justify-center">
        <div className="flex /border-4 content-center justify-center">
          <img
            src={ImgPlaceholder}
            className="aspect-square h-[92px] mt-[30px]  border-2 border-gray-600"
            alt="logo"
          />
        </div>
        <LoginForm />
        <button className="flex justify-center text-xl font-bold text-red-600 hover:underline">
          Become a member
        </button>
      </div>
    </div>
  );
}

function Spacing() {
  return <div className="h-[30px]"></div>;
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ username: event.target.username, password: event.target.password });
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("You logged in!");
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
    event.preventDefault(); // prevent submitting the form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="text-xl font-bold">Email</div>
          <input
            className="h-[61px] w-[60vw] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="username"
            name="username"
            placeholder="Your registered username"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <Spacing />
        <div>
          <div className="text-xl font-bold">Password</div>
          <input
            className="h-[61px] w-[60vw] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="password"
            name="password"
            placeholder="Your password"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="flex justify-center pt-[30px] pb-[30px]">
          <button className="w-[254px] border text-white bg-primary text-[25px] font-black p-3 rounded-lg hover:bg-red-700" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    );
  }
}

//   InputField.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   handleChange: PropTypes.func,
// };

// InputField({ label, type, name, placeholder, handleChange }) {
//   return (
//     <div>
//       <div className="text-xl font-bold">{label}</div>
//       <input
//         className="h-[61px] w-[60vw] border-4 border-red-600 rounded-lg text-xl font-bold"
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// }
