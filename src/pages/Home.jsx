import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ToolIcon from "@mui/icons-material/Handyman";
import WebIcon from "@mui/icons-material/Language";
import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedIcon from "@mui/icons-material/Verified";
import ClockIcon from "@mui/icons-material/AccessTimeFilled";
import { CodeBlock } from "react-code-blocks";
import aClearPathToMasterCoding from "../assets/img/home/aClearPathToMasterCoding.png";
import decadesOfCodingSharedWithYour from "../assets/img/home/decadesOfCodingSharedWithYour.webp";
import deepUnderstandingAndNotJustShortCuts from "../assets/img/home/deepUnderstandingAndNotJustShortCuts.webp";
import getReadyForRealWorldWork from "../assets/img/home/getReadyForRealWorldWork.webp";
import joinAGlobalCommunityOfLearners from "../assets/img/home/joinAGlobalCommunityOfLearners.webp";
import straightForwardAndToThePoint from "../assets/img/home/straightForwardAndToThePoint.webp";
import code from "../assets/img/home/code.png";
import { NavLink } from "react-router";
//todo:create and add a video
// todo start the animation on numbers when visible

const NumericCard = ({ color, value, text }) => {
  const [count, setCount] = useState(0);
  const elemRef = useRef();
  const isReadyRef = useRef(false);

  useEffect(()=>{
    const listener = ()=>{
      const rect = elemRef.current.getBoundingClientRect();
     
      if(rect.top <= window.innerHeight && isReadyRef.current === false){//when the addition is not ready only then otherwise no need
        isReadyRef.current = true;
        setCount(count + value / 150);
      }
    }
    window.addEventListener('scroll', listener)
    listener();// calling listener here so that on first load if the element is already visible then animation should start 
    // and not wait for scrolling 

    return ()=>{
      window.removeEventListener('scroll',listener);
    }
  },[])

  useEffect(() => {
    if (count < value && isReadyRef.current) {
      setTimeout(() => setCount(count + value / 150), 30);
    }
  }, [count]);

  return (
    <div ref = {elemRef} className="numeric-box" id={color + "-numeric-box"}>
      <div id={`${color}-count`}>
        {Math.floor(count) > value ? value : Math.round(count)}+
      </div>
      <div className="count-info">{text}</div>
    </div>
  );
};

