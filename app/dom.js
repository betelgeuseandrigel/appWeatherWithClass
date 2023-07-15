export class Dom{

    constructor(){
        this.city = document.querySelector(".city");
        this.temp = document.querySelector(".temp");
        this.humidity = document.querySelector(".humidity");
        this.cityName = document.getElementById("city").value;
    }

    render(weather){
        this.city.innerHTML = weather.name + '/' + weather.sys.country;
        this.temp.innerHTML = 'Temp: ' + weather.main.temp + '&#176C';
        this.humidity.innerHTML = 'Humidity: ' + weather.main.humidity + '%';
        this.cleanUp();
    }

    emptyInput(){
        this.cityName.innerHTML = "";
    }

    cleanUp = () => {
        const contenedor = document.getElementById('main');
        const loader = document.querySelector(".lds-spinner");

        loader.style.display = 'none';
        contenedor.style.display = 'flex';
    }
}