import { projects } from '@/constants/projects';
import ProjectCard from '@/components/ProjectCard';
import SlideInFromLeft from '@/components/animation/SlideInFromLeft';

const Projects = ({ items }: any) => {
	return (
		<div className='space-y-20'>
			{items.map((item: Project) => (
				<SlideInFromLeft key={item.id} xOffset={-50} delay={item.id * 0.6}>
					<ProjectCard item={item} />
				</SlideInFromLeft>
			))}
		</div>
	);
};

export default Projects;
