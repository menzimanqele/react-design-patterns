export function NumberedList({
    items,
    resourceNAme,
    itemComponent: ItemComponent,
  }) {
    return (
      <>
        {items.map((item, index) => (

            <>   
            <h3>{index +1}</h3>
            <ItemComponent key={index} {...{ [resourceNAme]: item }} />
            </>
       
        ))}
      </>
    );
  }
  