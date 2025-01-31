import { useState , useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Market from './pages/Market';
import Home from './pages/Home';
import { ControlersContext } from './Context/ControlersContext';
import { CartContext } from './Context/CartContext';
import Contact from './pages/Contact';
import About from './pages/About';
import ComplateOrder from './pages/ComplateOrder';
import Admin from './pages/Admin';
import { colRefCactus, colRefPots } from './firebase';
import { onSnapshot, query, where } from 'firebase/firestore';



import pots from "./assets/potsImages/import";
import cactuses from "./assets/cactusImages/import";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/complete-order",
    element: <ComplateOrder/>,
  },

  {
    path: "/market",
    element: <Market/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
]);



function App() {
  // for pot and cactus context
  const [pot , setPot]=useState(0);
  const [cactus , setCactus ]=useState(0);
  const [quantity , setQuantity ]=useState(1);










    const [finalPots,setFinalPots]=useState([])
    const [finalCactus,setFinalCactus]=useState([])

    useEffect(()=>{

        let q = query(colRefCactus,where("dispo","==",true))
        onSnapshot(q,(snapshot)=>{
            let cactusList =[];
            snapshot.docs.forEach(doc=>{
                cactusList.push({...doc.data(),id:doc.id,img:cactuses[doc.data().number]})
            })
            setFinalCactus(cactusList)
            console.log(cactusList)
        })

        q = query(colRefPots,where("dispo","==",true))
        onSnapshot(q,(snapshot)=>{
            let potsList =[];
            snapshot.docs.forEach(doc=>{
                potsList.push({...doc.data(),id:doc.id,img:pots[doc.data().number]})
            })
            setFinalPots(potsList)
        })
        
        
    },[])





    useEffect(()=>{
      console.log(finalCactus)
    },[finalPots])











  // for cart Context
  const [cart , setCart ]= useState([
    {
    pot:0,
    cactus:0,
    quantity:1
    },
])
  const [upCart,setUpCart]=useState(0)
  const [currentItem,setCurrentItem]=useState(0)
  const updateCart= ()=>{
    let newCart = cart
    newCart[currentItem].pot=pot
    newCart[currentItem].cactus=cactus
    newCart[currentItem].quantity=quantity
    setCart(newCart)
  }
  useEffect(() => {
    updateCart()
    setUpCart(p=>p+1)
  }, [pot,cactus,quantity])
  

  useEffect(()=>{
    updateCart()
  },[upCart])

  

  return (
    <CartContext.Provider value={{cart,setCart,currentItem,setCurrentItem,upCart,setUpCart}}>
      <ControlersContext.Provider value={{pot,setPot,cactus,setCactus,quantity,setQuantity,finalCactus,finalPots}}>
        <RouterProvider router={router} />
      </ControlersContext.Provider>
    </CartContext.Provider>
  )
}

export default App
