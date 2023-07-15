export class Weather{
    constructor(city){
        this.apiKey = '73106aedfa4c333225792873f2368773';
        this.city = city;
    }

    

    async getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    changeCity(city){
        this.city = city;
    }


}
