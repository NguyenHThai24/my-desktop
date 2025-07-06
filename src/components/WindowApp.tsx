/** @format */

import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

type WindowAppProps = {
	title: string;
	children?: React.ReactNode;
	onClose: () => void;
	onMinimize: () => void;
	style?: React.CSSProperties;
};

const WindowApp = ({
	title,
	children,
	onClose,
	onMinimize,
	style = {},
}: WindowAppProps) => {
	const [isMaximized, setIsMaximized] = useState(false);

	const defaultSize = {
		x: 100,
		y: 100,
		width: 900,
		height: 500,
	};

	const handleToggleMaximize = () => setIsMaximized((prev) => !prev);

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
			className="absolute"
			style={style}>
			<div className="bg-white shadow-lg rounded-md border flex flex-col h-full">
				<div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2 rounded-t-md cursor-move">
					<span className="font-semibold">{title}</span>
					<div className="flex gap-2">
						<button
							type="button"
							aria-label="Minimize"
							onClick={onMinimize}>
							<Minus size={16} />
						</button>
						<button
							type="button"
							onClick={handleToggleMaximize}>
							{isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
						</button>
						<button
							aria-label="Minimize"
							type="button"
							onClick={onClose}>
							<X size={16} />
						</button>
					</div>
				</div>
				<div className="p-2 overflow-auto flex-1 text-black">{children}</div>
			</div>
		</Rnd>
	);
};

export default WindowApp;
