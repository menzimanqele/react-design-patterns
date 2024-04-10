export function RegularList({
  items,
  resourceNAme,
  itemComponent: ItemComponent,
}) {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceNAme]: item }} />
      ))}
    </>
  );
}
