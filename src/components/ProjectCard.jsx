import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";

// #region styled-components
const StyledCard = styled.div`
  .card {
    height: var(--card-height); // Use original variable for height
    border: none; // Use original variable for border
    transition: all 0.2s ease-in-out; // Smooth transition for hover effects
    background: ${({ theme }) =>
      theme.name === "light" ? "" : "var(--bs-gray)"}; // Conditional background based on theme
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)" // Shadow for light theme
        : "0 3px 10px rgb(255 255 255 / 0.2)"}; // Shadow for dark theme
    overflow: hidden; // Hide overflow for internal elements
    position: relative; // Position relative for absolutely positioned elements inside

    .card-img-top {
      width: 100%; // Full width image
      height: 200px; // Fixed image height
      object-fit: cover; // Ensure image covers area without distortion
    }

    .card-body {
      padding: 5px; // Padding inside card body
      text-align: center; // Center-align text in card body
    }

    .card-title {
      margin-bottom: 0; // Remove default bottom margin
      margin-top: 20px; // Add top margin
    }

    .card-text {
      position: absolute; // Absolute positioning for overlay effect
      top: 0; // Position at the top
      left: 0; // Position at the left
      width: 100%; // Full width overlay
      height: 100%; // Full height overlay
      background-color: rgba(0, 0, 0, 0.7); // Dark background with transparency
      color: white; // White text color
      display: flex; // Flexbox for centering content
      flex-direction: column; // Column layout
      justify-content: center; // Center content vertically
      align-items: center; // Center content horizontally
      opacity: 0; // Hidden by default
      transition: all 0.2s ease-in-out; // Smooth transition for hover effects
      padding: 0 10px; // Add left and right padding
    }

    &:hover {
      .card-text {
        opacity: 1; // Show overlay on hover
        font-size: 1.1rem;

        .card-link {
          color: white; // Change link color to white
          text-decoration: none; // Remove underline from link
          font-weight: bold;
        }
      }
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  image: PropTypes.node.isRequired, // Required image prop
  name: PropTypes.string.isRequired, // Required name prop
  description: PropTypes.string.isRequired, // Required description prop
  url: PropTypes.string.isRequired, // Required URL prop
};

const ProjectCard = ({ image, name, description, url }) => {
  return (
    <StyledCard>
      <div className="card">
        <img src={image || GH} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <p>{description}</p>
            <a href={url} className="card-link">
              View on GitHub <Icon icon="icomoon-free:github" />
            </a>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;
