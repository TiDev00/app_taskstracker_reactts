export const Button = (props: {
  color: string | undefined;
  text: string | undefined;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  backgroundColor: "black",
};
