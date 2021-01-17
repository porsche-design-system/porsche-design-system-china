import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import {AtomicStyle} from '../../shared/interface';

type HeaderProps = {
  // Have the top bar ?
  hasTop?: boolean;
  // Style object
  headerStyle?: AtomicStyle | any;
  barStyle?: AtomicStyle | any;
};

const Header: FC<HeaderProps> = props => {
	const {hasTop, headerStyle, barStyle} = props;
	const {toArray, count} = React.Children;

	const [top, bar] = toArray(props.children);

	return (
		<header className={`${hasTop ? 'pui-with-top' : ''} pui-header`}>
			<div className="pui-top" style={headerStyle}>
				{top}
			</div>
			{hasTop && <div className="pui-bar" style={barStyle}>
				{count(props.children) > 1 ? bar : ''}
				</div>}
		</header>
	)
}

export {
	Header
}
