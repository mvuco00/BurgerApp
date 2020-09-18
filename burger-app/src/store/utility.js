export const updateObjects = (newObject, updatedProperties) => {
  return {
    ...newObject,
    ...updatedProperties,
  };
};
