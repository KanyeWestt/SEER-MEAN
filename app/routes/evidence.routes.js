module.exports = app => {
  const evidences = require("../controllers/evidence.controller.js");

  var router = require("express").Router();

  // Create a new Evidence
  router.post("/", evidences.create);

  // Retrieve all Evidence
  router.get("/", evidences.findAll);

  // Retrieve all published Evidence
  router.get("/published", evidences.findAllPublished);

  // Retrieve a single Evidence with id
  router.get("/:id", evidences.findOne);

  // Update a Evidence with id
  router.put("/:id", evidences.update);

  // Delete a Evidence with id
  router.delete("/:id", evidences.delete);

  // Create a new Evidence
  router.delete("/", evidences.deleteAll);

  app.use("/api/evidences", router);
};
