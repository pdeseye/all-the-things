import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import PetersThings from './pages/PetersThings/PetersThings'
import PayalsThings from './pages/PayalsThings/PayalsThings'
import AmandasThings from './pages/AmandasThings/AmandasThings'
import Landing from './pages/Landing/Landing'


const App = () => {
  const [shahzadsThings, setShazadsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [bensThings, setBensThings] = useState([
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart??',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [huntersThings, setHuntersThings] = useState([
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ])

  const [petersThings, setPetersThings] = useState([
    {
      name: 'evolution',
      image:
        'https://www.wilson.com/en-us/media/catalog/product/f/8/f8243e16-c915-49c3-ab3b-44f1f86d8da6_e6ovahzyanxli5jf.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&width=706&height=863&canvas=1412%2C1726&bg-color=f5f5f5',
      attributes: ['orange', 'bouncy', 'round', 'composite cover'],
    },
    {
      name: 'whip',
      image:
        'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-3-phantom-ewb/page-properties/rolls-royce-phantom-swb-discover-hero-d.jpg',
      attributes: ['sleek', 'cool', 'expensive', 'fun'],
    },
  ])
  

  const [payalsThings, setPayalsThings] = useState([
    {
      name: "Iris",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fautonxt.net%2F2021-mazda-mazda3-2-5-turbo-review%2F&psig=AOvVaw0Hk_k4LQvBEzCDFVCr8Xjx&ust=1639760133082000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODh6tfk6PQCFQAAAAAdAAAAABAD",  
      attributes: ["zoomzoom", "speeddemon", "ladyInRed", "beautiful"],
    },
  ])
  
  const [amandasThings, setAmandasThings] = useState([
    {
      name: "cats",
      image: "https://www.thesprucepets.com/thmb/nNyzPMxOyf2Jc2yD7wy4YRGSCo0=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/facts-about-black-cats-554102-hero-7281a22d75584d448290c359780c2ead.jpg",  
      attributes: ["self cleaning", "fluffy", "warm", "playful", "sassy", "snuggly"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={shahzadsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/PetersThings"
        element={<PetersThings things={petersThings} />}
      />
      <Route
        path="/payalsThings"
        element={<PayalsThings things={payalsThings} />}
      />
      <Route
        path="/amandas-things"
        element={<AmandasThings things={amandasThings} />}
      />
    </Routes>
  )
}

export default App
