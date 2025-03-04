interface myType {
  h3: string;
  p: string;
};

export default function ContentHeader(props : myType) {
  return (
    <header>
      <p>{props.p}</p>
      <h3>{props.h3}</h3>
    </header>
  );
}
