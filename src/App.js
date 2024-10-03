import React, { useState, useEffect, useRef, Fragment } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import About from './components/AboutPage';
import Features from './components/Features';
import Templates from './components/Templates';
import Review from './components/Review';
import Footer from './components/Footer';
import Hero from './components/Hero';
import jsonData from './data.json';
import Form from './components/Form'
import Resume from './components/Resume';
import Login from './components/Login';
import Contact from './components/Contact';

// import { useReactToPrint } from 'react-to-print';

function App() {
  const [data, setData] = useState();
  const [preset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Hero />
                <About />
                <Features />
                <Templates />
                <Review />
                <Contact />
              </Fragment>
            }
          />
          <Route path="/login"
          element={
            <Fragment>
             <Login/>
            </Fragment>
            } />
              
          <Route
            path="/resume-builder"
            element={
              data !== undefined && (
                <Fragment>
                  <div className="Form-page-left">
                    <Form data={data} setData={setData} preset={preset} setColor={setColor} />
                  </div>
                  <div className="Form-page-right">
                    <Resume ref={componentRef} data={data} color={color} />
                  </div>
                  <button className="printBtn" >
                    Download / Print
                  </button>
                </Fragment>
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
