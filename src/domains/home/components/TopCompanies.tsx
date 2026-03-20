"use client"

const companies = [
  {
    name: "Sunny Farms",
    location: "Queensland",
    rating: 4.8,
    reviews: 120,
    description: "Reliable fruit picking farm with consistent work and friendly staff.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    name: "Green Pack Co",
    location: "Melbourne",
    rating: 4.6,
    reviews: 98,
    description: "Packing jobs with stable hours and supportive environment.",
    image:
      "https://images.unsplash.com/photo-1581091870622-2f3c4b1c3a2c",
  },
  {
    name: "Harvest Crew",
    location: "Perth",
    rating: 4.7,
    reviews: 85,
    description: "Seasonal farm jobs with accommodation options.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
  },
  {
    name: "Agri Work Hub",
    location: "Victoria",
    rating: 4.9,
    reviews: 210,
    description: "Top-rated agency connecting workers with farms and factories.",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
  },
]

export default function FeaturedCompanies() {
  return (
    <section className="max-w-7xl mx-auto py-16">

      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">Top Companies</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {companies.map((company, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex"
          >
            {/* Image */}
            <img
              src={company.image}
              className="w-32 h-32 object-cover"
              alt={company.name}
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between w-full">

              <div>
                <h3 className="font-semibold text-lg">
                  {company.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {company.location}
                </p>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {company.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-medium">
                  ⭐ {company.rating} ({company.reviews})
                </span>

                <button className="text-blue-600 text-sm font-medium">
                  View Details
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  )
}