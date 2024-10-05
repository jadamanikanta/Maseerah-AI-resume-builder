import React, { useState, useEffect, useRef, Fragment, Suspense, lazy } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import { Helmet } from "react-helmet";
import jsonData from './data.json';
import { useReactToPrint } from 'react-to-print';
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/AboutPage'));
const Features = lazy(() => import('./components/Features'));
const Templates = lazy(() => import('./components/Templates'));
const Review = lazy(() => import('./components/Review'));
const Footer = lazy(() => import('./components/Footer'));
const Hero = lazy(() => import('./components/Hero'));
const Form = lazy(() => import('./components/Form'));
const Resume = lazy(() => import('./components/Resume'));
const Login = lazy(() => import('./components/Login'));
const Contact = lazy(() => import('./components/Contact'));

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  
  const location = useLocation();
  
  useEffect(() => {
    
    const gtag = window.gtag || function() {};
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q1FZSVYSN8');  

    
    gtag('event', 'page_view', { page_path: location.pathname });
  }, [location]);

  return (
    <Router>
      <Helmet>
        <title>Maseerah - AI-Enabled Resume Builder</title>
        <meta name="description" content="Create beautiful and professional resumes effortlessly with Maseerah's AI-enabled CV creator." />
        <meta name="keywords" content="resume, CV, AI-enabled, free templates, paid templates" />
        <script type="application/ld+json">
          {`{
              "@context": "http://schema.org",
              "@type": "SoftwareApplication",
              "name": "Maseerah",
              "operatingSystem": "iOS",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "1000"
              }
          }`}
        </script>
       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1FZSVYSN8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1FZSVYSN8');
          `}
        </script>
      </Helmet>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/login"
              element={
                <Fragment>
                  <Login />
                </Fragment>
              }
            />
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
                    <button className="printBtn" onClick={handlePrint}>
                      Download / Print
                    </button>
                  </Fragment>
                )
              }
            />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
