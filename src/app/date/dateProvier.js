const { pool } = require("../../../config/database");
//const { logger } = require("../../../config/winston");


const dateDao = require("./dateDao");

exports.something = async function(year) {
    if (!year) {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection);
        connection.release();
    
        return dateResult;
    
      } else {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection, email);
        connection.release();
    
        return dateResult;
     }
};

/*
exports.something = async function(month) {
    if (!month) {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection);
        connection.release();
    
        return dateResult;
    
      } else {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection, email);
        connection.release();
    
        return dateResult;
     }
};

exports.something = async function(day) {
    if (!day) {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection);
        connection.release();
    
        return dateResult;
    
      } else {
        const connection = await pool.getConnection(async (conn) => conn);
        const dateResult = await dateDao.selectDate(connection, email);
        connection.release();
    
        return dateResult;
     }
};
*/