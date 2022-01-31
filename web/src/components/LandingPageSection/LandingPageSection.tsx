const LandingPageSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="pt-6 lg:pt-16 md:flex">
			<div id="title-wrapper" className="md:pl-4 md:vertical-text md:rotate-180 flex md:justify-end text-xl md:text-2xl tracking-widest font-heading">
				<h3>{title}</h3>
			</div>
			<p>{children}</p>
		</div>
	);
};

export default LandingPageSection;
