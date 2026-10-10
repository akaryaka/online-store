import TextField from "@shared/ui/textField";

interface modalInputProps {
  label: string;
  placeholder?: string;
  children: React.ReactNode;
}

const ModalInput = ({ label, placeholder, children }: modalInputProps) => {
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

export default ModalInput;
