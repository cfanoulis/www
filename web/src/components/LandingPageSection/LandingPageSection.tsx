const LandingPageSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="pt-4 lg:pt-14 md:flex w-3/4">
			<div
				id="title-wrapper"
				className="md:pl-4 md:vertical-text md:rotate-180 flex md:justify-end text-xl md:text-2xl tracking-widest font-heading"
			>
				<h3>{title}</h3>
			</div>
			<p className="leading-7">{children}</p>
		</div>
	);
};

export default LandingPageSection;
