import React from 'react';
import {TextButton as Button} from './textButton';
import './button.stories.scss';

export default {
  title: 'Button',
  component: Button,
};

export const TextButton = () => {
	const labels = <ul className="labels">
		<li>default</li>
		<li>Hover/pressed</li>
		<li>Disabled</li>
		<li>Loading</li>
	</ul>;
	const buttonClicked = () => {
		console.log('clicked button');
	}

	return <dl className="ps-btns">
		<dd>
			{labels}
			<ul className="btns">
				<li>
					<Button
						buttonLevel="primary"
						clickCallback={buttonClicked}
					>文字链接</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="pressed">文字链接</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="disabled">文字链接</Button>
				</li>
				<li>
					<Button buttonLevel="primary" className="disabled">文字链接</Button>
				</li>
			</ul>
		</dd>
	</dl>
};
