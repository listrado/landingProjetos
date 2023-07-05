import logo from './logo.png';
import logo2 from './logo2.png';
import cop from './Copyright.png';
import pic1 from './Group 4082.png';
import pic2 from './Group 4083.png';
import pic3 from './Group 4084.png';
import pic4 from './Group 4085.png';
import pic5 from './Group 4086.png';
import pic6 from './Group 4087.png';
import pic7 from './Group 4088.png';
import './App.css';
var link = "https://google.com"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="background2">
            <div className="background1">
              <div className="padding-20">
                <img src={logo} alt="logo" className="logo" />
                <p className="text1 padding-20"><b>Biblioteca</b> de Projetos</p>
                <p className="text2">Encontre nesta database todos os projetos em curso ou já veiculados por Thiago Nigro, desde desafios a produtos digitais e até mesmo os seus produtos físicos</p>
                <div className="flex-container">
                  <div className="box">
                    <div className="nested-flex-container">
                      <div className="item"><a href={link} className="custom-button" >Produtos digitais</a></div>
                      <div className="item"><a href={link} className="custom-button" >Produtos fisicos</a></div>
                      <div className="item"><a href={link} className="custom-button" >Desafios</a></div>
                      <div className="item"><a href={link} className="custom-button" >Livros</a></div>
                      <div className="item"><a href={link} className="custom-button" >Eventos</a></div>
                      <div className="item"><a href={link} className="custom-button" >Publicidade</a></div>
                    </div>
                  </div>
                  <div className="flex-container2">
                    <div className="item2"><img src={pic1} alt="Pic 1"/></div>
                    <div className="item2"><img src={pic2} alt="Pic 2"/></div>
                    <div className="item2"><img src={pic3} alt="Pic 3"/></div>
                    <div className="item2"><img src={pic4} alt="Pic 4"/></div>
                    <div className="item2"><img src={pic5} alt="Pic 5"/></div>
                    <div className="item2"><img src={pic6} alt="Pic 6"/></div>
                    <div className="item2"><img src={pic7} alt="Pic 7"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="background3">
          <div className="container3">
            <img src={logo2} alt="logo" className="logo2" />
            <img src={cop} alt="copyright" className="copy" />
          </div>
        </div>
    </div>
  );
}

export default App;
