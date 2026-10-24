
const TOKEN_KEY = "token";
const USER_KEY = "hcm_user";

export function saveSession(data) {
  const token = data.token || data.data?.token;

  if (!token) {
    throw new Error("No authentication token was returned.");
  }

  const user = data.user || data.data?.user || null;

  localStorage.setItem(TOKEN_KEY, token);

  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }

  return user;
}

export function getToken() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || "null");
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
