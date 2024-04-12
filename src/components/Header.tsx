import { useLocation } from "react-router-dom";
import { Button } from "./Button";

export const Header = (props: {
  title: string | undefined;
  onAdd: () => void;
  showAddTask: boolean;
}) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color={props.showAddTask ? "red" : "green"}
          text={props.showAddTask ? "Close" : "Add"}
          onClick={props.onAdd}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Hello",
};
