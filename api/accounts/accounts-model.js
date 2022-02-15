const db = require("../../data/db-config");

const getAll = () => {
  // SELECT * from accounts;
  return db("accounts");
};

const getById = (id) => {
  //SELECT * from accounts WHERE id = 1;
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  //insert into account (name , budget ) values ('foo',1000;)
  const [id] = await db("accounts").insert(account, ["id"]);
  return getById(id);

  // if not async we will get only the id of the created post not the whole req body
  //db("accounts").insert(account)
};

const updateById = async (id, account) => {
  // UPDATE accounts set name="foo" , budget = 2000 where id =1;
  await db("accounts").where("id", id).update(account);
  return getById(id);
};

const deleteById = (id) => {
  // DELETE from accounts where id=1;
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
