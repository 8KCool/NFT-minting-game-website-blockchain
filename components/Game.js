import React, { useEffect } from 'react';
import Aos from 'aos';
import Weaplist from './WeapDataForHome.json';
import "aos/dist/aos.css";
import { image } from 'd3';
import { info } from 'autoprefixer';





function Game () {

    useEffect(() => {
        Aos.init({ duration : 1500,
                   offset: 100,
                   delay : 100})
      }, []);
      
    return (
        <div id="game"className='overflow-hidden flex flex-col'>
            <div className='mx-16 flex flex-col items-center justify-between'>

            <h1 data-aos="fade" className='text-[40px] font-Kanit bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase my-[22px] font-semibold'>
                    Game Concept
                </h1>
                <p data-aos="fade" className='text-[20px] font-Kanit text-gray-400 text-justify '>
                The game is inspired by a survival game in which players will take on the form of heroes to be the last survivor to win the battle by
                following the quest. The game loop will be players experiencing the battles, being the winner, and receiving the rewards, then using the
                rewards to upgrade the game characters and weapons efficiently
                </p>

                <h1 data-aos="flip-right" className='text-[40px] font-Kanit bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase my-[22px] font-semibold'>
                    Game story
                </h1>
                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between'>
                    <h1  className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>Dr M.G.</span> <br/>
                    He was at the center of the Event, the very catalyst that set off everything. The great start at the center of the
                    Marsten Galaxy held within its power so great that no one, not a single person or creature in the universe, was said
                    to be able to stand it. He did not believe them, and he did not heed the warnings laid before him. He created a lab,
                    big as anything, and a great and powerful drill, with which he planned to break through to the heart of the great
                    star. He was going to harness the power of it to help people, all across the galaxy.  
                    </h1>
                    <img src='/characters/Raja.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Dr.M.G..png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    When he had drilled through, the power that surged out of the center, out through the hole and into space, was
                    greater than he could ever have imagined. Eleven beams, some brighter than others and some even brighter than
                    that, bounced out into the Marsten Galaxy and hit eleven unsuspecting people, granting them the very powers he
                    had been searching for. He, at the center of it, got them too, impenetrable, unkillable power. The beams shot
                    through him first, one after the other, eleven shots directly to the chest. There was a price, though, for though those
                    eleven people lived, every single other person in the entire galaxy was killed by the blast. Now, Dr M.G. gathers the
                    eleven to him, trying to fix his mistake by giving them better lives than they had before.
                    </h1>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 1, Angela</span> <br/>
                    When she was a child, she was bred to be a warrior. Born on the planet Expon in the middle of a battlefield, Angela
                    lived her life as normal, thinking that this was all she would ever know. She was the greatest warrior in her group, but
                    the people of Expon were a war-ravaged people, and so not only was the life expectancy rate extremely low, but she
                    spent her entire childhood watching her friends and family fall beside her as she fought. She expected, and had made
                    peace with the fact that, she had been born on a battlefield, and she was going to die on one.  
                    </h1>
                    <img src='/characters/Melissa.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Angela.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    The Event knocked her out, and she woke up alone in the middle of a desert, surrounded by the blood of people who
                    didn&apos;t exist anymore. She was a skilled warrior, truly, and had not been hurt in battle, and when the beam hit her it
                    understood that there was no change that needed to be made. She rose to her feet and stayed in her camp alone until
                    she was called to the scientist, and he made her the leader of his little army
                    </h1>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 2, Apollo</span> <br/>
                    Apollo started out as just a young kid, working to make ends meet in the slum area of Planet Perrian. It was a small
                    planet, made up mostly of industrial areas and factories, and his life was hard and dangerous. He had to work around
                    machines constantly, and factory accidents were very common. He went to work every day with the knowledge that, at
                    any moment, something could happen that would kill him. At the moment of the event, he was in the middle of repairs
                    on an industrial welder, and the force of the blast (and the subsequent beam that hit him square in the chest) knocked
                    him back, pushing against the welder and searing off half of his face and giving him third degree burns everywhere.  
                    </h1>
                    <img src=  '/characters/Peter.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Apollo.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Because of his proximity to the machines, the great star&apos;s power got confused, and so instead of healing him, it
                    replaced the burned parts of his body with robot parts, making him bionic. Scared and suddenly completely alone
                    on his planet (and, unknown to him at the time, only one of twelve people left alive in the entire galaxy), he hid
                    among buildings and ate the leftovers the others had left behind until Dr M.G. summoned him to him, giving him
                    the home and the family that he had always so longed for.
                    </h1>
                </div>
{/*No3, Billy*/}
                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 3, Billy</span> <br/>
                    Billy lived for the first few years of his life on the planet Doom, traveling with the traders there. However, he had been
born without legs, and though he had fairly good quality prosthetics, they were no match for Doom&apos;s tropical climate and
the constant moving, and because his parents could not afford to buy new ones, when they began to break down they
packed up their caravan, moved everything onto a spaceship, and moved to the space colony of 03-33-29, where the
superior technology was able to create him properly, bionic legs to replace the prosthetics. He lived a happy and cheerful
life among the inhabitants of 03-33-29, until the moment of the Event when he suddenly found himself sitting in an
empty cafeteria partway through making a joke to his friend.
  
                    </h1>
                    <img src='/characters/Arnold.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Billy.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    The power that surged through him offered, quite gently, to repair his legs To grow them back, and give him as normal
a life as it could be now. But he refused. There was no growing back what had never been there in the first place, and so
instead the bionics were welded to him, to his brain stem so that he may control them as anyone else would. It was hard
for him to adjust to living with the doctor and the others, he missed his community back home as all of them did, but
he settled in nevertheless.
                    </h1>
                </div>

                {/*No4, Bishop*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 4, Bishop</span> <br/>
                    Bishop lived an ordinary, day-to-day life on the planet Octavio, in a little suburban house. He was born to two
regular parents and then lived a very regular life, going to school andgetting good grades and partying with his
friends on the weekends, until eventually he graduated and took a nice, regular job in accounting. He met his
wife there, she had the cubicle beside his, and they struck it off really well.
  
                    </h1>
                    <img src='/characters/Sammy.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Bishop.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Eventually, they got married, and then had two wonderful children, and then the Event destroyed all of it in a
single second. One moment he was driving with his family in the car, to a vacation they had been planning for
weeks and weeks, and the next he was alone, his head bleeding after a collision from the force of the blast, and the
power that surged through him spoke only of anger and revenge against the person who had done this to him. He
was still called to live with the others, to join the last people left alive, but it was only because he would g mad
from grief if he didn&apos;t. He still holds rage in his heart, and though he seems friendly to them, someday he wants to
cause the scientist that stole his family away the same pain that he has togo through every single day without
them.
                    </h1>
                </div>

                {/*No5, Flake*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 5, Flake</span> <br/>
                    Flake was a warrior of the Lizard people of Perrigard. Perrigard, of course, being one of the smaller regions on
the planet known to most people as Planet Janus, and known to Flake and the rest of the Lizard people as Planet
Lintaqreg. Apparently, when explorers from other areas in the Marsten Galaxy happened upon them, they had
misunderstood the word “janes” (the Lizard people&apos;s word for &apos;welcome&apos;) as being the name of the planet, and
no amount of correcting had seemed to do history any good.
  
                    </h1>
                    <img src='/characters/Antony.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Flake.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Flake lived his life as a warrior mostly fishing and hunting, because the Lizard people weren&apos;t all that big on
wars, and so the title of warrior was more of an honorary term than a literal one. Still, after the Event, when
Flake found himself sobbing alone in a swamp, the power that surged through him had strengthened his heart
and given him the strength to carry on. Peaceful warriors are still warriors, and Flake was still an excellent
fighter. His addition to the team was a welcome one, and he was happy to, once again, find himself among
people who considered him a friend.
                    </h1>
                </div>

                {/*No6, Irona*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 5, Irona</span> <br/>
                    Irona was not well liked among her peers. Frankly, that was what the rest of her troops always said after she was
kicked out of them. She lived in a society of robot people on the planet Doom, in a different sector from the one that
Billy had traveled through as a child. She was trained in the army, and was carted from troop to troop as each one
decided they hated her and began to look for reasons to kick her out. Eventually, everything about her demeanor had
turned entirely hateable, and she was kicked out of the army to live alone in a little hut, away from everyone else.
  
                    </h1>
                    <img src='/characters/Roby.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Irona.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    It was for this reason, the isolation of her house and her general distaste for people, that not only did Irona not notice
that the Event had even happened (she had been taking a nap during the initial explosion, and so had not felt the force
of it) for weeks, until she ran out of groceries and went into town to get more, but it also took just as long for the
scientist to track her down and summon her to him. She hadn&apos;t even noticed the new power she possessed now, had
broken a few doors and just assumed that they had been rotting without her noticing it. She didn&apos;t work well with the
team at first, but over time they managed to break her down, and now they all get along splendidly, aside from some
occasional tension.
                    </h1>
                </div>

                {/*No7, Omega*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 7, Omega</span> <br/>
                    Omega lived on the same planet as Bishop, the planet Octavio, although instead of leading the regular life of a
civilian, he instead enlisted in the army directly out of high school and began to work as hard as possible in order
to rise in the ranks as quickly as he could. He was a hot-headed man with an incredibly good and commanding
energy around him, and his troops trusted him without question.
                    </h1>
                    <img src='/characters/Isaac.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Omega.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Still, when it came down to it, he was not the strongest, nor the fastest, nor the smartest by far, and so after the
initial shock after the Event, the only thing that saved him was his new power, which gave him enough strength to
hunt food for himself until he was eventually called to join the rest of the team. Until then, he spent his time
hiding in the camping ground and occasionally doing strength training in order to keep his spirits.
                    </h1>
                </div>

                {/*No8, Regen*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 8, Regen</span> <br/>
                    Regen grew up in an old space colony, one which no longer has a name on record. This would have been unusual, except
when he was a bit younger there was a great explosion that had not only destroyed the entirety of the colony, but had
also happened at the same time as another, significantly smaller explosion in the galaxy records office that destroyed any
evidence of that colony ever having existed. This explosion had also severely damaged and scarred his face, so Regen
had gotten used to covering it with a large mask. Unfortunately, because the injuries had healed years before the Event
the power was unable to fix them, but only provide a more interesting face covering to make him more comfortable.

                    </h1>
                    <img src='/characters/David.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Regen.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    At the time of the Event, Regen was living in a refugee camp, along with the rest of his fellow Unnamed Space Colony
residents. He had been in the middle of helping out in the kitchens, at which he was very good, and then had fighting
training on the schedule, and after the Event the only thing he knew to do to cope was just to continue to follow the
schedule, going through th irregular motions day by day until he was summoned by the scientist and found himself a
greater purpose.
                    </h1>
                </div>

                {/*No 9, Ultron*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 9, Ultron</span> <br/>
                    Ultron lived in a different sector of the planet known to most people as Planet Janus, and known to the Lizard people of the planet
itself as Planet Lintaqreg. This sector wasn&apos;t too far away from Flake&apos;s sector of Perrigard, and was known as Kiilon. Flake might
have even run into Ultron, had he chosen to venture outside of his own small encampment. Either way, he didn&apos;t, and so they did
not meet until after the summoning. Unlike Flake, Ultron was a fierce and savage warrior. He never got to practice these skills on
anything except prey, though, because the Lizard people continued to be an annoyingly peaceful species and so there were never
any wars for him to fight in.


                    </h1>
                    <img src='/characters/Jack.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Ultron.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    After the Event, Ultron traveled silently around the planet, taking in the sights and pilfering random encampments whenever he
came across them, pretending like he was plundering conquered villages. This was the closest he would ever get to living out his
dream as a mighty warrior, or so he thought, until the scientist&apos;s summons reached him and he finally, for the first time found
himself in a place where his skills were needed and even appreciated for what they could do.
                    </h1>
                </div>

                {/*No 10, Vader*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 9, Vader</span> <br/>
                    Vader grew up in the poor sector of the planet Korkoron, working as a blacksmith for most of his life. He became incredibly
skilled, but the work did not interest him. What did interest him, though, was hunting and fighting, which was why he ended
up quitting his job as a tradesman and joining the army instead. There, because the planet Korkoron was in the middle of a
giant war, he found himself right in his element, fighting with other great warriors just like him. It was exactly the sort of
thing he had always dreamed about, and he was incredibly excited about all the new opportunities it had given him.


                    </h1>
                    <img src='/characters/Danty.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Vader.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Then, at the moment of the Event, he found himself standing next to a large tankard full of explosives. They were the sort of
explosive that could be activated with the press of a button, and unfortunately for him, the force of the Event pushed him
directly into the button, exploding the tankard and both of his legs right along with it. The energy that surged through him
right then was amazing, and it was able to grow most of his legs back, except right past the knee.
Perhaps something went wrong, or he pleaded with it not to, but instead of flesh, below the knee, his legs were made bionic,
and when he could stand again, he found he could jump great distances and run faster than he ever had before.
                    </h1>
                </div>

                {/*N0 11, Alita*/}

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 9, Alita</span> <br/>
                    Alita was born on the desert planet Innon. She was never trained in her skills. It was like she was born with them, an incredibly
strong fighter from the moment she learned to walk. Her skill only grew as she got older, and so though maybe some of the
others, some of the ones who had never been made for fighting but now were forced to due to circumstance, had only been hit by
the beams by chance, and perhaps were not deserving of their power… Alita was the exact right person to be hit, and the power
she felt after the Event did not scare her. When the doctor summoned her, it was less of a terrifying call to action, and more of a
sort of homecoming.



                    </h1>
                    <img src='/characters/Seth.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Alita.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    After summoning all of them Dr.M.G. started to explain how they got their special powers and started to explain gently how that
event has taken place. He heard everyone&apos;s stories. In the end, Dr.M.G. offered all of them to create a team or league. Since each
one of them has got a chance to be a hero with special talents. They took some time to think but it did not last that long, since
they already knew that they don&apos;t have anything to lose, not anymore.
Dr.M.G. suggested to start their first fight in Dex sector, or what they have called it, Dex Battle. Overall, no one knows how
Dr.M.G. got the leadership of this team easily. As his powers are still unknown until now. All of them thought that he just got
some mind tricks and mind power. But they missed that Dr.M.G. was at the same place of the event and the 11 beams have hit him
before they got distributed to them. He gathered them in order to start to tell them about the most important and confidential
project ever. The Mutated weapon projects
                    </h1>
                </div>

                <div className='my-6'>
                    <button className=' border border-blue-200 text-center text-[20px] text-blue-200 font-Kanit hover:bg-blue-400 hover:text-black hover:font-semibold px-4 py-2 rounded-full'>
                        Read more in Whitepaper
                    </button>
                </div>

                <h1 data-aos="flip-right" className='text-[40px] font-Kanit bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase my-[22px] font-semibold mt-4'>
                    DexBattle Characters
                </h1>

  <div className='w-full flex flex-col items-center justify-between overflow-hidden my-4'> 
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="rmd:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Apollo.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white uppercase">APOLLO</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <li>Walk speed:4.5</li>
        <li>Run speed:8</li>
        <li>Stealth speed:1</li>
        <li>Acceleration:9</li>
        <li>Crouch speed:2</li>
        <li>Crouch transition speed:0.16</li>
        <li>Slide speed:12</li>
        <li>Jump force:8.5</li>
        <li>Jump rate:0.82</li>
        <li>Gravity multiplier:1</li>
        <li>Health:100</li>
        <li>Start to regenerate in:4</li>
        <li>Regeneration speed:3(max)</li>
        <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class='md:h-96 md:w-72 w-full h-full'>
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Billy.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">BILLY</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <li>Walk speed:6.62</li>
        <li>Run speed:11.13</li>
        <li>Stealth speed:1.16</li>
        <li>Acceleration:7.4</li>
        <li>Crouch speed:1.77</li>
        <li>Crouch transition speed:0.16</li>
        <li>Slide speed:11</li>
        <li>Jump force:8.2</li>
        <li>Jump rate:0.82</li>
        <li>Gravity multiplier:2</li>
        <li>Health:100</li>
        <li>Start to regenerate in:4</li>
        <li>Regeneration speed:3(max)</li>
        <li>Regenerate up to:75</li>
        </ol>
      
      </div>
    </div>
    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Bishop.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">BISHOP</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5 </li>
            <li>Run speed:7.85</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:10</li>
            <li>Crouch speed:2</li>
            <li>Crouchtransition speed:0.16</li>
            <li>Slidespeed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regeneratein:4</li>
            <li>Regenerationspeed:3(max)</li>
            <li>Regenerateupto:75</li>
        </ol>
        
      </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Irona.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">IRONA</h1>
        <ol class="mb-3 md:text-[15px] text-[10px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:7.1 </li>
            <li>Run speed:9</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:8.3</li>
            <li>Crouch speed:2.34</li>
            <li>Crouch transition speed:0.192</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.6</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Omega.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">OMEGA</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5.2 </li>
            <li>Run speed:9</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:9</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.6</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Regen.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">REGEN</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:4.5 </li>
            <li>Run speed:8</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:9</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:2</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Ultron.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">ULTRON</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5</li>
            <li>Run speed:8</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:10</li>
            <li>Crouch speed:3</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Vader.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">VADER</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:6.77 </li>
            <li>Run speed:8</li>
            <li>Stealth speed:1.21</li>
            <li>Acceleration:12.3</li>
            <li>Crouch speed:2.97</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12.65</li>
            <li>Jumpforce:6.5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    {/*no 19*/}

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Flake.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">Flake</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5.72 </li>
            <li>Run speed:7.36</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:8.3</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:4.6</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    {/*No 10*/}

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Alita.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">ALITA</h1>
        <ol class="mb-3 md:text-[15px] text-[10px]  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:6.57 </li>
            <li>Run speed:10.48</li>
            <li>Stealth speed:1.1</li>
            <li>Acceleration:10.4</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    {/*No 11*/}

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Dr.M.G..png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">DR. MG</h1>
        <ol class="mb-3 md:text-[15px] text-[10px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li className='text-justify'>The Almighty Leader of the Marstens team .
He has unknown power and he is the leader of The Marstens. 
People cannot use him for playing the game as a characters now , 
but who has this NFT would be able to join The Marstens Team league and obtain privilages.
Dr.M.G. May appear in the game ,
character selection and it would be your chance to feel yourself unbeatable.</li>
          
        </ol>
    </div>
    </div>

    {/*No 12*/}

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="md:h-96 md:w-72 w-full h-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Angela.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">Angela</h1>
        <ol class="mb-3 md:text-[15px] text-[10px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5.89 </li>
            <li>Run speed:9.16</li>
            <li>Stealth speed1:</li>
            <li>Acceleration:9</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed12:</li>
            <li>Jumpforce:7</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>
    </div>
  </div>
  <h1 data-aos="flip-right" className='text-[40px] font-Kanit bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase my-[22px] font-semibold mt-4'>
  DexBattle Weapons
  </h1>
  

  {/* content here */}
  <div className='w-full flex flex-col items-center justify-between overflow-hidden my-4'> 
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
{
 Weaplist.map((item) =>
 <div key={item.id} item={item} class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
 <div class="md:h-[300px] md:w-[400px] h-auto w-full">
   <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.image} alt="Weapon" />
 </div>
 <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
 <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
   <h1 class="font-Kanit text-3xl font-bold text-white">{item.title}</h1>
   <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <li>Tire:{item.tier} </li>
      <li>Type:{item.info} </li>
       <li>Damage:{item.damage}</li>
       <li>Fire Rate:{item['fire rate']}</li>
       <li>Reload Time:{item['reload time']}</li>
       <li>Range:{item.range}</li>
       <li>Accuracy:{item.accuracy}</li>
       <li>Weight:{item.weight}</li>
   </ol>
</div>
</div>)
}

    </div>
  </div>

</div>


         
 

    </div>
    ) 
}
export default Game