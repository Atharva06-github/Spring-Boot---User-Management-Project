// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';


// let NavbarEx = ()=> {
//   return (
//     <div>
//     <Navbar expand="lg" className="bg-primary">
//       <Container>
//         <Link to="/" className='text-white'>Full Stack Application</Link>
//       </Container>
//       <Link className='btn btn-outline-light' to='/adduser'>ADD USERS</Link>
//     </Navbar>
//     </div>
//   );
// }

// export default NavbarEx;



import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

let NavbarEx = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          {/* Styled Link */}
          <Link
            to="/"
            className="text-white text-decoration-none fw-bold"
            style={{ fontSize: "1.5rem", letterSpacing: "0.5px" }}
          >
            Full Stack Application - By Atharva Mujumale
          </Link>
        </Container>
        <Link className="btn btn-outline-light" to="/adduser">
          ADD USERS
        </Link>
      </Navbar>
    </div>
  );
};

export default NavbarEx;
