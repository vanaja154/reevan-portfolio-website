export default function WorkCard({ title, category, image, extraClasses }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md  ${extraClasses}`}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-b-xl transform transition-transform duration-300 hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-bold lg:text-2xl mb-1 text-white">{title}</h3>
        <p className="text-gray-500 text-sm lg:text-[20px]">{category}</p>
      </div>
    </div>
  );
}
