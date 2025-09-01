import { useState } from "react";

// const handlevalue = (a) => {
//    setsett(a.target.value);
//   console.log({ name: setsett });
// };

const Control_input = () => {
  const [state, setstate] = useState({});
  const handlevalue = (e) => {
    setstate((value1) => ({ value1, [e.target.name]: e.target.value }));
    console.log(setstate);
  };
  const input = () => {
    console.log(state);
  };
  return (
    <div>
      <label>name:</label>
      <input
        type="text"
        name="name"
        placeholder="enter your "
        onChange={handlevalue}
      />
      <label>age:</label>
      <input type="number" name="age" placeholder="enter your " onChange={handlevalue} />
      <label>dept:</label>
      <input type="text" name="dept" placeholder="enter your " onChange={handlevalue} />
      <label>year:</label>
      <input type="text" name="year" placeholder="enter your " onChange={handlevalue} /> 
      <label>registernumber:</label>
      <input type="text"  name="registernumber" placeholder="enter your " onChange={handlevalue} />
      <button onClick={input}>click</button>
    </div>
  );
};

export default Control_input;
