// components/PricingTable.jsx
export default function PricingTable() {
  return (
    <div className="bg-[#fceeed] text-[#222] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">
          <span className="pb-1">
            Flexible & Transparent Pricing
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Section Title & Button */}
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-left text-xl font-semibold">
            Website Design Packages
          </h2>
          <a
            href="#"
            className="bg-white border border-[#f28c73] text-[#f28c73] px-5 py-2 rounded-full font-semibold hover:bg-[#f28c73] hover:text-white transition"
          >
            Request A Quote →
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Category
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Features
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Basic */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Basic</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 10 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>2 Design Concepts, 2 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$400*</div>
                  <div className="line-through text-sm text-gray-500">
                    $600*
                  </div>
                </td>
              </tr>

              {/* Enhance */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Enhance</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 15 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>3 Design Concepts, 3 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$800*</div>
                  <div className="line-through text-sm text-gray-500">
                    $900*
                  </div>
                </td>
              </tr>

              {/* Premium */}
              <tr>
                <td className="bg-white font-bold text-lg px-6 py-4">Premium</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 25 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>5 Design Concepts, Unlimited Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$1200*</div>
                  <div className="line-through text-sm text-gray-500">
                    $1500*
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="note text-gray-600 text-sm mt-5">
          Our web design rates are very reasonable. Know more about{" "}
          <a href="#" className="text-[#f28c73]">
            our Website Design Services
          </a>
          .
        </p>

        {/* Section Title & Button */}
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-left text-xl font-semibold">
            Website Design Packages
          </h2>
          <a
            href="#"
            className="bg-white border border-[#f28c73] text-[#f28c73] px-5 py-2 rounded-full font-semibold hover:bg-[#f28c73] hover:text-white transition"
          >
            Request A Quote →
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Category
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Features
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Basic */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Basic</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 10 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>2 Design Concepts, 2 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$400*</div>
                  <div className="line-through text-sm text-gray-500">
                    $600*
                  </div>
                </td>
              </tr>

              {/* Enhance */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Enhance</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 15 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>3 Design Concepts, 3 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$800*</div>
                  <div className="line-through text-sm text-gray-500">
                    $900*
                  </div>
                </td>
              </tr>

              {/* Premium */}
              <tr>
                <td className="bg-white font-bold text-lg px-6 py-4">Premium</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 25 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>5 Design Concepts, Unlimited Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$1200*</div>
                  <div className="line-through text-sm text-gray-500">
                    $1500*
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="note text-gray-600 text-sm mt-5">
          Our web design rates are very reasonable. Know more about{" "}
          <a href="#" className="text-[#f28c73]">
            our App Development Services
          </a>
          .
        </p>

        {/* Section Title & Button */}
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-left text-xl font-semibold">
            Website Design Packages
          </h2>
          <a
            href="#"
            className="bg-white border border-[#f28c73] text-[#f28c73] px-5 py-2 rounded-full font-semibold hover:bg-[#f28c73] hover:text-white transition"
          >
            Request A Quote →
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Category
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Features
                </th>
                <th className="bg-[#f8b19c] text-left px-6 py-3 font-bold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Basic */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Basic</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 10 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>2 Design Concepts, 2 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$400*</div>
                  <div className="line-through text-sm text-gray-500">
                    $600*
                  </div>
                </td>
              </tr>

              {/* Enhance */}
              <tr className="border-b border-[#f3dcd8]">
                <td className="bg-white font-bold text-lg px-6 py-4">Enhance</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 15 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>3 Design Concepts, 3 Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$800*</div>
                  <div className="line-through text-sm text-gray-500">
                    $900*
                  </div>
                </td>
              </tr>

              {/* Premium */}
              <tr>
                <td className="bg-white font-bold text-lg px-6 py-4">Premium</td>
                <td className="bg-[#fff7f6] px-6 py-4">
                  1 Domain Name, 25 Web Pages including 1 Home page, SEO
                  Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile
                  Compatible <br />
                  <b>5 Design Concepts, Unlimited Revisions</b>
                </td>
                <td className="bg-[#fff7f6] text-center px-6 py-4">
                  <div className="text-xs text-gray-600">starting from</div>
                  <div className="text-2xl font-bold text-[#1a1a40]">$1200*</div>
                  <div className="line-through text-sm text-gray-500">
                    $1500*
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="note text-gray-600 text-sm mt-5">
          Our web design rates are very reasonable. Know more about{" "}
          <a href="#" className="text-[#f28c73]">
             our Digital Marketing Services
          </a>
          .
        </p>
      </div>
    </div>
  );
}
