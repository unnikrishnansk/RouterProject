import React from 'react'

const Login = () => {
  return (
    <div>

        <div className='login'>
            <div className='loginleft'>
                <div className='logindetailsdiv'>
                    <div className='logindetailslogo'>
                    <div className='loginlogo'>
                    <img className='loginlogoimg' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className='loginheading'>
                    <p className='loginheadingpara'>Shopify</p>
                    </div>
                    </div>

                    <div className='continuediv'>
                        <div className='continuelogindiv'>
                            <p className='continueloginhead'>Log in</p>
                        </div>
                        <div className='continuetodiv'>
                            <p className='continuetopara'>Continue to Shopify</p>
                        </div>
                    </div>

                    <div className='loginemaildiv'>
                        <p className='loginmailhead'>Email</p>
                        <input className='logininput' type="text" />
                    </div>

                    <div className='continuebuttondiv'>
                        <button className='continuebutton'>Continue With Email</button>
                    </div>

                    <div className='signindiv'>
                        <div className='signinlogodiv'>
                            <img className='signinlogoinside' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACACAMAAAAs7DXzAAAAZlBMVEX///8AAAD4+Pjn5+f8/Pzw8PCPj4/t7e3q6uoNDQ3CwsLGxsbg4OBKSkrMzMz09PSjo6O1tbVdXV0qKip9fX2Hh4c7OzucnJxQUFAeHh7W1tYxMTEXFxdnZ2dtbW1WVlZCQkKsrKxE6GDWAAAEGElEQVR4nO2c2ZaqMBBFCTOCTDIoMvn/P3mdWjGAtE1l5chlP/NQZwVSlVMVFGVlZWVlZWUFGn2Tp6YqOwqR6G51LBnLLNmBiMMLD+xKZssORRRBnrE7i11Jf8setMv8JgOTddjLDkcIdtXVyGrZ8YhAb180slB2QAJQnVeNbIH7TlBxGg+yIxJAzmlkueyI6HF5jaUnOyRyVF4jS3XZMZFj8hp3heyQyCmOvYWUHRI9vYU8yo6IHu3Ai3Rlh0RPxGtcYrGTcRpN2QGJgNNYLy97nA+RnEZDdkAieN1bzSWuo6LUXY0LLFmvxJ1CZyM7GFE8RB4Xua3euIvc58s7eDxpzgerKveXYLPqhlZEaR3XaeTZwfhzhu2bze6ytFlsuprxRZutFpn75/5SVid/UKe2yTuPXWjN6Eve4sLcMo5DnPaC95M9/9iFbfoFh0utGQqdMac9qQ+XXLXNHe/XPdlrMgVMo/UOi13qqLDOz/hhb6k5TOR9yZ+KfhenSTO+hs/FxH1nw+nof0sZyRYzjJrQaWSgda1BqxHSMVBTYo2M4b2x9BqZg3ZK6dlTFCLBlrLY0WtE89V7rbj5OIlsUTwnco3lSbamHr+oYT4Ez1Wn31nR9lVFsah3HQewDug1x+cC6Kpb8XTYH+HIVjRAbwJgLngf5EBTdSY14Jidyvfi5oK4kDaxxhhwIclLc8jDMvVZGdJ4Ja4EMKfsiEVWsvUM4fUmVuYBWNEpil/SikRMIEpEfMwCswNuUGcQyAbBiVgk5Jw2YWvg/xEJWQtQi/RlCxriRCwSzFC+Qb27Qk73bIjzZCZb0BDUFQ+iwTMwbT0TPFtZIT+FMLgeyIXeBYiZtIiZktp1ZXitHgH+efZmFk8W/nTYHwKYKg1ykYD1K7m5zFgM98LqAuY+8K4abuhF4n2WBXXNcwHNtAvq6Zg/B+1aDHmmvJJgWVou8UHkToNlEtAnkStOitTFo+41Pwlx6gLqPmwHoIw5ePmBBKDWiIh64ArS7Qlt6hbBX4H6A4GgraeEMnw8ahPkRiNb1yvU4xE3oBZSUBY54uSPGyKWEih/3KAekDhT4f2DgHyDRbsxcUFrp+P+iFi2oiGom3g4tXkX2rIHqth54lFq3AJVrS8QvrBwl9EeqHSWFpwn+aT/R7o/Atlv/qGgmSA4YO6sP5DYkw5ii7KDTtGThRzsfWF+tmxlS5jGm+vCwmbILu6888gOyzgfw50z9XL4Do1nlaOOzzGukiSpmtEHMjDH4w3+4HfZhL5nG6quGnbh54MnsxZyBH0Elb+uXm7D4NWx0S0z40oHB/B26FuibsJsksEvTY+SbVcibFE+irW5l+tx7o4nBc/Nq2t7s8l9pEbdr1EDq/CsYCp2NTAMY/KplZWVlRUw/gEoVjgG2zP1OAAAAABJRU5ErkJggg==" alt="" />
                        </div>
                        <div>
                        <button className='signinhead'>Sign in with Apple</button>
                        </div>
                    </div>

                    <div className='signindiv'>
                    <div className='signinlogodiv'>
                            <img className='signinlogoinside' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACGCAMAAAChfUvfAAAAclBMVEX///8Yd/IAcvIAcPKFqfaFq/cAbPEAbvEAavEAX/Dt8/7l7f0QdfL7/f9/pvUAZvH1+P7e6PxBh/Mwf/MAY/Gcu/ghe/ORsfe3zfrO3Ps9g/NllfXS4PyZtvdVkfTJ2PuwxvlyoPWlwPhtm/UAWfBUjfQgQjI7AAADtUlEQVR4nO2bXZeiMAxApV0oK8WCDKjDh6OO//8vrs7qETCk5WFSHnLfxgPnXJ3QpGlYrRiGYRiGYRiGYRiGYRiGYRbFOm+O+7Jt23J/bPK1bx07eXnqKmXiSCkVxSaqulPZ+JZCyJpQSym0Dl5oLaTUYZP5lgPJzrVRAYwydbk866wspJgwviNUsTTrryJGhP8TF1+pb88XSSe1VfkW2+qa+FZ9co6wqBhESHz2LftDtokcje9EmwVEdRJMLRYwKvAeH3nhGhdPRJF7Vo5cHr4hOvIqnVfzlW/SlUfpxCUw9PvXEoW3mE6v0qKrzEekRWSMiZXoucurr+yyQ5W1EFV4zJM7+eFrV/fjSO78KO/RdK3V5jC8Pux/xXjvQzkFArX3QwaH8Q2bvrPWPnLLCYsMVb8rDZwDeaJXbgTyM8tPYEs1dNaCfvuyxZY5MNUNnQPxSa18+MAio4RuGTkHH28R/8vUSGToGLxl7KxrWuUDtmio0M1Z0/7QO6wAjY+jq9MfNuMnYOK7/RIpts7p7aCaSPdht73zXk9Jygx+MIizGKzN2UXdWx4aCiYz/of8Jmg+EYNsUSMZXhDmlXSLpW3xp3dpghUleksXHA1a6g+cSzTyK7pcuEeL0IFziF6q6Kq7Ft1qz3FuqZRT9BGc4yxPVAGddeg2cIaz6Kiq6KxAd9sznHVBdQywxhsEM5wDSeaM923nOMdkznDm/vvg+9K79vT9/Bi8yfh1hovmF2BGpHMGYyO2LFtH6JvSxQb4DNqcW6hNLaic4bXO5nwBnkZdkTmDOcXmDNVV4kqVU+DcbXOGHgK63A3XSBZn8MGlq5HgWtTifIQeQcJaFKz5Lc5n4H+jA7qaH9xbWXLKuLvx40y4twL3sNH6yWDb/fzwAqw1pL1RsFcQPTCb3pUb8/gUWtJJewVoT8a9riPtyaC9L2dn2t4X2mN0dibuMWK9XFdn3REfuCE9c1dn8p756nNy7+3oTH82gZwBuTn7OAOa7o26Ofs4a1tlU0uHk7MWXuZlps6OnZz9nB1PntG7OEvadPJiYhbCwVmS7anegGdO7M4eZ04mZnuszl5ne+AZKpuz5xkqcFbN4ux9Vg2aCcSdlfY+EwjMXqLO8RJmL2+cY+HoLCJwSsIHybU/SzzprNXVeyi/SPsz21POy5rZvpG1lRKIs1BVu7zXPrKyNnLCWZpuadP8Dx7veqiBc7Tkdz3+05Sna79m222X/U7Ng/V66g+GYRiGYRiGYRiGYRiGYZgF8A9DVzK9JcR6dQAAAABJRU5ErkJggg==" alt="" />
                        </div>
                        <div>
                        <button className='signinhead'>Login with Facebook</button>
                        </div>
                    </div>

                    <div className='signindiv'>
                    <div className='signinlogodiv'>
                            <img className='signinlogoinside' src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                        <button className='signinhead'>Login with Google</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='loginright'></div>
        </div>
        
        Login</div>
  )
}

export default Login;