import { SECRET_POSTGRE_URL } from "$env/static/private";
import { Client } from "pg";

async function GetQuery(query) {
  const client = new Client(SECRET_POSTGRE_URL);
  await client.connect();
  let res = await client.query(query);
  await client.end();
  return res.rows;
}

export async function CheckUser(username, password) {
  const query = `select * from userinfo where username='${username}' and password='${password}'`;
  return GetQuery(query);
}

export async function isLogin(username, password) {
  if (CheckUser(username, password) != "") return true;
  else return false;
}

export async function CreateSession(sessionId, user_id) {
  const query = `insert into sessions (id, user_id) values('${sessionId}', '${user_id}')`;
  return GetQuery(query);
}

export async function AddUser(email, password, username) {
  const query = `insert into userinfo (email, password, username) 
                    values('${email}', '${password}', '${username}')`;
  return GetQuery(query);
}

export async function UserId(username, password) {
  const query = `select id from userinfo where username='${username}' and password='${password}'`;
  return GetQuery(query);
}


export async function PollId(name) {
  const query = `select id from polls where name='${name}'`;
  return GetQuery(query);
}

export async function AddPoll(user_id, name) {
  const query = `insert into polls (user_id, name) 
                    values('${user_id}','${name}')`;
  return GetQuery(query);
}

export async function AddQuestion(id, question, poll_id) {
  const query = `insert into questions (id, question, poll_id) 
                    values('${id}', '${question}', '${poll_id}')`;
  return GetQuery(query);
}

export async function AddDescription(description, id, question_id) {
  const query = `insert into questions (description, id, question_id) 
                    values('${description}', '${id}', '${question_id}')`;
  return GetQuery(query);
}

export async function AddAnswer(id, answer, question_id) {
  const query = `insert into questions (id, answer, question_id) 
                    values('${id}', '${answer}', '${question_id}')`;
  return GetQuery(query);
}
