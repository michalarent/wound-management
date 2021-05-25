import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function MultiSelect() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={["1", "2"]}
    />
  );
}
