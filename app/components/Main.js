 var React = require('react');

 var Main = React.creatClass({
   render: function() {
     return (
       <div className='main-container'>
        {this.props.children}
      </div>
     )
   }
 });

 module.exports = Main;
