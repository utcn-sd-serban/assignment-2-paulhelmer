import questionModel from "../model/questionModel.js"
import model from "../model/userModel.js";

class QuestionListPresenter {
    onSearchBarChange(filterText) {
        questionModel.changeStateProperty("filterText",filterText);
    }

    onFilterTitle() {
        questionModel.changeStateProperty("filterMode", "title");
        questionModel.filterByTitle();
        window.location.assign("#/questions");
    }

    onFilterTag() {
        questionModel.changeStateProperty("filterMode", "tag");
        questionModel.filterByTag();
        
        window.location.assign("#/questions");
    }

    onChangeNewQuestionProperty(property,value) {
        questionModel.changeNewQuestionProperty(property,value);
    }
    onCreate(){
        questionModel.addQuestion(questionModel.state.newQuestion.title,questionModel.state.newQuestion.text,model.state.currentUser.userName, questionModel.state.newQuestion.tags);
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("tags", "");
        window.location.assign("#/questions");

        
    }

    onNewQuestion(){
        window.location.assign("#/new-question");
    }

    onViewAnswers() {
        window.location.assign("#/answers");
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;