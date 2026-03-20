"use client"

const jobs = [
  {
    title: "Fruit Picker",
    location: "Riverwood",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    title: "Packing Staff",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
  },
  {
    title: "Packing Staff",
    location: "Queensland",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
  },
]

export default function FeaturedJobs() {
  return (
    <section className="max-w-7xl mx-auto py-16">

      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Featured Jobs</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {jobs.map((job, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">

            <img
              src={job.image}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold text-lg">
                {job.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                {job.location}
              </p>

              <button className="text-blue-600 text-sm font-medium">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}