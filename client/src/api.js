import axios from "axios";
const url = "/api/post";

export default class API {
    //To get all the posts from the server
    static async getAllPost() {
        try{
            const res = await axios.get(url);
            return res.data;
        }
        catch(err){
            console.log(`Error from getAllPost: ${err}`);
        }
    }

    //To get single post by id
    static async getPostByID(id) {
        try{
            const res = await axios.get(`${url}/${id}`);
            return res.data;
        }
        catch(err){
            console.log(`Error from getPostByID: ${err}`);
        }
    }

    //Save data to DB
    static async addPost(post) {
        try{
            const res = await axios.post(url, post);
            return res.data;
        }
        catch(err){
            console.log(`Error from addPost: ${err}`);
        }
    }

    //Update data to DB
    static async updatePost(id, post) {
        try{
            const res = await axios.patch(`${url}/${id}`, post);
            return res.data;
        }
        catch(err){
            console.log(`Error from addPost: ${err}`);
        }
    }

    //To delete data
    static async deletePost(id) {
        try{
            const res = await axios.delete(`${url}/${id}`);
            return res.data;
        }
        catch(err){
            console.log(`Error from deletePost: ${err}`);
        }
    }
}