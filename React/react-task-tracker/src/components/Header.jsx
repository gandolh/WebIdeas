import Button from "./Button";
import {useLocation} from 'react-router-dom'  
const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === '/' &&
      <Button
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Close" : "Add"}
        onClick={props.onAdd}
      />}
    </header>
  );
};

export default Header;
