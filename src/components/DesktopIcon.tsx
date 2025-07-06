/** @format */

import React from 'react';

type DesktopIconProps = {
	icon: string;
	label: string;
	onClick: () => void;
};

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => (
	<div
		className="flex flex-col items-center mb-4 cursor-pointer"
		onClick={onClick}>
		<img
			src={icon}
			width={48}
			alt={label}
		/>
		<span className="text-black text-xs font-bold mt-1">{label}</span>
	</div>
);

export default DesktopIcon;
