exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log("checkAccountPayload");
  next();
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountNAmeUnique");
  next();
};

exports.checkAccountId = (req, res, next) => {
  console.log("checkAccountID");
  // DO YOUR MAGIC
  next();
};
