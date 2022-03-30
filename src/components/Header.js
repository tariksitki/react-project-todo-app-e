

import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, showAddTask, toggleShow}) => {
    // const handleClick = () => {
    //     alert("hello")
    // }

  return (
    <div className="header" >
        <h1>{title} </h1>
        {/* <Button  color = "purple" text = "Show Add Task Bar" /> */}

        <Button color = {showAddTask ? "red" : "purple"} text = {showAddTask ? "Close Add Task Bar" : "Show Add Tas Bar"} toggleShow = {toggleShow}  />
    </div>
  )
}
// Header.defaultProps = {
//     title : "Task Tracker default"
// }

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header;