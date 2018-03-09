import React, { Component } from 'react'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <footer class='page-footer'>
          <div class='container'>
            <div class='row'>

              <div class='col l4 offset-l2 s12'>
                <ul>
                  <li>
                    <a class='grey-text text-lighten-3' href='#!'>
                      <i class='fa fa-2x fa-facebook' />
                    </a>
                  </li>
                  <li>
                    <a class='grey-text text-lighten-3' href='#!'>
                      <i class='fa fa-2x fa-twitter' />

                    </a>
                  </li>
                  <li>
                    <a class='grey-text text-lighten-3' href='#!'>
                      <i class='fa fa-2x fa-instagram' />

                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div class='footer-copyright'>
            <div class='container'>
              Made with by MLD !
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default App
