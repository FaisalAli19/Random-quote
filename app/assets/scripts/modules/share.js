import $ from "jquery";

class Tweet {
    constructor() {
        this.tweetThis = $(".twitter-btn");
        this.currentQuote = $(".Quote__quote");
        this.currentAuthor = $(".Quote__author");
        this.event();
    }

    event(){
        this.tweetThis.click(this.shareThis.bind(this));
    }

    shareThis(){
        window.open(
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' +
            this.currentQuote.text() + '"' + "  - " + this.currentAuthor.text()
        );
    }
}

export default Tweet;
