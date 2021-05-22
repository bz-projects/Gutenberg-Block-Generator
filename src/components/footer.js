import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <>
                <footer className="footer">
                    <div id="wporg-footer">
                        <div className="container">
                            <ul>
                                <h6 className="footer__headline">Gutenberg development</h6>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://wordpress.org/" title="WordPress Website">WordPress Organisation</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://developer.wordpress.org/block-editor/" title="Gutenberg Handbook">Official Handbook </a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.gutenberg-handbook.com/" title="Gutenberg my Handbook">Developer Handbook</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/WordPress/gutenberg" title="Gutenberg GitHub">GitHub Gutenberg</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://marketplace.visualstudio.com/items?itemName=BenjaminZekavica.wordpress-gutenberg-snippets" title="Gutenberg VS Code">Gutenberg VS Code</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://gutenberg-theme.xyz/" title="Gutenberg theme.json">Gutenberg theme.json</a></li>
                            </ul>
                            <ul>
                                <h6 className="footer__headline">Gutenberg helpers</h6>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://wordpress.org/plugins/browse/blocks/" title="WordPress Gutenberg Plugins">WordPress Block Plugins</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://wordpress.org/themes/search/gutenberg/" title="WordPress Themes">WordPress Themes</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://wordpress.org/plugins/gutenberg/" title="WordPress Gutenberg Beta">Gutenberg Beta Plugin</a></li>
                            </ul>
                            <ul>
                                <h6 className="footer__headline">About</h6>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.benjamin-zekavica.de/datenschutzerklaerung/" title="Data Policy">Data Policy</a></li>
                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.benjamin-zekavica.de/impressum/" title="Imprint">Imprint</a></li>
                            </ul>
                           
                        </div>

                        <p className="cip cip-image">
                            <img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." />
                        </p>

                        <div className="copyright">
                            <p>
                               <strong>&copy; Copyright 2021</strong> by <strong><a rel="noopener noreferrer" target="_blank" href="https://www.benjamin-zekavica.de">Benjamin Zekavica</a></strong>. All rights reserved!
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
