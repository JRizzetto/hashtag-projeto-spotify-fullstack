import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray, path }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a href={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
            //   id={currObj.id}
            //   name={currObj.name}
            //   image={currObj.image}
            //   banner={currObj.banner}
            {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