const InfoBox = ({
  Icon,
  gradientHeading,
  heading,
  infoText,
  graphics,
  orientation,
  width,
  height,
}) => {
  return (
    <div className="info-box">
      <div className={`info-text ${orientation}`}>
        <div className="icon">{Icon}</div>
        <div className="gradient-heading">{gradientHeading}</div>
        <div className="white-heading">{heading}</div>
        <div className="info-detail">{infoText}</div>
      </div>
      <img
        width={width && width}
        height={height && height}
        className="info-graphics"
        src={graphics}
      />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="banner">
          <div id="banner-text">
            <div id="banner-heading">
              Master Coding. Build Real Projects. Get Hired.
            </div>
            <div id="banner-info">
              Structured, no-fluff courses that teach you the skills you need to
              succeed in the real world.
            </div>
            <div id="sign-up-btn">
              Sign Up for Free <ArrowForwardIcon />
            </div>
          </div>
          <div></div>
          <div id="banner-graphics">
            <div id="control-bar">
              <div id="banner-buttons">
                <div className="button" id="red"></div>
                <div className="button" id="orange"></div>
                <div className="button" id="green"></div>
              </div>
            </div>
            <div id="body-window">
              <CodeBlock
                text={`
         const coder = {
                name : 'Master Coder',
                skills: ['React' , 'Node'],
                hardWorkder: true,
                problemSolver: true,
                hireable: function(){
                    return (
                       this.hardWorder && 
                       this.problemSolver &&
                       this.skills.length >= 5
                       );
                 }

              } 
                  
                  `}
                language={"javascript"}
                showLineNumbers={false}
                customStyle={{ background: "transparent", color: "white" }}
              />
            </div>
          </div>
        </div>
        <div id="intro-parent">
          <div id="greetings">
            <div id="hello">Hello,</div>
            <div id="name">Welcome to CodeJutsu.</div>
          </div>
          <div id="intro-text">
            At CodeJutsu, we provide a smart, streamlined platform to help you
            discover the best computer science courses without the hassle.
            Instead of wasting time digging through endless course pages, let us
            do the heavy lifting. We search the web, evaluate the options, and
            bring you top-rated courses tailored to your needs — so you can
            focus on learning, not searching.
          </div>
          <div>Video Goes in Here</div>
          <div id="numeric-data-parent">
            <NumericCard value={500} color={"pink"} text={"Courses"} />
            <NumericCard value={10000} color={"green"} text={"Active Users"} />
            <NumericCard
              value={500}
              color={"orange"}
              text={"Mentors/Teachers"}
            />
            <NumericCard value={75} color={"purple"} text={"Domains"} />
          </div>
        </div>
        <div id="info-parent">
          <div id="headings">
            <div id="grad-heading">Why You'll Love Learning Here</div>
            <div id="big-heading">Quality, Structure and Real Results</div>
          </div>
          <div id="info-boxes">
            <InfoBox
              Icon={<SubscriptionsIcon />}
              gradientHeading={"A clear path to master coding"}
              heading={"Perfectly Structured Courses"}
              infoText={
                "No more jumping between random YouTube tutorials. Follow a clear, logical path designed to build your skills step-by-step."
              }
              graphics={aClearPathToMasterCoding}
            />
            <InfoBox
              Icon={<ClockIcon />}
              gradientHeading={"Straightforward and to the point"}
              heading={"Clear and Bite-Sized Lessons"}
              infoText={
                "Each lesson is focused and fluff-free, so you can make real progress—even with a busy schedule. Get exactly what you need without wasting a minute."
              }
              graphics={straightForwardAndToThePoint}
              orientation={"right"}
            />
            <InfoBox
              Icon={<ToolIcon />}
              gradientHeading={"Deep understanding, not just shortcuts"}
              heading={"More than Just Code"}
              infoText={
                "I go beyond the “what” and show you the “why” and “how” behind every concept, so you can code with real understanding."
              }
              graphics={deepUnderstandingAndNotJustShortCuts}
              width={"280"}
            />
            <InfoBox
              Icon={<WebIcon />}
              gradientHeading={"Get ready for real-world work"}
              heading={"Hands-on Projects You'll Love"}
              infoText={
                "We’ll build real-world projects together, giving you the confidence to tackle real challenges on the job."
              }
              graphics={getReadyForRealWorldWork}
              orientation={"right"}
              width={"250"}
            />
            <InfoBox
              Icon={<GroupsIcon />}
              gradientHeading={"Decades of coding, shared with youd"}
              heading={"Built on 20+ Years of Experience"}
              infoText={
                "With over two decades in the industry, I've seen it all. I'll share insights and lessons that you won't find in any textbook."
              }
              graphics={decadesOfCodingSharedWithYour}
              width={"380"}
            />
            <InfoBox
              Icon={<VerifiedIcon />}
              gradientHeading={"Join a global community of learners"}
              heading={"Trusted by Millions"}
              infoText={
                "#1 ranked tutorials on YouTube, trusted by millions for their clarity and depth."
              }
              graphics={joinAGlobalCommunityOfLearners}
              orientation={"right"}
            />
          </div>
        </div>
        <div id="outro-parent">
          <div id="headings">
            <div id="gradient-heading">Recognized by Professionals</div>
            <div id="main-heading">
              Trusted by Employees at Leading Companies
            </div>
          </div>
          <div id="text-info">
            The courses here are used by individuals and professionals working
            in top companies like Google, Meta, Netflix , Microsoft, Amazon,
            etc. Helping them sharpen their skills and stay ahead in their
            fields
          </div>
          <div id="buttons">
            <NavLink to="/courses">
              <div className="button a">Browse Courses </div>
            </NavLink>

            <div className="button b">Join for free</div>
            {/* TODO:make these buttons functional */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
