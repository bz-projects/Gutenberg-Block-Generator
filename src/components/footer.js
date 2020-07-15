import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <>
                <footer className="footer">
                    <div id="wporg-footer">
                        <div className="container">
                            <ul>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/about/" title="An introduction to the WordPress project">About</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/news/" title="News and Updates">Blog</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/hosting/" title="Recommended web hosting providers">Hosting</a></li>
                                <li><a rel="noopener noreferrer" href="https://wordpressfoundation.org/donate/" title="Donate to the WordPress Foundation">Donate</a></li>
                            </ul>

                            <ul>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/support/" title="Forums, documentation, and other resources">Support</a></li>
                                <li><a rel="noopener noreferrer" href="//developer.wordpress.org" title="Resources for WordPress developers">Developers</a></li>
                                <li><a rel="noopener noreferrer" href="//make.wordpress.org/" title="Give back to WordPress through code, support, translation and more">Get Involved</a></li>
                            </ul>

                            <ul>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/showcase/" title="Some of the best WordPress sites on the Web">Showcase</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/plugins/" title="Add extra functionality to WordPress">Plugins</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/themes/" title="Make your WordPress pretty">Themes</a></li>
                            </ul>

                            <ul>
                                <li><a rel="noopener noreferrer" href="//central.wordcamp.org/" title="Find a WordPress event near you">WordCamp</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.tv/" title="Videos, tutorials, and WordCamp sessions">WordPress.TV</a></li>
                                <li><a rel="noopener noreferrer" href="//buddypress.org/" title="A set of plugins to transform your WordPress into a social network">BuddyPress</a></li>
                                <li><a rel="noopener noreferrer" href="//bbpress.org/" title="Fast, slick forums built on WordPress">bbPress</a></li>
                            </ul>

                            <ul>
                                <li><a rel="noopener noreferrer" href="//wordpress.com/?ref=wporg-footer" title="Hassle-free WordPress hosting">WordPress.com</a></li>
                                <li><a rel="noopener noreferrer" href="//ma.tt/" title="Co-founder of WordPress, an example of what WordPress can do">Matt</a></li>
                                <li><a rel="noopener noreferrer" href="//wordpress.org/about/privacy/" title="WordPress.org Privacy Policy">Privacy</a></li>
                                <li><a rel="noopener noreferrer" href="https://publiccode.eu/" target="_blank">Public Code</a></li>
                            </ul>

                            <ul>
                                <li><span className="dashicons dashicons-twitter"></span><a rel="noopener noreferrer" href="https://twitter.com/WordPress" title="Follow @WordPress on Twitter">@WordPress</a></li>
                                <li><span className="dashicons dashicons-facebook"></span><a rel="noopener noreferrer" href="https://www.facebook.com/WordPress/" title="Like WordPress on Facebook">WordPress</a></li>
                            </ul>
                        </div>

                        <p className="cip cip-image">
                            <img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." />
                        </p>

                        <div className="copyright">
                            <p>
                               Developed by <strong><a rel="noopener noreferrer" target="_blank" href="https://www.benjamin-zekavica.de">Benjamin Zekavica</a></strong>. All rights reserved!
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
