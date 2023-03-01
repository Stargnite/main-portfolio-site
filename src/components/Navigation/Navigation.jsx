import { Routes, Route } from "react-router-dom";
import Contact from "../contact/Contact";
import Worklist from '../workList/Worklist'
import About from './../About/About'
import Services from "../myServices/Services";
import Error from './../ErrorPage/Error'
import Intro from './../intro/intro'
import Skills from './../skills/Skills'



function Navigation() {
	return (
	  <div>
		<Routes>
		  <Route path="/" element={<Intro />} />
		  <Route path="/about" element={<About />} />
		  <Route path="/worklist" element={<Worklist />} />
		  <Route path="/skills" element={<Skills />} />
		  <Route path="/contact" element={<Contact />} />
		  <Route path="/services" element={<Services />} />
		  <Route path="*" element={<Error />} />
		</Routes>
	  </div>
	);
  }

  export default Navigation;