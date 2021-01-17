import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { styled } from '@storybook/theming';

import {
	HeaderStyle, Header,
	ContentStyle, Content,
	Aside, AsideStyle,
	Footer, FooterStyle,
	Layout, LayoutStyle
} from '.';

import './layout.story.sass';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withKnobs]
};

export const PlainLayout = () => {
	return <Layout
		{...{
			layoutStyle: {
				own: {
					backgroundColor: '#ddd',
					color: '#fff'
				}
			}
		}}
	>Plain Layout</Layout>
};

console.log(':::', styled);
const Component = styled.div(({ theme }) => ({
  background: theme.background.app,
  width: 0,
}));

export const LayoutWithBar = () => {
	const hasTop = true;
	const style = {};
	const asideStyle: AsideStyle = {
		asideFlex: 2,
		contentFlex: 5
	};

	return <Layout
    {...{
      layoutStyle: {
				own: {}
      }
    }}
  >
		<Header {...{
			hasTop,
			headerStyle: {},
			barStyle: {}
		}}>
			<div className="test">
				<span>top span</span>
			</div>
			<div>bar div</div>
		</Header>
	</Layout>
};

export const FullLayout = () => {
	const hasTop = true;
	const contentStyle = {
		own: {display: 'flex'}
	};
	const asideStyle: AsideStyle = {
		own: {
			background: '#eee'
		}
	};
	const footerStyle = {
		own: {
			backgroundColor: 'rgba(0, 0, 255, 0.1)'
		}
	};
	return <Layout
    {...{
      layoutStyle: {
        asideFlex: 1,
				contentFlex: 5,
				own: {
					// backgroundColor: '#fff'
				}
      }
    }}
  >
		<Header {...{
			hasTop,
			headerStyle: {
			}
		}}>
			<div className="test">
				<span>top</span>
			</div>
			<div>bar</div>
		</Header>
		<Content contentStyle={contentStyle}>
			<Aside asideStyle={asideStyle}>
			aside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			</Aside>
			<Content>ContentContentContentContentContentContentContentContent</Content>
		</Content>
		<Footer {
			...{footerStyle}
		} />
	</Layout>
};
