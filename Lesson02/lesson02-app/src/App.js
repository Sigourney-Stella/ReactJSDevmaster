import './App.css';
import ClassCompState from './ClassCompState';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import JSX_Expression from './components/JSX_Expression';

function AppLesson02() {
  return (
    <div className="container border my-3">
      <header className="">
        <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy' />
      </header>
      <hr></hr>
      <h2> Biểu thức JSX </h2>
       {/* eslint-disable-next-line  */}
      <JSX_Expression/>
      <FuncComp  renderFullName="Chung Trịnh Văn" renderCompany="Devmaster Academy" />
      <FuncComp1 renderData="Dữ liệu của thuộc tính renderDate" renderStudents="Student List" />
      <ClassComp renderFullName="Chung Trịnh Văn" renderCompany="Devmaster Academy"/>
      <ClassComp renderFullName="Nguyễn Thị Hải" renderCompany="Devmaster Academy"/>

      <ClassCompState/>
    </div>
  );
  
}

export default AppLesson02;
