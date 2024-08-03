import "./App.css";
import EventDemo1 from "./components/EventDemo1";
import EventDemo2 from "./components/EventDemo2";
import EventDemo3 from "./components/EventDemo3";
import EventDemo4 from "./components/EventDemo4";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";
import ListObjectRender from "./components/ListObjectRender";
import ListRender from "./components/ListRender";

function App() {
  //hàm nhận dữ liệu từ EventDemo3 và xử lý
  const handleReciver = (param) => {
    alert("App: Xin chào," + param);
  };

  //submit
  const handleSubmit = (args, val) => {
    alert(args + "\n" + val);
  };

  const handleSubmitForm2 = (param) => {
    console.log(param);
  };

  return (
    <div className="container border my-3">
      <header className="">
        <img
          src="https://devmaster.edu.vn/images/logo.png"
          alt="Devmaster Academy"
        />
      </header>
      {/* eslint-disable-next-line  */}
      <EventDemo1 />
      <EventDemo2 />
      <EventDemo3 renderCompany="Devmaster" onReciver={handleReciver} />
      <EventDemo4 onSubmit={handleSubmit} />
      <hr />
      <FormDemo1 />
      <FormDemo2 onSubmit={handleSubmitForm2} />
      <hr />
      <ListRender />
      <hr />
      <ListObjectRender />
    </div>
  );
}

export default App;
