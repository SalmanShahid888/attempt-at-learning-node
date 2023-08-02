const express = require("express");

const router = express.Router();

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get Contact" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: "Get Contact" });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact with ${req.params.id}` });
};

const createContact = (req, res) => {
  res.status(200).json({ message: "Contact Created" });
};

module.exports = {
  getContact,
  updateContact,
  deleteContact,
  createContact,
  getContacts,
};
