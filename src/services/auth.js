export function getTheUserFromStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

export function storeTheUser(data, token) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(data));
}

export function getTheTokenFromStorage() {
  return localStorage.getItem("token");
}



export async function login(email,password) {
  const user={email ,password}
  
  const res = await fetch(`https://writers-backend-app.herokuapp.com/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  const jsonData = await res.json();
  const status = await res.status;
  return { status, data: jsonData };
}
