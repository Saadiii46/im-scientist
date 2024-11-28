import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner.js';
import Start from '@/components/Start/Start';
import Contest from '@/components/Contest/Contest';
import GetStarted from '@/components/GetStarted/GetStarted';
import Popular from '@/components/Popular/Popular';
import News from '@/components/News/News';
import Partners from '@/components/Partners/Partners';
import Prizes from '@/components/Prizes/Prizes';
import Faqs from '@/components/Faqs/Faqs';



export default function Home() {
  return (
    <div className="App">
      
      <Header/>
      <Banner/>
      <Start/>
      <Contest/>
      <GetStarted/>
      <Popular/>
      <News/>
      <Partners/>
      <Prizes/>
      <Faqs/>
      
    </div>
  );
}
