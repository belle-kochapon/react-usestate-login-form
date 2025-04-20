import React from 'react'

function Dashboard() {
  let isLogin: boolean = false;
  isLogin = true;

// EX. Conditional Rendering
  return (
    <div>
        <h1>Dashboard</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquid minus eum vitae? Sequi, autem! Nesciunt, illum itaque labore dolor quasi corporis placeat tempore facilis, nam, at quo praesentium animi!
    {/* If-else Short version */}
    {isLogin ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
    </div>
  ); 


// Long version  
//   if (isLogin) {
//     return <h1>Dashboard</h1>
//   } else {
//     return <h1>Not Login</h1>
//   }
}

export default Dashboard