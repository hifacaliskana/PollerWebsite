import { SECRET_POSTGRE_URL } from "$env/static/private"
import  {Client} from 'pg'

async function GetQuery(query) {
    const client = new Client(SECRET_POSTGRE_URL);
    await client.connect();
    let res = await client.query(query);
    await client.end();
    return res.rows
}

export async function CheckUser(username, password) {
    const query = `select * from userinfo where username='${username}' and password='${password}'`
    return GetQuery(query)
}

export async function CreateSession(sessionId, user_id) {
    const query = `insert into sessions (id, user_id) values('${sessionId}', '${user_id}')`
    return GetQuery(query)
}

export async function AddUser(email, password, username) {
    const query = `insert into userinfo (email, password, username) 
                    values('${email}', '${password}', '${username}')`
                    return GetQuery(query)
}

