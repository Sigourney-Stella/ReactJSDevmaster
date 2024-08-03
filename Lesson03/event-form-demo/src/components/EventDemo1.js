import React from 'react'

export default function EventDemo1() {
    
    // hàm xử lý sự kiện
    // const evenHandleClick1 = ()=>{
    //     alert("evenHandleClick1 - Button01")
    // }
    //
    const evenHandleClick2 = ()=>{
        alert("evenHandleClick2 - Button02")
    }
    const evenHandleClick3 = (param)=>{
        alert("Xin chào, \n" + param)
    }
    return (
        <div className='alert alert-info'> 
        <h2>Event Demo</h2>
        {/* hàm được gọi một lần duy nhất khi trang được render */}
        {/* <button onClick={evenHandleClick1()}>Button01</button> */}

        {/* hàm được gọi khi người dùng click vào  */}
        <button onClick={evenHandleClick2}>Button02</button>

        {/* gọi hàm -> arrow function  */}
        <button onClick={()=>evenHandleClick2()}>Button02</button>

        {/* gọi hàm có tham số */}
        <button onClick={()=>evenHandleClick3("Devmaster")}>Button03</button>
        <button>Button04</button>
        </div>
    )
}
