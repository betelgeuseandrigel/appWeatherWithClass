export class Store{

    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'london';
        this.defaultCountry = 'uk';
    }

    setLocationData(city){
        localStorage.setItem("city", city);
    }

    getLocationData(){
        if(localStorage.getItem("city") === null){
            this.city = this.defaultCity;
        } else{
            this.city = localStorage.getItem("city");
        }

        return{
            city: this.city,
        }
    }
}