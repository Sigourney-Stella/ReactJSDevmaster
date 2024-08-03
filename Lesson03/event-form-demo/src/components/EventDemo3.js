import React, { Component } from 'react'

export default class EventDemo3 extends Component {
    
    constructor(props){
        super(props);
        // khởi tạo state
        this.state ={
            name: "Chung",
            email: "chung@gmail.com"
        }
    }
    // hàm xử lý sự kiện, lấy dữ liệu trong state, chuyển lên component App thông qua props 
    eventHandleClick = ()=>{
        // chuyển lên app
        this.props.onReciver(this.state.name);
    }
    render() {
        let {renderCompany} = this.props; 
        return (
        <div className='alert alert-danger'>
            <h2>Even: sử dụng dữ liệu state, props</h2>
            <hr/>
            <p>Xin chàom, {this.state.name}</p>
            <button onClick={this.eventHandleClick}>Chuyển dữ liệu `name` lên app thông qua props</button>
            <hr/>
            <h3>{this.props.renderCompany}</h3>
            <h3>{renderCompany}</h3>
        </div>
        )
    }
}
