// components/CustomTable.jsx
export default function CustomTable({ title, buttonText, note, noteLink, rows }) {
    return (
      <div className="mt-10">
        {/* Section Title & Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <a
            href="#"
            className="bg-white border border-[#f28c73] text-[#f28c73] px-5 py-2 rounded-full font-semibold hover:bg-[#f28c73] hover:text-white transition"
          >
            {buttonText} →
          </a>
        </div>
  
        {/* Responsive Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">Category</th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">Features</th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-[#f3dcd8]">
                  <td className="bg-white font-bold text-lg px-6 py-4">{row.category}</td>
                  <td className="bg-[#fff7f6] px-6 py-4">{row.features}</td>
                  <td className="bg-[#fff7f6] text-center px-6 py-4">
                    <div className="text-xs text-gray-600">starting from</div>
                    <div className="text-2xl font-bold text-[#1a1a40]">{row.price}</div>
                    {row.oldPrice && (
                      <div className="line-through text-sm text-gray-500">{row.oldPrice}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Note */}
        {note && (
          <p className="text-gray-600 text-sm mt-5">
            {note}{" "}
            <a href="#" className="text-[#f28c73]">
              {noteLink}
            </a>
            .
          </p>
        )}
      </div>
    );
  }
  