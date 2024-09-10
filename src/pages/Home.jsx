import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <Projects filteredProjects={filteredProjects} />
        <Skills />
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
