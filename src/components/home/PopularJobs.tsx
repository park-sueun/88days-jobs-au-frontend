export default function PopularJobs() {

  const jobs = [
    {
      title: "Sydney Farm Work",
      image: "/sydney.jpg",
      description: "Top farm opportunities around Sydney."
    },
    {
      title: "Queensland Harvest Jobs",
      image: "/qld.jpg",
      description: "Seasonal fruit picking jobs."
    },
    {
      title: "Victoria Farm Jobs",
      image: "/vic.jpg",
      description: "High demand harvest jobs."
    },
    {
      title: "Working Holiday Jobs",
      image: "/au.jpg",
      description: "Perfect for completing 88 days."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16">

      <h2 className="text-3xl font-bold mb-6">
        Popular Farm Jobs
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {jobs.map((job, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">

            <img src={job.image} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold mb-2">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500">
                {job.description}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}