function question(text, choices, ans) {
    this.text = text;
    this.choices = choices;
    this.ans = ans;
}
question.prototype.Correct_ans = function(choice) {
    return this.ans === choice;
}