const {connect} = require("./client");
const {setupInput} = require("./input")

console.log("Connecting ...");
connect();


setupInput();

module.exports = {setupInput}