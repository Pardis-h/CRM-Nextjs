export default function FormInput({ label, name, value, onChange, type }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className=" text-indigo-500">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className=" rounded-md border-indigo-400 border-2 p-3"
      />
    </div>
  );
}
