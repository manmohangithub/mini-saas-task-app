const BASE_URL = "http://localhost:5000/api";

export const request = async (endpoint, method = "GET", body) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Request failed");

    return data;
  } catch (err) {
    console.error(err);
    throw err.message || "Server error";
  }
};