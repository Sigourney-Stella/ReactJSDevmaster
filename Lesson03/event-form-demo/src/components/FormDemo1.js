import React, { Component } from "react";

export default class FormDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Devmaster",
    };
  }

  handleChange = (event) => {
    //trường hợp có nhiều điều khiển (nhiều form)
    //lấy tên điều khiển
    let name = event.target.name;
    // lấy giá trị điều khiển
    let val = event.target.value;
    //cập nhật state khi thay đổi
    this.setState({
      [name]: val,
    });

    //trường hợp có một điều khiển(một form)
    // this.setState({
    //     studentName:event.target.value
    // })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.studentName);
  };
  render() {
    return (
      <div className="alert alert-info">
        <h1>Form: Controlled Component</h1>
        <form>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              className="form-control"
              value={this.state.studentName}
              name="studentName"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary my-2" onClick={this.handleSubmit}>
            Submit
          </button>
          <p>{this.state.studentName}</p>
        </form>
      </div>
    );
  }
}
