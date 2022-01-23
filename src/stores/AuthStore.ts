import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import api from "../services/api";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  public isAuthenticated = false;
  public user = {
    id: 0,
    email: "",
    name: "",
    password: "",
    imageUser: ""
  };

  public async login(email: string, password: string) {
    try {
      const results = await api.post("http://localhost:8080/login", {
        email,
        password,
      });

      const token = results.data.token;
      localStorage.setItem("token", token);

      runInAction(() => {
        this.isAuthenticated = true;
        this.user.id = results.data.id;
        this.user.email = results.data.email;
        this.user.name = results.data.name;
      });

    } catch (err) {
      console.dir(err);
    }
  }

  public async Register(
    FullName: string,
    ImageUser: File,
    email: string,
    password: string
  ) {
    try {
      const payload = new FormData();
      payload.set("name", FullName);
      payload.set("email", email);
      payload.set("password", password);
      payload.set("ImageUser", ImageUser as File);
      console.log(ImageUser)
      const results = await api.post(
        "http://localhost:8080/create/user",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      

      const token = results.data.token;
      localStorage.setItem("token", token);

      runInAction(() => {
        this.isAuthenticated = true;
        this.user.id = results.data.id;
        this.user.email = results.data.email;
        this.user.name = results.data.name;
        this.user.imageUser = results.data.ImagePath;
      });
    } catch (err) {
      console.dir(err);
    }
  }

  public async verifyToken() {
    const { data } = await api.get("/verifyToken");
    console.log(data)
    runInAction(() => {
      this.isAuthenticated = true;
      this.user.id = data.id;
      this.user.email = data.Email;
      this.user.name = data.Name;
      this.user.imageUser = data.ImagePath;
    });
  }
}
export const authStore = new AuthStore();
export const authContext = createContext(authStore);
export const AuthProvider = authContext.Provider;
