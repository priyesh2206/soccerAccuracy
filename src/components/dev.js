import React from 'react';
import './dev.css';
import Example from './partical'
class Developer extends React.Component{
  
    render(){
        return(
        <div>
           <Example/>
           <div className="rgba-gradient smaller">
                <div>
                     <svg viewBox="0 0 2200 500">
	                     <symbol id="s-text">
	                     	<text text-anchor="middle" x="50%" y="80%">Hello, I'm Priyesh Rathore.</text>
	                     </symbol>
     
	                     <g class = "g-ants">
	                     	<use xlink href="#s-text" class="text-copy"></use>
	                     	<use xlink href="#s-text" class="text-copy"></use>
	                     	<use xlink href="#s-text" class="text-copy"></use>
	                     	<use xlink href="#s-text" class="text-copy"></use>
	                     	<use xlink href="#s-text" class="text-copy"></use>
	                     </g>
                     </svg>
                 </div>
                 <div>
                     <h4>
                      <span className="Subhead">
                      I'm  a <span className="colors">Full-Stack</span> Web Developer.
                      </span>
                     </h4>
                </div>
            </div>

            <div className="links">
                <h3>Let's Be Internet BFFs</h3>
                <span className="icons">
                <a href="https://github.com/priyesh2206" target="new" className="coloricon"><i class="fab fa-github-alt"></i></a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/priyesh-rathore-08679917b" target="new" className="coloricon"><i class="fab fa-linkedin-in"></i></a>&nbsp;&nbsp;
                <a href="https://www.facebook.com/priyesh.rathore.98" target="new" className="coloricon"><i class="fab fa-facebook"></i></a>&nbsp;&nbsp;
                <a href="mailto:priyeshrathore28@gmail.com" target="new" className="coloricon"><i class="fas fa-mail-bulk"></i></a>&nbsp;&nbsp;
                </span>
                <h5 className="end">Made with Love.&nbsp;<i class="fas fa-heart"></i></h5>
            </div>
        </div>
        );
    }





}

export default Developer;