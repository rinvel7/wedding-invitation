import styles from "./page.module.css";

import Header from "@/components/Header";
import Banner from "@/components/SectionBanner";
import Date from "@/components/SectionDate";
import Information from "@/components/SectionInformation";



export default function Home() {
  return (
    <main className={styles.main}>
           <Header /> 
           <Banner /> 
           <Date /> 
           <Information />  
    </main>
  );
}
