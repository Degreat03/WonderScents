function ProductCard({ item, onAdd }) {
  return (
    <div className="perfume-card flex flex-col items-center">
      <img src={item.img} alt={item.name} className="w-[200px] h-[200px]" />
      <h3 className="text-lg mb-[10px]">{item.name}</h3>
      <p className="text-md font-[700] mb-[10px]">₦{item.price}</p>
      <button onClick={() => onAdd(item)} className="bg-primary py-[5px] px-[15px] 
      rounded-2xl text-white 
      cursor-pointer hover:bg-opacity transition-all
      ">Add to Cart</button>
    </div>
  );
}
export default ProductCard;