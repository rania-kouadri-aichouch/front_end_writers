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



export async function login(data) {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  const res = await fetch(`https://writers-backend-app.herokuapp.com/api/auth/login`, {
    method: "POST",
    body: formData,
  });
  const jsonData = await res.json();
  const status = await res.status;
  return { status, data: jsonData };
}
