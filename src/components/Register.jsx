import React, { useState } from "react";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "/src/index.css";

export default function Register() {
  return (
    <div className="">
      <Navbar />
      <div className="h-[60.09px]"></div>
      <div className="flex flex-col flex-wrap content-center justify-center">
        <div className="w-[60vw] /border-4 border-gray-600">
          <div className="text-4xl font-bold mt-[20px] mb-[50px]">Register</div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        fName: "",
        lName: "",
        dob: "",
        gender: "None",
        email: "",
        phone: "",
        addr: "",
        password: "",
        re_password: "",
      },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
    this.validate();
  }

  handleChangeDate(date) {
    let input = this.state.input;
    input.dob = date;
    this.setState({ input });
    console.log(this.state.input.dob);
  }

  handleChangeGender(event) {
    let input = this.state.input;
    input.gender = event.target.value;
    this.setState({ input });
    console.log(this.state.input.gender);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log("You created a new account!");
      console.log(
        "User info:\n" +
          "First name: " +
          this.state.input.fName +
          "\n" +
          "Last name: " +
          this.state.input.lName +
          "\n" +
          "DoB: " +
          this.state.input.dob +
          "\n" +
          "Gender: " +
          this.state.input.gender +
          "\n" +
          "Email: " +
          this.state.input.email +
          "\n" +
          "Phone: " +
          this.state.input.phone +
          "\n" +
          "Address: " +
          this.state.input.addr +
          "\n" +
          "Password: " +
          this.state.input.password +
          "\n"
      );
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["re_password"] !== "undefined"
    ) {
      if (input["password"] != input["re_password"]) {
        isValid = false;
        errors["password"] = "Confirm Password is not matched!";
      }
    }

    this.setState({ errors: errors });
    return isValid;
  }

  render() {
    // const genderOptions = [
    //   { value: "Male", label: "Male" },
    //   { value: "Female", label: "Female" },
    //   { value: "None", label: "Prefer not to say" },
    // ];

    // const style = {
    //     control: base => ({
    //       ...base,
    //       border: 4,
    //       // This line disable the blue border
    //       boxShadow: "none",
    //       height: 61,
    //         width: 28,
    //     //   h-[61px] w-[28vw] border-4 border-red-600 rounded-lg text-xl font-bold
    //     })
    //   };
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex flex-wrap justify-between /border-4 mb-[40px]">
          <div className="">
            <div className="text-xl font-bold">First name</div>
            <input
              className="h-[61px] w-[28vw] border-4 border-red-600 rounded-lg text-xl font-bold"
              type="text"
              name="fName"
              placeholder="Your first name"
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <div>
            <div className="text-xl font-bold">Last name</div>
            <input
              className="h-[61px] w-[28vw] border-4 border-red-600 rounded-lg text-xl font-bold"
              type="text"
              name="lName"
              placeholder="Your last name"
              onChange={this.handleChange}
              required
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap justify-between /border-4 mb-[40px]">
          <div className="">
            <div className="text-xl font-bold">Date of birth</div>
            <DatePicker
              className="h-[61px] w-[28vw] border-4 border-red-600 rounded-lg text-xl font-bold relative z-20"
              selected={this.state.input.dob}
              placeholderText="Select..."
              onChange={(date) => this.handleChangeDate(date)}
              required
            />
          </div>
          <div className="">
            <div className="text-xl font-bold">Gender</div>
            {/* <div className="flex flex-col justify-center content-center h-[61px] w-[28vw] border-4 border-red-600 rounded-lg font-bold">
              <Select
                options={genderOptions}
                classNames={{
                  control: () =>
                    "h-[50px] w-[27.4vw] text-xl",
                }}
                // styles={style}
                name="gender"
                onChange={this.handleChangeGender}
              />
            </div> */}
            <select
              className="h-[61px] w-[28vw] border-4 border-red-600 rounded-lg text-xl font-bold"
              value={this.state.input.gender}
              onChange={(e) => this.handleChangeGender(e)}
              required
            >
              {/* onChange={(chosen) => this.handleChangeGender(chosen)} */}
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"None"}>Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="mb-[40px]">
          <div className="text-xl font-bold">Email</div>
          <input
            className="h-[61px] w-[100%] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="mb-[40px]">
          <div className="text-xl font-bold">Phone</div>
          <input
            className="h-[61px] w-[100%] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="text"
            name="phone"
            placeholder="Your phone number"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="mb-[40px]">
          <div className="text-xl font-bold">Address</div>
          <input
            className="h-[61px] w-[100%] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="text"
            name="addr"
            placeholder="Your address"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="mb-[40px]">
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
        <div className="mb-[40px]">
          <div className="text-xl font-bold">Confirm Password</div>
          <input
            className="h-[61px] w-[60vw] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="password"
            name="re_password"
            placeholder="Enter password again"
            onChange={this.handleChange}
            required
          ></input>
          <div className="text-danger text-red-600">
            {this.state.errors.password}
          </div>
        </div>
        <div className="flex justify-center /pt-[30px] pb-[30px]">
          <button
            className="w-[254px] border text-white bg-primary text-[25px] font-black p-3 rounded-lg hover:bg-red-700"
            type="submit"
          >
            REGISTER
          </button>
        </div>
      </form>
    );
  }
}
