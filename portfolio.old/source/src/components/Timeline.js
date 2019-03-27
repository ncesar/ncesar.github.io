import React from "react";
import "../sass/Timeline.scss";
import { TimelineList } from "./data/TimelineList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
library.add(faBriefcase);

let timeline = TimelineList.map((timeline, key) => {
  return (
    <article className="education-item" key={key}>
      <FontAwesomeIcon
        className="icon education-icon"
        icon="briefcase"
        size="2x"
      />
      <h3 className="education-date">{timeline.year}</h3>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{timeline.company}</h1>
          <h2 className="card-subtitle">
            <a href={timeline.jobLink}>{timeline.role}</a>{" "}
          </h2>
          <p className="card-text text-muted">{timeline.jobTime}</p>
          <p className="card-text">{timeline.description}</p>
        </div>
      </div>
    </article>
  );
});

const Timeline = () => {
  return (
    <section id="timeline" className="timeline">
      <div className="separator" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading-timeline">Minha linha do tempo</h1>
            {timeline}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
