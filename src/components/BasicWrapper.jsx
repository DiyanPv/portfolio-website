export const BasicWrapper = (props, { pageTitle }) => {
  return (
    <div className="container flex flex-col">
      <div>{pageTitle}</div>
      {props.children}
    </div>
  );
};
