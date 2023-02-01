import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="form-1">
          <input type="text" name="name" id="name" />
          <input type="text" name="mail" id="mail" />
        </div>
        <input type="text" name="message" id="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
