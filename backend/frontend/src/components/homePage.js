import React from 'react';
import Regist from './regist';
import Login from './login';
import Home from './home';
import Logout from './logout'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// export default class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Logout />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/regist" element={<Regist />} />
//           <Route path="/home/:nmcode" element={<Home />} />
//           <Route path="*" element={<h1>hh</h1>/*<Navigate to="/login" replace />*/} />
//         </Routes>
//       </Router>
//     );
//   }
// }

export default function HomePage() {
  let constructor = (props) => {
    super(props);
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/home/:nmcode" element={<Home />} />
        <Route path="*" element={<h1>hh</h1>/*<Navigate to="/login" replace />*/} />
      </Routes>
    </Router>
  )
}
