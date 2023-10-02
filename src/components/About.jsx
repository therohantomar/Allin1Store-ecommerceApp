import { useState } from "react";
import CompanyInfo from "./subComponents/CompanyInfo";
import ProductsInfo from "./subComponents/ProductsInfo";
import useScrollToTop from "../utils/hooks/useScrollToTop";

function About() {
  const [About, setAbout] = useState("Company");
  useScrollToTop()
  return (
    <>
      <CompanyInfo About={About} setAbout={setAbout} />

      <ProductsInfo About={About} setAbout={setAbout} />
    </>
  );
}

export default About;
