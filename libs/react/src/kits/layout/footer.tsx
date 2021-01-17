import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import {AtomicStyle} from '../../shared/interface'

type FooterProps = {
	footerStyle?: AtomicStyle | any;
};

const Footer: FC<FooterProps> = props => {
	const {footerStyle} = props;

	return (
		<footer className="pui-footer" style={footerStyle?.own || {}}>{props.children}</footer>
	)
}

export {
	Footer
}
