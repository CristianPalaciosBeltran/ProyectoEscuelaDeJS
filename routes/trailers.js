const express = require("express");
const TrailersService = require("../services/trailers");

function trailersApi(app) {
  const router = express.Router();
  app.use("/app/trailers", router);

  const trailersService = new TrailersService();
  router.get("/", async function(req, res, next) {
    const { tags } = req.query;
    try {
      const trailers = await trailersService.getTrailers({ tags });

      res.status(200).json({
        data: trailers,
        message: "trailers listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:trailerId", async function(req, res, next) {
    const { trailerId } = req.params;

    try {
      const trailers = await trailersService.getTrailer({ trailerId });

      res.status(200).json({
        data: trailers,
        message: "trailers retrieved"
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    try {
      const { body: trailer } = req;
      const createTrailerId = await trailersService.createTrailer({ trailer });

      res.status(201).json({
        data: createTrailerId,
        message: "trailer created"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:trailerId", async function(req, res, next) {
    const { trailerId } = req.params;
    const { body: trailer } = req;
    try {
      const updatedTrailerId = await trailersService.updateTrailer({
        trailerId,
        trailer
      });

      res.status(200).json({
        data: updatedTrailerId,
        message: "trailers updated"
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:trailerId", async function(req, res, next) {
    const { trailerId } = req.params;
    try {
      const deleteTrailerId = await trailersService.deleteTrailer({
        trailerId
      });

      res.status(200).json({
        data: deleteTrailerId,
        message: "trailers deleted"
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = trailersApi;
