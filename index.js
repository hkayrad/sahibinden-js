import cheerio from 'cheerio';
import axios from 'axios';

export class SahibindenJs {
    #categories = ["aion", "alfa-romeo", "anadol", "arora", "aston-martin", "audi", "bentley", "bmw", "bugatti", "buick", "cadillac", "chery", "chevrolet", "chrysler", "citroen", "cupra", "dacia", "daewoo", "daihatsu", "dodge", "ds automobiles", "ferrari", "fiat", "ford", "gaia", "gaz", "geely", "honda", "hyundai", "ikco", "infiniti", "jaguar", "joyce", "kia", "kuba", "lada", "lamborghini", "lancia", "leapmotor", "lexus", "ligier", "lincoln", "lotus", "marcos", "maserati", "maybach", "mazda", "mclaren", "mercedesbenz", "mercury", "mg", "mini", "mitsubishi", "moskwitsch", "nieve", "nissan", "opel", "peugeot", "plymouth", "polestar", "pontiac", "porsche", "proton", "rainwoll", "regal-raptor", "relive", "renault", "rks", "rollsroyce", "rover", "saab", "saturn", "seat", "skoda", "smart", "subaru", "suzuki", "tata", "tazzari", "tesla", "the-london-taxi", "tofaş", "toyota", "vanderhall", "volkswagen", "volta", "volvo", "wesun", "xev"]
    #currentCategory;
    #searchUrl;

    constructor() {
        this.baseUrl = "https://www.sahibinden.com/";
        this.currentCategory = this.categories[0];
        this.searchUrl = this.baseUrl + this.currentCategory;
    }

    get categories() {
        return this.#categories;
    }

    get currentCategory() {
        return this.#currentCategory;
    }

    get searchUrl() {
        return this.#searchUrl;
    }

    set currentCategory(category) {
        this.#currentCategory = category;
    }

    set searchUrl(url) {
        this.#searchUrl = url;
    }

    setSearchUrl() {
        this.searchUrl = this.baseUrl + this.currentCategory;
    }
}