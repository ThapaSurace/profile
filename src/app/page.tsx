import SlideInFromLeft from '@/components/animation/SlideInFromLeft';
import Projects from '@/components/Projects';
import ProjectSkeleton from '@/components/skeleton/ProjectSkeleton';
import TechStack from '@/components/TechStack';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';
import { featuredProject } from '@/constants/projects';

const page = () => {
	return (
		<div className='container space-y-10'>
			{/* intro */}
			<SlideInFromLeft delay={0.3}>
				<div className=' max-w-screen-md '>
					<h1 className='mb-4'>Hello there! I'm Suresh Thapa.</h1>
					<p className='mb-4'>
						A fresh and enthusiastic developer passionate about building products and web apps that can
						positively impact millions of lives.
					</p>
					<p>
						I'm eager to dive into the world of software development and contribute to creating scalable,
						performance-optimized, and visually appealing web applications. I'm looking forward to learning,
						growing, and making a difference in the tech industry.
					</p>
				</div>
				<Separator className='my-10' />
			</SlideInFromLeft>

			{/* techStack */}
			<SlideInFromLeft delay={0.4}>
				<h2 className='mb-4'>Tech Stacks</h2>
				<TechStack />
				<Separator className='my-10' />
			</SlideInFromLeft>

			{/* projects */}
			<div>
				<SlideInFromLeft delay={0.5}>
					<h2 className='mb-4'>Feature Projects</h2>
				</SlideInFromLeft>
				<Suspense fallback={<ProjectSkeleton />}>
					<Projects items={featuredProject} />
				</Suspense>
			</div>
		</div>
	);
};

export default page;
