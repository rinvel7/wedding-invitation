import styles from "./page.module.css";

import Header from "@/components/Header";
import Date from "@/components/SectionDate";
import Information from "@/components/SectionInformation";



export default function Home() {
  return (
    <main className={styles.main}>
           <Header />  
           <Date /> 
           <Information />  
    </main>
  );
}
