namespace InputText {
  export type Props = {
    label: string;
    name: string;
    type?: string;
    errors?: Array<string>;
  };
}

export function InputText({
  label,
  name,
  type = "text",
  errors = [],
}: InputText.Props) {
  return (
    <div>
      <label
        className={`
            flex flex-col gap-1 font-bold
            ${errors.length ? "text-red-800" : "text-black"}
        `}
      >
        {label}
        <input
          name={name}
          type={type}
          className={`
            border-2 rounded-md py-1 px-2 font-normal text-black
            ${errors.length ? "border-red-800" : "border-black"}
          `}
        />
      </label>
      <div className="text-red-800 flex flex-col">
        {errors.map((error) => (
          <span key={error}>{error}</span>
        ))}
      </div>
    </div>
  );
}
