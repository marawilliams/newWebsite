import { type FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import { TypeAnimation } from 'react-type-animation';

const Home: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <img
          src = "/assets/profile.png"
          alt = "Decorative"
          className = {styles.image}
      />
      <div className = {styles.rectangle}/>
      <div className = {styles.intro}>
        <TypeAnimation
          sequence = {['', 1000,
            'Hiya! My name is Mara...', 
            3000,
          ]}
            wrapper="span"
            speed={{type: 'keyStrokeDelayInMs', value: 200}}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              whiteSpace: "pre-line",
              display: "inline",
              }}
            repeat={Infinity}
            />
      </div>
      <div className = {styles.introparagraph}>
        <p style={{ fontFamily: "'Red Hat Mono', monospace"}}>
        I am an <strong>engineer</strong> and <strong>artist</strong> focused on web-development, mental health technologies, and music.</p>
      <p style={{ fontFamily: "'Red Hat Mono', monospace"}}> Please look around to learn more about me!</p>
      </div>
      
      
    </section>
  );
};

export default Home;