export const Header = (props) => {
  return (
    <header>
      <h1>{props.firstName}</h1>
      {props.title && <h2>{props.title}</h2>}
    </header>
  );
};
