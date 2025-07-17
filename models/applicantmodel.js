const pool = require('../config/db');

const Applicant = {
  create: async (data) => {
    const {
      name,
      email,
      contact,
      qualification,
      organization,
      notice,
      skills,
    } = data;

    const result = await pool.query(
      `INSERT INTO applicants (name, email, contact, qualification, organization, notice_period, skills)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, contact, qualification, organization, notice, skills]
    );

    console.log("✅ DB Inserted Record:", result.rows[0]);
    return result.rows[0];
  },
};

module.exports = Applicant;
