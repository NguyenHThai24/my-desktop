/** @format */

type DesktopIconProps = {
	icon: string;
	label: string;
	onClick: () => void;
};

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => {
	return (
		<div
			className="flex flex-col items-center justify-center cursor-pointer select-none text-white w-20"
			onClick={onClick}>
			<img
				src={icon}
				alt=""
				className="w-12 h-12"
			/>
			<span className="text-sm text-center mt-1 font-medium">{label}</span>
		</div>
	);
};

export default DesktopIcon;
