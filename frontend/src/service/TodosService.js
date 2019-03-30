import axios from "axios";

const url = "http://localhost:5000/api/todos/";

class postsService {
    // get todos
    static get_todos() {
        return new Promise(async (resolve, reject) => {
            try {
                const todos = await axios.get(url);
                resolve(todos.data.todos)
            }catch(e){
                reject(e)
            }
        })
    }

    // add todo
    static add_todo(title = "") {
        return axios.post(url, {
            title
        })
    }

    static delete_todo(id = "") {
        return axios.delete(`${url}${id}`)
    }
}

export default postsService;