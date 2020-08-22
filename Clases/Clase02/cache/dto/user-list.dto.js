var userListMapping = function (list) {
    var valueReturned = list.map(function (el) {
        return { name: el.name, roles: el.roles, age: el.age };
    });
    return valueReturned;
};
/*
[
  {name: "user01", password: "123", token: "4445kdkd", age: 30, roles: ["admin"], location: "Lima"},
  {name: "user02", password: "456", token: "4445kdkd", age: "treinta", roles: ["admin"], location: "Lima"},
  {name: "user03", password: "789", token: "4445kdkd", age: 30, roles: ["admin"], location: "Lima"},
  {name: "user04", password: "321", token: "4445kdkd", age: 30, roles: ["admin"], location: "Lima"},
]
*/
