import {EventEmitter} from "events";

class User extends EventEmitter{
    constructor() {
        super();
        this.state = {
            users: [
            {
                userName: "u1",
                password: "pass1"
            },
            {
                userName: "u2",
                password: "pass2"
            },
            {
                userName: "paul",
                password: "paul"
            }
            ],
            newUser: {
                userName:"",
                password:""
            },
            loggedInUser: {
                userName: "",
                password: ""
            }
        };
    }

    addUser(userName, password){
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                userName: userName,
                password: password
            }])
        };
        this.emit("change", this.state);
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value 
            }
        };
        this.emit("change", this.state);
    }

    changeLoggedInUserProperty(property, value){
        this.state = {
            ...this.state,
            loggedInUser: {
                ...this.state.loggedInUser,
                [property] : value
            }
        };
        this.emit("change", this.state);
    }

    login(username, password){
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === username && users[i].password === password) {
                return true;
            }
        }
        return false;
    }
}

const userModel = new User();
export default userModel;