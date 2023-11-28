import * as cheerio from "cheerio";
import axios from "axios";

export class SahibindenJs {
    #categories = ["aion", "alfa-romeo", "anadol", "arora", "aston-martin", "audi", "bentley", "bmw", "bugatti", "buick", "cadillac", "chery", "chevrolet", "chrysler", "citroen", "cupra", "dacia", "daewoo", "daihatsu", "dodge", "ds automobiles", "ferrari", "fiat", "ford", "gaia", "gaz", "geely", "honda", "hyundai", "ikco", "infiniti", "jaguar", "joyce", "kia", "kuba", "lada", "lamborghini", "lancia", "leapmotor", "lexus", "ligier", "lincoln", "lotus", "marcos", "maserati", "maybach", "mazda", "mclaren", "mercedesbenz", "mercury", "mg", "mini", "mitsubishi", "moskwitsch", "nieve", "nissan", "opel", "peugeot", "plymouth", "polestar", "pontiac", "porsche", "proton", "rainwoll", "regal-raptor", "relive", "renault", "rks", "rollsroyce", "rover", "saab", "saturn", "seat", "skoda", "smart", "subaru", "suzuki", "tata", "tazzari", "tesla", "the-london-taxi", "tofaş", "toyota", "vanderhall", "volkswagen", "volta", "volvo", "wesun", "xev"]
    #currentCategory;
    #searchUrl;
    #listingCount;
    #listings;
    #baseUrl;

    constructor() {
        this.#baseUrl = "https://www.sahibinden.com/";
        this.#currentCategory = this.#categories[0];
        this.#searchUrl = this.#baseUrl + this.#currentCategory;
        this.#listingCount = 10;
    }

    configure(category,itemCount) {
        this.#currentCategory = category;
        this.#searchUrl = this.#baseUrl + this.#currentCategory;
        this.#listingCount = itemCount;
    }

    async getHtml() {
        const res = await axios.get(this.#searchUrl);
    }


    async getData() {
        let tempListings = [];
        const $ = cheerio.load(this.getHtml().data);
        for (let i = 0; i < this.#listingCount; i++) {
            tempListings = $(`.searchResultsRowClass:nth-child(${i+1})`);
            //console.log(tempListings);
            /* tempListings.push({
                thumbnail: tempListings.find(".searchResultsLargeThumbnail > img").attr("src"),
            }) */
        }

        /* this.#listings = tempListings; */
    }

    get listings() {
        return this.#listings;
    }

}