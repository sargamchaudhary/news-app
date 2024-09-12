import React from "react";

const NewsItems = (props) => {
  let { title, description, imgUrl, newsUrl } = props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imgUrl
              ? "https://www.reuters.com/resizer/fm68FMGzI4tPuxG7GEdzm_6a6Cg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RI5DGSXMIFKDTH6QCCOZCOWJPE.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
