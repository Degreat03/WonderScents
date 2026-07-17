function ProductCard({ item, onAdd }) {
  return (
    <div className="perfume-card flex flex-col items-center">
      {/* Standardized Wrapper Card */}
    <div className="w-full aspect-square bg-white flex items-center justify-center p-4 rounded-sm">
      <img 
        src={item.img} 
        alt={item.name} 
        className="max-h-full max-w-full object-contain" 
      />
    </div>
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