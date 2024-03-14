import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PhoneNav() {
  const[showLayer,setShowLayer] = React.useState(false);
  const [selected,setSelected] = React.useState(0);
  const location = useLocation();

  useEffect(()=>{
        switch(location.pathname){
          case '/':
            setSelected(0)
            break;
          case '/products':
            setSelected(1)
            break;
          case '/orders':
            setSelected(2)
            break;
          default:
            break;
        }
  },[location])

  function handleSelected(event){
    overlay();
    let k = parseInt(event.currentTarget.getAttribute('data-key'));
    setSelected(k);
   //  console.log(k)
  }
  function overlay(){
      const element = document.getElementsByClassName('hamburger');
      element[0].classList.toggle("activeham");
      setShowLayer(prev=>!prev);
  }
  function handleLayer(event){
        if(event.target === event.currentTarget){
            const element = document.getElementsByClassName('hamburger');
            element[0].classList.toggle("activeham");
            setShowLayer(prev=>!prev);
        }
  }
  return (
    <div id='top_child'>
         <div id='head'>
             <img src="entnt.webp" alt="logo" />
             <div class="hamburger" onClick={overlay}>
                   <div class="bar bun-one"></div>
                   <div class="bar bun-two"></div>
                   <div class="bar bun-two"></div>
             </div>
         </div>
         {
            showLayer &&
            <div id='layerRoot' onClick={handleLayer}>
                 <div id='linkList'>
                    <Link data-key={0} onClick={handleSelected} className={selected==0?'links selected':'links'} to='/'>
                      <img className='navIcons' src="dashboard.webp" alt="dash" />
                      <span>Dashboard</span>
                    </Link>
                    <Link data-key={1} onClick={handleSelected} className={selected==1?'links selected':'links'} to='/products'>
                      <img className='navIcons' src="product.webp" alt="products" />
                      <span>Products</span>
                    </Link>
                    <Link data-key={2} onClick={handleSelected} className={selected==2?'links selected':'links'} to='/orders'>
                      <img className='navIcons' src="shopping-cart.webp" alt="cart" />
                      <span>Orders</span>
                    </Link>
                </div>
            </div>
         }
    </div>
  )
}

export default PhoneNav