import About from "./about/page";
import Caring from "./caring/page";
import Contact from "./contact/page";
import Home from "./home/page";
import Products from "./products/page";
import Social from "./social/page";
import Tech from "./tech/page";
import Workflow from "./workflow/page";

export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Caring />
      <Tech />
      <Workflow />
      <Products />
      <Social />
      <Contact />
    </div>
  );
}
