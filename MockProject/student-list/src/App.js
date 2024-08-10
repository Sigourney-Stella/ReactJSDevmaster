// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ListStudents from "./components/ListStudents";
import Control from "./components/Control";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isToggle: false, // ẩn hiện form, false => ẩn form, true => hiện form
      student: "",
      actionName: "", //trạng thái của form cho trường hợp thêm,sửa,xoá (Save = Thêm; Update = Sửa, Close = Xem )
    };
  }

  //hàm xử lý chức năng ẩn hiện form(thêm, sửa, xem)
  handleAdd = (args, actionName) => {
    this.setState({
      isToggle: args,
      actionName: actionName,
    });
  };

  //submit form
  handleSubmit = (toggle) => {
    this.setState({
      isToggle: toggle,
    });
  };
  // view
  handleViewOrEdit = (toggle, student, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
    });
    // cập nhật đối tượng student
    this.setState({
      student: student,
    });
  };
  render() {
    //lấy dữ liệu từ listStudent từ state
    let { listStudent } = this.state;

    //render form
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          renderStudent={this.state.student}
          onHandleSubmit={this.handleSubmit}
        />
      ) : (
        ""
      );
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control onHandleAdd={this.handleAdd} />
            <ListStudents
              renderStudents={this.state.listStudent}
              onHandleViewOrEdit={this.handleViewOrEdit}
            />
          </div>
        </div>
        <div className="col-5 grid-margin">
          <div className="card">{elementForm}</div>
        </div>
      </div>
    );
  }
}
