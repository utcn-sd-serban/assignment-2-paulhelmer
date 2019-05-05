import {EventEmitter} from "events";

class QuestionModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            questions: [{
                id:0,
                username: "u1",
                title: "Question 1",
                text: "text1",
                creationDate: 2017,
                tags: "tag1 tag2 tag3",
                voteCount: 0
            },
            {
                id:1,
                username: "u2",
                title: "Question 2",
                text: "text2",
                creationDate: 2018,
                tags: "tag1 tag3",
                voteCount: 0
            }
            ],
            curentId:1,
            newQuestion: {
                id:-1,
                username: "",
                title: "",
                text: "",
                creationDate: 2019,
                tags:"",
                voteCount: 0
            },
            filterMode:"",
            filterText: "",
            filteredQuestions:[]
        };
    }

    addQuestion(username, title, text, tags) {
        this.state = {
            ...this.state,
            curentId: ++this.state.curentId,
            questions:this.state.questions.concat([{
                id:this.state.curentId,
                username:username,
                title:title,
                text: text,
                creationDate: 2019,
                tags: tags,
                voteCount: 0
            }])
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value){
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]:value
            }
        };
        this.emit("change", this.state);
    }
    changeStateProperty(property, value){
        this.state = {
            ...this.state,
            [property]:value
        };
        this.emit("change", this.state);
    }


    filterByTitle(){
        this.state.filteredQuestions = this.state.questions.filter((question, index, arr) => (
            question.title.includes(this.state.filterText)
        ));
        //this.state.questions = this.state.filteredQuestions;
        console.log(this.state.questions);

}

    filterByTag(){
        this.state.filteredQuestions = this.state.questions.filter((question, index, arr) => (
            question.tags.includes(this.state.filterText)
        ));
         //this.state.questions = this.state.filteredQuestions;
        console.log(this.state.questions);
}

}

const questionModel = new QuestionModel();
export  default questionModel;