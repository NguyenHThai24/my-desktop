/** @format */

import React from 'react';

type TaskbarProps = {
	currentTime: Date;
	isCVOpen: boolean;
	onClickCV: () => void;
	startIcon: string;
	cvIcon: string;
};

const Taskbar = ({
	currentTime,
	isCVOpen,
	onClickCV,
	startIcon,
	cvIcon,
}: TaskbarProps) => {
	return (
		<section className="h-12 px-4 bg-gray-300 text-black flex items-center justify-between gap-4">
			{/* Start button */}
			<div className="h-full flex items-center">
				<button
					type="button"
					className="rounded hover:bg-white p-1">
					<img
						src={startIcon}
						width={30}
						alt="Start"
					/>
				</button>
			</div>

			{/* Taskbar buttons */}
			<div className="flex gap-2 items-center">
				{isCVOpen && (
					<button
						type="button"
						onClick={onClickCV}
						className="rounded hover:bg-white p-1 text-sm">
						<img
							src={cvIcon}
							width={30}
							alt="My CV"
						/>
					</button>
				)}
			</div>

			{/* Clock */}
			<div className="ml-auto text-right leading-tight text-[13px] font-semibold">
				<div>{currentTime.toLocaleTimeString()}</div>
				<div>{currentTime.toLocaleDateString()}</div>
			</div>
		</section>
	);
};

export default Taskbar;
