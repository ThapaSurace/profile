type Project = {
    id: number;
    project_name: string;
    img: string;
    desc: string;
    tags: string[];
    github_link: string;
    demo_link: string;
  };
  
  type projectProps = {
    item: Project;
  };

