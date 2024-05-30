import React from 'react'
import { Button, Container, Form, FormLabel, Stack } from 'react-bootstrap'

const Success = () => {
    return (
        <div>
            <div style={{ marginBottom: "-90px" }}>
                <div style={{ background: "#fff8f8", padding: "60px 0px 0px 0px " }}>
                    <img src='./img/tutor.png' className='tutyygg' />
                    <h4 className='text-center'>Success</h4>
                    <p className='text-center'>Welcome to Tutor Octopus watch this video to learn how to get started with a tutor.</p>
                    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5  mb-5 aboutinsnn" style={{
                        backgroundImage:
                            "url('./img/signup.png')", backgroundSize: "cover",
                        backgroundRepeat: "no-repeat", padding: "190px 0px 900px 0px"
                    }} > 
                        <Container>
                            <div  className="bshdgyr6" style={{
                                backgroundImage:
                                    " linear-gradient(rgba(0, 0, 0, 0.652), rgba(0, 0, 0, 0.652)),url('./imgs/video.png')", backgroundSize: "content",
                                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
                            }} >
                                
                                 <iframe className='ifrems' src="//www.youtube.com/embed/f890SC1schE" frameborder="0"
                                  allowfullscreen></iframe>
                                  </div>

                                  <Button className='VOIR_LESPRODUITS  my-5' type="submit">Go to your dashboard</Button>

                        </Container>
                    </section>

                </div>

            </div>
        </div>
    )
}

export default Success
