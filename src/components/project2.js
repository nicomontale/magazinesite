import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import img1 from '../components/christopherPhotos/twin1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Tappable from 'react-tappable/lib/Tappable';




class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialogNTT: false,
            openDialogTrip: false,
            openDialogTesi: false,




            activeTab: 0
        }



    }
    showDialog = (openDialogNTT, openDialogTrip, openDialogTesi) => {
        if (openDialogNTT === true && openDialogTrip === false && openDialogTesi === false) {
            return (
                (
                    <dialog open
                        className="modal"


                        onClick={this.handleShowDialogNTT}
                    >
                        <img src={img1} alt="article 1" height="350px" width="480px" onClick={this.handleShowDialogNTT} />
                    </dialog>
                )
            )

        } else if (openDialogNTT === false && openDialogTrip === true && openDialogTesi === false) {
            return (
                (
                    <dialog
                        open
                        className="modal"


                        onClick={this.handleShowDialogTrip}
                    >
                        <img src={img1} alt="triporate" height="370px" width="480px" onClick={this.handleShowDialogTrip} />
                    </dialog>
                )

            )

        } else if (openDialogNTT === false && openDialogTrip === false && openDialogTesi === true) {
            return (
                (
                    <dialog
                        open
                        className="modal"


                        onClick={this.handleShowDialogTesi}
                    >
                        <img src={img1} alt="triporate" height="370px" width="480px" onClick={this.handleShowDialogTesi} />
                    </dialog>
                )
            )

        }
    }


    handleShowDialogNTT = () => {
        this.setState({ openDialogNTT: !this.state.openDialogNTT });
        console.log('cliked');
    };
    handleShowDialogTrip = () => {
        this.setState({ openDialogTrip: !this.state.openDialogTrip });
        console.log('cliked');
    };

    handleShowDialogTesi = () => {
        this.setState({ openDialogTesi: !this.state.openDialogTesi });
        console.log('cliked');
    };

    setBooleanJava = () => {
        if (this.state.openDialogTesi === true) {
            this.setState({ openDialogTesi: false })
        }
    }
    setBooleanReact = () => {
        if (this.state.openDialogNTT === true) {
            this.setState({ openDialogNTT: false })
        } if (this.state.openDialogTrip === true) {
            this.setState({ openDialogTrip: false })
        }
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            this.setBooleanJava();
            return (
                <div className="projects-grid" data-aos="zoom-in" data-aos-duration="3000" >
                    <Card shadow={5} style={{width: '100%'}}>
                        <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}>
                        <CardTitle className="mdl-card__title_twin" style={{backgroundColor: 'rgb(33, 33, 40)', height: '436px', cursor: 'pointer' }}>
                        <h4 className="author" style={{backgroundColor:'white',borderRadius: '10px', color: 'dark', fontWeight:'bold',fontFamily: 'Roboto Mono,monospace'}}>
                        &nbsp;BY CHRISTOPHER &nbsp;MALPARTIDA&nbsp;
                        </h4>
                        </CardTitle>
                        </Tappable>
                        <CardText><h4 style={{ color: 'black', fontFamily: 'Roboto Mono,monospace' }}>Chris and Michael Malpartida</h4>


                        A great thing about having a twin brother is that we can share intimate things with each other, things we would have a hard time telling anyone else. Being gay and having a twin who is bi makes that bond even stronger.

                        <br></br><br></br>
                        
                        I’m Chris Malpartida and I’m gay, and my brother Michael is gay as well. We both played soccer and tennis for Berea College in Kentucky and finished our athletic careers this past May. Since coming out, we have been a lot happier, our mental health has improved tremendously and we have learned to love ourselves.
                        I hope that sharing my coming out story along with that of Michael’s would be empowering for Latino (and non-Latino) gay athletes. But it doesn’t mean the journey was easy.
                        We both knew at an early age that we were gay, though we never told the other until recently. We’re raised by immigrant parents from Peru and grew up in Louisville, going to Catholic school for nine years until we reached high school.
                        Our time at Catholic school was rough for us. We would hear some of our classmates say homophobic things and casually throw out slurs. For the longest time that really made us scared to say anything and made us try to get rid of the “gayness.” I remember praying to God to take the gay away because I didn’t want to be the target or a punchline of a joke. I didn’t want to believe I was sinning every day of my life. It was a rough handful of years carrying that internalized homophobia.
                        High school was the opposite — St. Francis High School is a liberal arts school with all the teachers and most of the students publicly embracing the LGBT students. Our high school experience was one full of love and an awakening for the both of us. We gradually learned to love ourselves and no longer carry the self-pity we had for ourselves for being gay. However, neither of us came out because of soccer and the fear of disappointing our family.
                        In the spring of 2016, Michael and I committed to play at Berea College, a Division III school. During our freshman year we heard quite a few homophobic comments and slurs from seniors on the team almost daily and they never suffered any consequences. I felt that I had to hide myself and act “more straight” and be macho. Things got easier when those seniors graduated. Although our freshman year experience was not the best, Berea College is a place where the LGBTQ community is embraced and loved for the most part.
                        <br></br><br></br>
                        The fall of 2017 was perhaps the most important period of my life. I began falling for a guy for the first time and during that year I learned a lot about myself; one of these things being that I had to completely love myself first before I could love anyone else.
                        A few months later, on Feb. 4, 2018, I came out to Michael. He said he could tell something was different about me that started around the time when I began seeing my then-boyfriend. When I asked if he was surprised about me coming out to him, he said he wasn’t and that he knew for a while. I asked him if he was gay or bisexual because I had a feeling he was too, but he said he wasn’t. He was simply not ready to tell me.
                        On Easter 2018, another monumental thing happened: I came out to my parents and sister. My mental health was dire and I was stressed about every single thing, from school, sports and my relationship. I could no longer control the internal war in me.
                        One reason I was also scared to tell them, especially my dad, was because in Latino culture men are seen as masculine and very macho — showing no fear and standing strong. LGBTQ people in Latino culture are not often portrayed in a nice way. These are valid reasons why a lot of Latino/Latina, closeted people think long and hard about whether to come out or not.
What my parents first said when I came out took my breath away. My mom said, while she was crying, “Mi Hijo (‘my son’), I love you so much no matter what. You will always be my son and I accept you and love you for who you are — nothing will ever stop my love for you. Te queremos siempre (‘We love you always’).”
My dad started to cry and said, “Chris I love you, like your mother said. I will never stop loving you. I won’t understand everything right away but with time I will catch up. But no matter what I love you always — you’re my son.”
Hearing those words from my parents made me cry even more. I wasn’t worried about my sister; I knew she would accept me 100%. Imagine a family crying hysterically on the footsteps of the front door on a sunny day outside with the birds chirping everywhere — that was my family that Easter.
My brother finally came out to me in the summer of 2018. “Chris, I’m bisexual,” he simply said. I gave him a hug and told him I loved him and that I was happy for him. I also knew that he had the right to come out to me on his own terms. All of our friends think that it is crazy we didn’t tell each other since we have been side by side since we were born. But we didn’t because we were both fearful.
In the fall of 2018, Michael started to see someone on campus and they eventually became official: boyfriend and boyfriend. Michael did not hide the fact that he was dating. He acted normally and presented the relationship as if nothing had changed. He came out to my parents around Thanksgiving and my parents said the same thing they told me when I came out.
At the same time as Michael started dating, I broke up with my boyfriend. We both did not love ourselves, which made it impossible to love each other. It was an experience I have learned so much from and will carry lessons from that relationship forever.
On Oct. 11, 2018, on National Coming Out Day, I talked to Michael and said this was the day I was going to come out to my friends and family. I called my best friends from high school and whomever I couldn’t see on campus immediately and told them. I called some of my closest cousins as well and shared my story.
I then decided to post on Instagram to let everyone know my story:
<br></br><br></br>
Today is #nationalcomingoutday and I thought maybe it’s time for me to come out to you guys and finally be myself without any doubt of who I am. I’m gay! For a long time now, I’ve kept who I truly am hidden from my friends because I was scared of losing anyone I’ve grown attached to. Person by person, I’ve learned that my true friends will stick by my side and love and accept me for who I am.
As an athlete, the thought of mentioning anything about my sexuality terrified me because I never wanted to make those around me uncomfortable by being me. However, I learned that my teammates on the soccer field and tennis court support me and encourage me to love myself and show the world who I am. When you hear people say “I feel like a huge weight has been lifted off of my chest,” I promise that weight is gigantic and exhausting to carry.
To be liberated from the fear of disappointing others and change in general for who you truly are — it’s like a new chapter has begun. I hope this post encourages others to love themselves for who they are and to be proud of it! I also hope one day people won’t have to come out and experience the difficult, internal journey a person like me and many others had to go through. Straight, gay, bisexual, transgender, etc., celebrate yourselves and smile!
It’s time for me to start smiling and being happy. There is a family for everyone out there, I promise. I’m so thankful to have a huge family at home and all around me. Love you guys ❤️❤️❤️ #proud #gay
<br></br><br></br>
After the post, nothing but good things happened. I didn’t lose one single friend —that was my biggest fear. Michael did not lose any friends either when people saw he and his boyfriend together. Eventually, about a year after Thanksgiving of 2018, Michael came out as gay to my parents. He came out as bisexual initially because he didn’t want to hurt or disappoint our parents. Giving them the hope that he may date a girl in the future seemed better than eliminating that idea completely. However, after seeing how my parents were with us after a year of the idea of having two gay kids, Michael felt comfortable to let them know that he is gay. 
We grew closer to our friends and with each other. Our teammates and classmates became better friends with us. They defended us when another team or a townie in Berea would say a gay slur on the field or on campus. Our best friends on the team became our biggest supporters, celebrating our decision to finally come out and tell their other friends how proud they were of us.
We both just concluded our senior year of undergrad. I majored in political science and will attend law school in the fall of 2020 at the Brandeis School of Law at the University of Louisville. Michael majored in Business with a finance concentration and will attend The University of Louisville’s College of Business. In addition to playing on the soccer and tennis teams, we participated in other extracurricular activities. I served as senior class president while Michael served as the student representative for the Athletics Committee of Berea College.
<br></br><br></br>
We want our story to help other people struggling with the same issues we had to maneuver through. We want those people to know that they are not alone and that we we’re all in this together.
There is no greater power than a group of people getting together and supporting one another, celebrating our many beautiful characteristics and showing the world we too are here to have our voices heard. There is a family out there for everyone, I promise. We’re so blessed to have one around us all the time.
<br></br><br></br>
                         </CardText>
                        <Tappable onTap={() => window.open('https://www.outsports.com/2019/5/15/18618557/chris-michael-malpartida-gay-bi-berea-kentucky-coming-out', "_blank")}>   <CardActions style={{ backgroundColor: '  black' }}>
                            <Button style={{ color: 'white' }}>SOURCE</Button>

                        </CardActions></Tappable>
                        <CardMenu style={{ color: '#fff' }}>

                            <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}><IconButton className="clickable" name="photo" style={{ color: 'white', width: '58px', height: '58px', minWidth: 'initial', cursor: 'pointer' }} /></Tappable>








                        </CardMenu>
                    </Card>




                    
                </div>







            )
        } else if (this.state.activeTab === 1) {
            this.setBooleanReact();
          
        }
    }

    render() {
        Aos.init({
            
          });
        const { openDialogNTT, openDialogTesi, openDialogTrip } = this.state;
        return (
            <div className="category-tabs"  >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab style={{backgroundColor:'white'}}>Newspaper</Tab>
                    



                </Tabs>
                {this.showDialog(openDialogNTT, openDialogTrip, openDialogTesi)}
                <section>

                    <Grid >
                        <Cell col={12} >
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>


            </div>
        )
    }
}
export default Project;