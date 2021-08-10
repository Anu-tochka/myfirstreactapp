import './Home.css';

function Home(props) {
  return (
    <div className="Home" style={{marginTop: '50px'}}>
      {props.home}
    </div>
  );
}

export default Home;
