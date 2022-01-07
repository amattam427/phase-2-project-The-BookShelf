import React from 'react';
import { Card, Container} from 'react-bootstrap';
import pic from './IMG_0205.JPG';
// import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
    return(
        <Container>
            <div className="App">
                <h1 style={{color: '#7B68EE'}}>About The Creators</h1>
            </div>
                <Card className='text-center'>
                    <Container>
                        <Card.Body>
                            <Card.Title style={{color: '#7B68EE'}} >Jason Botesazan</Card.Title>
                                <Card.Text style={{color: '#7B68EE'}}>
                                    Before the Covid-19 pandemic hit, Jason was in his Junior year, studying towards a Bachelors of Business Administration in Industrial/Organizational Psychology within the Zicklin School of Business at Baruch College. Having been fortunate enough to spend the first half of 2019 studying abroad at Tel Aviv University in Tel Aviv, Israel, Jason was able to return to Tel Aviv in early April of 2021, amidst the ongoing Covid-19 pandemic, after graduating in December 2020. He spent close to five months interning as a Media Buyer at Minute Media, a Sport oriented Mediatech company founded in Tel Aviv. During his internship, Jason worked on a team with both frontend and backend engineers, building relationships and friendships that went beyond the workspace. After gaining valuable work experience at a tech startup in the heart of one of the worlds tech hubs, and through consultation with his coworkers and other close friends in Israel who also worked in the tech industry, Jason came to the conclusion that enrolling in a software engineering bootcamp would be a great investment of his time. The combination of all these factors are what led Jason to apply to Flatiron School in the first place and, ultimately, decide to pursue a full-time career in tech as a software engineer.
                                </Card.Text>
                        </Card.Body>
                        <Card.Img src={pic} alt='pic'/>
                    </Container>
                </Card>
        </Container>
    )
}

export default About;