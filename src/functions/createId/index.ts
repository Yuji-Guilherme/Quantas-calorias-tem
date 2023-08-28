const createId = () => {
  const idUUID = crypto.randomUUID();
  return idUUID;
};

export { createId };
