import { MetaTags } from '@redwoodjs/web';
import LandingPageSection from 'src/components/LandingPageSection/LandingPageSection';

const LandingPage = () => {
	return (
		<div className="h-screen w-screen p-16 flex flex-col bg-neutral-900 text-gray-300 absolute">
			<MetaTags
				title="student, dreamer, maker"
				// description="Landing description"
				/* you should un-comment description and add a unique description, 155 characters or less
				You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<h2 className="text-xl">Greetings, I&apos;m</h2>
			<br />
			<h1 className="text-6xl font-heading font-medium">Charalampos Fanoulis</h1>
			<h1 className="text-lg italic font-thin font-heading">student, dreamer, maker</h1>
			<br />
			<LandingPageSection title="about">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat lacus quis ipsum volutpat lobortis. Pellentesque fermentum,
				diam eu vestibulum accumsan, nisl neque maximus lorem, nec tincidunt nisi eros quis elit. Sed egestas arcu dui. Sed cursus bibendum
				semper. In laoreet lorem in augue sollicitudin pharetra. Sed vestibulum id magna vitae ullamcorper. Nulla pharetra et mauris in
				consectetur. Aliquam finibus fringilla aliquam. Quisque aliquam enim vitae nisi molestie, consequat luctus purus consequat. Vestibulum
				ac dignissim elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ac odio congue,
				dapibus ipsum ut, placerat lectus. Ut eleifend felis et efficitur euismod. Donec semper accumsan euismod. Praesent et justo et leo
				varius semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat lacus quis ipsum volutpat lobortis.
				Pellentesque fermentum, diam eu vestibulum accumsan, nisl neque maximus lorem, nec tincidunt nisi eros quis elit. Sed egestas arcu
				dui. Sed cursus bibendum semper. In laoreet lorem in augue sollicitudin pharetra. Sed vestibulum id magna vitae ullamcorper. Nulla
				pharetra et mauris in consectetur. Aliquam finibus fringilla aliquam. Quisque aliquam enim vitae nisi molestie, consequat luctus purus
				consequat. Vestibulum ac dignissim elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				In ac odio congue, dapibus ipsum ut, placerat lectus. Ut eleifend felis et efficitur euismod. Donec semper accumsan euismod. Praesent
				et justo et leo varius semper.{' '}
			</LandingPageSection>
		</div>
	);
};

export default LandingPage;
