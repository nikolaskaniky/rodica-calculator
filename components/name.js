import React from "react";

const Name = (props) => {
  const { classes, firstNameHandler, lastNameHandler, lastName, firstName } =
    props;

  return (
    <section className={classes["name"]}>
      <div className={classes["name-label"]}>
        <label>Last Name</label>
        <input type="text" 
        value={lastName} onChange={lastNameHandler} 
        />
      </div>

      <div className={classes["name-label"]}>
        <label>First Name</label>
        <input type="text" 
        value={firstName} onChange={firstNameHandler}
         />
      </div>
    </section>
  );
};

export default Name;
