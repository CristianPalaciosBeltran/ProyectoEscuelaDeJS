const MongoLib = require("../lib/mongo");

class TrailersService {
  constructor() {
    this.collection = "trailers";
    this.mongoDB = new MongoLib();
  }

  async getTrailers({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const trailers = await this.mongoDB.getAll(this.collection, query);
    return trailers || [];
  }

  async getTrailer({ trailerId }) {
    const trailer = await this.mongoDB.get(this.collection, trailerId);
    return trailer || {};
  }

  async createTrailer({ trailer }) {
    const createTrailerId = await this.mongoDB.create(this.collection, trailer);
    return createTrailerId;
  }

  async updateTrailer({ trailerId, trailer } = {}) {
    const updateTrailerId = await this.mongoDB.update(
      this.collection,
      trailerId,
      trailer
    );
    return updateTrailerId;
  }

  async deleteTrailer({ trailerId }) {
    const deletedTrailer = await this.mongoDB.delete(
      this.collection,
      trailerId
    );
    return deletedTrailer;
  }
}

module.exports = TrailersService;
