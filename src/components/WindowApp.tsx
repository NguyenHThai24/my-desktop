/** @format */

import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

type WindowAppProps = {
	title: string;
	onClose: () => void;
	onMinimize: () => void;
	children?: React.ReactNode;
};

const WindowApp = ({
	title,
	children,
	onClose,
	onMinimize,
}: WindowAppProps) => {
	const [isMaximized, setIsMaximized] = useState(false);

	const defaultSize = {
		x: 100,
		y: 100,
		width: 900,
		height: 500,
	};

	const handleToggleMaximize = () => {
		setIsMaximized((prev) => !prev);
	};

	return (
		<Rnd
			default={defaultSize}
			position={isMaximized ? { x: 0, y: 0 } : undefined}
			size={isMaximized ? { width: '100%', height: '100%' } : undefined}
			disableDragging={isMaximized}
			enableResizing={!isMaximized}
			minWidth={300}
			minHeight={200}
			bounds="window"
			className="z-50">
			<div className="bg-white shadow-lg rounded-md border flex flex-col h-full">
				{/* Title Bar */}
				<div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2 rounded-t-md cursor-move">
					<span className="font-semibold">{title}</span>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={onMinimize}
							aria-label="Minimize">
							<Minus size={16} />
						</button>
						<button
							type="button"
							onClick={handleToggleMaximize}
							aria-label="Maximize">
							{isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
						</button>
						<button
							type="button"
							onClick={onClose}
							aria-label="Close">
							<X size={16} />
						</button>
					</div>
				</div>

				{/* Window Content */}
				<div className="p-2 overflow-auto flex-1 text-black">{children}</div>
			</div>
		</Rnd>
	);
};

export default WindowApp;
