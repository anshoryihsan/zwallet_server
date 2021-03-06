// "use strict";
const transferTopUp = require("express").Router();
const authJWT = require("../Helpers/Midellware/auth");
const transfer = require("../controller/transfer/transfer");
transferTopUp
  .get("/", authJWT.authorization, transfer.getAllDataTransferHistory)
  .get("/search", authJWT.authorization, transfer.getAllDataTransferSearch)
  .post("/", authJWT.authorization, transfer.setTransfer)
  .put(
    "/:id",
    authJWT.authorization,
    authJWT.permitAdmin,
    transfer.updateTransfer
  )
  .delete(
    "/:id",
    authJWT.authorization,
    authJWT.permitAdmin,
    transfer.deleteTransfer
  );

module.exports = transferTopUp;
