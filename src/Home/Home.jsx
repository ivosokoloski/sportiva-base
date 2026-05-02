import './Home.css';
import FooterHome from './HomeComponents/FooterHome';
import HeaderHome from './HomeComponents/HeaderHome';
import MainHome from './HomeComponents/MainHome';


export function Home({activities}) {
  return (
    <>
        <HeaderHome activities={activities} />
        <MainHome activities={activities} />
        <FooterHome />
    </>
  );
}
export default Home;
