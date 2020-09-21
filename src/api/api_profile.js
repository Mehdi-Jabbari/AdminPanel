import { getAxiosInstance } from "./api";

export const getProfile = (callback) => {
    getAxiosInstance().get("/profile")
        .then(response => {
            const data = response.data ;
            callback(true,data)
            
        })
        .catch(error => {
            console.log(error);
            callback(false,error)
        })
};
export const getCredit = (callback) => {
    getAxiosInstance().get("/credit")
        .then(response => {
            const data = response.data ;
            callback(true,data)
            
        })
        .catch(error => {
            console.log(error);
            callback(false,error)
        })
};
export const updateCodeRequest = (data,callback) => {
    getAxiosInstance().post("/profile",data)
        .then(response => {
            const data = response.data ;
            callback(true,data);
            
        })
        .catch(error => {
            console.log(error);
            callback(false,error);
        })
};