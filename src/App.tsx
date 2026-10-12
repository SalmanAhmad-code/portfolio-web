import React from "react";
import SEO from "./components/SEO";
import {
  PortfolioHeader,
  PortfolioHero,
  SelectedWork,
  Expertise,
  AboutExperience,
  PortfolioContact,
  PortfolioFooter,
} from "./components/Portfolio";

const App: React.FC = () => (
  <>
    <SEO />
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <PortfolioHeader />
    <main id="main">
      <PortfolioHero />
      <SelectedWork />
      <Expertise />
      <AboutExperience />
      <PortfolioContact />
    </main>
    <PortfolioFooter />
  </>
);
export default App;
