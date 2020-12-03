import React from 'react'
import { Link } from 'gatsby'


const CookiesBanner = () => {
	const [isShow, showBanner] = React.useState(false)
	const toggleCookies = () => {
		showBanner(!isShow)
	}

	return (
		<div className={`cookies-banner-wrap ${isShow ? "hide-cookies-banner" : ""}`}>
			<div className="cookies-banner">
				<p>This website uses cookies to provide better access to the content we offer and for statistical purposes. By using this site, you consent to the use and storage of cookies.
				</p>
				<div className="cookies-btns">
					<Link to='/privacy'>Privacy policy</Link>
					<button className="cookies-btn-agree" onClick={toggleCookies}>Understood</button>
				</div>
			</div>
		</div>
	)
}

export default CookiesBanner