const Notification = (props) => {
  //  Write your code here.
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="box-container1">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <p className="paragraph">Information Message</p>
    </div>
    <div className="box-container2">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="paragraph">Success Message</p>
    </div>
    <div className="box-container3">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <p className="paragraph">Warning Message</p>
    </div>
    <div className="box-container4">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <p className="paragraph">Error Message</p>
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
