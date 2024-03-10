import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  const [selected,setSelected] = React.useState(0);
  function handleSelected(event){
           let k = parseInt(event.currentTarget.getAttribute('data-key'));
           setSelected(k);
           console.log(k);
  }
  return (
    <div id='left_child'>
            <img id='entnt_logo' src="entnt.svg" alt="logo" />
            <div id='menu'>MAIN MENU</div>
          <div id='linkList'>
            <Link data-key={0} onClick={handleSelected} className={selected==0?'links selected':'links'} to='/'>
              <img className='navIcons' src="dashboard.png" alt="dash" />
              <span>Dashboard</span>
            </Link>
            <Link data-key={1} onClick={handleSelected} className={selected==1?'links selected':'links'} to='/products'>
              <img className='navIcons' src="product.png" alt="products" />
              <span>Products</span>
            </Link>
            <Link data-key={2} onClick={handleSelected} className={selected==2?'links selected':'links'} to='/orders'>
              <img className='navIcons' src="shopping-cart.png" alt="cart" />
              <span>Orders</span>
            </Link>
          </div>
          <div id='settings'>
               <a className='links' href="#">
                <img className='navIcons' src="setting.png" alt="setting" />
                <span>Settings</span>
               </a>
          </div>
    </div>
  )
}

export default Navbar