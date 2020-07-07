import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import img1 from '../components/journalll.jpeg';

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
                <div className="projects-grid"  >
                    <Card shadow={5} style={{width: '100%'}}>
                        <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}><CardTitle className="mdl-card__title_ntt" style={{ backgroundColor: 'rgb(33, 33, 40)', height: '436px', cursor: 'pointer' }}><h4 className="author" style={{ color: 'black solid bold', fontFamily: 'Roboto Mono,monospace' }}>BY LACEY YAHNKE</h4></CardTitle></Tappable>
                        <CardText><h4 style={{ color: '#da7c18', fontFamily: 'Roboto Mono,monospace' }}>It's Awfully Quiet in the Closet</h4>Ryan O’Callaghan has a round face and a cowboy’s horseshoe mustache.


                        He also has broad shoulders, a thick neck and often wears a furrowed brow. His laugh is hearty, and his eyes are kind, but photos of him crouched in position ready to tackle opponents show how fearsome a figure he can be. 
                        <br></br><br></br>
                        
                        Ryan O’Callaghan is a former offensive tackle for the New England Patriots. At 6-foot-7, 330 pounds, he definitely fits the mold of a typical NFL offensive linemen. In other words, he’s an absolute beast. 
                        <br></br><br></br>
                        
                        But when he answers the phone on a lazy Sunday afternoon, I can hear emotion in his thick voice as he recalls his career, which ended more than 10 years ago. He remembers it as if it were yesterday. He remembers the sweltering August days in Foxborough, Mass. in 2006, when he and 52 of his teammates stumbled into the locker room, beads of sweat dripping off the ends of their noses onto the floor, their shoulder pads and silver helmets cradled under each arm. Red, white and blue colors adorned the surrounding walls, and the words ‘New England Patriots’ painted in big block letters greeted the players as they walked through the door. 
                        <br></br><br></br>
                        
                        As every other player drifted towards their designated lockers and began to hit the showers, O’Callaghan would take a hard right into the cafeteria next door. He would beeline straight towards the empty coffee pot sitting on the shelf and use it to prepare a cup of joe, with extra cream and sugar. He would then sit and sip his first cup and eye the clock for another 20 minutes, during which he would knock back a couple more. He often joked with his coaches about his strange desperation for caffeine, and would laugh nervously as he rinsed his mug clean. Then he would return to the locker-room, now filled with only damp towels and the lingering smell of Old Spice, and hit the showers himself. 
                        
                        <br></br><br></br>
                        O’Callaghan tells me that this was his post-practice routine for the entirety of his career as a Patriot, consuming countless cups of coffee even though he really didn’t enjoy its bitter taste. It was his way of stalling: avoiding showers with his team, and more importantly, keeping his darkest secret hidden. It was a secret that could never be revealed, because it would end his career.
                        <br></br><br></br>
                        
                        Ryan O’Callaghan, this beast of a man, also is gay.
                        <br></br><br></br>
                        Very rarely does the professional world of football witness one of its athletes come out of the closet and announce to the public that he is gay. Only 13 men out of the more than twenty thousands to have played in the NFL have come out as homosexual–and only one has announced that fact during his short career as a pro. All of the others, including Ryan O’Callaghan, have come out after they retired from the game. On its end, the NFL has yet to allow an openly gay man play a single snap in a regular season game. One explanation, critics say, is the toxic culture of masculinity that bleeds through the veins of the sport. 
                        
                        <br></br><br></br>
                        Football has been deemed the most masculine and violent team sport in U.S. culture since the early part of the twentieth Century. Traditionally, it seeks out, develops, and highly pays huge, strong and aggressive athletes who represent society’s ideal of what it means to be a man. 
                        <br></br><br></br>
                        
                        Not surprisingly then, assertive masculinity is enmeshed in the fabric of football. It’s sown into every locker room conversation; it’s tangled into every pre-game motivational speech; and it’s expected from every player–on and off the field. Researchers say that football not only fosters the “manly” characteristics–such as strength, bravery, authority, and toughness–but also values a certain type of masculinity above others–one that often grows to be toxic. This toxic culture allows no room for weakness, emotion or femininity, let alone homosexuality.
                        <br></br><br></br>
                        
                        “Gay men who are seen as feminine or queer are granted no space whatsoever in areas of masculine dominance,” said Dr. Gert Hekma, an expert in gay culture studies at University of Amsterdam. And unfortunately, no sport breeds masculine dominance better than football. And woe to any player who violates this culture.
                        <br></br><br></br>
                        I could feel the rippling energy of Esera Tualoa, a former defensive lineman in the NFL, as soon as he answered the phone. He laughed with me about his large physique and beautiful singing voice, and he gushed when he spoke of his tight-knit Samoan family. He also took me back to the most important game in his nine-year professional career: the last play of Super Bowl XXXIII in 1999. 
                        <br></br><br></br>
                        
                        As a nose guard for the Atlanta Falcons, Tualoa crouched in position directly in front of the Denver Broncos center, ready to pounce. His eyes glared at the opposing navy blue helmet. 
                        <br></br><br></br>
                        
                        The Broncos were up by 15 with one snap left to play. Denver’s quarterback, legend John Elway, took the snap and dropped to his knee to let the clock run out. Tualoa lunged forward and touched him first–credited with the last tackle of  Elway’s career. His name blasted through the loud speaker despite the devastating loss, and the JumboTron repeatedly played his highlights. 
                        
                        <br></br><br></br>
                        It should have been a moment of glory. Instead the publicity and attention terrified Tualoa. Every tackle he made, every sack he was awarded, every moment of accomplishment, crippled him with the fear of someone outing him.
                        <br></br><br></br>
                        
                        “The fear wasn’t ever about me getting beat up because, ya know, I’m tough,” Tualoa says. “I’m Samoan–we know how to fight. But the fear came out of all the hard work, all the sacrifices I have made in my life to get here, all being taken away just because someone outed me. That was the fear.”
                        <br></br><br></br>
                        
                        Eric Anderson, the leading expert in the areas of sport and sex cultures, has conducted studies on openly gay athletes at all levels of sports. He found that many gay athletes–those who come out either during their careers or after–typically retreat into a “don’t ask, don’t tell” culture. Their teammates say, “Look we know you’re gay, and that’s fine. Let’s just not talk about it,” and it becomes an openly silenced secret. 
                        <br></br><br></br>
                        
                        In the NFL, this culture is even more harsh. Take for example, Michael Sam, the first openly gay player drafted into the NFL. In college (and still in the closet), Sam played for the University of Missouri in the Southern Eastern Conference (SEC), arguably the best defensive league in the country. Sam went on to win Defensive Player of the Year, which practically promised his chances of becoming a first or second round draft pick. However, his entire career changed in one day. 
                        <br></br><br></br>
                        
                        On February 9, 2014, Sam came out publicly to the world of football. Two months later he was not drafted until the 7th round to the Los Angeles Rams. No one on the team asked about his sexuality, and the NFL chose not to comment on it either. Then in the blink of an eye, the Rams cut him after the pre-season despite being a top five defensive player on the team. Rather than try out for another team, Sam quit the NFL and hung up the cleats forever. 
                        <br></br><br></br>
                        
                        If you look at what round the last ten SEC Defensive Players of the Year got drafted to the NFL, you’ll find that all but one was drafted in the first or second round. That one player was Michael Sam. In its first, and only instance of a gay player embracing his sexuality at the professional level, the NFL found a way to subtly push him out. Sam’s experience, perhaps it was intended, has proven an object lesson to other gay football players. 
                        <br></br><br></br>
                        
                        The discrimination doesn’t have to be overt or formal. Football’s casual homophobic environment instills fear in its gay athletes and silences their stories. This fear stems from the sport’s desperate desire to maintain its masculine character. 
                        <br></br><br></br>
                        
                        This fear keeps the closet door bolted shut. 
                        <br></br><br></br>
                        Over the years, especially during his collegiate career, Ryan O’Callaghan often heard anti-gay slurs and comments, none of which were directed at him–but rolled off the tongues of his teammates so effortlessly that he got the message. 
                        <br></br><br></br>
                        
                        “I would hear a lot of people calling each other a fag or say “oh that’s gay” and I was guilty of it too,” O’Callaghan says. “I obviously knew I was gay but I just wanted to fit in. My logic was: if I call someone a faggot too then they’re never gonna think that I am one.”
                        <br></br><br></br>
                        
                        Even after all these years out of the game, O’Callaghan’s mind still wanders towards the hypothetical nightmare of his team finding out. It’s why at the time he designed a script and played the perfect role. He studied up on cars and hunting and guns just to use “straight” conversation starters. And of course, football was the perfect hideaway.
                        <br></br><br></br>
                        
                        “I used football as my cover, and relied on everyone’s ignorance to assume that this big macho guy playin’ football could never be gay.” 
                        <br></br><br></br>
                        Despite the strong grip traditional masculinity holds on football, it has in fact loosened ever so slightly in the last decade. Traditional “masculine” actions that characterize football are slowly changing. Instead of players immediately kissing their wives after big wins and screaming with their teammates in huddles, you see them break down in emotional tears and hugging everyone around them. Instead of being judged for wearing trendy suits and flashy jewelry to pregame events, they are praised for freely expressing themselves through fashion. Instead of being labeled “soft” for removing themselves from a game after a blow to the head, they are validated for taking care of their mental and physical health. And now, amongst a generation that is more accepting than ever, younger athletes are taking a stand for their sexuality. 
                        <br></br><br></br>
                        
                        University of Amherst is the kind of college where liberal conversations are the only conversations among students. It’s the kind of college where the headline of the most popular article on the student newspaper’s website is “Your Invitation to the Radical Left,” and the finalists for the selection of their new “fierce” mascot were “The Hamsters” and “The Poets.” 
                        <br></br><br></br>
                        
                        Needless to say, it is a very inclusive place. When I contacted Amherst’s football captain Avery Saffold, I was taken aback by his gentle description of “my best friend, Football.” 
                        <br></br><br></br>
                        
                        Football, Saffold says, gives him life–it is his soulmate. An aura of confidence swoons around him ever so subtly. He wears it best in his Instagram photos with his wide white smile and cut jawline. He laughs nervously whenever he talks about himself, and denies it whenever I serve him a compliment–as though he is desperately seeking a little love but also desperately avoiding it. 
                        <br></br><br></br>
                        
                        Saffold told his team he was gay before his senior year in 2019. Luckily for him, he came out in a community that is already exceedingly welcoming towards gay people. But the debilitating fear of being a "homo-football player" kept him in the closet for so long. He grew terrified of losing his position that he worked hard to earn. He didn’t want to lose the respect of his teammates, coaches, family and fans that he acquired during his career. 
                        <br></br><br></br>
                        
                        However, says Saffold, once he came out, he felt utter relief. His team treated him even better than before. He posted his story publicly on Instagram, and friends commented their support. He felt they knew him even better off the field– and he played better on the field because of it. 
                        <br></br><br></br>
                        
                        “When I came out, the weight was truly off my shoulders,” he says. “Before, I felt like I could never truly be myself, but my last year, I was able to play freely.” 
                        
                        <br></br><br></br>
                        His true burden–the thing that kept him in the dark for so long– was the fear he felt from his best friend, Football. But once he was out, Football accepted him with open arms.
                        <br></br><br></br>
                        Some say that the sport of football and the masculinity identified with it has come a long way. Ryan O’Callaghan and Esera Tualoa both agree that if there had been more support from the football community when they played, they would have come out sooner. And that rings even more true for Avery Saffold who came out less than a year ago. But for others, the fear of being spit out like Michael Sam is too great to overcome. 
                        <br></br><br></br>
                        
                        One can only hope that someday the National Football League will see a gay player put on the pads and become the man he is supposed to be. Until then, the closeted men of the NFL may continue to hide behind their bitter cups of coffee. </CardText>
                        <Tappable onTap={() => window.open('https://lyahnke.wixsite.com/yahnke/post/it-s-awfully-quiet-in-the-closet', "_blank")}>   <CardActions style={{ backgroundColor: '  #da7c18' }}>
                            <Button style={{ color: '  10px solid black' }}>Link</Button>

                        </CardActions></Tappable>
                        <CardMenu style={{ color: '#fff' }}>

                            <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}><IconButton className="clickable" name="photo" style={{ color: '#da7c18', width: '58px', height: '58px', minWidth: 'initial', cursor: 'pointer' }} /></Tappable>








                        </CardMenu>
                    </Card>




                    
                </div>







            )
        } else if (this.state.activeTab === 1) {
            this.setBooleanReact();
          
        }
    }

    render() {
        const { openDialogNTT, openDialogTesi, openDialogTrip } = this.state;
        return (
            <div className="category-tabs"  >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab style={{backgroundColor:'#da7c18'}}>Newspaper</Tab>
                    



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