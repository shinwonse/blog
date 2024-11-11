import Carousel from '@/app/components/Carousel';
import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/services/project';
import { cn } from '@/utils/cn';

async function ProjectSection() {
  const projects = await Promise.resolve(getProjects());

  return (
    <section className={cn('size-full pl-6 content-visibility-auto sm:px-6')}>
      <h2 className={cn('mb-4 w-full font-bold')}>사이드 프로젝트</h2>
      <Carousel
        items={projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            description={project.description}
            githubUrl={project.githubUrl}
            serviceUrl={project.serviceUrl}
            title={project.title}
          />
        ))}
      />
    </section>
  );
}

export default ProjectSection;
