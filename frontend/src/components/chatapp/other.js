
// Import React at the top of your file if you haven't already done so

function SettingsSection() {
  return (
    <div className="aaaaab1 var container-main" id="aaazaa1">
      <div className="settings-main">
        <div className="form-cont">
          <div className="heading">
            <h2>Personal Details:</h2>
          </div>
          <form action="signin.php" method="post">
            <div className="inputBox">
              <input type="text" name="fname" id="" required />
              <span className="input-label">Fname</span>
              <i className="input-bg"></i>
            </div>
            {/* Repeat similar structure for other input fields */}
            {/* Add submit button if needed */}
          </form>
          {/* Add links for settings options */}
        </div>
      </div>
    </div>
  );
}

function ProfileInfoSection() {
  return (
    <div className="aaaaab1 hidden container-main info-main" id="aaaaaa1">
      {/* Add profile information content */}
    </div>
  );
}

function MessagesSection() {
  return (
    <div className="aaaaab1 container-main">
     <div className="chat-main-psudo">
        <h1>Welcome in ChatAPP!</h1>
      </div>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaaac1">
      {/* Add notifications content */}
    </div>
  );
}

function ShortsSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaaad1">
      {/* Add shorts content */}
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="chat-head">
      {/* Add chat header content */}
    </div>
  );
}

function ChatBody() {
  return (
    <div className="chat-body"><div className="aaaaab1 var  container-main" id="aaaaab1">
    <div className="chat-main den">
        <div className="chat-head">
            <div className="grid-1">
                <div className="img-cont">
                    <img src="" alt="" />
                </div>
                <div className="name-cont">
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className="chat-body">
        </div>
        <div className="chat-footer">
            <div className="inputs">
                <input type="text" placeholder="Message" ame="text" id="_msg" />
                <button id="_sendMsg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path></svg>
                </button>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

function ChatFooter() {
  return (
    <div className="chat-footer">
      {/* Add chat footer content */}
    </div>
  );
}

// Define other sections/components as needed
function PublicProfileSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaaae1">
      {/* Add public profile content */}
    </div>
  );
}

function ManageAccountSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaaaf1">
      {/* Add manage account content */}
    </div>
  );
}

function ThemeSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaag1">
      {/* Add theme content */}
    </div>
  );
}

function PrivacySection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaah1">
      {/* Add privacy content */}
    </div>
  );
}

function HelpSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaai1">
      {/* Add help content */}
    </div>
  );
}

function LogoutSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaaj1">
      {/* Add logout content */}
    </div>
  );
}

function SwitchAccountSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaak1">
      {/* Add switch account content */}
    </div>
  );
}

function AboutSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaal1">
      {/* Add about content */}
    </div>
  );
}

// Define other sections/components as needed




// function PublicProfileSection() {
//   return (
//     <div className="aaaaab1 hidden container-main" id="aaaam1">
//       {/* Add public profile content */}
//     </div>
//   );
// }

function PersonalDetailsSection() {
  return (
    <div className="aaaaab1 hidden container-main" id="aaaan1">
      {/* Add personal details content */}
    </div>
  );
}



export {
  PublicProfileSection,
  PersonalDetailsSection,
  ManageAccountSection,
  ThemeSection,
  PrivacySection,
  HelpSection,
  LogoutSection,
  SwitchAccountSection,
  AboutSection
};
export { NotificationsSection, ShortsSection, ChatHeader, ChatBody, ChatFooter };


export { SettingsSection, ProfileInfoSection, MessagesSection };

