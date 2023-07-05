import Heading from "./Heading";
import Subheading from "./Subheading";

const ProjectDetails = () => {
  return (
    <div className="flex my-10 items-center justify-between">
      <Subheading title={"JanaIsCoding's Blog"} />
      <div className="flex gap-6 self-end font-overpass600 text-blue">
        <a
          href="https://github.com/janaiscoding/blog-api"
          className="flex items-baseline gap-1"
          target="_blank"
        >
          <img
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            }
            width={20}
            height={20}
            alt="github icon"
            title="API Repo"
          />
          <p className="align-bottom">API</p>
        </a>
        <a
          href="https://github.com/janaiscoding/blog-cms"
          className="flex items-baseline gap-1"
          target="_blank"
        >
          <img
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            }
            width={20}
            height={20}
            alt="github icon"
            title="CMS Repo"
          />
          <p className="align-bottom">CMS</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
