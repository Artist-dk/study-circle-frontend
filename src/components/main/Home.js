
import React, { useEffect } from 'react'
import Footer from './footer'
import ImageSlider from '../../common/ImageSlider'
import AcademicProgressGraph from '../student/AcademicProgressGraph';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import CourseListing from '../../pages/CourseListing';
import Lesson from '../Lesson';

export default function Home() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //   checkLoginStatus();
    // });

    // const checkLoginStatus = () => {
    //   if (!(Cookies.get('spy'))) {
    //     navigate('/account')
    //   }
    // };

    // const authenticateUser = () => {
    //   try {
    //       axios.get('http://localhost:8081/authenticate', 
    //           {
    //               headers: {
    //                   Accept: "*/*",
    //                   "Content-Type": "application/json"
    //               },
    //               withCredentials: true
    //           }
    //       )
    //       .then(function (response) {
    //           console.log(response);
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       });
    //   } catch (error) {
    //       console.log(error)
    //   }
    // }
    // useEffect(() => {
    //   authenticateUser();
    // },[]) 
    function trackScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        // console.log("Current Scroll Position:", scrollPosition);
    }
    function getTotalScrollLength() {
        const totalHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Viewport height
        const viewportHeight = window.innerHeight;

        // Total scroll length
        const totalScrollLength = totalHeight - viewportHeight;

        return totalScrollLength;
    }
    const academicProgressData = [20, 40, 60, 80, 100];

    // Get and log the total scroll length
    const totalScrollLength = getTotalScrollLength();
    // console.log("Total Scroll Length:", totalScrollLength);

    // Event listener for scroll event
    window.addEventListener("scroll", trackScroll);
    const images = [
        "https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYu03owCR-GDLMUwubWcmfZMvxn2bJUgSMw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-9kj-vHmBgL62VabJcscxVWyxoX1egpJos5deIce7IfB2XCOetlc4OaO180swzasQA&usqp=CAU",
    ];


    return (
        <div className="body home">
            <div className="h-box-1 welcome">
                <div className="mid">
                    <p>Education is the most powerful weapon which you can use to change the world.</p>
                    <h1><span className="grad"><span>W</span>ELCOME</span> TO STUDY CIRCLE<br />YOU CAN ACHIVE MORE</h1>
                    <p className="glass fit-center box-3">Welcome to Study Circle- your one-stop destination for all your academic needs! With our comprehensive evaluation system, you can easily track your progress and identify areas that need improvement. We also provide a vast collection of study
                        materials that cater to all levels of education, ensuring that you have access to the latest and most relevant information. At Study Town, we understand that education is the key to unlocking your potential, and we are committed to helping
                        you achieve your academic goals. Join us today and take the first step towards a brighter future!</p>
                    <div className="btnarea">
                        <Link state="login" to="/accounts">
                            <div className="btn-wrapper">
                                <div className="btn">
                                    <button>GO TO OTHER SECTION</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2 " d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    {/* <ImageSlider images={images} /> */}
                    <Lesson lessonId="lesson-1" />
                </div>
            </div>
            <div className="box-2">
                <div className="mid">
                    {/* <AcademicProgressGraph data={academicProgressData} /> */}
                    <CourseListing />
                </div>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>OUR GOAL</h1>
                    <p>At Study Town, our goal is to empower students to take control of their academic journey. We believe that every student has the potential to succeed, and we are committed to providing the tools and resources needed to achieve that success.
                        Our platform offers a comprehensive evaluation system that allows students to track their progress, identify areas for improvement, and measure their growth over time. Additionally, our extensive collection of study materials covers a
                        wide range of subjects and levels of education, ensuring that every student has access to the information they need to excel. With Study Town, you can be confident that you have everything you need to reach your academic goals.</p>
                    <p>Our target at Study Circleis to make education accessible to all. We understand that every student has unique needs and learning styles, and we strive to cater to those needs by providing personalized evaluation and study material. Our aim
                        is to create a platform that empowers students to take control of their learning, no matter their age, background, or skill level. We believe that education is a powerful tool that can transform lives, and we are committed to providing
                        a platform that enables students to reach their full potential. Join us at Study Circleand discover the power of education!
                    </p>
                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Key Features of Study Circle</h1>
                    <div className="home-card-grid">
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Personalized Learning</h2>
                                        <p>Tailor learning experiences to match individuastudents' needs, interests, and learning styles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Collaborative Environment</h2>
                                        <p>Foster collaboration and interaction among studentsteachers, and other stakeholders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Comprehensive Resource Library</h2>
                                        <p>Access a vast repository of educational resourcecovering a wide range of subjects and topics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Real-Time Feedback and Assessment Comprehensive Resource Library</h2>
                                        <p>Receive immediate feedback on assignments, quizzes, anassessments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Assignment Management</h2>
                                        <p>Streamline the assignment creation, submission, angrading process for educators.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Integrated Communication Tools</h2>
                                        <p>Communicate with teachers, classmates, and othemembers of the Study Circle community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Progress Tracking and Analytics</h2>
                                        <p>Monitor student performance and engagement in real-timwith access to analytics and data insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Gamification and Rewards</h2>
                                        <p>Implement gamification elements to incentivize learninand encourage participation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Mobile Compatibility</h2>
                                        <p>Access Study Circle anytime, anywhere, with support fomobile devices and tablets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>StudyCircle</h1>
                                    <div className="content">
                                        <h2>Security and Privacy</h2>
                                        <p>Monitor student performance and engagement in real-timwith access to analytics and data insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="home-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>3k</h1>
                                    <div className="content">
                                        <h2>Digital Library</h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Registered Books</td>
                                                    <td>20000</td>
                                                </tr>
                                                <tr>
                                                    <td>Access Rate</td>
                                                    <td>20000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button>Go to Library</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Comprehensive Resource Library</h1>

                    <p>Study Circle boasts a comprehensive resource library that serves as a treasure           trove of educational materials, covering a wide range of subjects and topics. Whether you're studying mathematics, science, literature, or art, you'll find a wealth of resources at your fingertips.</p>

                    <p>Our library features textbooks, articles, videos, tutorials, and other multimedia content from leading publishers, educational institutions, and experts in the field. With thousands of resources to choose from, you're sure to find the information you need to succeed in your studies.</p>

                    <p>What sets Study Circle's resource library apart is its organization and accessibility. Our intuitive search and filtering tools make it easy to find relevant materials, while personalized recommendations help you discover new topics and explore new interests.</p>

                    <p>Whether you're looking for a comprehensive textbook to supplement your studies, a tutorial to help you master a new concept, or a video lecture to enhance your understanding, Study Circle has you covered. Join us today and unlock the power of our comprehensive resource library!</p>

                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Collaborative Environment</h1>
                    <p>Study Circle fosters a collaborative learning environment where students, teachers, and other stakeholders can come together to share ideas, collaborate on projects, and learn from one another. We believe that collaboration is essential for meaningful learning experiences and personal growth.</p>

                    <p>Through our platform, students can join study groups, participate in discussion forums, and engage in group projects with their peers. Whether you're working on a research paper, preparing for an exam, or exploring a new topic, Study Circle provides the tools and resources you need to collaborate effectively.</p>

                    <p>Our integrated communication tools allow students to connect with classmates, share resources, and seek help from teachers and mentors. From video conferencing and messaging to collaborative document editing and screen sharing, Study Circle facilitates seamless communication and collaboration.</p>

                    <p>By fostering a collaborative environment, Study Circle encourages students to learn from one another, share their knowledge and experiences, and develop essential teamwork and communication skills. Join our community today and experience the power of collaborative learning!</p>
                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Real-Time Feedback and Assessment</h1>
                    <p>At Study Circle, we believe that feedback is essential for learning and growth. That's why we provide real-time feedback and assessment tools that allow students to receive immediate feedback on their assignments, quizzes, and assessments.</p>

                    <p>With Study Circle, gone are the days of waiting weeks for your grades or wondering where you went wrong. Our platform provides instant feedback on your work, highlighting areas of strength and areas for improvement, so you can learn from your mistakes and make adjustments accordingly.</p>

                    <p>Whether you're working on a homework assignment, taking a quiz, or completing a project, Study Circle's real-time feedback and assessment tools are there to support you every step of the way. Our goal is to help you succeed by providing timely, actionable feedback that helps you reach your full potential.</p>

                    <p>Join Study Circle today and experience the power of real-time feedback and assessment in your learning journey!</p>
                </div>
            </div>
            <div className="box-1">
                <div className="mid">

                    <h1>Assignment Management</h1>

                    <p>Managing assignments can be a daunting task for educators, which is why Study Circle offers robust assignment management tools to streamline the process. Our platform simplifies assignment creation, distribution, submission, grading, and feedback, saving educators time and effort.</p>

                    <p>With Study Circle, educators can easily create assignments, set deadlines, and assign tasks to individual students or groups. Students receive notifications when new assignments are posted and can submit their work directly through the platform.</p>

                    <p>Once assignments are submitted, educators can review and grade them using our intuitive grading interface. Our platform supports a variety of assessment methods, including multiple-choice questions, essay responses, file uploads, and more.</p>

                    <p>Study Circle also provides tools for providing feedback on assignments, allowing educators to offer personalized comments, suggestions, and encouragement to students. Our goal is to facilitate effective communication and collaboration between educators and students, leading to better learning outcomes for all.</p>

                    <p>Join Study Circle today and revolutionize the way you manage assignments!</p>

                </div>
            </div>
            <div className="box-1">
                <div className="mid">

                    <h1>Integrated Communication Tools</h1>

                    <p>Effective communication is key to a successful learning experience, which is why Study Circle offers a suite of integrated communication tools to facilitate collaboration and interaction among students, educators, and other members of the community.</p>

                    <p>Our platform supports a variety of communication channels, including messaging, video conferencing, discussion forums, and collaborative document editing. Whether you're working on a group project, seeking help from a teacher, or participating in a class discussion, Study Circle provides the tools you need to connect with others.</p>

                    <p>With Study Circle's integrated communication tools, you can easily share resources, ask questions, provide feedback, and collaborate with your peers in real-time. Our platform fosters a supportive learning community where everyone has a voice and can contribute to the conversation.</p>

                    <p>Join Study Circle today and experience the power of integrated communication tools in your learning journey!</p>

                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>CONTESTS</h1>
                    <p>At Study Town, we believe that healthy competition is a great motivator for learning. That's why we regularly organize contests that encourage students to showcase their knowledge and skills. Our contests are designed to be both fun and educational,
                        and we offer a range of topics and levels of difficulty to cater to all students. By participating in our contests, students have the opportunity to test their knowledge, learn from their peers, and earn recognition for their hard work.
                        We believe that contests are an excellent way to engage students and promote a love of learning, and we are committed to creating a platform where students can challenge themselves and reach their full potential. Join us at Study Circleand
                        take part in our exciting contests today!</p>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">

                    <h2>Integrated Communication Tools</h2>

                    <p>Study Circle provides powerful integrated communication tools that enable seamless interaction among students, teachers, and other members of the community. With our platform, you can easily communicate with your teachers, classmates, and peers to collaborate on projects, ask questions, and share ideas.</p>

                    <p>Whether you prefer real-time messaging, video conferencing, or participating in discussion forums, Study Circle has you covered. Our communication tools are designed to facilitate effective communication and collaboration, allowing you to connect with others and engage in meaningful discussions wherever you are.</p>

                    <p>Join Study Circle today and experience the benefits of our integrated communication tools in enhancing your learning experience!</p>

                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">

                    <h2>Progress Tracking and Analytics</h2>

                    <p>Study Circle empowers educators and administrators with powerful progress tracking and analytics tools that enable them to monitor student performance and engagement in real-time. With access to comprehensive analytics and data insights, you can gain valuable information about student progress, identify areas for improvement, and make data-driven decisions to enhance learning outcomes.</p>

                    <p>Our platform provides detailed analytics on various metrics, including student attendance, participation, grades, and more. With customizable dashboards and reports, you can easily visualize and analyze student data to track their progress and provide targeted support where needed.</p>

                    <p>Join Study Circle today and unlock the power of progress tracking and analytics in driving student success!</p>

                </div>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h2>Gamification and Rewards</h2>

                    <p>Study Circle leverages the power of gamification to make learning more engaging, interactive, and enjoyable. Our platform incorporates gamification elements such as badges, achievements, leaderboards, and rewards to incentivize learning, motivate students, and encourage active participation.</p>

                    <p>As you progress through your learning journey on Study Circle, you'll earn badges and unlock achievements for completing tasks, mastering concepts, and reaching milestones. You'll also have the opportunity to climb the leaderboard and compete with your peers, earning recognition and rewards for your efforts.</p>

                    <p>With Study Circle's gamification features, learning becomes a fun and rewarding experience. Join our platform today and embark on a learning adventure like never before!</p>

                </div>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h2>Mobile Compatibility</h2>

                    <p>Study Circle is designed with mobile compatibility in mind, allowing you to access our platform anytime, anywhere, from any device. Whether you're using a smartphone, tablet, or laptop, you can seamlessly transition between devices and continue your learning journey on the go.</p>

                    <p>With Study Circle's mobile-friendly interface, you can access all of our features and functionalities from the palm of your hand. Whether you're studying on your commute, taking notes in class, or reviewing materials before an exam, Study Circle ensures that you have access to your educational resources whenever you need them.</p>

                    <p>Join Study Circle today and experience the freedom and flexibility of mobile learning!</p>
                </div>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h2>Security and Privacy</h2>

                    <p>At Study Circle, we take the security and privacy of your data seriously. Our platform employs robust encryption protocols, secure authentication methods, and stringent access controls to ensure that your information remains safe and protected at all times.</p>

                    <p>We adhere to industry best practices and comply with relevant privacy regulations to safeguard your personal data. We are committed to transparency and accountability, and we regularly undergo security audits and assessments to maintain the highest standards of security and privacy.</p>

                    <p>With Study Circle, you can trust that your data is in good hands. Join our platform today and experience the peace of mind that comes with knowing your information is secure and protected.</p>


                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>TOP DISCIPLINED COLLEGES</h1>

                    <table className='books-table'>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>College Name</th>
                                <th>Location</th>
                                <th>Discipline Score (out of 10)</th>
                                <th>Reputation Score (out of 10)</th>
                                <th>Overall Score (out of 20)</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Ivy League University</td>
                                <td>New York, NY</td>
                                <td>9.5</td>
                                <td>9.8</td>
                                <td>19.3</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Oxford University</td>
                                <td>Oxford, UK</td>
                                <td>9.3</td>
                                <td>9.5</td>
                                <td>18.8</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Stanford University</td>
                                <td>Stanford, CA</td>
                                <td>9.2</td>
                                <td>9.4</td>
                                <td>18.6</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Massachusetts Institute of Technology (MIT)</td>
                                <td>Cambridge, MA</td>
                                <td>9.0</td>
                                <td>9.3</td>
                                <td>18.3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Cambridge University</td>
                                <td>Cambridge, UK</td>
                                <td>8.9</td>
                                <td>9.2</td>
                                <td>18.1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Harvard University</td>
                                <td>Cambridge, MA</td>
                                <td>8.8</td>
                                <td>9.1</td>
                                <td>17.9</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>California Institute of Technology (Caltech)</td>
                                <td>Pasadena, CA</td>
                                <td>8.7</td>
                                <td>9.0</td>
                                <td>17.7</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>ETH Zurich</td>
                                <td>Zurich, Switzerland</td>
                                <td>8.5</td>
                                <td>8.8</td>
                                <td>17.3</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>University of Chicago</td>
                                <td>Chicago, IL</td>
                                <td>8.4</td>
                                <td>8.7</td>
                                <td>17.1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Imperial College London</td>
                                <td>London, UK</td>
                                <td>8.3</td>
                                <td>8.5</td>
                                <td>16.8</td>
                            </tr>
                        </tbody>

                    </table>

                    <p></p>
                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>TOP ENGAGED COLLEGES</h1>

                    <table className='books-table'>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>College Name</th>
                                <th>Location</th>
                                <th>Engagement Score (out of 10)</th>
                                <th>Student Participation Score (out of 10)</th>
                                <th>Overall Score (out of 20)</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Tech University</td>
                                <td>Silicon Valley</td>
                                <td>9.8</td>
                                <td>9.7</td>
                                <td>19.5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Community College</td>
                                <td>Smalltown, USA</td>
                                <td>9.5</td>
                                <td>9.6</td>
                                <td>19.1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Liberal Arts Institute</td>
                                <td>City, State</td>
                                <td>9.3</td>
                                <td>9.4</td>
                                <td>18.7</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Science Academy</td>
                                <td>Urban Center</td>
                                <td>9.2</td>
                                <td>9.3</td>
                                <td>18.5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Business College</td>
                                <td>Metro Area</td>
                                <td>9.0</td>
                                <td>9.2</td>
                                <td>18.2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Art School</td>
                                <td>Cultural Hub</td>
                                <td>8.9</td>
                                <td>9.1</td>
                                <td>18.0</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Medical University</td>
                                <td>Healthcare City</td>
                                <td>8.7</td>
                                <td>9.0</td>
                                <td>17.7</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Engineering Institute</td>
                                <td>Tech City</td>
                                <td>8.6</td>
                                <td>8.9</td>
                                <td>17.5</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Design College</td>
                                <td>Creative District</td>
                                <td>8.4</td>
                                <td>8.8</td>
                                <td>17.2</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Environmental Studies Center</td>
                                <td>Green Valley</td>
                                <td>8.3</td>
                                <td>8.7</td>
                                <td>17.0</td>
                            </tr>
                        </tbody>
                    </table>

                    <p></p>
                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>CHECK WHERE YOU ARE</h1>

                    <table className='books-table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Opportunities</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Project Phoenix</td>
                                <td>John Doe</td>
                                <td>Technology</td>
                                <td>High</td>
                                <td>In Progress</td>
                                <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Marketing Campaign X</td>
                                <td>Jane Smith</td>
                                <td>Marketing</td>
                                <td>Medium</td>
                                <td>Approved</td>
                                <td><a href="#">View Details</a></td>
                            </tr>
                            <tr>
                                <td>Website Redesign</td>
                                <td>Alice Jones</td>
                                <td>Design</td>
                                <td>High</td>
                                <td>Planning</td>
                                <td><a href="#">Assign Team</a></td>
                            </tr>
                            <tr>
                                <td>Content Strategy</td>
                                <td>David Lee</td>
                                <td>Marketing</td>
                                <td>Medium</td>
                                <td>Drafting</td>
                                <td><a href="#">Review</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <p></p>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <Footer />
        </div>
    )
}