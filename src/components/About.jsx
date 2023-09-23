import { useState } from "react";
import CompanyInfo from "./subComponents/CompanyInfo";
import ProductsInfo from "./subComponents/ProductsInfo";

function About() {
  const [About, setAbout] = useState("Company");
  return (
    <>
      <CompanyInfo About={About} setAbout={setAbout} />

      <ProductsInfo About={About} setAbout={setAbout} />
    </>
  );
}

export default About;
