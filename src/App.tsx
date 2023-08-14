import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="navbar h-[4rem] w-screen">
        <Navbar />
      </div>
      <div className="overflow-scroll h-[calc(100vh-8rem)]">
        <Grid />
      </div>
      <div className="footer h-[4rem]">
        <Footer />
      </div>
    </>
  );
}

export default App;
