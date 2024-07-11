const AbstractRepository = require("./AbstractRepository");

class ProfilRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "profil" as configuration
    super({ table: "profil" });
  }

  // The C of CRUD - Create operation

  // async create(profil) {
  //   // Execute the SQL INSERT query to add a new profil to the "profil" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title, user_id) values (?, ?)`,
  //     [profil.title, profil.user_id]
  //   );

  //   // Return the ID of the newly inserted profil
  //   return result.insertId;
  // }

  // // The Rs of CRUD - Read operations

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific profil by its ID
  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the profil
  //   return rows[0];
  // }

  // async readAll() {
  //   // Execute the SQL SELECT query to retrieve all profils from the "profil" table
  //   const [rows] = await this.database.query(`select * from ${this.table}`);

  //   // Return the array of profils
  //   return rows;
  // }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing profil

  async update(profil) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      "UPDATE profil SET firstname = ?, lastname = ?, description = ?, phone = ?, city = ?, cv = ?, github = ?, linkedin = ?, is_active = ?  WHERE user_id = ?",
      [
        profil.firstname,
        profil.lastname,
        profil.description,
        profil.phone,
        profil.city,
        profil.cv,
        profil.github,
        profil.linkedin,
        profil.is_active,
        profil.id,
      ]
    );
    return result;
    // The D of CRUD - Delete operation
    // TODO: Implement the delete operation to remove an profil by its ID

    // async delete(id) {
    //   ...
    // }
  }
}

module.exports = ProfilRepository;
