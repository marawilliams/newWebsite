import { type FunctionComponent } from "react";
import { TypeAnimation } from 'react-type-animation';

const Home: FunctionComponent = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center text-center mx-auto"
    style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat' }}>

      {/* Orange rectangle */}
      <div className="absolute w-[20.7vw] h-[32.7vw] top-[8vw] right-[9.3vw] bg-[#f69833] rounded-[4.2vw]" />

      {/* Profile image */}
      <img
        src="/assets/profile.png"
        alt="Decorative"
        className="absolute w-[22.8vw] h-auto top-[6vw] right-[6.1vw] z-10"
      />

      {/* Typing animation */}
      <div className="absolute text-left w-[43vw] text-[#f69833] top-[12.1vw] left-[5.9vw] pb-[15px]">
        <TypeAnimation
          sequence={['', 1000, 'Hiya! My name is Mara...', 3000]}
          wrapper="span"
          speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '2.4vw',
            whiteSpace: 'pre-line',
            display: 'inline',
          }}
          repeat={Infinity}
        />
      </div>

      {/* Intro paragraph */}
      <div className="absolute text-left w-[60vw] text-[#f69833] text-[2.2vw] top-[20.6vw] left-[5.9vw] break-words pr-[2vw]">
        <p style={{ fontFamily: "'Red Hat Mono', monospace" }} className="mb-3">
          I am an <strong>engineer</strong> and <strong>artist</strong> focused on web-development, mental health technologies, and music.
        </p>
        <p style={{ fontFamily: "'Red Hat Mono', monospace" }}>
          Please look around to learn more about me!
        </p>
      </div>

    </section>
  );
};

export default Home;