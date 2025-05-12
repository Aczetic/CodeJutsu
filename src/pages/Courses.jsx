import { useEffect, useRef, useState } from "react";
import "../styles/courses.css";
import FilterIcon from "@mui/icons-material/Tune";
import DoneIcon from "@mui/icons-material/Done";
import { COURSES, FILTER_OPTIONS } from "../data";

const Course = ({ course }) => {
  return (
    <div className="course">
      <div
        className="course-img"
        style={{
          backgroundImage: `url(https://codewithmosh.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodewithmosh%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcovers%2Fspring-boot-part1&w=384&q=75)`,
        }}
      ></div>
      <div className="course-info">
        <div className="title">
          <div className="course-name">
            Spring Boot: Mastering the fundamentals
          </div>
          <div className="time">6h</div>
        </div>
        <div className="course-info-text">
          Master dependency injection and database integration with spring boot
          and spring boot JPA
        </div>
        <div className="price">
          <span className="current-price">${0.05 * 99}</span>
          <span className="original-price">$99</span>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] =
    useState("All Courses");
  const filterOptions = useRef(null);

  useEffect(() => {
    // this effect handles the closing of filter box by attaching click to document and checking the filter box is containing the click target
    // if not then close otherwise leave it to the default handling done in filter element
    const handleClose = (e) => {
      if (
        !filterOptions.current.contains(e.target) &&
        e.target.getAttribute("id") != "filter-button"
      )
        setShowFilterOptions(false);
    };
    if (showFilterOptions) {
      document.addEventListener("click", handleClose);
    }
    return () => document.removeEventListener("click", handleClose);
  }, [showFilterOptions]);

  return (
    <div id="courses-parent">
      <div id="info">
        <div id="heading">Build Real-World Skills</div>
        <div id="text-info">
          Master software development with structured courses designed to make
          your job-ready
        </div>
      </div>
      <div id="search-parent">
        <div id="search-box">
          <input placeholder="Search" />
          {/* TODO:properly implement the search functionality when input clicked all text selected by default , cross icon and search icon */}
        </div>
        <div id="filter-box">
          <div
            id="filter-button"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          >
            {selectedFilterOption} <FilterIcon />
          </div>
          <div id="filter-options" ref={filterOptions}>
            {showFilterOptions &&
              FILTER_OPTIONS.map((each, index) => (
                <div
                  className="filter-option"
                  key={each.id}
                  onClick={() => {
                    setSelectedFilterOption(each.name);
                    setShowFilterOptions(false);
                  }}
                >
                  {each.name}
                  {selectedFilterOption == each.name && (
                    <DoneIcon style={{ color: ` rgba(252, 69, 252, 1)` }} />
                  )}
                </div>
              ))}
          </div>
          {/* TODO: implement this button updating the courses displayed on filter options set */}
        </div>
      </div>
      <div id="courses-container">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
};

export default Courses;
