export default function PricingTable() {
  const sections = [
    {
      title: "Website Design Packages",
      linkText: "Website Design Services",
      items: [
        {
          name: "Basic",
          desc: "1 Domain Name, 10 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "2 Design Concepts, 2 Revisions",
          price: "$400*",
          oldPrice: "$600*",
        },
        {
          name: "Enhance",
          desc: "1 Domain Name, 15 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "3 Design Concepts, 3 Revisions",
          price: "$800*",
          oldPrice: "$900*",
        },
        {
          name: "Premium",
          desc: "1 Domain Name, 25 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "5 Design Concepts, Unlimited Revisions",
          price: "$1200*",
          oldPrice: "$1500*",
        },
      ],
    },
    {
      title: "App Development Packages",
      linkText: "App Development Services",
      items: [
        {
          name: "Basic",
          desc: "1 Domain Name, 10 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "2 Design Concepts, 2 Revisions",
          price: "$400*",
          oldPrice: "$600*",
        },
        {
          name: "Enhance",
          desc: "1 Domain Name, 15 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "3 Design Concepts, 3 Revisions",
          price: "$800*",
          oldPrice: "$900*",
        },
        {
          name: "Premium",
          desc: "1 Domain Name, 25 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "5 Design Concepts, Unlimited Revisions",
          price: "$1200*",
          oldPrice: "$1500*",
        },
      ],
    },
    {
      title: "Digital Marketing Packages",
      linkText: "Digital Marketing Services",
      items: [
        {
          name: "Basic",
          desc: "1 Domain Name, 10 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "2 Design Concepts, 2 Revisions",
          price: "$400*",
          oldPrice: "$600*",
        },
        {
          name: "Enhance",
          desc: "1 Domain Name, 15 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "3 Design Concepts, 3 Revisions",
          price: "$800*",
          oldPrice: "$900*",
        },
        {
          name: "Premium",
          desc: "1 Domain Name, 25 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible",
          bold: "5 Design Concepts, Unlimited Revisions",
          price: "$1200*",
          oldPrice: "$1500*",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#fceeed] text-[#222] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {sections.map((section, i) => (
          <div key={i} className="mb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <a
                href="/contact"
                className="mx-auto md:mx-0 bg-white border border-[#f28c73] text-[#f28c73] px-5 py-2 rounded-full font-semibold hover:bg-[#f28c73] hover:text-white transition"
              >
                Request A Quote →
              </a>
            </div>

            {/* Desktop Table */}
            <div className="overflow-x-auto mt-6 hidden md:block">
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
                  {section.items.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index < section.items.length - 1
                          ? "border-b border-[#f3dcd8]"
                          : ""
                      }
                    >
                      <td className="bg-white font-bold text-lg px-6 py-4">
                        {item.name}
                      </td>
                      <td className="bg-[#fff7f6] px-6 py-4">
                        {item.desc} <br />
                        <b>{item.bold}</b>
                      </td>
                      <td className="bg-[#fff7f6] text-center px-6 py-4">
                        <div className="text-xs text-gray-600">
                          starting from
                        </div>
                        <div className="text-2xl font-bold text-[#1a1a40]">
                          {item.price}
                        </div>
                        <div className="line-through text-sm text-gray-500">
                          {item.oldPrice}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="block md:hidden mt-6 space-y-4">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden"
                >
                  {/* Heading */}
                  <div className="bg-[#f8b19c] text-center py-3 font-bold text-lg border-b border-gray-300">
                    {item.name}
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="font-semibold text-gray-800 mt-2">
                      {item.bold}
                    </p>
                    <div className="mt-3">
                      <div className="text-xs text-gray-500">starting from</div>
                      <div className="text-2xl font-bold text-[#1a1a40]">
                        {item.price}
                      </div>
                      <div className="line-through text-sm text-gray-500">
                        {item.oldPrice}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer link */}
            <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
              Our web design costs are very reasonable. Know more about our{" "}
              <a href="/services" className="text-[#f28c73] underline">
                {section.linkText}
              </a>
              .
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
