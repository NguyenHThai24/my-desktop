/** @format */

import * as Tooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

type TooltipWrapperProps = {
	content: string;
	children: ReactNode;
};

const TooltipWrapper = ({ content, children }: TooltipWrapperProps) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<span>{children}</span>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						side="top"
						className="px-3 py-1.5 text-sm text-black bg-white rounded-md shadow-lg z-[9999]"
						sideOffset={5}>
						{content}
						<Tooltip.Arrow className="fill-gray-800" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

export default TooltipWrapper;
