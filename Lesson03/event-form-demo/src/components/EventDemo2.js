import React, { Component } from 'react'

export default class EventDemo2 extends Component {
    // hàm sử lý sự kiện
    evenHandleClick1 = (param)=>{
        alert(param)
    }

    evenHandleClick2 = ()=>{
        alert("Xin chào")
    }
// trong class sử dụng từ khoá this
    render() {
        return (
        <div>
            <h2>Even Demo</h2>
            {/* gọi hàm có tham số */}
            <button onClick={()=>this.evenHandleClick1("Chung")}>Button01</button>
            {/* gọi hàm không có tham số */}
            <button onClick={()=>this.evenHandleClick2()}>Button02</button>
            <button onClick={this.evenHandleClick2}>Button03</button>
        </div>
        )
    }
}
