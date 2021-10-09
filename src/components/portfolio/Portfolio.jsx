import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import ProjectDialog from "./projectDialog/ProjectDialog";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    switch (selected) {
      case "featured": {
        setData(featuredPortfolio);
        break;
      }
      case "web": {
        setData(webPortfolio);
        break;
      }
      case "mobile": {
        setData(mobilePortfolio);
        break;
      }
      case "design": {
        setData(designPortfolio);
        break;
      }
      /*  case "branding": {
        setData(brandingPortfolio);
        break;
      } */
      case "content": {
        setData(contentPortfolio);
        break;
      }
      default:
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Some things I've Built</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((data) => (
          <div className="item" key={data.id} onClick={() => handleClickOpen()} >
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
            <div className="button">View Project</div>
          </div>
        ))}
      </div>
      <ProjectDialog handleClose={handleClose} setOpen={setOpen}  open={open} />
      <a className="arrow" href="#contact">
            <KeyboardArrowDownIcon />
          </a>
    </div>
  );
};

export default Portfolio;
