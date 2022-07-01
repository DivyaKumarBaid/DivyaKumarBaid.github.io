import React from 'react'

export default function About() {
  return (
      <div className='aboutSection'>
          <div className="headingAbout">
            <div className="titleAbout">
                <div>
                <span className='aboutNo'>01.</span>
                <span className='aboutHead'>About Me</span>
                </div>
                <div className="hrLine"></div>
            </div>
              <div className="aboutPara">
          Hi, my name is Divya Kumar Baid and I find WEB a cause for living as it is live XD.
          Jokes aside I am a currently pursuing Computer Science and Engineering from Techno Main Salt Lake, India. I crave for problems -> related to Tech and enjoy solving them.
              </div>
          </div>
          <div className='aboutImg'>
              <img src="/assets/logo.svg" alt="" />
          </div>
    </div>
  )
}
