import React, { Component } from "react";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //xử lý chức năng xem thông tin
  handleViewOrEdit = (student, actionName) => {
    this.props.onHandleViewOrEdit(true, student,actionName);
  };

  render() {
    let { key, renderStudent, stt } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td>{renderStudent.studentId}</td>
        <td>{renderStudent.studentName}</td>
        <td>{renderStudent.age}</td>
        <td>{renderStudent.sex ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderStudent, "Close")}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderStudent, "Update")}
            >
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
