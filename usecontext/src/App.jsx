import React, { useState } from 'react'
import Card from './component/Card'



const productData = {
  title: "Men's Fragrance",
  brand: "Zara",
  name: "Soul Eater",
  price: 1999,
  category: "Perfume",
  img:"https://i.etsystatic.com/10781826/r/il/17acf0/6351938039/il_570xN.6351938039_skuq.jpg"
};


const App = () => {

  const [theme,settheme] = useState("light")
  return (
    <div> 
      <button onClick={()=>{
        settheme(theme === "light" ? "dark": "light")
      }}>change theme</button>
      <Card ProductData = {productData} theme={theme}>
        hiiiii
      </Card>
    </div>
  )
}

export default App