import React from "react";

const Birth = (props) => {
  const { classes, setBirth, birth, specialNumber, specialNumberHandler } =
    props;

  return (
    <section className={classes.birth}>
      <div className={classes["name-label"]}>
        <label>day</label>
        <input
          type="text"
          value={birth.day}
          onChange={(event) => setBirth({ ...birth, day: event.target.value })}
        />
      </div>

      <div className={classes["name-label"]}>
        <label>month</label>
        <input
          type="text"
          value={birth.month}
          onChange={(event) =>
            setBirth({ ...birth, month: event.target.value })
          }
        />
      </div>

      <div className={classes["name-label"]}>
        <label>year</label>
        <input
          type="text"
          value={birth.year}
          onChange={(event) => setBirth({ ...birth, year: event.target.value })}
        />
      </div>

      <div className={classes["name-label"]}>
        <label>1 - 9 number</label>
        <input
          type="text"
          value={specialNumber}
          onChange={specialNumberHandler}
        />
      </div>
    </section>
  );
};

export default Birth;
