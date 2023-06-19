import React,{useState,useEffect} from 'react'


import {Hero ,About,Services,Projects,Getintouch}from '../../component'
import { collection,getDocs} from 'firebase/firestore';


import { db } from '../../firebase.config';

function home() {

  const [articles, setArticles]=useState([])
  useEffect(()=>{
      const articlesCollectionRef=collection(db, "articles");
      const getArticles= async ()=>{
        const articledata = await  getDocs(articlesCollectionRef)
        setArticles(articledata.docs.map((doc)=>({...doc.data(), id:doc.id})))

      }

      getArticles()
  },[]);


  const [project, setProject]=useState([])
  useEffect(()=>{
      const projectsCollectionRef=collection(db, "projects");
      const getProjects= async ()=>{
        const projectdata = await  getDocs(projectsCollectionRef)
        setProject(projectdata.docs.map((doc)=>({...doc.data(), id:doc.id})))

      }

      getProjects()
  },[]);
  
  return (
    <div className=' flex flex-col pt-16'>
          
        <Hero/>
      <About articledata={articles}/>
      <Services/>
      <Projects projectdata={project}/>
       
       
        <Getintouch/>
    </div>
  )
}

export default home


