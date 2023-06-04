import { createPool } from "mysql2/promise";

export const pool = createPool({
    host:'localhost',
    database:'BaseDM',
    user:'root',
    password:'123456',
    port:3306

});

