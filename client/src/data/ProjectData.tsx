import Host from "../components/Secret/serverapi";
interface ProjectArray{
 img:string,
 heading:string,
}
export const ProjectData:Array<ProjectArray>=[
    {
     img:`${Host()}/static/front.jpg`,
     heading:"All",
  
     },
    {
        img:`${Host()}/static/projectgallery/interior/1.jpg`,
        heading:"Interior",
     
    },
    {
        img:`${Host()}/static/projectgallery/Residentional/6.jpg`,
        heading:"Residentional",
     
    },
    {
        img:`${Host()}/static/projectgallery/Institiutional/1s.jpg`,
        heading:"Institiutional",
     
    },
    {
        img:`${Host()}/static/projectgallery/commercial/1cc.jpg`,
        heading:"Commercial",
     
    },
    {
        img:`${Host()}/static/projectgallery/landscape/01.jpg`,
        heading:"Landscape",
     
    },

]