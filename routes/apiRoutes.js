const router = require('express').Router();
const axios = require('axios');
const cheerio = require("cheerio");
const { db } = require('../models/Article');


router.get("/scrape", function(req,res) {
    axios.get("https://www.huffpost.com/news/").then(function(response) {
        const $ = cheerio.load(response.data);

        const results = [];
    // Now, we grab every h2 within an article tag, and do the following:
    $("div.card").each(function(i, element) {
        // Save an empty result object
        let title = $(element).children(".card__text").children(".card__headlines").text();
        let description = $(element).children(".card__text").children(".card__description").text();
        let link = $(element).children().attr("href");
        let author = $(element).children(".card__text").children(".card__byline").children(".author-list").children(".card__byline__author").text();
        
        results.push({
            title: title,
            description: description,
            link: link,
            author: author
        })

        db.Article.create(results)
        .then(function(dbArticle) {
            console.log(dbArticle);
        })
        .catch(function(err) {
            console.log(err);
        })
    })
console.log(results);
res.send("Scrape Complete");
})
})

module.exports = router;