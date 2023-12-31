const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/contactController.js");

router.route("/").get(getContacts);

router.route("/some").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
