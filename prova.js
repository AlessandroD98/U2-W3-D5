// const object = {
//   name: "Alessandro",
//   surname: "D'Ascenzo",
//   gender: "male",
// };
// const newobj = Object.keys(object);
// // console.log(newobj);
// for (let i = 0; i < newobj.length; i++) {
//   const element = newobj[i];
//   //   console.log(element);
//   if (element === "gender") {
//     newobj.pop(element);
//   }
//   console.log(newobj);
// }
const object = {
  name: "Alessandro",
  surname: "D'Ascenzo",
  gender: "male",
};
const deleteProp = function delprop(obj, str) {
  const objarr = Object.keys(object);
  for (let i = 0; i < objarr.length; i++) {
    const element = objarr[i];
    if (element === str) {
      console.log(objarr);
      objarr.splice(i, 1);
      //   const obj = { ...objarr };
    }
  }
  return objarr;
};
console.log(deleteProp(object, "surname"));
