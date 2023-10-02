import Debounce from "../components/debounceHOOK";
import ThrottleExample from "../components/throttlingHook";

function CustomInput() {
  return (
    <div>
      <ThrottleExample/>
      <h1>Debounce</h1>
      <Debounce/>
    </div>
  );
}

export default CustomInput;
