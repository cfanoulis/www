const LandingPageSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="pt-16 flex">
			<div id="title-wrapper" className="pl-4 rotate-180 flex text-white text-3xl vertical-text font-heading">
				<div>{title}</div>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default LandingPageSection;
