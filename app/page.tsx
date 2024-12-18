'use client';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Review from '@/components/Review';
export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<Hero />
				<Grid />
				<Project />
				<Review />
				<Footer />
			</div>
		</main>
	);
}
