import React from 'react';

const ButtonFunctionalComponent = () => {
  const handleClick = (buttonName) => {
    alert(buttonName);
  };

  return (
    <div>
      <button onClick={() => handleClick('Create')}>Create</button>
      <button onClick={() => handleClick('Update')}>Update</button>
      <button onClick={() => handleClick('Delete')}>Delete</button>
    </div>
  );
};

export default ButtonFunctionalComponent;
