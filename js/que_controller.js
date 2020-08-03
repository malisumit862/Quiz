function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
Quiz.prototype.getquestion_Index = function() {
    return this.questions[this.questionIndex];

}
Quiz.prototype.Is_End = function() {
    return this.questions.length === this.questionIndex;

}
Quiz.prototype.guess = function(ans) {

    if (this.getquestion_Index().Correct_ans(ans)) { this.score++; }
    this.questionIndex++;
}