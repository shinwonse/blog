import Carousel from '@/components/carousel';
import { getProjects } from '@/services/project';
import { cn } from '@/utils/cn';

import ProjectCard from './project-card';

const ProjectSection = async () => {
  const projects = await Promise.resolve(getProjects());

  return (
    <section className={cn('size-full pl-6 sm:px-6')}>
      <h2 className={cn('mb-4 w-full font-bold')}>사이드 프로젝트</h2>
      <Carousel
        items={projects}
        getKey={(project) => project.title}
        renderItem={(project) => (
          <ProjectCard
            description={project.description}
            githubUrl={project.githubUrl}
            serviceUrl={project.serviceUrl}
            title={project.title}
          />
        )}
      />
    </section>
  );
};

export default ProjectSection;
