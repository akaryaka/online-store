import TextField from "../textField/TextField";

interface modalInputProps {
  label: string;
  placeholder?: string;
}

export const ModalInput = ({
  label,
  placeholder,
  children,
}: modalInputProps) => {
  return (
    <>
      <div>
        <label
          className="text-[18px] leading-[150%] text-[#8F8F8F]"
          htmlFor="modal-signin-input"
        >
          {label}
        </label>
        <TextField
          className="block h-[auto] text-[16px] text-[#000]"
          id="modal-signin-input"
          placeholder={`${placeholder}`}
        >
          {children}
        </TextField>
      </div>
    </>
  );
};
