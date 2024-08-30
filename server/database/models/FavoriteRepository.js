const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "favorite" });
  }

  async addFavorite(candidateId, offerId) {
    const [rows] = await this.database.query(
      `
      INSERT INTO ${this.table} (candidate_id, offer_id)
      VALUES (?, ?)
    `,
      [candidateId, offerId]
    );
    return rows;
  }

  async removeFavorite(candidateId, offerId) {
    const [rows] = await this.database.query(
      `
      DELETE FROM ${this.table} WHERE candidate_id = ? AND offer_id = ?
    `,
      [candidateId, offerId]
    );
    return rows;
  }

  async readByCandidate(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM offer AS o INNER JOIN favorite AS f ON o.id = f.offer_id WHERE f.candidate_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = FavoriteRepository;