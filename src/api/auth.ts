import { clientIlumini } from "./clientIlumini.api";



// iluminiApi.get('/Api/GET/user').then((res) =>console.log(res));

export const startLogin = (email: string, password:string) => {
  clientIlumini.post("/Api/auth/login", {
    email: email, 
    password: password
  }).then((res) => {
    console.log(res.data);
    
  }).catch((err) => console.log(err));
};