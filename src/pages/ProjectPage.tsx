import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/project/ProjectHero";
import ProjectContent from "../components/project/ProjectContent";
import ProjectMedia from "../components/project/ProjectMedia";
import { projects } from "../constants/projects";
import NotFound from "./NotFound";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "../components/footer/Footer";

export default function ProjectPage() {
  useScrollToTop();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <ProjectHero
        title={project.title}
        category={project.category}
        description={project.description}
        image={project.image}
      />
      <ProjectContent content={project.content} features={project.features} />
      <ProjectMedia youtubeId={project.youtubeId} gallery={project.gallery} />
      <Footer />
    </div>
  );
}
