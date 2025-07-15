import React from 'react'
 

const Usecases = () => {
  return (
    <div>

        <div className="container usecase-1">

            <div className="use-para">
                <h2>Use cases for mails.so</h2>
                <p>If you're running a newsletter, an e-commerce, a SaaS, or marketing campaigns, mails.so is for you.</p>

            </div>
          
            <div className="usecase-card-container-vertical">
              <div className="col-md-3 usecase-card">
                <div className="card">
                  <div className="card-details">
                    <p className="text-title">Email Marketing</p>
                    <p className="text-body">Protect you from emailing non-existent addresses, which can increase your bounce rate and damage your reputation.</p>
                  </div>
                 
                  <button className="card-button">Get started for free</button>
                </div>
              </div>

              <div className="col-md-3 usecase-card">
                <div className="card">
                  <div className="card-details">
                    <p className="text-title">Fraud prevention</p>
                    <p className="text-body">Detect disposable email addresses, catch users trying to use multiple accounts and prevent fraud before they can do any harm.</p>
        
                  </div>

                  <button className="card-button">Get started for free</button>
                </div>
              </div>

              <div className="col-md-3 usecase-card">
                <div className="card">
                  <div className="card-details">
                    <p className="text-title">Bot signups</p>
                    <p className="text-body">Detect invalid addresses before they register, prevent spam and fake users and keep a high quality user database.</p>
                  </div>
                  <button className="card-button">Get started for free</button>
                </div>
              </div>
            </div>


        </div>
    
    </div>
  )
}

export default Usecases
