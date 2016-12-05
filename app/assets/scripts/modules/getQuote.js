import $ from "jquery";

class Quote {
    constructor() {
        this.newQuoteButton = $(".btn");
        this.newQuote = $(".Quote__quote");
        this.newAuthor = $(".Quote__author");
        this.event();
    }

    event(){
        this.newQuoteButton.click(this.getQuote.bind(this));
    }

    getQuote(e){
        //Get the randome quote from quote json file
        $.ajax({
            type: "GET",
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
            //If ajax was able to get the data then this function will run
            success: this.addQuote.bind(this)
        });

        //This will prevent the default link function
        e.preventDefault();
    }

    addQuote(data){
        var response = JSON.parse(data),
        quote = response.quote,
        author = response.author;

        //Empty the existing code
        this.newQuote.empty();

        //Add new quote to code section
        this.newQuote.append(quote);

        //Will check if author exist if yes the add author else add unknown
        if(author.length > 0){
            this.newAuthor.empty();
            this.newAuthor.append(author);
        }else{
            this.newAuthor.empty();
            this.newAuthor.append("Unknown");
        }
    }

}

export default Quote;
