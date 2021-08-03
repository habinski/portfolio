import React from 'react'
import { Link } from 'gatsby'
// import { useLocation } from "@reach/router" // this helps tracking the location
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import CookieConsent from 'react-cookie-consent';

import {
	cookiesBannerWrap,
	cookiesBanner,
	cookiesBtnAgree,
	cookiesBtns, declineBtn
} from '../css/cookiesBanner.module.scss'

const CookiesBanner = () => {
	// err build
	// const location = useLocation()
	// initializeAndTrack(location)

	return (
		<CookieConsent
			disableStyles='true'
			enableDeclineButton
			// style={{ bottom: '1rem' }}
			containerClasses={cookiesBannerWrap}
			declineButtonClasses={declineBtn}
			contentClasses={cookiesBanner}
			buttonClasses={cookiesBtnAgree}
			buttonWrapperClasses={cookiesBtns}
			cookieName="gatsby-gdpr-google-tagmanager"
			buttonText="Accept"
			declineButtonText="Decline">

			<p>This website uses cookies to provide better access to the content we offer and for statistical purposes. By using this site, you consent to the use and storage of cookies. <br /> <Link to='/privacy'>Privacy policy</Link> </p></CookieConsent>

	)
}
export default CookiesBanner
