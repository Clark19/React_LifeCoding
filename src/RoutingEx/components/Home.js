import TopMenu from "./TopMenu";

function Home() {
  return (
    <div className='container'>
      {TopMenu()}
      <h1>Hello React Router DOM Example</h1>

      <section>
        <h2>MainPage content...</h2>
      </section>
    </div>
  );
}

export default Home;
