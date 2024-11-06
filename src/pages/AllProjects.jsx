import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectProjects } from "../app/projectsSlice";
import { useGetUsersQuery, useGetProjectsQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react/dist/iconify.js";
// Components
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import BackToTop from "../components/BackToTop";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
const StyledSection = styled.section`
  .input-group {
    max-width: 90vw;
  }

  @media screen and (min-width: 800px) {
    .input-group {
      width: 75%;
    }
  }
`;
// #endregion

// #region component
const AllProjects = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const data = useSelector(selectProjects);
  const { data: userData } = useGetUsersQuery();
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
  let content;

  React.useEffect(() => {
    updateTitle(`${userData.name} | All Projects`);
  }, [userData]);

  React.useEffect(() => {
    if (searchInput !== "") {
      // Filter projects based on search input
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      // Display all projects if there's no search input
      setFilteredResults(data);
    }
  }, [searchInput, data]);

  if (isLoading) {
    content = (
      <>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"All Projects"} />
        </Container>
        <Container className="d-flex flex-column justify-content-center">
          <Loading />
        </Container>
      </>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"All Projects"} />
        </Container>
        <Container>
          <InputGroup className="mx-auto mb-3">
            <InputGroup.Text id="search">
              <Icon icon="ic:round-search" />
            </InputGroup.Text>
            <FormControl
              placeholder="Project name"
              aria-label="Search projects"
              aria-describedby="search"
              onChange={(e) => setSearchInput(e.currentTarget.value)}
            />
          </InputGroup>
          <Row xs={1} md={3} lg={3} className="g-4 justify-content-center row">
            {filteredResults.map((element) => (
              <Col key={element.id}>
                <ProjectCard
                  image={element.image}
                  name={element.name}
                  description={element.description}
                  url={element.html_url}
                  demo={element.homepage}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check URLs in  src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  return (
    <>
      <main>
        <StyledSection className="d-flex flex-column justify-content-center">
          {content}
        </StyledSection>
      </main>
      <BackToTop home={"Home"} />
    </>
  );
};
// #endregion

export default AllProjects;
