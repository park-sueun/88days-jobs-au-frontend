export default function FormSelect({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}