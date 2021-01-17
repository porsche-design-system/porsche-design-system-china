import React from 'react';
// import { withKnobs, text, select } from '@storybook/addon-knobs';
// import { ButtonLevel, ButtonSize, ButtonStatus, ButtonLevels } from './types';
import {AtomicButton as Button} from '.';
import './button.stories.scss';
// TODO: theming: https://storybook.js.org/docs/react/configure/theming

export default {
  title: 'Button',
  component: Button,
  // decorators: [withKnobs]
};

export const AtomicButton = () => {
	const labels = <ul className="labels">
		<li>default</li>
		<li>Hover/pressed</li>
		<li>Disabled</li>
		<li>Loading</li>
	</ul>;

	return <dl className="ps-btns">
		<dd>
			{labels}
			<ul className="btns">
				<li>
					<Button buttonLevel="primary">一级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="pressed">一级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="disabled">一级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="disabled">一级按钮</Button>
				</li>
			</ul>
		</dd>
		<dd>
			{labels}
			<ul className="btns">
				<li>
					<Button buttonLevel="secondary">二级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="secondary" className="pressed">二级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="secondary" className="disabled">二级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="secondary" className="disabled">二级按钮</Button>
				</li>
			</ul>
		</dd>
		<dd>
			{labels}
			<ul className="btns">
				<li>
					<Button buttonLevel="tertiary">三级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="tertiary" className="pressed">三级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="tertiary" className="disabled">三级按钮</Button>
				</li>
				<li>
					<Button buttonLevel="tertiary" className="disabled">三级按钮</Button>
				</li>
			</ul>
		</dd>
	</dl>
}

// export const knobsButton = () => (
//   <Button
// 		buttonLevel={select<ButtonLevel>('buttonLevel', ButtonLevels, 'primary')}
//   >
//     {text('一级按钮', '二级按钮', '三级按钮')}
//   </Button>
// );
