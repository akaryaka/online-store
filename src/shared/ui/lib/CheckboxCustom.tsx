import Checkbox from "@mui/material/Checkbox";

const CheckboxCustom = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <>
      <div>
        <Checkbox {...label} defaultChecked />
      </div>
    </>
  );
};

export default CheckboxCustom;
