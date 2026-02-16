import { useRef } from "react";
import gsap from "gsap";

const TeamMember = ({ role, name, image, setNavOpen }) => {
	const navGreenRef = useRef(null);
	const hoverImgRef = useRef(null);

	return (
		<div
			onClick={() => {
				setNavOpen(true);
			}}
			onMouseEnter={() => {
				navGreenRef.current.style.height = "100%";
				gsap.to(hoverImgRef.current, { opacity: 1, duration: 0.3 });
			}}
			onMouseLeave={() => {
				navGreenRef.current.style.height = "0%";
				gsap.to(hoverImgRef.current, { opacity: 0, duration: 0.3 });
			}}
			className="flex uppercase border-t border-b h-24 justify-between items-center border-white relative group">
			<div
				ref={navGreenRef}
				className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"></div>
			<h1 className="font-[font2] text-xl p-4 -mt-10 relative group-hover:text-black transition-colors">
				{role}
			</h1>
			<h1 className="font-[font2] text-6xl items-center mr-4 relative group-hover:text-black transition-colors">
				{name}
			</h1>
			<div
				ref={hoverImgRef}
				className="opacity-0 absolute h-[600px] w-96 pb-10 ml-96  w-64 pointer-events-none z-20">
				<img src={image} className="h-full w-full object-cover rounded-2xl" alt="" />
			</div>
		</div>
	);
};

export default TeamMember;
