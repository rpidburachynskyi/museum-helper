const sqlite = require("sqlite3").verbose();
const path = require("path");

exports.db = new sqlite.Database(path.resolve(__dirname, "../databases/nice.db"));

const SERVER_ERROR = "SERVER_ERROR";

exports.serverError = () => ({ error: SERVER_ERROR });
exports.customError = (type) => ({ type });