import Response from '@/app/blocks/Response'
import { Header } from './components/Header';
import { Landing } from './components/SiteAbakan';

export default function Home() {
  return <>
  <Header />
  <Landing />
  <Response/> 
  </>;
}
