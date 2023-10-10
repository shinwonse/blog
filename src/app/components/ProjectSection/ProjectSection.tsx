import clsx from 'clsx';

import ProjectCard from '@/app/components/ProjectCard';
import Section from '@/app/components/Section';
import { getProjects } from '@/services/notion';

async function ProjectSection() {
  const projects = await Promise.resolve(getProjects());

  return (
    <Section className={clsx('w-full')} layout="grid" title="프로젝트">
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
    </Section>
  );
}

export default ProjectSection;
