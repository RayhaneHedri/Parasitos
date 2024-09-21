import Card from "./components/Card";

const Home = () => {
  return (
    <section className="conta flex-center flex-col w-full mt-20">
      <h1 className="head_text">WELCOME</h1>
      <h3 className="catch_text">
        Are you ready to start your experience with us?
      </h3>
      <button type="button" className="primary_btn">
        Create Account
      </button>
      <section className="conta flex-center flex-col w-full mt-20">
        <h1 className="section_text">MEET OUR TEAM</h1>
        <div className="my-10 w-full">
          <img className="w-full h-[450px] object-cover custom-object-position" src="/assets/IMG_1998.jpg" alt="Circle image" />
        </div>
        <button type="button" className="primary_btn">
          Learn More
        </button>
      </section>
      <section className="conta flex-center flex-col w-full mt-20">
      <h1 className="section_text">OUR PRODUCTS</h1>
      <div className="card-container">
        <Card title="Coffee Mug" image="/assets/Enamelled_Mug_Mockup.jpg" />
        <Card title="Bracelet" image="/assets/Free_Pin_Button_Mockup_3.jpg" />
        <Card title="Pins" image="/assets/Free_Wristband_Mockup_3.jpg" />
      </div>
      <button type="button" className="primary_btn">
        See More
      </button>
      </section>
      <h3 className="para_text">Sorry.. That’s all you can see for now! </h3>
      <h3>Create your account now to start your fascinating journey.</h3>
      <button type="button" className="primary_btn">
        Create Account
      </button>
    </section>
  );
};

export default Home;
