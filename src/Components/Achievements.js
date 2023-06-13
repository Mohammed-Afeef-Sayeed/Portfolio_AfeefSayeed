import React, { Component } from 'react';

class Achievements extends Component {
   render() {

      if (this.props.data) {
         var achievement = this.props.data.achievement.map(function (achievement) {
            return <li key={achievement.user}>
               <blockquote>
                  <p>{achievement.text}</p>
                  {/* <cite>{achievements.user}</cite> */}
               </blockquote>
            </li>
         })
      }

      return (
         <section id="achievements">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>My Achievements</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides"><li>{achievement}</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Achievements;
