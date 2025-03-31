const sortUsers = require("../app");

test("Testing the sorting function", () => {
  const sortedData = sortUsers();

  expect(sortedData[0].name === "Elon");
});
