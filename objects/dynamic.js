let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function() {
        return this.subject && this.verb && this.object  ? `${this.subject} ${this.verb} ${this.object}`: "Incomplete sentence";
    },

    updateProperty: function(property, value) {
        return this.hasOwnProperty(property) ? (this[property] = value, "Property updated") : "Invalid property";
    }
};


console.log(sentenceBuilder.buildSentence()); // Output: "I am coding"

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); // Output: "I am learning coding"

sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); // Output: "The cat am learning coding"

sentenceBuilder.updateProperty("mood", "happy");
console.log(sentenceBuilder.buildSentence()); // Output: "Invalid property"

sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence()); // Output: "Incomplete sentence"
