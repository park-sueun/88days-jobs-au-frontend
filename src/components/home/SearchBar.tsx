export default function SearchBar() {
  return (
    <div className="flex justify-center mt-10">

      <div className="flex items-center bg-white shadow-lg rounded-full p-2 w-[900px] border border-orange-400">

        <input
          type="text"
          placeholder="Search City, Location, or Parking Spot Name"
          className="flex-1 px-6 py-3 outline-none rounded-full"
        />

        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium">
          Search
        </button>

        <button className="ml-4 bg-gray-900 text-white px-6 py-3 rounded-full">
          Find Your Nearest Parking Space
        </button>

      </div>

    </div>
  );
}