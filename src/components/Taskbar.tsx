/** @format */

import React, { useEffect, useState } from 'react';

type AppWindow = {
	id: string;
	title: string;
	icon: string;
	content: React.ReactNode;
	isMinimized: boolean;
	zIndex: number;
};

type TaskbarProps = {
	windows: AppWindow[];
	onFocusWindow: (id: string) => void;
	startIcon: string;
};

const Taskbar = ({ windows, onFocusWindow, startIcon }: TaskbarProps) => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="h-12 px-4 bg-gray-300 text-black flex items-center justify-between gap-4">
			<button
				type="button"
				className="rounded hover:bg-white p-1">
				<img
					src={startIcon}
					width={30}
					alt="Start"
				/>
			</button>

			<div className="flex gap-2 items-center">
				{windows.map((w) => (
					<button
						type="button"
						key={w.id}
						onClick={() => onFocusWindow(w.id)}
						className="rounded hover:bg-white p-1 text-sm">
						<img
							src={w.icon}
							width={30}
							alt={w.title}
						/>
					</button>
				))}
			</div>

			<div className="ml-auto text-right leading-tight text-[13px] font-semibold">
				<div>{currentTime.toLocaleDateString()}</div>
				<div>{currentTime.toLocaleTimeString()}</div>
			</div>
		</section>
	);
};

export default Taskbar;
