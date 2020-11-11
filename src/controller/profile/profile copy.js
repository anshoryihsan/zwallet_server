"use strict";
const e = require("express");
const response = require("../../Helpers/res2");
const db = require("../../Helpers/db");
exports.index = function (req, res) {
  response.ok("res-api aplication running", res);
};

//show data from table profile
exports.getDataProfile = function (req, res) {
  db.query(`SELECT * FROM profile`, function (error, rows, fields) {
    if (error) {
      response.clientError(error, res);
    } else {
      response.ok(rows, res);
    }
  });
};
//show data profile by id
exports.getDataProfileByID = function (req, res) {
  let { id } = req.params;
  db.query(`SELECT * FROM profile WHERE id =${id}`, function (
    error,
    rows,
    fields
  ) {
    if (error) {
      response.clientError(error, res);
    } else {
      response.ok(rows, res);
    }
  });
};

//insert data profile
exports.setDataProfile = function (req, res) {
  const { first_name, last_name, password, phone, email, verified } = req.body;
  db.query(
    `INSERT INTO profile (first_name, last_name, password, phone, email, verified)
        VALUES ('${first_name}','${last_name}','${password}','${phone}','${email}','${verified}')`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("success insert data", res);
      }
    }
  );
};

//update data profile by id
exports.updateDataProfile = function (req, res) {
  const { id } = req.params;
  const { first_name, last_name, password, phone, email, verified } = req.body;
  db.query(
    `UPDATE 
            profile 
        SET 
            first_name='${first_name}', last_name='${last_name}',password='${password}',phone='${phone}',email='${email}',verified='${verified}' 
        WHERE id=${id}`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success updated data", res);
      }
    }
  );
};

//delete data profile by id
exports.deleteDataProfile = function (req, res) {
  const { id } = req.params;
  db.query(`DELETE FROM profile WHERE id=${id}`, function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Success deleted data", res);
    }
  });
};
