import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/services/notion';
import { cn } from '@/utils/cn';

async function ProjectSection() {
  const projects = await Promise.resolve(getProjects());

  return (
    <section className={cn('w-full')}>
      <h2 className={cn('mb-4 w-full font-bold')}>사이드 프로젝트</h2>
      <div className={cn('grid grid-cols-2 gap-2 sm:grid-cols-3')}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              serviceUrl={project.serviceUrl}
              title={project.title}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
