
const RestrauntCard = (props) => {
    console.log(props)
    return (
      <div className="card">
      <div className="like">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></div>
        <img src={props.mob_data.image} alt="fail to load" />
        <h4 className="namevar">{props.mob_data.variant_name}</h4>
        <h4 className="stock">{props.mob_data.stock_sataus}</h4>
        <h6 className="price"> ₹{props.mob_data.price}</h6>
        {/* <h4 className="dis">{props.mob_data.discount_percent}</h4> */}
        {/* <h4>$4445.5</h4> */}
      </div>
    );
  };
  export default RestrauntCard;
