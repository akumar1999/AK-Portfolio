import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Activities from './activities';
import Projectresume from './projectresume';
import Achieve from './Medal';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid className="bg-color">
          <Cell col={4}>
            <div style={{width: '100px', height: '200px'}}>
              <img
                src="assets/Amit.jpg"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em', paddingBottom: 'auto'}}>Amit Kumar</h2>
            <h5 style={{color:'grey'}}>Flushing, New York</h5>
            <h4>ASPIRING SOFTWARE DEVELOPER</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Passionate and curious Information Technology student with a few months of web development/Database Management System (MySQL) experience along with developing skills to become an efficient software Developer. Developing/applying skills in Python, C++, MySQL, and JavaScript to create/maintain existing Software/Websites/Databases.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p> NIT Kurukshetra, Haryana</p>
            <h5>Phone</h5>
            <p>8295208264</p>
            <h5>Email</h5>
            <p>akumar1999m@gmail.com</p>
            <h5>Web</h5>
            <p>akportfolio.com</p>
            <h5>LinkedIn</h5>
            <p>linkedin.com/in/amit-kumar-22603417a/</p>
            <h5>GitHub</h5>
            <p>https://github.com/akumar1999</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Traits</h5>
            <p>Leadership</p>
            <p>Teamwork</p>
            <p>Visionary</p>    
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Languages</h5>
            <p>Hindi(Native/Mother tongue)</p>
            <p>English(Advanced/2nd Language)</p>
            <p>French (Beginner)</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Certification</h5>
            <p>IB Diploma With Honors</p>
            <p>Mastery in Python</p>
            <p>Stock Market Exchange</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Honor-Awards</h5>
            <p>Most Commited and Dedicated Executive Committee Memeber</p>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013} 
              endYear={2017}
              startMonth={'Dec'}
              endMonth={'May'}
              
              
              schoolName="Overseas School Of Colombo, Sri Lanka"
              Activities="International Baccalaureate Diploma (with Honors)"
               />
               <Education
                 startYear={2017}
                 endYear={2021}
                 startMonth={'August'}
                 endMonth={'May'}
                 schoolName="National Institute of Technology, Kurukshetra"
                 Activities="Bachelor's Degree, Information Technology , CGPA - 6.65/10"
                 Designation="Relevant Courses:"
                 courses="Data Structure, C++, Python, Java, Data Analysis and Algorithm, Software Engineering, Software Project Management, DBMS, MySQL"
                  /> 
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2018}
              startMonth={'August'}
              endMonth={'May'}
              place="New York, NY"
              jobName="WebDot Solution"
              position="Web Developer Intern"
              jobDescription="Worked as a front end Web developer & design.
              -Used HTML, CSS, Javascript and Reactjs, bootstrap framework in order to
              create the interface of the website.
              -learnt Database System skills (MySQL) along with web development skills
              while interning at this place with the help of senior design group members.
              Analysed some big data using MySQL"
              />
              <Experience
                startYear={2019}
                endYear={2019}
                startMonth={'August'}
                endMonth={'May'}
                place="Jersey City, New Jersey"
                jobName="Corp2Corp Inc."
                position="Software Engineer Intern"
                jobDescription="Built in-depth knowledge in the field of ReactNative, Reactjs, Material UI, and Bootstrap.
                Acquired working knowledge with google firebase for integration with website and handling 
                 databases. 
                Using the knowledge to create my personal website/portfolio."
                />
              <Experience
                startYear={2017}
                endYear={"Present"}
                startMonth={'August'}
                place="Kurukshetra, Haryana"
                jobName="Confluence (Cultural Fest)"
                position="PR and EP Team"
                jobDescription="Connected with other colleges and collaborated with them to organize our cultural fest."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={90}
                />
              <Skills
                skill="HTML/CSS"
                progress={80}
                />
                <Skills
                 skill="MySQL"
                 progress={70}
                 />
                    <Skills
                      skill="React"
                      progress={90}
                      />
                    <Skills
                      skill="Python"
                      progress={80}
                      />
                     <Skills
                      skill="C++"
                      progress={75}
                      /> 
                      <hr style={{borderTop: '3px solid #e22947'}} />
                       
                       <h2>Activities and Societies</h2>
                       <Activities
              Ed="Overseas School of Colombo, Sri Lanka"
              startYear={2013}
              endYear={2017}
              startMonth={'Dec'}
              endMonth={'May'}
              
              jobDescription="Deputy Head of Information Technology for The Colombo 
              Model United Nations (COMUN) (2017), Delegate for COMUN (2014,2016), 
              Founder and Leader of a Community Service group - CARE FOR PAWS (2017), 
              South Asian International Sports Association (SAISA)- Badminton Team (2016-2017), 
              Volunteer in a Community Service - RCCI (2016), Alzheimers (2014,2015) 
              Sports Activities (2014-2017) Cricket, Basketball, Volleyball, Badminton"
              />

              <Activities
              Ed="National Institute of Technology, Kurukshetra"
              startYear={2017}
              endYear={2021}
              startMonth={'Aug'}
              endMonth={'May'}
              
              jobDescription="(2017-2018)- Photography Club-(NTT),
               Designing & Management in the Cultural Society-(Music & Dramatics Club) 
               Member of the college's Dance Society.
               (2018-19) - Designing & Management in the Cultural Society-(Music & Dramatics Club),
               Member of the college's Dance Society"
              />


            <hr style={{borderTop: '3px solid #e22947'}} />
                       
            <h2>Projects</h2>
              <Projectresume
              Ed="PERSONAL PORTFOLIO:"
              
              jobDescription="Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components 
              like Material UI to build personal portfolio with the help of open source platform netlify.
              
              Link: akumarportfolio.netlify.com"
              /> 

              <Projectresume
              Ed="REACT APP 'DAWAKHANA':"
              
              jobDescription="Created ReactNative based mobile application which helps users to write in their 
              symptoms and figure out which medicine to intake. A database is created in order to store all medicines data."
              />

              <Projectresume
              Ed="PYTHON CHATBOT:"
              
              jobDescription="Python based desktop assistant, helping in performing basic tasks i.e., 
              sending mails, opening specific folder. Uses GTTS (google text-to-speech) and smtp library of Python.  "
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
                       
                       <h2>Achievements</h2>
                       <Achieve

                       jobDescription="•	Secured 1st position in Groove Armada, Confluence, NIT Kurukshetra (2017-18)"
                       jobDescription="•  Secured 1st position in Ho Rev’O, SRM NCR Campus(2018)"
                       jobDescription="•	Secured 2nd position in NIT Jalandhar group dance competition (2019)"
                       jobDescription="•	Secured 2nd position in IIT Mandi group dance competition(2019)"

                       />


          
          
          
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
