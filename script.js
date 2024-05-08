// const projects = document.querySelectorAll(".proj")

//     const observerr = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if(entry.isIntersecting){
//                 for(j of projects){
//                     j.classList.add("reveal2");
//                 }
            
//             }
//             else{
//                 for(j of projects){
//                     j.classList.remove("reveal2");
//                 }
//             }
//         });
//     },{
//         threshold: 0.8,
//     })

//     observerr.observe(projects)

const section = document.getElementById("skills")
const skills = document.querySelectorAll(".skills")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                for(i of skills){
                    i.classList.add("reveal");
                }
            
            }
            else{
                for(i of skills){
                    i.classList.remove("reveal");
                }
            }
        });
    },{
        threshold: 0.5,
    })
observer.observe(section)
    // const section = document.getElementById("skills")


const changetext = new Typed(".text",{
    strings:["Frontend Developer","React Developer","Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
