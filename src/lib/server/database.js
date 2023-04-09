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

export async function AddQuestion(question, poll_id) {
  const query = `insert into questions (question, poll_id) 
                    values('${question}', '${poll_id}')`;
  return GetQuery(query);
}

export async function NumberOfQustion(poll_id) {
  const query = `select count(*) from polls where poll_id='${poll_id}'`
  return GetQuery(query);
}

export async function UserIdFromSessions(session_id) {
  const query = `select user_id from sessions where id='${session_id}'`
  return GetQuery(query);
}


export async function PollIdFromPolls(user_id, name) {
  const query = `select id from polls where user_id='${user_id}' and name='${name}'`
  return GetQuery(query);
}

export async function AddOptions(option, question_id) {
  const query = `insert into options (option, question_id) 
                    values('${option}', '${question_id}')`;
  return GetQuery(query);
}

export async function QuestionIdFromQuestions(question, poll_id) {
  const query = `select id from questions where question='${question}' and poll_id='${poll_id}'`
  return GetQuery(query);
}

export async function AddDescription(description, question_id) {
  const query = `insert into descriptions (description, question_id) 
                    values('${description}','${question_id}')`;
  return GetQuery(query);
}

export async function UsernameFromUserInfo(user_id) {
  const query = `select username from userinfo where id='${user_id}'`
  return GetQuery(query);
}

export async function PollNameFromPolls(user_id) {
  const query = `select name from polls where user_id='${user_id}'`
  return GetQuery(query);
}

