import React from "react";

const Title = (props) => {
  const { classes } = props;

  return (
    <div className={classes.title}>
      <h1>Create Chart</h1>
    </div>
  );
};

export default Title;
