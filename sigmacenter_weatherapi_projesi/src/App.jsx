import './App.css'
import React, { useState }  from 'react'
import Weather from './Weather'



function App() {
  
 const APP_KEY = "1fcd0c626f8c4f08adc163141230505";
 let cityinput = "";

 const [weatherData, setweatherData] =useState([]);


function city() 
{
   document.querySelector("input").addEventListener("input",(e) => {
     e.preventDefault();
     cityinput = e.target.value;

   })


}

  async function getdata(value){

      const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=5&aqi=no&alerts=no`); //istediğimiz gün kadar hava tahmin raporu çekebiliyoruz. Ben 5 günlük çektim days= ... 
      const result =await  data.json();
    
      setweatherData(result.forecast.forecastday)
      console.log(result.forecast.forecastday);
    
 }



//  ! yorum satırı yaptığım kodlar, inputa girilen veriye göre background'unu değiştirecektim fakat olmadı. hata da almadım.
//  const [inputValue, setInputValue] = useState('');
 
//  ! inputta çağırdığımız onChange event olayında iki fonksiyon kullanamayacağımız için bu fonksiyonu city() fonksiyonun içerisinde tanımladım normalde fakat yazdığım kodlar çalışmadı bu yüzden fonksiyonun dışına çıkarıp yorum satırı yaptım.
// const handleInputChange = (e) => {
//   setInputValue(e.target.value);
// };

// const getBackgroundImage = () => {
//   switch (inputValue.toLowerCase()) {
//     case 'istanbul':
//       return 'url(/src/assets/4.jpg)';
//     case 'ankara':
//       return 'url(/src/assets/ankara.jpg)';
//     case 'amasya':
//       return 'url(/src/assets/amasya.jpg)';
//     default:
//       return 'url(/src/assets/df.jpg)';
//   }
// };
// const backgroundImage = getBackgroundImage();



  return (

    <>
      <div
        // style={{
        //   background: backgroundImage,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   width: '100%',
        //   height: '100vh',
        // }}
      >

          <div className="header">
                <h1 className="mt-5 text-center">Hava Durumu</h1>
                <input type="text" id="searchBar" placeholder="Şehir giriniz" onChange={city} />
                <button onClick={()=> getdata(cityinput)}>Ara</button>
          </div>
          
          <div className="hava-durumu-icerik-kisim">
              {weatherData.map(item=>(<Weather 
                                            key={item.date} 
                                            date={item.date} 
                                            mintemp={item.day.mintemp_c} 
                                            maxtemp={item.day.maxtemp_c} 
                                            condition={item.day.condition.text} 
                                            icon={item.day.condition.icon}
                                      />))}

                                      
          </div>
      </div>

    </>
  )
}

export default App
