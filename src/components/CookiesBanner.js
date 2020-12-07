import React from 'react'
import { Link } from 'gatsby'
// import CloseBtnIcon from '../assets/CloseBtnIcon_cookies.svg'


// let [isShow, showBanner, cookies_banner] = React.useState(false)
// cookies_banner = document.cookie.split(';').some((item) => item.trim().startsWith('cookies_banner=close'))
// const CookiesBanner = () => {
// 	const toggleCookies = () => {
// 		showBanner(!isShow)
// 		document.cookie = 'cookies_banner=close'
// 	}

// 	return (
// 		<div className={`cookies-banner-wrap ${cookies_banner ? "hide-cookies-banner" : ""}`}>
// 			<div className="cookies-banner">
// 				<p>This website uses cookies to provide better access to the content we offer and for statistical purposes. By using this site, you consent to the use and storage of cookies.
// 				</p>
// 				<button className='btn-x' onClick={toggleCookies}><img src={CloseBtnIcon} /></button>
// 				<div className="cookies-btns">
// 					<Link to='/privacy'>Privacy policy</Link>
// 					<button className="cookies-btn-agree" onClick={toggleCookies}>Understood</button>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default CookiesBanner

import CookieConsent from "react-cookie-consent";

const CookiesBanner = () => {
	// const toggleCookies = () => {
	// 	showBanner(!isShow)
	// 	document.cookie = 'cookies_banner=close'
	// }

	return (
		<CookieConsent
			disableStyles='true'
			style={{ bottom: '1rem' }}
			containerClasses="cookies-banner-wrap"
			contentClasses="cookies-banner"
			buttonClasses="cookies-btn-agree"
			buttonWrapperClasses="cookies-btns"
		><p>This website uses cookies to provide better access to the content we offer and for statistical purposes. By using this site, you consent to the use and storage of cookies. <Link to='/privacy'>Privacy policy</Link> </p></CookieConsent>

	)
}
export default CookiesBanner
