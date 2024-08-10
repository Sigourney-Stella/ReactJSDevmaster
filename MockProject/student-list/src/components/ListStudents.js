import React, { Component } from "react";
import Students from "./Students";

export default class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // hàm xử lý sự kiện
  handleViewOrEdit = (toggle, student, actionName) => {
    this.props.onHandleViewOrEdit(toggle, student, actionName);
  };

  render() {
    let { renderStudents } = this.props;
    console.log(renderStudents);
    let elementStudent = renderStudents.map((student, index) => {
      return (
        <Students
          key={index}
          renderStudent={student}
          stt={index + 1}
          onHandleViewOrEdit={this.handleViewOrEdit}
        />
      );
    });
    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>{elementStudent}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
