// All imported elements
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfileCard from './ProfileCard';
import PasswordChangeForm from './PasswordChangeForm';
import './App.css';
import './Dashboard.css'; //css files for Dashboard

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Subssum</h2>
      <ul>
        <li>Dashboard</li>
        <li>Buy Airtime</li>
        <li>Buy Data</li>
        <li>TV Subscription</li>
        <li>Pay Electric Bill</li>
        <li>Airtime to Cash</li>
        <li>Transaction History</li>
        <li>Help & Support</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
// Header

function Header() {
    return (
        <div className="header">
            <h3>Welcome, Lawal Wahab</h3>
            <div className="header-right">
                <a href="/">Upgrade To Merchant</a>
                <span>🔔</span>
                <span>👤</span>
            </div>
        </div>
    );
}

export default Header;
// ProfileCard


function ProfileCard() {
    return (
        <div className="profile-card">
            <div className="upload-image">
                <img src="upload-placeholder.png" alt="Upload" />
                <button>Upload Image</button>
            </div>
            <div className="profile-details">
                <p><strong>Name:</strong> Lawal Wahab Babatunde</p>
                <p><strong>Email:</strong> wabdotmail@gmail.com</p>
                <p><strong>Phone Number:</strong> 0906 856 2949</p>
                <p><strong>Account Status:</strong> Active</p>
                <p><strong>Referral link:</strong> www.subssum.com/tre/wd... <button>Copy</button></p>
                <button>Edit Details</button>
            </div>
        </div>
    );
}

export default ProfileCard;

// PasswordChangeForm.js


function PasswordChangeForm() {
    return (
        <div className="password-change-form">
            <button className="tab active">Change Password</button>
            <button className="tab">Change PIN</button>
            <form>
                <input type="password" placeholder="Enter Current Password" />
                <input type="password" placeholder="Enter New Password" />
                <input type="password" placeholder="Confirm New Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PasswordChangeForm;
// app
function App() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content">
            <ProfileCard />
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  
  function Dashboard() {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="logo">subssum</div>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Buy Airtime</li>
                        <li>Buy Data</li>
                        <li>TV Subscription</li>
                        <li>Pay Electric Bill</li>
                        <li>Airtime to Cash</li>
                        <li>Transaction History</li>
                        <li>Help & Support</li>
                        <li>Log Out</li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header>
                    <h1>Welcome, Lawal Wahab</h1>
                    <div className="header-actions">
                        <button>Upgrade To Merchant</button>
                        <div className="icons">
                            <span>🔔</span>
                            <span>👤</span>
                        </div>
                    </div>
                </header>
                <section className="wallet-section">
                    <div className="wallet-balance">
                        <h2>Wallet Balance</h2>
                        <p>₦3000</p>
                        <button>Fund Wallet</button>
                    </div>
                    <div className="referral">
                        <h2>Referral</h2>
                        <p>Referral Code: 18/52ha089</p>
                        <div className="referral-actions">
                            <button>Copy</button>
                            <button>Edit</button>
                            <button>Share</button>
                        </div>
                    </div>
                    <div className="referral-stats">
                        <h2>Total referrals made</h2>
                        <p>0</p>
                        <h2>Current wallet Bonus</h2>
                        <p>₦0.00</p>
                        <button>Cashout</button>
                    </div>
                </section>
                <section className="cards-section">
                    <h2>Cards</h2>
                    <p>You Have No Saved Cards</p>
                </section>
            </main>
        </div>
    );
}
  
  export default Dashboard;
  