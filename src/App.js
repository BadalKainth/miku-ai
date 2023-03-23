import classes from "./App.module.css";
import image from "./data/images/threeChat.png";

function App() {
  return (
    <main>
      <section className={classes.homeSection}>
        <img src={image} alt="Img" className={classes.chatImg}></img>
        <div className={classes.information}>
          <h1>Miku-AI</h1>
          <h3>
            Use Chat-GPT on your <span>WhatsApp!</span>{" "}
          </h3>
          <p>
            We’ve created Miku-AI, which uses the latest milestone in OpenAI’s
            effort in scaling up deep learning(GPT-4) and provide answers on
            WhatsApp directly. GPT-4 is a large multimodal model (accepting
            image and text inputs, emitting text outputs) that, while less
            capable than humans in many real-world scenarios, exhibits
            human-level performance on various professional and academic
            benchmarks.
          </p>

          <button className={classes.chatBtn}>TRY ON YOUR WHATSAPP</button>
        </div>
      </section>
    </main>
  );
}

export default App;
