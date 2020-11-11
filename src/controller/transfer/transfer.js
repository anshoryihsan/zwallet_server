const response = require("../../Helpers/res");
const transferModel = require("../../Model/mTransfer");

module.exports = {
  getAllDataTransferHistory: (req, res) => {
    // let { limit, page } = req.query;
    // if (!limit) limit = 5;
    // else limit = parseInt(limit);
    // if (!page) page = 1;
    // console.log(limit);
    // console.log(page);
    // console.log(req.query);
    // let { limit, page } = req.query;
    transferModel
      .getAllDataTransferHistory(req.tokenId, req.query)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  getAllDataTransferSearch: (req, res) => {
    transferModel
      .getAllDataTransferSearch(req.tokenId, req.query.search)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  setTransfer: (req, res) => {
    transferModel
      .setTransfer(req.id, req.body)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  updateTransfer: (req, res) => {
    transferModel
      .updateTransfer(req.params, req.body)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  deleteTransfer: (req, res) => {
    transferModel
      .deleteTransfer(req.params)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
};
