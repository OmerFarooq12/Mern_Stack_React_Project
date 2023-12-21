import React from 'react'
import ProjectItems from './ProjectItems'

export default function Projects() {
  return (
    <div>
        <div id="projects" className="basic-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Delivered projects</h2>
                    <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
                </div> 
            </div>
            <div className="row">
                      <div className="col-lg-12">
                          <ProjectItems name='Jumbotron' img='images/project-1.jpg' description=' web design for their corporate websites and landing pages for marketing campaigns ' />
                          <ProjectItems name='Carsrepo' img='images/project-2.jpg' description='designed and developed modern platform for purchasing second hand cars online ' />
                          <ProjectItems name='Truevideo' img='images/project-3.jpg' description='created a custom video editing and upload web app for this awesome team ' />
                          <ProjectItems name='Evolosim' img='images/project-4.jpg' description='complete redesign of their corporate website and platform update for their online shop' />                
                </div> 
            </div> 
        </div> 
    </div> 
    </div>
  )
}
