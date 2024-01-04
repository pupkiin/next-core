import authStore from "@/store/auth";
import axios from "axios";

export async function apiPostAuthSignUp(data: {
  email: string;
  password: string;
  role: string;
}) {
  await axios
    .post("/auth/sign-up", {
      email: data.email,
      password: data.password,
      role: data.role,
    })
    .then((res) => {
      console.log("authtorized");
    });
}

export async function apiGetAuthSession() {
  const data = await axios.get("/auth/session");

  return data;
}

export async function apiPostAuthSignOut() {
  axios.post("/auth/sign-out").then((res) => {
    console.log("unauthtorized");
  });
}
