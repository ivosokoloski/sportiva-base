import './Home.css';
import FooterHome from './HomeComponents/FooterHome';
import HeaderHome from './HomeComponents/HeaderHome';
import MainHome from './HomeComponents/MainHome';


export function Home() {
  return (
    <>
        <HeaderHome />
        <MainHome />
        <FooterHome />
    </>
  );
}
export default Home;
